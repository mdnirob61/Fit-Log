import Image from 'next/image';
import logo from "@/assets/logo.png";

const Footer = () => {
    return (
        <div className='bg-[#090A0D] mt-20'>
            <hr />
            <div className="flex h-20 items-center justify-between container mx-auto">
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
                <p className='text-[#6B7280] text-[0.7rem]'>© 2026 FitLog — Workout Library. Train hard, log honest.</p>
            </div>
        </div>
    );
};

export default Footer;