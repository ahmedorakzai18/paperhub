export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-zinc-50 px-6 font-sans dark:bg-black">
      <main className="flex w-full max-w-2xl flex-col items-center gap-6 text-center">
        <p className="rounded-full border border-black/[.08] px-4 py-1.5 text-sm text-zinc-600 dark:border-white/[.145] dark:text-zinc-400">
          Coming soon
        </p>
        <h1 className="text-5xl font-semibold tracking-tight text-black dark:text-zinc-50">
          PaperHub
        </h1>
        <p className="max-w-md text-xl leading-9 font-medium text-zinc-800 dark:text-zinc-200">
          Less Panic. More Past Papers.
        </p>
        <p className="text-sm text-zinc-500 dark:text-zinc-500">
          Phase 1: project setup — building in the open after midterms.
        </p>
      </main>
    </div>
  );
}
