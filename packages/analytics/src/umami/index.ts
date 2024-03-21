import Analytics from "./Umami.astro";

const isClient = typeof window !== "undefined";

// TODO: make this typed
function track(ev: any) {
  if (!isClient()) return;
  const { umami } = window as any;
  umami(ev);
}

export { Analytics, track };
