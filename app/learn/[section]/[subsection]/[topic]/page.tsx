import { labData } from "@/data/content";
import { notFound } from "next/navigation";

export default async function LabPage({ 
  params 
}: { 
  params: Promise<{ section: string; subsection: string; topic: string }> 
}) {
  const { section, subsection, topic } = await params;
  const content = labData[section]?.[subsection]?.[topic];

  if (!content) return notFound();

  return (
    <div className="max-w-5xl mx-auto px-4 py-8 animate-in fade-in duration-700">
      {/* Tactical Header */}
      <header className="relative mb-16 pb-8 border-b border-white/10">
        <div className="flex items-center gap-3 mb-6">
          <div className={`w-2 h-6 ${section === 'ai-ml' ? 'bg-fuchsia-500' : 'bg-cyan-500'} rounded-full shadow-[0_0_15px_rgba(34,211,238,0.5)]`} />
          <nav className="font-mono text-[10px] uppercase tracking-[0.3em] text-zinc-500">
            {section.replace('-', ' ')} <span className="mx-2 text-zinc-800">//</span> {subsection.replace('-', ' ')}
          </nav>
        </div>

        <h1 className="text-6xl font-black text-white tracking-tighter mb-4 selection:bg-cyan-500/30">
          {content.title}<span className="text-cyan-500">.</span>
        </h1>
        
        <p className="text-xl text-zinc-400 font-light leading-relaxed max-w-3xl">
          {content.description}
        </p>
      </header>

      {/* Experimental Blocks */}
      <div className="space-y-24">
        {content.blocks.map((block, index) => (
          <section key={index} className="group relative">
            {/* Numbering Decor */}
            <div className="absolute -left-12 top-0 font-mono text-zinc-800 text-4xl font-bold select-none">
              0{index + 1}
            </div>

            {block.subTitle && (
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <span className="w-8 h-[1px] bg-zinc-800" />
                {block.subTitle}
              </h2>
            )}
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
              <div className="lg:col-span-5">
                <p className="text-zinc-400 text-base leading-7">
                  {block.text}
                </p>
              </div>

              <div className="lg:col-span-7 space-y-6">
                {/* Code Terminal */}
                {block.code && (
                  <div className="rounded-2xl border border-white/5 bg-zinc-950/50 backdrop-blur-xl overflow-hidden shadow-2xl">
                    <div className="flex items-center justify-between px-4 py-2 bg-white/5 border-b border-white/5">
                      <div className="flex gap-1.5">
                        <div className="w-2.5 h-2.5 rounded-full bg-red-500/20 border border-red-500/40" />
                        <div className="w-2.5 h-2.5 rounded-full bg-amber-500/20 border border-amber-500/40" />
                        <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/20 border border-emerald-500/40" />
                      </div>
                      <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest italic">
                        {section === 'ai-ml' ? 'python_source' : 'react_component'}
                      </span>
                    </div>
                    <pre className="p-6 text-sm font-mono overflow-x-auto leading-relaxed">
                      <code className={section === 'ai-ml' ? 'text-fuchsia-300/90' : 'text-cyan-300/90'}>
                        {block.code}
                      </code>
                    </pre>
                  </div>
                )}

                {/* Visual Artifact */}
                {block.outputImage && (
                  <div className="relative group/img">
                    <p className="text-[10px] font-mono text-zinc-600 mb-2 uppercase tracking-[0.2em] flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-emerald-500 animate-pulse" />
                      Rendering Output
                    </p>
                    <div className="p-1 rounded-3xl bg-gradient-to-br from-white/10 to-transparent">
                      <img 
                        src={block.outputImage} 
                        className="rounded-2xl grayscale hover:grayscale-0 transition-all duration-500 border border-white/10" 
                        alt="Lab Result" 
                      />
                    </div>
                  </div>
                )}
              </div>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}