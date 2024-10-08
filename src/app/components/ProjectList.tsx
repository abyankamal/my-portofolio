export default function ProjectList() {
  return (
    <div className="grid grid-flow-col gap-4 mx-auto p-5">
      <div className="divide-y divide-gray-200 overflow-hidden rounded-lg bg-white shadow">
        <div className="px-4 py-5 sm:px-6">
          {/* Content goes here */}
          <p className="text-2xl font-semibold text-white text-center pt-8"></p>
          {/* We use less vertical padding on card headers on desktop than on body sections */}
        </div>
        <div className="px-4 py-5 sm:p-6">
          {/* Content goes here */}
          <Image src={NextJS} alt="uk" width={100} className="mx-auto" />
        </div>
        <div className="px-4 py-4 sm:px-6">
          {/* Content goes here */}
          Tech Stack : React, NextJS, TailwindCSS
          {/* We use less vertical padding on card footers at all sizes than on headers or body sections */}
        </div>
      </div>
    </div>
  );
}
