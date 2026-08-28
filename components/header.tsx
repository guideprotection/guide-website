"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { demoUrl, NAV_PRODUCTS, NAV_RESOURCES } from "@/lib/site";
import { LogoLockup } from "./logo";
import { NavIcon, IconSearch } from "./icons";
import { ThemeToggle } from "./theme-toggle";
import { useSearch } from "./search-provider";

function pageSlug(pathname: string) {
  if (pathname === "/") return "home";
  return pathname.replace(/^\//, "").replace(/\/$/, "");
}

function MegaNavItem({
  label,
  links,
  oneColumn,
  footer,
}: {
  label: string;
  links: typeof NAV_PRODUCTS;
  oneColumn?: boolean;
  footer?: ReactNode;
}) {
  const [open, setOpen] = useState(false);
  const itemRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    function onDocClick(e: MouseEvent) {
      if (!itemRef.current?.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("click", onDocClick);
    return () => document.removeEventListener("click", onDocClick);
  }, []);

  return (
    <div
      className={`nav-item${open ? " open" : ""}`}
      ref={itemRef}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      onFocus={() => setOpen(true)}
      onBlur={(e) => {
        if (!itemRef.current?.contains(e.relatedTarget as Node)) setOpen(false);
      }}
      onKeyDown={(e) => {
        if (e.key === "Escape") {
          setOpen(false);
          triggerRef.current?.focus();
        }
      }}
    >
      <button
        ref={triggerRef}
        className="nav-trigger"
        aria-haspopup="true"
        aria-expanded={open}
        onClick={(e) => {
          e.preventDefault();
          setOpen((o) => !o);
        }}
      >
        {label}
      </button>
      <div className={`mega${oneColumn ? " one-col" : ""}`}>
        {links.map((link) => (
          <Link key={link.href} className="mega-item" href={link.href}>
            <span className="mi-icon">
              <NavIcon name={link.icon} />
            </span>
            <span>
              <strong>{link.label}</strong>
              <span>{link.description}</span>
            </span>
          </Link>
        ))}
        {footer}
      </div>
    </div>
  );
}

export function Header() {
  const headerRef = useRef<HTMLElement>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { openSearch } = useSearch();
  const pathname = usePathname();
  const slug = pageSlug(pathname ?? "/");

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    function onScroll() {
      headerRef.current?.classList.toggle("scrolled", window.scrollY > 6);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function openSearchFromMobile() {
    setMobileOpen(false);
    openSearch();
  }

  return (
    <header className="hdr" ref={headerRef}>
      <div className="wrap hdr-in">
        <button
          className="burger"
          aria-label="Menu"
          aria-expanded={mobileOpen}
          aria-controls="mnav"
          onClick={() => setMobileOpen((o) => !o)}
        >
          <i />
        </button>
        <Link className="logo" href="/" aria-label="Guide home">
          <span className="logo-full">
            <LogoLockup />
          </span>
        </Link>
        <nav className="nav">
          <MegaNavItem
            label="Products"
            links={NAV_PRODUCTS}
            footer={
              <div className="mega-foot">
                <span className="small">One install. One record of the customer.</span>
                <Link className="tlink" href="/products">
                  View all products
                </Link>
              </div>
            }
          />
          <MegaNavItem label="Resources" links={NAV_RESOURCES} oneColumn />
          <Link href="/pricing">Pricing</Link>
        </nav>
        <div className="hdr-right">
          <button className="icon-btn search" aria-label="Search" onClick={openSearch}>
            <IconSearch />
          </button>
          <a className="btn btn-ghost" href="https://claims.guideprotection.com">
            File a Claim
          </a>
          <a className="btn btn-dark" href={demoUrl(`${slug}-header`)} target="_blank" rel="noopener">
            Book a Demo<span className="sr-only"> (opens in a new tab)</span>
          </a>
          <ThemeToggle />
        </div>
      </div>
      <div className={`mnav${mobileOpen ? " open" : ""}`} id="mnav">
        <div className="mnav-group">
          <span className="mnav-label">Products</span>
          <Link href="/products">Platform overview</Link>
          {NAV_PRODUCTS.map((link) => (
            <Link key={link.href} href={link.href}>
              {link.label}
            </Link>
          ))}
        </div>
        <div className="mnav-group">
          <span className="mnav-label">Resources</span>
          <Link href="/resources">Resource center</Link>
          <Link href="/help">Help centre</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/glossary">Glossary</Link>
          <Link href="/for-shoppers">File a claim</Link>
        </div>
        <div className="mnav-group">
          <span className="mnav-label">Pricing</span>
          <Link href="/pricing">No platform fee, how it works</Link>
        </div>
        <div className="mnav-group">
          <span className="mnav-label">Search</span>
          <button className="mnav-search" type="button" onClick={openSearchFromMobile}>
            <IconSearch />
            Search the site
          </button>
        </div>
        <div className="mcta">
          <a className="btn btn-ghost" href="https://claims.guideprotection.com">
            File a Claim
          </a>
          <a className="btn btn-dark" href={demoUrl(`${slug}-header`)} target="_blank" rel="noopener">
            Book a Demo<span className="sr-only"> (opens in a new tab)</span>
          </a>
        </div>
      </div>
    </header>
  );
}
