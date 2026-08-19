"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useMemo, useRef, useState } from "react";
import { track } from "@/lib/analytics";
import { SEARCH_INDEX } from "@/lib/search-index";
import { useSearch } from "./search-provider";
import { IconSearch } from "./icons";

export function SearchModal() {
  const { open, openSearch, closeSearch } = useSearch();
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [sel, setSel] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const lastFocusRef = useRef<HTMLElement | null>(null);

  const hits = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return SEARCH_INDEX.slice(0, 6);
    const words = q.split(/\s+/);
    return SEARCH_INDEX.filter((item) => {
      const haystack = `${item.t} ${item.d} ${item.k}`.toLowerCase();
      return words.every((word) => haystack.includes(word));
    }).slice(0, 8);
  }, [query]);

  useEffect(() => {
    setSel(0);
  }, [hits]);

  useEffect(() => {
    if (open) {
      lastFocusRef.current = document.activeElement as HTMLElement;
      setQuery("");
      document.body.style.overflow = "hidden";
      requestAnimationFrame(() => inputRef.current?.focus());
      track("search_open");
    } else {
      document.body.style.overflow = "";
      lastFocusRef.current?.focus();
    }
  }, [open]);

  useEffect(() => {
    if (!open || !query) return;
    track("search_query", { q: query, results: hits.length });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if ((e.key === "k" || e.key === "K") && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        openSearch();
        return;
      }
      if (!open) return;
      if (e.key === "Escape") {
        closeSearch();
        return;
      }
      if (!hits.length) return;
      if (e.key === "ArrowDown" || e.key === "ArrowUp") {
        e.preventDefault();
        setSel((current) => (current + (e.key === "ArrowDown" ? 1 : -1) + hits.length) % hits.length);
        return;
      }
      if (e.key === "Enter") {
        e.preventDefault();
        const target = hits[sel];
        if (target) {
          closeSearch();
          router.push(target.u);
        }
      }
    }

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open, hits, sel, openSearch, closeSearch, router]);

  function onPanelKeyDown(e: React.KeyboardEvent) {
    if (e.key !== "Tab") return;
    const panel = panelRef.current;
    if (!panel) return;
    const focusable = panel.querySelectorAll<HTMLElement>("input, a[href], button");
    if (!focusable.length) return;
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault();
      last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault();
      first.focus();
    }
  }

  return (
    <div
      className={`search-modal${open ? " open" : ""}`}
      id="search-modal"
      role="dialog"
      aria-modal="true"
      aria-label="Search Guide"
      onClick={(e) => {
        if (e.target === e.currentTarget) closeSearch();
      }}
      onKeyDown={onPanelKeyDown}
    >
      <div className="search-panel" ref={panelRef}>
        <div className="search-top">
          <IconSearch />
          <input
            ref={inputRef}
            className="search-input"
            id="search-input"
            type="search"
            placeholder="Search products, pricing, help"
            aria-label="Search Guide"
            autoComplete="off"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <span className="search-esc">ESC</span>
        </div>
        <div className="search-results" role="region" aria-live="polite" aria-label="Search results">
          {hits.length ? (
            hits.map((hit, i) => (
              <Link
                key={hit.u}
                href={hit.u}
                className={`search-hit${i === sel ? " sel" : ""}`}
                onMouseEnter={() => setSel(i)}
                onClick={closeSearch}
              >
                <strong>{hit.t}</strong>
                <span>{hit.d}</span>
              </Link>
            ))
          ) : (
            <p className="search-empty">Nothing matches that. Try &quot;returns&quot; or &quot;pricing&quot;.</p>
          )}
        </div>
      </div>
    </div>
  );
}
