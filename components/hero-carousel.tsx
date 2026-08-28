"use client";

import { useEffect, useRef } from "react";
import { IconArrowsHorizontal } from "./icons";

export type CarouselItem = {
  label: string;
  avif: string;
  webp: string;
  width: number;
  height: number;
  alt: string;
};

/**
 * Faithful port of the static build's 3D "wheel" carousel: drag/flick,
 * autoplay with a dwell period, keyboard arrows, dot navigation, and pause on
 * focus/hover/hidden-tab. Positions are computed imperatively (matching the
 * original) rather than through React state, since it repaints every pointer
 * move and a render-per-frame would be far more expensive.
 */
export function HeroCarousel({ items }: { items: CarouselItem[] }) {
  const wheelRef = useRef<HTMLDivElement>(null);
  const capRef = useRef<HTMLParagraphElement>(null);
  const hintRef = useRef<HTMLParagraphElement>(null);
  const dotsRef = useRef<HTMLButtonElement[]>([]);

  useEffect(() => {
    const wheelMaybeNull = wheelRef.current;
    if (!wheelMaybeNull) return;
    const wheel: HTMLDivElement = wheelMaybeNull;
    const itemEls = Array.from(wheel.querySelectorAll<HTMLElement>(".wheel-item"));
    const cap = capRef.current;
    const hint = hintRef.current;
    const dots = dotsRef.current;
    const n = itemEls.length;

    let pos = 0;
    let timer: ReturnType<typeof setInterval> | null = null;
    let raf: number | null = null;

    const SLIDE = 460;
    const DWELL = 2500;
    const DELAY = DWELL + SLIDE;
    const PX_PER_STEP = 260;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const X = [0, 56, 96, 126, 150];
    const Z = [0, -170, -340, -500, -660];
    const R = [0, 24, 32, 38, 43];
    const S = [1, 0.88, 0.77, 0.68, 0.6];
    const O = [1, 0.92, 0.62, 0.26, 0];

    function sample(t: number[], abs: number) {
      const m = t.length - 1;
      const i = Math.min(Math.floor(abs), m);
      const j = Math.min(i + 1, m);
      const f = Math.min(abs, m) - i;
      return t[i] + (t[j] - t[i]) * f;
    }

    function offset(i: number) {
      let d = (i - pos) % n;
      if (d > n / 2) d -= n;
      if (d < -n / 2) d += n;
      return d;
    }

    function lastLabel() {
      return cap ? cap.textContent : "";
    }

    function place() {
      itemEls.forEach((el, i) => {
        const d = offset(i);
        const abs = Math.abs(d);
        const sgn = d < 0 ? -1 : 1;
        const hidden = abs > 3.6;
        el.style.transition = hidden || wheel.classList.contains("dragging") ? "none" : "";
        el.style.transform =
          `translateX(${(sgn * sample(X, abs)).toFixed(2)}%) ` +
          `translateZ(${sample(Z, abs).toFixed(1)}px) ` +
          `rotateY(${(-sgn * sample(R, abs)).toFixed(2)}deg) ` +
          `scale(${sample(S, abs).toFixed(4)})`;
        el.style.opacity = sample(O, abs).toFixed(3);
        el.style.zIndex = String(50 - Math.round(abs * 10));
        el.classList.toggle("front", abs < 0.5);
        el.setAttribute("aria-hidden", abs < 0.5 ? "false" : "true");
        el.style.pointerEvents = hidden ? "none" : "auto";
      });

      const slot = ((Math.round(pos) % n) + n) % n;
      const label = itemEls[slot]?.getAttribute("data-label") || "";
      const active = parseInt(itemEls[slot]?.getAttribute("data-slot") || "0", 10) || 0;

      dots.forEach((dot, i) => {
        dot.classList.toggle("on", i === active);
        dot.setAttribute("aria-current", i === active ? "true" : "false");
      });

      if (cap && label !== lastLabel()) {
        cap.classList.add("fading");
        setTimeout(() => {
          cap.textContent = label;
          cap.classList.remove("fading");
        }, 130);
      }
    }

    function go(delta: number) {
      pos = Math.round(pos) + delta;
      place();
    }

    function goToSlot(slot: number) {
      let best: number | null = null;
      let bestDist = 1e9;
      itemEls.forEach((el, i) => {
        if (parseInt(el.getAttribute("data-slot") || "-1", 10) !== slot) return;
        const d = offset(i);
        if (Math.abs(d) < bestDist) {
          bestDist = Math.abs(d);
          best = d;
        }
      });
      if (best !== null) {
        pos = Math.round(pos) + Math.round(best);
        place();
      }
    }

    function start() {
      if (!reduced && !timer) timer = setInterval(() => go(1), DELAY);
    }
    function stop() {
      if (timer) {
        clearInterval(timer);
        timer = null;
      }
    }
    function restart() {
      stop();
      start();
    }

    let dragging = false;
    let startX = 0;
    let startPos = 0;
    let moved = 0;
    let lastX = 0;
    let lastT = 0;
    let velocity = 0;

    function down(x: number) {
      dragging = true;
      startX = lastX = x;
      startPos = pos;
      moved = 0;
      velocity = 0;
      lastT = performance.now();
      wheel.classList.add("dragging");
      stop();
      hint?.classList.add("gone");
    }

    function move(x: number) {
      if (!dragging) return;
      moved = x - startX;
      const now = performance.now();
      const dt = now - lastT;
      if (dt > 0) velocity = ((x - lastX) / dt) * 0.6 + velocity * 0.4;
      lastX = x;
      lastT = now;
      pos = startPos - moved / PX_PER_STEP;
      if (!raf) {
        raf = requestAnimationFrame(() => {
          raf = null;
          place();
        });
      }
    }

    function up() {
      if (!dragging) return;
      dragging = false;
      wheel.classList.remove("dragging");
      const flick = -velocity * 0.28;
      pos = Math.round(pos + Math.max(-2, Math.min(2, flick)));
      place();
      start();
    }

    function onPointerDown(e: PointerEvent) {
      if (e.button !== undefined && e.button !== 0) return;
      down(e.clientX);
      if (wheel.setPointerCapture && e.pointerId !== undefined) {
        try {
          wheel.setPointerCapture(e.pointerId);
        } catch {
          // Pointer capture can throw if the pointer was already released;
          // dragging still works without it.
        }
      }
    }
    function onPointerMove(e: PointerEvent) {
      move(e.clientX);
    }
    function onTouchStart(e: TouchEvent) {
      down(e.touches[0].clientX);
    }
    function onTouchMove(e: TouchEvent) {
      move(e.touches[0].clientX);
    }
    function onDragStart(e: DragEvent) {
      e.preventDefault();
    }

    wheel.addEventListener("pointerdown", onPointerDown);
    wheel.addEventListener("pointermove", onPointerMove);
    wheel.addEventListener("pointerup", up);
    wheel.addEventListener("pointercancel", up);
    window.addEventListener("pointerup", up);
    wheel.addEventListener("touchstart", onTouchStart, { passive: true });
    wheel.addEventListener("touchmove", onTouchMove, { passive: true });
    wheel.addEventListener("touchend", up, { passive: true });
    wheel.addEventListener("dragstart", onDragStart);

    itemEls.forEach((el) => {
      const img = el.querySelector("img");
      if (img) img.draggable = false;
    });

    const itemClickHandlers = itemEls.map((el, i) => {
      const handler = () => {
        if (Math.abs(moved) > 6) return;
        const d = offset(i);
        if (Math.abs(d) >= 0.5) {
          pos = Math.round(pos) + Math.round(d);
          place();
          restart();
        }
      };
      el.addEventListener("click", handler);
      return handler;
    });

    const dotClickHandlers = dots.map((dot, i) => {
      const handler = () => {
        goToSlot(i);
        restart();
      };
      dot.addEventListener("click", handler);
      return handler;
    });

    const ctl = wheel.parentElement || wheel;
    function onFocusIn() {
      stop();
    }
    function onFocusOut(e: FocusEvent) {
      if (!ctl.contains(e.relatedTarget as Node)) start();
    }
    ctl.addEventListener("focusin", onFocusIn);
    ctl.addEventListener("focusout", onFocusOut);

    function onVisibilityChange() {
      if (document.hidden) stop();
      else start();
    }
    document.addEventListener("visibilitychange", onVisibilityChange);

    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        go(-1);
        restart();
      }
      if (e.key === "ArrowRight") {
        e.preventDefault();
        go(1);
        restart();
      }
    }
    wheel.setAttribute("tabindex", "0");
    wheel.addEventListener("keydown", onKeyDown);

    place();
    start();

    return () => {
      stop();
      if (raf) cancelAnimationFrame(raf);
      wheel.removeEventListener("pointerdown", onPointerDown);
      wheel.removeEventListener("pointermove", onPointerMove);
      wheel.removeEventListener("pointerup", up);
      wheel.removeEventListener("pointercancel", up);
      window.removeEventListener("pointerup", up);
      wheel.removeEventListener("touchstart", onTouchStart);
      wheel.removeEventListener("touchmove", onTouchMove);
      wheel.removeEventListener("touchend", up);
      wheel.removeEventListener("dragstart", onDragStart);
      itemEls.forEach((el, i) => el.removeEventListener("click", itemClickHandlers[i]));
      dots.forEach((dot, i) => dot.removeEventListener("click", dotClickHandlers[i]));
      ctl.removeEventListener("focusin", onFocusIn);
      ctl.removeEventListener("focusout", onFocusOut);
      document.removeEventListener("visibilitychange", onVisibilityChange);
      wheel.removeEventListener("keydown", onKeyDown);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const doubled = [...items, ...items];

  return (
    <>
      <div
        className="wheel"
        data-wheel
        ref={wheelRef}
        role="group"
        aria-roledescription="carousel"
        aria-label="Guide product screens"
      >
        <div className="wheel-stage">
          {doubled.map((item, i) => (
            <div
              key={`${item.label}-${i}`}
              className="wheel-item"
              data-label={item.label}
              data-slot={i % items.length}
              aria-hidden={i >= items.length ? "true" : undefined}
            >
              <picture>
                <source srcSet={item.avif} type="image/avif" />
                <img
                  className="mock phone"
                  src={item.webp}
                  width={item.width}
                  height={item.height}
                  alt={item.alt}
                  loading={i < items.length ? "eager" : "lazy"}
                  fetchPriority={i === 0 ? "high" : i < items.length ? "low" : undefined}
                  decoding="async"
                />
              </picture>
            </div>
          ))}
        </div>
      </div>
      <div className="wheel-ctl">
        <p className="wheel-cap" ref={capRef}>
          {items[0]?.label}
        </p>
      </div>
      <div className="wheel-dots" role="group" aria-label="Choose a screen">
        {items.map((item, i) => (
          <button
            key={item.label}
            ref={(el) => {
              if (el) dotsRef.current[i] = el;
            }}
            className={`wheel-dot${i === 0 ? " on" : ""}`}
            aria-current={i === 0}
            aria-label={`Slide ${i + 1} of ${items.length}: ${item.label}`}
          />
        ))}
      </div>
      <p className="wheel-hint" ref={hintRef}>
        <IconArrowsHorizontal />
        Drag to explore
      </p>
    </>
  );
}
