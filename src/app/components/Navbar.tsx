"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import logo from "@/assets/logo.png";
import { useContext } from "react";
import { FitLogContext } from "../context/WorkoutContext";

const Navbar = () => {
    const pathname = usePathname();

    const { planCount, saveCount } = useContext(FitLogContext) ?? {
        planCount: 0,
        saveCount: 0,
    };

    return (
        <nav className="sticky top-0 z-50 w-full border-b border-[#202227] bg-black">
            <div className="container mx-auto flex min-h-20 flex-col items-center justify-center gap-3 px-4 py-3 sm:px-6 lg:h-20 lg:flex-row lg:justify-between lg:gap-0 lg:px-0 lg:py-0">

                <Link
                    href="/"
                    className="flex items-center gap-2">
                    <Image
                        src={logo}
                        alt="FitLog logo"
                        width={30}
                        height={30}
                    ></Image>
                    <div className="text-[1.3rem] font-bold tracking-wide text-white">
                        FITLOG
                    </div>
                </Link>

                <div className="flex items-center gap-2 sm:gap-3 lg:absolute lg:left-1/2 lg:-translate-x-1/2">

                    <Link
                        href="/"
                        className={`rounded-full px-4 py-1.5 text-[0.8rem] font-medium transition ${
                            pathname === "/"
                                ? "bg-[#ccff00] text-black"
                                : "text-[#8b8d91] hover:text-white"
                        }`}>
                        Workouts
                    </Link>

                    <Link
                        href="/my-plan"
                        className={`rounded-full px-4 py-1.5 text-[0.8rem] font-medium transition ${
                            pathname === "/my-plan"
                                ? "bg-[#ccff00] text-black"
                                : "text-[#8b8d91] hover:text-white"
                        }`}>
                        My Plan
                    </Link>

                </div>

                <div className="flex items-center gap-5">

                    <Link
                        href="/my-plan"
                        className="flex items-center gap-1 text-[0.8rem] text-[#8b8d91] transition hover:text-white">
                        Plan
                        <span className="flex h-4 min-w-4 items-center justify-center rounded-full bg-[#ccff00] px-1 text-[9px] font-semibold text-black">
                            {planCount}
                        </span>
                    </Link>

                    <Link
                        href="/my-plan"
                        className="flex items-center gap-1 text-[0.8rem] text-[#8b8d91] transition hover:text-white">
                        Saved
                        <span className="flex h-4 min-w-4 items-center justify-center rounded-full bg-[#ccff00] px-1 text-[9px] font-semibold text-black">
                            {saveCount}
                        </span>
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;