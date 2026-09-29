export default function Footer() {
  return (
    <footer className="bg-ink border-t border-white/5 py-10 px-6">
      <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <span className="font-serif text-lg text-white">
          Focus<span className="text-red">God</span>
        </span>
        <div className="flex gap-6 text-sm text-white/40">
          <a href="/privacidad" className="hover:text-white/70 transition-colors">privacidad</a>
          <a href="/terminos" className="hover:text-white/70 transition-colors">términos</a>
          <a href="mailto:hola@focusgodapp.com" className="hover:text-white/70 transition-colors">contacto</a>
        </div>
        <p className="text-xs text-white/30">© 2026 FocusGod · Mateo 6:33</p>
      </div>
    </footer>
  );
}
