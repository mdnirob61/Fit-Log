'use client'
import Image from "next/image";
import { IWorkout } from "../types/workout";
import { useContext, useState } from "react";
import { FitLogContext } from "../context/WorkoutContext";

interface IWorkoutDetailsCardProps {
    workout: IWorkout;
}

const WorkoutDetailsCard = ({
    workout,
}: IWorkoutDetailsCardProps) => {

    const context = useContext(FitLogContext);

    if (!context) {
        throw new Error("WorkoutDetailsCard must be used within FitLogContext.Provider");
    }

    const { planCount, setPlanCount, saveCount, setSaveCount } = context;
    const [planAdded, setPlanAdded] = useState(false);
    const [saved, setSaved] = useState(false);

    const handleAddToPlan = () => {
        if (planAdded) {
            return;
        }
        setPlanCount(planCount + 1);
        setPlanAdded(true);
    };

    const handleSave = () => {
        if (saved) {
            return;
        }
        setSaveCount(saveCount + 1);
        setSaved(true);
    };
    // console.log(planCount,'plan')
    // console.log(saveCount,'save')
    return (
        <section className="container mx-auto px-4 py-10 sm:px-6 lg:px-8">

            <div className="grid overflow-hidden rounded-2xl border border-[#25282E] bg-[#15171D] lg:grid-cols-2">

                <div className="relative min-h-80 bg-[#101114] sm:min-h-100 lg:min-h-full">
                    <Image
                        src={workout.image}
                        alt={workout.name}
                        fill
                        className="object-cover" />
                </div>

                <div className="p-5 sm:p-8 lg:p-10">

                    <h1 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
                        {workout.name}
                    </h1>

                    <p className="mt-5 text-sm leading-6 text-[#9CA3AF] sm:text-base">
                        {workout.description}
                    </p>

                    <div className="mt-4 flex flex-wrap gap-2">
                        {workout.muscleGroups.map((group, ind) => (
                            <div
                                key={ind}
                                className="rounded-full bg-[#C2F800] px-3 py-1 text-[10px] font-bold tracking-wide text-black">
                                {group}
                            </div>
                        ))}
                    </div>

                    <div className="mt-5 rounded-2xl bg-[#1d2230] px-5 sm:px-6">
                        <table className="w-full">
                            <tbody>
                                <tr className="border-b border-gray-500/60">
                                    <td className="py-5 text-xs font-medium text-gray-500">
                                        EQUIPMENT
                                    </td>
                                    <td className="py-5 text-right text-sm font-semibold text-white">
                                        {workout.equipment}
                                    </td>
                                </tr>

                                <tr className="border-b border-gray-500/60">
                                    <td className="py-5 text-xs font-medium text-gray-500">
                                        DIFFICULTY
                                    </td>
                                    <td className="py-5 text-right text-sm font-semibold text-white">
                                        {workout.difficulty}
                                    </td>
                                </tr>

                                <tr className="border-b border-gray-500/60">
                                    <td className="py-5 text-xs font-medium text-gray-500">
                                        SETS
                                    </td>
                                    <td className="py-5 text-right text-sm font-semibold text-white">
                                        {workout.sets}
                                    </td>
                                </tr>

                                <tr className="border-b border-gray-500/60">
                                    <td className="py-5 text-xs font-medium text-gray-500">
                                        REPS
                                    </td>
                                    <td className="py-5 text-right text-sm font-semibold text-white">
                                        {workout.reps}
                                    </td>
                                </tr>

                                <tr className="border-b border-gray-500/60">
                                    <td className="py-5 text-xs font-medium text-gray-500">
                                        DURATION
                                    </td>
                                    <td className="py-5 text-right text-sm font-semibold text-white">
                                        {workout.duration} min
                                    </td>
                                </tr>

                                <tr className="border-b border-gray-500/60">
                                    <td className="py-5 text-xs font-medium text-gray-500">
                                        CALORIES
                                    </td>
                                    <td className="py-5 text-right text-sm font-semibold text-white">
                                        {workout.caloriesBurned} kcal
                                    </td>
                                </tr>

                                <tr>
                                    <td className="py-5 text-xs font-medium text-gray-500">
                                        RATING
                                    </td>
                                    <td className="py-5 text-right text-sm font-semibold text-white">
                                        <span className="text-yellow-400">★</span>{" "}
                                        {workout.rating}
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div className="mt-8">

                        <h2 className="mb-5 text-sm font-bold tracking-wider text-white">
                            INSTRUCTIONS
                        </h2>

                        <div className="space-y-4">
                            {workout.instructions.map((instruction, index) => (
                                <div
                                    key={index}
                                    className="flex gap-4">
                                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#C2F800] text-xs font-bold text-black">
                                        {index + 1}
                                    </span>

                                    <p className="text-sm leading-6 text-[#9CA3AF]">
                                        {instruction}
                                    </p>
                                </div>
                            ))}
                        </div>

                    </div>

                    <div className="mt-8 flex flex-col gap-3 sm:flex-row">

                        <button onClick={() => handleAddToPlan()}
                            disabled={planAdded}
                            className={`flex-1 rounded-xl px-5 py-3 text-sm font-bold uppercase ${planAdded
                                    ? "cursor-not-allowed bg-gray-600 text-gray-300"
                                    : "bg-[#C2F800] text-black hover:bg-[#d4ff4d]"
                                }`}>
                            {planAdded ? "Added to plan" : "Add to today's plan"}
                        </button>

                        <button onClick={() => handleSave()}
                            disabled={saved}
                            className={`flex-1 rounded-xl px-5 py-3 text-sm font-bold uppercase ${saved
                                ? "cursor-not-allowed bg-gray-600 text-gray-300"
                                : "border border-[#C2F800] text-[#C2F800] hover:bg-[#C2F800] hover:text-black"
                                }`}>
                            {saved ? "Saved" : "Save for later"}
                        </button>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default WorkoutDetailsCard;