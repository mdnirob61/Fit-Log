import Image from 'next/image';
import logo from "@/assets/logo.png";

const Footer = () => {
    return (
        <footer className="mt-20 bg-[#090A0D]">
            <hr className="border-[#202227]" />

            <div className="container mx-auto flex min-h-20 flex-col items-center justify-center gap-3 px-4 py-5 text-center sm:px-6 md:flex-row md:justify-between md:gap-4 md:py-0">

                <div className="flex items-center gap-2">
                    <Image
                        src={logo}
                        alt="FitLog logo"
                        width={25}
                        height={25}
                    ></Image>

                    <div className="text-[1rem] font-bold tracking-wide text-white">
                        FITLOG
                    </div>
                </div>

                <p className="text-[0.7rem] text-[#6B7280]">
                    © 2026 FitLog — Workout Library. Train hard, log honest.
                </p>

            </div>
        </footer>
    );
};

export default Footer;