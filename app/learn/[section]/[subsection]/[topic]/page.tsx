import { labData } from "@/data/content";
import { notFound } from "next/navigation";

// Next.js 15+ requires params to be awaited
export default async function LabPage({ 
  params 
}: { 
  params: Promise<{ section: string; subsection: string; topic: string }> 
}) {
  // Unwrapping the async params
  const { section, subsection, topic } = await params;

  // Find the content based on the triple-nested path
  const content = labData[section]?.[subsection]?.[topic];

  if (!content) return notFound();

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
      {/* Breadcrumbs */}
      <nav className="flex items-center gap-2 text-blue-500 font-mono text-[10px] mb-4 uppercase tracking-[0.2em]">
        <span>{section.replace('-', ' ')}</span> 
        <span className="text-zinc-700">/</span> 
        <span>{subsection.replace('-', ' ')}</span>
      </nav>

      <h1 className="text-4xl font-bold text-white mb-6 tracking-tight">{content.title}</h1>
      
      <div className="prose prose-invert max-w-none">
        <p className="text-lg text-zinc-400 leading-relaxed mb-10">
          {content.description}
        </p>
      </div>

      {/* Code Section */}
      {content.code && (
        <section className="mb-10">
          <div className="flex items-center justify-between mb-2">
            <p className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">Source Code</p>
            <span className="text-[10px] font-mono text-zinc-600 bg-zinc-900 px-2 py-0.5 rounded border border-zinc-800">
              {section === 'ai-ml' ? 'python' : 'tsx'}
            </span>
          </div>
          <div className="relative group">
            <pre className="bg-[#0d0d0d] border border-zinc-800 p-6 rounded-2xl overflow-x-auto shadow-2xl">
              <code className="text-blue-300/90 text-sm font-mono leading-6">{content.code}</code>
            </pre>
          </div>
        </section>
      )}

      {/* Visual Output Section */}
      {content.outputImage && (
        <section>
          <p className="text-[10px] font-mono text-zinc-500 mb-2 uppercase tracking-widest">Compiled Output</p>
          <div className="bg-zinc-900/30 border border-zinc-800 p-3 rounded-2xl inline-block shadow-inner">
            <img 
              src={content.outputImage} 
              alt={`${content.title} output`} 
              className="rounded-xl border border-zinc-800/50 max-w-full h-auto" 
            />
          </div>
        </section>
      )}
    </div>
  );
}