import TrustAndReviews from './TrustAndReviews';

export default function ReviewsPage() {
  return (
    <div className="bg-transparent text-neutral-900 dark:text-white min-h-[calc(100dvh-6rem)] md:min-h-[calc(100dvh-8rem)] flex flex-col !overflow-visible transition-colors duration-300">
      <div className="pt-20 md:pt-32 pb-8 text-center">
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold font-stiff tracking-wide text-neutral-900 dark:text-white uppercase">
          CUSTOMER REVIEWS
        </h1>
        <p className="mt-4 text-lg text-neutral-600 dark:text-neutral-300 max-w-2xl mx-auto">
          Authentic feedback from our global network of researchers.
        </p>
      </div>
      <TrustAndReviews compact={false} />
    </div>
  );
}
