import Image from "next/image";
import Link from "next/link";
import banner from "@/assets/banner.png";

const Banner = () => {
    return (
        <section className="container mx-auto my-8 px-4 sm:my-10 sm:px-6 lg:my-12 lg:px-0">
            <div className="flex flex-col items-center justify-between gap-10 rounded-2xl bg-[#15171D] px-6 py-10 sm:px-10 lg:flex-row lg:px-15 lg:py-20">

                <div className="flex flex-col">
                    <p className="text-xs font-medium text-[#C2F800]">
                        WORKOUT LIBRARY
                    </p>

                    <h1 className="mt-5 text-4xl font-bold text-white sm:text-5xl lg:text-5xl">
                        TRAIN WITH INTENT. LOG
                        EVERY SET.
                    </h1>

                    <p className="mt-6 max-w-[460px] text-sm leading-6 text-[#9CA3AF] sm:text-base">
                        FitLog is a dark, no-nonsense gym companion: pick a lift, lock it into today&apos;s plan, and watch the week&apos;s work add up.
                    </p>

                    <Link
                        href="#library">
                        <button className="mt-7 flex w-fit items-center gap-2 rounded-md bg-[#C2F800] px-5 py-3 text-xs font-bold text-black transition hover:bg-[#d4ff33] cursor-pointer">
                            BROWSE WORKOUTS ↓
                        </button>
                    </Link>
                </div>

                <div className="flex w-full justify-center lg:w-1/2 lg:justify-end">
                    <Image
                        src={banner}
                        alt="Person performing a workout"
                        width={300}
                        height={500}
                        className="h-auto w-[220px] sm:w-[260px] lg:w-[300px]"
                        priority
                    ></Image>
                </div>
            </div>
        </section>
    );
};

export default Banner;