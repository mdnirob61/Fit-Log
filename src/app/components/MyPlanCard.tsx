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

        setDoneWorkouts([...doneWorkouts, workout.id]);
        toast.success("Marked as done");
    };

    const handlePlanRemove = () => {
        setPlanWorkouts((previous) =>
            previous.filter((item) => item.id !== workout.id)
        );

        setPlanCount((previous) => previous - 1);
        toast.error("Removed from plan");
    };

    const handleSavedRemove = () => {
        setSavedWorkouts((previous) =>
            previous.filter((item) => item.id !== workout.id)
        );

        setSaveCount((previous) => previous - 1);
        toast.error("Removed from saved");
    };

    const isDone = doneWorkouts.includes(workout.id);

    return (
        <div className="flex flex-col gap-4 rounded-2xl border border-[#25282E] bg-[#101114] p-3 sm:flex-row sm:items-center">

            <div className="relative h-44 w-full shrink-0 overflow-hidden rounded-xl sm:h-20 sm:w-30">
                <Image
                    src={workout.image}
                    alt={workout.name}
                    fill
                    className="object-cover"
                />
            </div>

            <div className="min-w-0 flex-1">

                <h2 className="truncate text-[15px] font-bold uppercase text-white">
                    {workout.name}
                </h2>

                <p className="text-[13px] text-[#6B7280]">
                    {workout.equipment}
                </p>

                <div className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-[12px] text-[#9CA3AF]">
                    <span>◷ {workout.duration} min</span>
                    <span>● {workout.caloriesBurned} kcal</span>
                    <span>★ {workout.rating}</span>
                </div>
            </div>

            <div className="flex w-full flex-wrap items-center gap-2 sm:w-auto sm:shrink-0">

                <Link
                    href={`/workouts/${workout.id}`}
                    className="flex-1 rounded-full border border-[#25282E] px-4 py-2 text-center text-[13px] text-white sm:flex-none">
                    View Details
                </Link>

                {type === "plan" && (
                    <button
                        onClick={handleMarkAsDone}
                        disabled={isDone}
                        className={`flex-1 rounded-full px-4 py-2 text-[13px] font-bold sm:flex-none ${isDone
                                ? "bg-[#25282E] text-[#9CA3AF]"
                                : "bg-[#C2F800] text-black"
                            }`}>
                        {isDone ? "✓ Done" : "✓ Mark as Done"}
                    </button>
                )}

                {type === "plan" ? (
                    <button
                        onClick={handlePlanRemove}
                        className="px-2 text-3xl leading-none text-[#6B7280]">
                        ×
                    </button>
                ) : (
                    <button
                        onClick={handleSavedRemove}
                        className="px-2 text-3xl leading-none text-[#6B7280]">
                        ×
                    </button>
                )}

            </div>

        </div>
    );
};

export default MyPlanCard;