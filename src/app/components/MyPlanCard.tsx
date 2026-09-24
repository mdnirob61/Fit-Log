'use client';
import Image from "next/image";
import Link from "next/link";
import { IWorkout } from "../types/workout";

interface IMyPlanCardProps {
    workout: IWorkout;
}

const MyPlanCard = ({ workout }: IMyPlanCardProps) => {
    return (
        <div className="flex items-center gap-3 border border-[#25282E] rounded-2xl bg-[#101114] p-3">

            <div className="relative h-20 w-30 shrink-0 overflow-hidden rounded-xl">
                <Image
                    src={workout.image}
                    alt={workout.name}
                    fill
                    className="object-cover"
                ></Image>
            </div>

            <div className="min-w-0 flex-1">
                <h2 className="text-[15px] font-bold uppercase text-white">
                    {workout.name}
                </h2>

                <p className="text-[13px] text-[#6B7280]">
                    {workout.equipment}
                </p>

                <div className="mt-1 flex items-center gap-3 text-[11px] text-[#9CA3AF]">
                    <span>◷ {workout.duration} min</span>
                    <span>● {workout.caloriesBurned} kcal</span>
                    <span>★ {workout.rating}</span>
                </div>
            </div>

            <div className="flex items-center gap-2">

                <Link
                    href={`/workouts/${workout.id}`}
                    className="rounded-full border border-[#25282E] px-5 py-2 text-[11px] text-white">
                    View Details
                </Link>

                <button className="rounded-full bg-[#C2F800] px-5 py-2 text-[11px] font-bold text-black">
                    ✓ Mark as Done
                </button>

                <button className="px-1 text-3xl text-[#6B7280]">
                    ×
                </button>

            </div>
        </div>
    );
};

export default MyPlanCard;