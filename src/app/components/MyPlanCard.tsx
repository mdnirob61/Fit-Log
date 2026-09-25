'use client';

import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";
import { IWorkout } from "../types/workout";
import { FitLogContext } from "../context/WorkoutContext";
import { toast } from "react-toastify";

interface IMyPlanCardProps {
    workout: IWorkout;
    type: "plan" | "saved";
}

const MyPlanCard = ({ workout, type }: IMyPlanCardProps) => {

    const context = useContext(FitLogContext);

    if (!context) {
        throw new Error(
            "MyPlanCard must be used within FitLogContext.Provider"
        );
    }

    const {
        setPlanWorkouts,
        setPlanCount,
        setSavedWorkouts,
        setSaveCount,
        doneWorkouts,
        setDoneWorkouts
    } = context;

    const handleMarkAsDone = () => {
        if (doneWorkouts.includes(workout.id)) {
            return;
        }
        setDoneWorkouts((previous) => [...doneWorkouts, workout.id])
        toast.success("Marked");
    }

    const handlePlanRemove = () => {
        setPlanWorkouts((previous) =>
            previous.filter((item) => item.id !== workout.id)
        );
        setPlanCount((previous) => previous - 1);
        toast.error("Removed from plan");
    };

    const handleSavedRemove = () => {
        setSavedWorkouts((previous) => previous.filter((item) => item.id !== workout.id));
        setSaveCount((previous) => previous - 1);
        toast.error("Removed from saved");
    }

    const isDone = doneWorkouts.includes(workout.id);

    return (
        <div className="flex items-center gap-3 border border-[#25282E] rounded-2xl bg-[#101114] p-3">

            {/* Image */}
            <div className="relative h-20 w-30 shrink-0 overflow-hidden rounded-xl">
                <Image
                    src={workout.image}
                    alt={workout.name}
                    fill
                    className="object-cover"
                ></Image>
            </div>

            {/* Workout Info */}
            <div className="min-w-0 flex-1">

                <h2 className="truncate text-[15px] font-bold uppercase text-white">
                    {workout.name}
                </h2>

                <p className="text-[13px] text-[#6B7280]">
                    {workout.equipment}
                </p>

                <div className="mt-1 flex items-center gap-3 text-[12px] text-[#9CA3AF]">
                    <span>◷ {workout.duration} min</span>
                    <span>● {workout.caloriesBurned} kcal</span>
                    <span>★ {workout.rating}</span>
                </div>
            </div>

            <div className="flex shrink-0 items-center gap-2">

                <Link
                    href={`/workouts/${workout.id}`}
                    className="rounded-full border border-[#25282E] px-4 py-1.5 text-[13px] text-white">
                    View Details
                </Link>

                {type === "plan" && (
                    <button
                        onClick={handleMarkAsDone}
                        disabled={isDone}
                        className={`rounded-full px-4 py-1.5 text-[13px] font-bold ${isDone
                            ? "bg-[#25282E] text-[#9CA3AF]"
                            : "bg-[#C2F800] text-black"
                            }`}>
                        {isDone ? "✓ Done" : "✓ Mark as Done"}
                    </button>
                )}

                {type === "plan" ? (
                        <button
                            onClick={() => handlePlanRemove()}
                            className="px-1 text-3xl text-[#6B7280]">
                            ×
                        </button>
                    ) : (
                        <button
                            onClick={() => handleSavedRemove()}
                            className="px-1 text-3xl text-[#6B7280]">
                            ×
                        </button>
                    )
                }


            </div>
        </div>
    );
};

export default MyPlanCard;