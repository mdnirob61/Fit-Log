import Image from 'next/image';
import banner from '@/assets/banner.png'

const Banner = () => {
    return (
        <div className='container mx-auto bg-[#15171D] flex justify-between items-center py-12 px-15'>
            <div className='flex flex-col'>
                <h2 className='text-[#C2F800] text-[0.8rem]'>WORKOUT LIBRARY</h2>
                <h1 className='text-white font-bold text-5xl'>TRAIN WITH INTENT. LOG
                    EVERY SET.</h1>
                <p>FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
                    into today&apos;s plan, and watch the week&apos;s work add up.</p>
                <button>BROWSE WORKOUTS</button>
            </div>
            <Image
                src={banner}
                alt='BannerImage'
                height={500}
                width={300}
            ></Image>
        </div>
    );
};

export default Banner;