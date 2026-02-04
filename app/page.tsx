import Link from 'next/link';

export default function Home() {
  return (
    <div className="py-20">
      <h1 className="text-6xl font-bold text-white mb-6 tracking-tighter">Welcome to the Tech Lab</h1>
      <p className="text-xl text-zinc-500 mb-12 max-w-2xl">
        A structured environment for mastering Web Development and AI/ML. 
        Select a track from the sidebar to begin.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-8 rounded-3xl bg-zinc-900/50 border border-zinc-800">
          <h2 className="text-2xl font-bold text-white mb-2">Web Development</h2>
          <p className="text-zinc-400 mb-4">HTML fundamentals and React ecosystem mastery.</p>
        </div>
        <div className="p-8 rounded-3xl bg-zinc-900/50 border border-zinc-800">
          <h2 className="text-2xl font-bold text-white mb-2">AI / ML</h2>
          <p className="text-zinc-400 mb-4">Python programming, data analysis, and machine learning models.</p>
        </div>
      </div>
    </div>
  );
}