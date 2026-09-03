import Link from "next/link";
export default function Home(){return <main className="shell">
<header className="topbar"><div className="brand"><span className="seed">🌱</span>MindBloom</div><nav className="nav"><Link href="/dashboard">Dashboard</Link><Link href="/login">Log in</Link><Link href="/signup">Get started</Link></nav></header>
<section className="hero"><h1>Learn. Grow. Shine. 🌱</h1><p>MindBloom is a playful, strengths-based learning and independence platform for autistic children, teens and adults — from age 2 onward.</p><Link className="btn" href="/signup">Start free for 31 days →</Link><Link className="btn secondary" href="/dashboard">Explore the app</Link></section>
<section className="cards">
{[["💬","Communication & AAC","Support meaningful communication, choices and picture-based interaction."],["😊","Social & Emotions","Practice feelings, friendship, conversation and social understanding."],["🏠","Independence","Build everyday routines, safety, self-care and life skills."]].map(x=><div className="card" key={x[1]}><div style={{fontSize:30}}>{x[0]}</div><h3>{x[1]}</h3><p className="muted">{x[2]}</p></div>)}
</section>
</main>}
