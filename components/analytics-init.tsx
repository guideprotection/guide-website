"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { track } from "@/lib/analytics";

/** Ports the static build's CTA-click, scroll-depth and section-view tracking. */
export function AnalyticsInit() {
  const pathname = usePathname();
  const firedRef = useRef<Record<number, boolean>>({});

  useEffect(() => {
    window.guideTrack = track;

    function onClick(e: MouseEvent) {
      const target = e.target as HTMLElement;
      const a = target.closest<HTMLAnchorElement>("a.btn, a.tlink, .prod > a, .mega-item");
      if (!a) return;
      track("cta_click", {
        label: (a.textContent || "").trim().slice(0, 60),
        href: a.getAttribute("href"),
        location: a.closest("header") ? "header" : a.closest("footer") ? "footer" : a.closest(".hero") ? "hero" : "body",
      });
    }

    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  useEffect(() => {
    firedRef.current = {};
    const depths = [25, 50, 75, 100];

    function onScroll() {
      const h = document.documentElement;
      const pct = ((h.scrollTop + window.innerHeight) / h.scrollHeight) * 100;
      depths.forEach((d) => {
        if (pct >= d && !firedRef.current[d]) {
          firedRef.current[d] = true;
          track("scroll_depth", { depth: d });
        }
      });
    }

    window.addEventListener("scroll", onScroll, { passive: true });

    let sio: IntersectionObserver | null = null;
    if ("IntersectionObserver" in window) {
      sio = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            const h2 = entry.target.querySelector("h2");
            track("section_view", { section: h2 ? h2.textContent?.trim().slice(0, 60) : "unnamed" });
            sio?.unobserve(entry.target);
          });
        },
        { threshold: 0.4 }
      );
      document.querySelectorAll("section").forEach((el) => sio?.observe(el));
    }

    return () => {
      window.removeEventListener("scroll", onScroll);
      sio?.disconnect();
    };
  }, [pathname]);

  return null;
}
