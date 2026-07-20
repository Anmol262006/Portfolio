// HeroSkeleton.jsx
const HeroSkeleton = () => {
  return (
    <section className="animate-pulse flex justify-around items-center min-h-screen px-10">
      {/* Left Content */}
      <div className="space-y-6">
        <div className="h-5 w-40 rounded-full bg-gray-700"></div>
        <div className="h-14 w-96 rounded bg-gray-700"></div>
        <div className="h-14 w-80 rounded bg-gray-700"></div>
        <div className="h-5 w-72 rounded bg-gray-700"></div>

        <div className="flex gap-4">
          <div className="h-12 w-40 rounded-xl bg-gray-700"></div>
          <div className="h-12 w-40 rounded-xl bg-gray-700"></div>
        </div>
      </div>

      {/* Image Placeholder */}
      <div className="h-[470px] w-[330px] rounded-3xl bg-gray-700"></div>
    </section>
  );
};

export default HeroSkeleton;