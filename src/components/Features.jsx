function Feature({ title, desc, children }) {
  return (
    <div className="group bg-slate-800/40 border border-slate-700/60 rounded-xl p-5 hover:border-blue-500/40 transition-colors">
      <div className="flex items-center gap-3 mb-2 text-white font-semibold">
        {children}
        <span>{title}</span>
      </div>
      <p className="text-blue-100/80 text-sm leading-relaxed">{desc}</p>
    </div>
  )
}

function Features() {
  return (
    <section className="relative">
      <div className="max-w-6xl mx-auto px-6 pb-12 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        <Feature title="EyeRead" desc="Baca teks dari kamera, ubah jadi audio, teks besar, atau ringkasan.">
          <span className="inline-flex w-6 h-6 rounded bg-blue-500/20 border border-blue-400/40 items-center justify-center text-blue-300">👁️</span>
        </Feature>
        <Feature title="NeoTutor" desc="Asisten belajar yang menjawab pertanyaan dan memberi contoh soal.">
          <span className="inline-flex w-6 h-6 rounded bg-emerald-500/20 border border-emerald-400/40 items-center justify-center text-emerald-300">🎓</span>
        </Feature>
        <Feature title="Flexa" desc="Ubah materi jadi audio, teks besar, ringkasan, dan gloss isyarat.">
          <span className="inline-flex w-6 h-6 rounded bg-violet-500/20 border border-violet-400/40 items-center justify-center text-violet-300">🎧</span>
        </Feature>
        <Feature title="Pathly" desc="Jalur belajar adaptif sesuai kemampuan.">
          <span className="inline-flex w-6 h-6 rounded bg-amber-500/20 border border-amber-400/40 items-center justify-center text-amber-300">🧭</span>
        </Feature>
        <Feature title="EchoForum" desc="Forum diskusi dengan dukungan aksesibilitas.">
          <span className="inline-flex w-6 h-6 rounded bg-pink-500/20 border border-pink-400/40 items-center justify-center text-pink-300">💬</span>
        </Feature>
      </div>
    </section>
  )
}

export default Features
