"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { demoUrl, installUrl, FOOTER_PRODUCTS, FOOTER_RESOURCES, FOOTER_LEGAL } from "@/lib/site";
import { LogoLockup } from "./logo";
import { IconLinkedIn, IconX } from "./icons";

function pageSlug(pathname: string) {
  if (pathname === "/") return "home";
  return pathname.replace(/^\//, "").replace(/\/$/, "");
}

function YearNow() {
  const [year, setYear] = useState(() => new Date().getFullYear());
  useEffect(() => setYear(new Date().getFullYear()), []);
  return <span data-year>{year}</span>;
}

export function Footer() {
  const pathname = usePathname();
  const slug = pageSlug(pathname ?? "/");

  return (
    <footer className="ftr">
      <div className="wrap">
        <div className="ftr-grid">
          <div className="stack-16">
            <Link className="logo" href="/" aria-label="Guide, home">
              <span className="logo-full">
                <LogoLockup />
              </span>
            </Link>
            <p className="small" style={{ maxWidth: "32ch" }}>
              The post-purchase OS. One operating layer for protection, returns, exchanges, order
              tracking and fraud detection.
            </p>
            <div className="flex gap-2">
              <a className="icon-btn" href="https://www.linkedin.com/company/guide-1" rel="me noopener" aria-label="Guide on LinkedIn">
                <IconLinkedIn />
              </a>
              <a className="icon-btn" href="https://x.com/guideprotection" rel="me noopener" aria-label="Guide on X">
                <IconX />
              </a>
            </div>
          </div>
          <div>
            <h3 className="ftr-h">Products</h3>
            <ul>
              {FOOTER_PRODUCTS.map((item) => (
                <li key={item.href}>
                  <Link href={item.href}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="ftr-h">Resources</h3>
            <ul>
              {FOOTER_RESOURCES.map((item) => (
                <li key={item.href}>
                  <Link href={item.href}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="ftr-h">Company</h3>
            <ul>
              <li>
                <a href={installUrl(`${slug}-footer`)} target="_blank" rel="noopener">
                  Shopify App Store
                </a>
              </li>
              <li>
                <Link href="/pricing">Pricing</Link>
              </li>
              <li>
                <a href={demoUrl(`${slug}-footer`)} target="_blank" rel="noopener">
                  Book a demo
                </a>
              </li>
              <li>
                <Link href="/blog">Blog</Link>
              </li>
              <li>
                <Link href="/glossary">Glossary</Link>
              </li>
              <li>
                <a href="mailto:hello@guideprotection.com">Contact</a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="ftr-h">Legal</h3>
            <ul>
              {FOOTER_LEGAL.map((item) => (
                <li key={item.href}>
                  <Link href={item.href}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="ftr-bottom">
          <span>
            &copy; <YearNow /> Guide Protection. All rights reserved.
          </span>
          <span>hello@guideprotection.com</span>
        </div>
      </div>
    </footer>
  );
}
