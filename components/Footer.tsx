export default function Footer() {
  return (
    <footer className="bg-cream border-t border-black/5 py-10 px-6">
      <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2 font-bold text-lg text-ink">
          <span className="text-2xl">🔒</span><span>FocusGod</span>
        </div>
        <div className="flex items-center gap-6 text-sm text-ink3">
          <a href="/privacidad" className="hover:text-ink transition-colors">Privacidad</a>
          <a href="/terminos" className="hover:text-ink transition-colors">Términos</a>
          <a href="mailto:hola@focusgodapp.com" className="hover:text-ink transition-colors">hola@focusgodapp.com</a>
        </div>
      </div>
    </footer>
  );
}
