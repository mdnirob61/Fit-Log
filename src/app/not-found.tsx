import Link from "next/link";

const NotFound = () => {
    return (
        <div className="flex min-h-[70vh] flex-col items-center justify-center px-4 text-center">
            <h1 className="text-7xl font-bold text-[#C2F800]">
                404
            </h1>
            <h2 className="mt-4 text-3xl font-bold text-white">
                PAGE NOT FOUND
            </h2>
            <p className="mt-3 text-[#9CA3AF]">
                The page you are looking for does not exist.
            </p>
            <Link
                href="/"
                className="mt-6 rounded-full bg-[#C2F800] px-6 py-3 font-bold text-black">
                Go to workouts
            </Link>
        </div>
    );
};

export default NotFound;