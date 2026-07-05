// Nobridge brand mark, bundled in the front overlay (public/images/). Full URL
// because getImageAbsoluteURI prefixes relative paths with /files. Shown as the
// workspace brand whenever a workspace has no uploaded logo (ours is unset).
// Versioned filename to defeat browser/CDN caching of the old logo at the
// previous path (/images/nobridge-logo.png was cached for 24h). Bump the suffix
// whenever the logo art changes so clients always fetch the new file.
// Host = the CRM's own domain (crm.nobridge.co since the 2026-07-05 migration;
// heydeal.co is retired).
export const DEFAULT_WORKSPACE_LOGO =
  'https://crm.nobridge.co/images/nobridge-logo-2.png';
