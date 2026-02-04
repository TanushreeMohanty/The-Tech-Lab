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
        <div className="w-full px-6 md:px-12 py-12 animate-in fade-in slide-in-from-bottom-4 duration-700">

            {/* Tactical Header */}
            <header className="relative mb-24 pb-12 border-b border-white/10 ml-8 lg:ml-24">
                <div className="flex items-center gap-4 mb-8">
                    <div className={`w-1.5 h-10 ${section === 'ai-ml' ? 'bg-fuchsia-500 shadow-[0_0_20px_rgba(217,70,239,0.6)]' : 'bg-cyan-500 shadow-[0_0_20px_rgba(6,182,212,0.6)]'} rounded-full`} />
                    <nav className="font-mono text-[11px] uppercase tracking-[0.4em] text-zinc-500 flex items-center gap-2">
                        <span className="hover:text-zinc-300 transition-colors cursor-default">{section.replace('-', ' ')}</span>
                        <span className="text-zinc-800 font-bold px-2">//</span>
                        <span className="text-zinc-400">{subsection.replace('-', ' ')}</span>
                    </nav>
                </div>

                <h1 className="text-5xl md:text-7xl lg:text-5xl font-black text-white tracking-tighter mb-8 leading-tight">
                    {content.title}<span className={section === 'ai-ml' ? 'text-fuchsia-500' : 'text-cyan-500'}>.</span>
                </h1>

                <p className="text-xl md:text-xl text-zinc-400 font-light leading-relaxed max-w-5xl border-l-2 border-white/5 pl-8 italic">
                    {content.description}
                </p>
            </header>

            {/* Experimental Blocks */}
            <div className="space-y-40 ml-8 lg:ml-24">
                {content.blocks.map((block, index) => {
                    const hasTechnicalAssets = !!(block.code || block.outputImage || block.outputCode);
                    const hastextContent = !!(block.text || block.list);

                    return (
                        <section key={index} className="group relative pl-12 lg:pl-16">
                            <div className="absolute left-0 top-0 bottom-0 w-1px bg-white/5 group-hover:bg-white/20 transition-all duration-500" />

                            <div className="absolute -left-12 lg:-left-24 top-0 font-mono text-zinc-900 text-4xl lg:text-6xl font-black select-none group-hover:text-zinc-800/50 transition-colors duration-500 pointer-events-none">
                                0{index + 1}
                            </div>

                            {block.subTitle && (
                                <div className="flex items-center gap-6 mb-12">
                                    <h2 className="text-3xl lg:text-3xl font-bold text-white tracking-tight whitespace-nowrap">
                                        {block.subTitle}
                                    </h2>
                                    <div className="h-1px flex-1 bg-white/10" />
                                </div>
                            )}

                            <div className={`grid grid-cols-1 ${hasTechnicalAssets && hastextContent ? 'lg:grid-cols-12' : 'grid-cols-1'} gap-12 lg:gap-20 items-start w-full`}>

                                {/* Text Content Area - Updated logic to handle list-only blocks */}
                                {hastextContent && (
                                    <div className={`${hasTechnicalAssets ? 'lg:col-span-5' : 'w-full'} space-y-8`}>
                                        {block.text && (
                                            <p className="text-zinc-400 text-lg lg:text-xl leading-relaxed max-w-none font-light">
                                                {block.text}
                                            </p>
                                        )}

                                        {block.list && (
                                            <ul className={`grid gap-6 pt-6 ${hasTechnicalAssets ? 'grid-cols-1' : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'}`}>
                                                {block.list.map((item, i) => (
                                                    <li key={i} className="flex items-start gap-5 text-zinc-300 group/list p-6 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-white/20 hover:bg-white/[0.05] transition-all duration-300 shadow-sm">
                                                        <div className={`mt-2.5 w-2 h-2 rounded-full shrink-0 ${section === 'ai-ml' ? 'bg-fuchsia-500 shadow-[0_0_10px_rgba(217,70,239,0.5)]' : 'bg-cyan-500 shadow-[0_0_10px_rgba(6,182,212,0.5)]'} transition-all`} />
                                                        <span className="text-base font-medium leading-relaxed">{item}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        )}
                                    </div>
                                )}

                                {/* Technical Assets Area */}
                                {hasTechnicalAssets && (
                                    <div className={`${hastextContent ? 'lg:col-span-7' : 'w-full'} space-y-12 w-full`}>
                                        {block.code && (
                                            <div className="w-full rounded-2xl border border-white/10 bg-[#080808] backdrop-blur-xl overflow-hidden shadow-2xl ring-1 ring-white/5 group-hover:border-white/20 transition-colors">
                                                <div className="flex items-center justify-between px-6 py-4 bg-white/5 border-b border-white/10">
                                                    <div className="flex gap-2.5">
                                                        <div className="w-3.5 h-3.5 rounded-full bg-red-500/20 border border-red-500/30" />
                                                        <div className="w-3.5 h-3.5 rounded-full bg-amber-500/20 border border-amber-500/30" />
                                                        <div className="w-3.5 h-3.5 rounded-full bg-emerald-500/20 border border-emerald-500/30" />
                                                    </div>
                                                    <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest font-bold">
                                                        {section === 'ai-ml' ? 'python_runtime' : 'react_engine'}
                                                    </span>
                                                </div>
                                                <pre className="p-6 lg:p-10 text-[14px] lg:text-[15px] font-mono w-full overflow-x-auto leading-relaxed custom-scrollbar bg-black/40">
                                                    <code className={section === 'ai-ml' ? 'text-fuchsia-300/90' : 'text-cyan-300/90'}>
                                                        {block.code}
                                                    </code>
                                                </pre>
                                            </div>
                                        )}

                                        {block.outputImage && (
                                            <div className="w-full space-y-4">
                                                <div className="flex items-center gap-3 px-1">
                                                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_12px_rgba(16,185,129,0.6)]" />
                                                    <p className="text-xs font-mono text-zinc-500 uppercase tracking-[0.3em] font-bold">Graphic_Output</p>
                                                </div>
                                                <div className="p-1.5 rounded-2xl bg-linear-to-br from-white/10 via-transparent to-transparent border border-white/10 overflow-hidden shadow-2xl w-full flex justify-center lg:justify-start">
                                                    <img
                                                        src={block.outputImage}
                                                        className="rounded-[1.75rem] grayscale hover:grayscale-0 transition-all duration-1000 opacity-90 hover:opacity-100 max-w-full h-auto"
                                                        alt="Laboratory Artifact"
                                                    />
                                                </div>
                                            </div>
                                        )}

                                        {block.outputCode && (
                                            <div className="w-full rounded-2xl border border-emerald-500/20 bg-[#020202] overflow-hidden shadow-2xl ring-1 ring-emerald-500/10">
                                                <div className="flex items-center gap-3 px-6 py-3 bg-emerald-500/5 border-b border-emerald-500/20">
                                                    <span className="text-[10px] font-mono text-emerald-500/70 uppercase tracking-widest font-black">Terminal Result</span>
                                                </div>
                                                <pre className="p-8 text-[14px] font-mono text-emerald-400/90 w-full whitespace-pre-wrap leading-relaxed italic">
                                                    &gt; {block.outputCode}
                                                </pre>
                                            </div>
                                        )}
                                    </div>
                                )}
                            </div>
                        </section>
                    );
                })}
            </div>

            <footer className="mt-48 pt-12 border-t border-white/5 flex justify-between items-center text-[11px] font-mono text-zinc-700 uppercase tracking-[0.3em] ml-8 lg:ml-24">
                <span>System // {content.title}</span>
                <span className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
                    Active Uplink...
                </span>
            </footer>
        </div>
    );
}