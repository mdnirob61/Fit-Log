import Link from "next/link";

const NotFound = () => {
    return (
        <div className="flex min-h-[70vh] flex-col items-center justify-center px-4 text-center">

            <h1 className="text-6xl sm:text-7xl md:text-8xl font-bold text-[#C2F800]">
                404
            </h1>

            <h2 className="mt-3 sm:mt-4 text-2xl sm:text-3xl md:text-4xl font-bold text-white">
                PAGE NOT FOUND
            </h2>

            <p className="mt-3 max-w-md text-sm sm:text-base text-[#9CA3AF]">
                The page you are looking for does not exist.
            </p>

            <Link
                href="/"
                className="mt-5 sm:mt-6 rounded-full bg-[#C2F800] px-5 py-2.5 sm:px-6 sm:py-3 text-sm sm:text-base font-bold text-black transition hover:bg-[#d4ff33]">
                Go to workouts
            </Link>

        </div>
    );
};

export default NotFound;