import React from 'react';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white p-8 font-sans">
      {/* Hero Section */}
      <section className="max-w-5xl mx-auto pt-20 pb-16 text-center">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-4 bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
          THE TECH LAB_
        </h1>
        <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">
          Documenting the journey from B.Tech student to Full-Stack Data Engineer. 
          Real-world experiments in coding and data.
        </p>
      </section>

      {/* Bento Grid Learning Tracks */}
      <section className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
        
        {/* Track 1: Web Dev */}
        <div className="md:col-span-2 p-6 rounded-3xl bg-zinc-900/50 border border-zinc-800 hover:border-blue-500/50 transition-all group">
          <span className="text-blue-400 text-sm font-mono mb-2 block">01 / WEB DEVELOPMENT</span>
          <h2 className="text-3xl font-bold mb-3 group-hover:text-blue-400 transition-colors">React, Vite & Firebase</h2>
          <p className="text-gray-400 mb-4">Building high-performance interfaces and real-time backend systems for apps like SmartSpend Pro.</p>
          <div className="flex gap-2">
            {['React', 'Vite', 'Firebase'].map(tag => (
              <span key={tag} className="px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full text-xs font-medium">{tag}</span>
            ))}
          </div>
        </div>

        {/* Track 2: SQL */}
        <div className="p-6 rounded-3xl bg-zinc-900/50 border border-zinc-800 hover:border-emerald-500/50 transition-all group">
          <span className="text-emerald-400 text-sm font-mono mb-2 block">02 / DATABASE</span>
          <h2 className="text-3xl font-bold mb-3 group-hover:text-emerald-400 transition-colors">SQL Logic</h2>
          <p className="text-gray-400">Mastering relational data and complex querying.</p>
        </div>

        {/* Track 3: Data Science */}
        <div className="p-6 rounded-3xl bg-zinc-900/50 border border-zinc-800 hover:border-purple-500/50 transition-all group">
          <span className="text-purple-400 text-sm font-mono mb-2 block">03 / DATA SCIENCE</span>
          <h2 className="text-2xl font-bold mb-2 group-hover:text-purple-400 transition-colors">Python & Analytics</h2>
          <p className="text-gray-400 text-sm">Numpy, Pandas, and the math behind the code.</p>
        </div>

        {/* Track 4: Visualization */}
        <div className="md:col-span-2 p-6 rounded-3xl bg-zinc-900/50 border border-zinc-800 hover:border-orange-500/50 transition-all group">
          <span className="text-orange-400 text-sm font-mono mb-2 block">04 / VISUALIZATION</span>
          <h2 className="text-3xl font-bold mb-3 group-hover:text-orange-400 transition-colors">Matplotlib & Seaborn</h2>
          <p className="text-gray-400">Turning raw data frames into beautiful, insight-driven charts.</p>
        </div>

      </section>
    </main>
  );
}