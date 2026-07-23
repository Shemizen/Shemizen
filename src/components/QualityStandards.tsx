export default function QualityStandards() {
  return (
    <section className="bg-transparent py-12 md:py-24 text-neutral-900 dark:text-white transition-colors duration-300 flex flex-col !overflow-visible">
      <div className="container mx-auto px-6 flex flex-col !overflow-visible">
        <div className="mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-5xl font-bold font-stiff tracking-wide text-neutral-900 dark:text-white uppercase">QUALITY STANDARDS</h2>
          <div className="mt-4 h-px w-24 bg-cyan-600/50 dark:bg-cyan-500/50"></div>
        </div>

        <div className="grid gap-8 md:gap-12 grid-cols-1 md:grid-cols-3">
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-cyan-600 dark:text-cyan-400">Purity Floor</h3>
            <p className="text-sm leading-relaxed text-neutral-600 dark:text-neutral-300">
              We maintain a strict purity floor of ≥99.0% for all compounds. Any batch failing to meet this standard is rejected immediately.
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-blue-600 dark:text-blue-400">Third-Party Testing</h3>
            <p className="text-sm leading-relaxed text-neutral-600 dark:text-neutral-300">
              Independent HPLC and MS analysis is performed on every production batch to verify identity, purity, and concentration.
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-cyan-600 dark:text-cyan-400">Batch Consistency</h3>
            <p className="text-sm leading-relaxed text-neutral-600 dark:text-neutral-300">
              Our synthesis protocols ensure rigorous consistency across lots, providing reliable variables for your research data.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
