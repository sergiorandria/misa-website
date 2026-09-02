// Dynamic asset helper respecting Vite base (/mit/) and dev/prod
// Usage: asset('logo-mit.png') -> '/mit/logo-mit.png' in prod, '/mit/logo-mit.png' in dev with base
// For import-based assets (hashed), use `new URL` or direct import; this helper covers public/ assets
export function asset(path) {
  const base = import.meta.env.BASE_URL ?? '/';
  const clean = String(path).replace(/^\/+/, '');
  return `${base}${clean}`;
}

// Eager glob for proposition mockups in contenu/ (dynamic import via Vite)
// Returns array of { name, url } where url is base-aware hashed URL
const propositionModules = import.meta.glob('../../contenu/Proposition pages/*.jpg', {
  eager: true,
  query: '?url',
  import: 'default',
});

export function getPropositionImages() {
  return Object.entries(propositionModules).map(([filePath, url]) => {
    const name = filePath.split('/').pop() ?? filePath;
    return { name, url, path: filePath };
  });
}

// Also expose public assets as dynamic imports (hash-aware) fallback when available
// If you prefer hashed URLs, you can import them directly:
// import logoMitUrl from '../assets/logo-mit.png?url'
// But public/ assets are served as static, so `asset()` is sufficient and keeps design unchanged
