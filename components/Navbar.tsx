"use client";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-black/5">
      <div className="max-w-5xl mx-auto px-5 h-14 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2 font-bold text-xl text-ink">
          <span className="text-2xl">🔒</span><span>FocusGod</span>
        </a>
        <a href="https://apps.apple.com" target="_blank" rel="noopener noreferrer" className="btn-blue text-sm px-5 py-2.5">
          Descargar gratis
        </a>
      </div>
    </nav>
  );
}
