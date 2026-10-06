"use client";

export default function Hero() {
  return (
    <section className="bg-cream min-h-screen flex items-center pt-14">
      <div className="max-w-5xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <p className="text-blue font-semibold text-sm uppercase tracking-widest mb-4">
            App de bienestar espiritual
          </p>
          <h1 className="text-4xl sm:text-5xl font-semibold text-ink leading-[1.1] mb-6">
            La única forma real de dejar el teléfono y buscar a Dios primero.
          </h1>
          <p className="text-ink2 text-lg leading-relaxed mb-8">
            Bloquea las distracciones. Pon a Dios primero. Todo lo demás viene después.
          </p>
          <div className="flex flex-wrap gap-3">
            <a href="https://apps.apple.com" target="_blank" rel="noopener noreferrer" className="btn-blue">
              🍎 Descargar para iPhone
            </a>
            <a href="#features" className="btn-outline">
              Empieza gratis 3 días
            </a>
          </div>
        </div>

        <div className="flex justify-center">
          <div className="w-64 bg-ink rounded-3xl p-5 shadow-2xl">
            <p className="text-white/50 text-xs mb-3">Apps bloqueadas</p>
            <div className="grid grid-cols-4 gap-2 mb-5">
              {["📸", "🎵", "▶️", "🐦", "💬", "📘", "🎮", "📺"].map((emoji, i) => (
                <div key={i} className="bg-white/10 rounded-xl w-12 h-12 flex items-center justify-center text-xl opacity-40">
                  {emoji}
                </div>
              ))}
            </div>
            <button className="w-full bg-blue text-white font-bold py-3 rounded-2xl text-sm">
              🙏 Orar ahora
            </button>
            <div className="mt-3 text-center">
              <span className="text-yellow font-semibold text-2xl">🔥 14</span>
              <p className="text-white/50 text-xs mt-1">días seguidos</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
