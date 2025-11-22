import { useEffect, useState } from 'react'

function Section({ title, children }) {
  return (
    <div className="bg-slate-800/40 border border-slate-700/60 rounded-xl p-4">
      <h3 className="text-white font-semibold mb-2">{title}</h3>
      <div className="text-blue-100/90 text-sm space-y-2">{children}</div>
    </div>
  )
}

export default function Console() {
  const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

  const [question, setQuestion] = useState('Apa itu fotosintesis?')
  const [neo, setNeo] = useState(null)
  const [text, setText] = useState('Pendidikan inklusif memastikan semua peserta didik memperoleh akses yang setara.')
  const [flex, setFlex] = useState(null)
  const [scan, setScan] = useState('Matahari adalah pusat tata surya. Planet mengelilinginya.')
  const [eye, setEye] = useState(null)
  const [pathTopic, setPathTopic] = useState('Pecahan')
  const [path, setPath] = useState(null)
  const [forumTitle, setForumTitle] = useState('Tips fokus belajar')
  const [forumContent, setForumContent] = useState('Bagi waktu 25 menit belajar, 5 menit istirahat (Pomodoro).')
  const [forum, setForum] = useState([])

  const askNeo = async () => {
    const res = await fetch(`${baseUrl}/neotutor/ask`, { method: 'POST', headers: {'Content-Type':'application/json'}, body: JSON.stringify({ question }) })
    setNeo(await res.json())
  }

  const doFlex = async () => {
    const res = await fetch(`${baseUrl}/flexa/convert`, { method: 'POST', headers: {'Content-Type':'application/json'}, body: JSON.stringify({ text }) })
    setFlex(await res.json())
  }

  const doEye = async () => {
    const res = await fetch(`${baseUrl}/eyeread/scan`, { method: 'POST', headers: {'Content-Type':'application/json'}, body: JSON.stringify({ text: scan }) })
    setEye(await res.json())
  }

  const doPath = async () => {
    const res = await fetch(`${baseUrl}/pathly/plan`, { method: 'POST', headers: {'Content-Type':'application/json'}, body: JSON.stringify({ topic: pathTopic, proficiency: 3 }) })
    setPath(await res.json())
  }

  const loadForum = async () => {
    const res = await fetch(`${baseUrl}/forum`)
    setForum(await res.json())
  }

  const createForum = async () => {
    await fetch(`${baseUrl}/forum`, { method: 'POST', headers: {'Content-Type':'application/json'}, body: JSON.stringify({ title: forumTitle, content: forumContent, author: 'Anon', large_text: true }) })
    loadForum()
  }

  useEffect(() => { loadForum() }, [])

  return (
    <section className="relative max-w-6xl mx-auto px-6 pb-16 grid lg:grid-cols-2 gap-6">
      <Section title="NeoTutor">
        <div className="space-y-2">
          <input value={question} onChange={e=>setQuestion(e.target.value)} className="w-full bg-slate-900/60 border border-slate-700 rounded px-3 py-2 text-blue-100" />
          <button onClick={askNeo} className="px-3 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded">Tanya</button>
          {neo && (
            <div className="mt-2 text-sm">
              <p className="font-semibold">Jawaban:</p>
              <p className="mb-2">{neo.answer}</p>
              <p className="font-semibold">Langkah:</p>
              <ul className="list-disc pl-4">{neo.steps?.map((s,i)=>(<li key={i}>{s}</li>))}</ul>
              <p className="font-semibold mt-2">Tips:</p>
              <ul className="list-disc pl-4">{neo.tips?.map((s,i)=>(<li key={i}>{s}</li>))}</ul>
            </div>
          )}
        </div>
      </Section>

      <Section title="Flexa">
        <div className="space-y-2">
          <textarea value={text} onChange={e=>setText(e.target.value)} rows={4} className="w-full bg-slate-900/60 border border-slate-700 rounded px-3 py-2 text-blue-100" />
          <button onClick={doFlex} className="px-3 py-2 bg-violet-600 hover:bg-violet-500 text-white rounded">Konversi</button>
          {flex && (
            <div className="mt-2 text-sm space-y-1">
              <div><span className="font-semibold">Ringkasan:</span> {flex.summary}</div>
              <div><span className="font-semibold">Teks Besar:</span> {flex.large_text}</div>
              <div><span className="font-semibold">Gloss Isyarat:</span> {flex.sign_gloss?.join(' ')}</div>
            </div>
          )}
        </div>
      </Section>

      <Section title="EyeRead">
        <div className="space-y-2">
          <textarea value={scan} onChange={e=>setScan(e.target.value)} rows={3} className="w-full bg-slate-900/60 border border-slate-700 rounded px-3 py-2 text-blue-100" />
          <button onClick={doEye} className="px-3 py-2 bg-emerald-600 hover:bg-emerald-500 text-white rounded">Proses</button>
          {eye && (
            <div className="mt-2 text-sm space-y-1">
              <div><span className="font-semibold">Teks:</span> {eye.text}</div>
              <div><span className="font-semibold">Ringkasan:</span> {eye.summary}</div>
            </div>
          )}
        </div>
      </Section>

      <Section title="Pathly">
        <div className="space-y-2">
          <input value={pathTopic} onChange={e=>setPathTopic(e.target.value)} className="w-full bg-slate-900/60 border border-slate-700 rounded px-3 py-2 text-blue-100" />
          <button onClick={doPath} className="px-3 py-2 bg-amber-600 hover:bg-amber-500 text-white rounded">Buat Rencana</button>
          {path && (
            <div className="mt-2 text-sm space-y-1">
              <div><span className="font-semibold">Level:</span> {path.level}</div>
              <ul className="list-disc pl-4">{path.plan?.map((p,i)=>(<li key={i}><span className="font-semibold">{p.title}:</span> {p.objective} — {p.activity}</li>))}</ul>
              <div><span className="font-semibold">Rekomendasi:</span> {path.recommended?.join(', ')}</div>
            </div>
          )}
        </div>
      </Section>

      <Section title="EchoForum">
        <div className="space-y-2">
          <input value={forumTitle} onChange={e=>setForumTitle(e.target.value)} className="w-full bg-slate-900/60 border border-slate-700 rounded px-3 py-2 text-blue-100" placeholder="Judul" />
          <textarea value={forumContent} onChange={e=>setForumContent(e.target.value)} rows={3} className="w-full bg-slate-900/60 border border-slate-700 rounded px-3 py-2 text-blue-100" placeholder="Isi" />
          <div className="flex gap-2">
            <button onClick={createForum} className="px-3 py-2 bg-pink-600 hover:bg-pink-500 text-white rounded">Kirim</button>
            <button onClick={loadForum} className="px-3 py-2 bg-slate-700 hover:bg-slate-600 text-white rounded">Muat Ulang</button>
          </div>
          <div className="space-y-2 max-h-48 overflow-auto">
            {forum?.map((f) => (
              <div key={f.id} className="bg-slate-900/50 border border-slate-700 rounded p-3">
                <div className="text-white font-semibold">{f.title}</div>
                <div className="text-blue-100/90 text-sm">{f.content}</div>
                <div className="text-xs text-blue-300/60 mt-1">oleh {f.author}</div>
              </div>
            ))}
          </div>
        </div>
      </Section>
    </section>
  )
}
