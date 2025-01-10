import { ReactNode } from "react";

export default function Canvas({
  children,
  title,
}: {
  children: ReactNode;
  title: string;
}) {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-r from-violet-500 to-purple-500 max-w-7xl scroll-smooth">
      <div className="flex-grow overflow-hidden rounded-lg bg-white shadow w-[480px] h-96 my-10 mx-auto">
        <h1 className="text-2xl font-semibold text-black text-center pt-8">
          {title}
        </h1>
        <div className="px-4 py-5 sm:p-6 h-full overflow-scroll">
          {children}
        </div>
      </div>
      <footer className="mt-auto bg-white">
        <div className="mx-auto max-w-7xl px-3 py-4 flex items-center justify-center sm:px-6 lg:px-8">
          <div className="flex justify-center items-center md:order-1 md:mt-0">
            <p className="text-center text-xs leading-5 text-gray-500">
              &copy; {new Date().getFullYear()} Muhammad Abyan Kamal. All rights
              reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
