export type TrackProps = Record<string, unknown>;

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
    gtag?: (...args: unknown[]) => void;
    analytics?: { track?: (name: string, props?: Record<string, unknown>) => void };
    guideTrack?: (name: string, props?: TrackProps) => void;
  }
}

export function track(name: string, props?: TrackProps) {
  if (typeof window === "undefined") return;
  const event = { event: name, page: window.location.pathname, ts: Date.now(), ...props };
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push(event);
  window.gtag?.("event", name, props ?? {});
  window.analytics?.track?.(name, props ?? {});
}
