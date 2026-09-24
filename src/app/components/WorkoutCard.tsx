import Image from 'next/image';
import React from 'react';
import { IWorkout } from '../types/workout';

interface IWorkoutCardProps {
    workout: IWorkout;
}

const WorkoutCard = ({ workout }: IWorkoutCardProps) => {
    return (
        <div className="group overflow-hidden rounded-xl border border-[#25282E] bg-[#15171D] transition duration-300 hover:-translate-y-1 hover:border-[#C2F800]">

            <div className="relative h-52 w-full overflow-hidden bg-[#101114] sm:h-56">
                <Image
                    src={workout.image}
                    alt={workout.name}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-105" />
            </div>

            <div className="p-4 sm:p-5">
                <div className="mb-3 flex flex-wrap gap-2">
                    {
                        workout.muscleGroups.map((group) => (
                            <div
                                key={group}
                                className="rounded-full bg-[#C2F800] px-2.5 py-1 text-[9px] font-bold uppercase tracking-wide text-black">
                                {group}
                            </div>
                        ))}
                </div>

                <h3 className="text-lg font-bold uppercase leading-tight text-white sm:text-xl">
                    {workout.name}
                </h3>

                <p className="mt-2 text-sm text-[#9CA3AF]">
                    {workout.equipment}
                </p>

                <div className="mt-5 grid grid-cols-3 gap-2 border-t border-[#25282E] pt-4">
                    <div className="flex items-center gap-1 text-xs text-[#9CA3AF]">
                        <span className="text-[#C2F800] text-[1rem]">◷</span>
                        <span>{workout.duration} min</span>
                    </div>

                    <div className="flex items-center gap-1 text-xs text-[#9CA3AF]">
                        <span className="text-[#C2F800] text-[1rem]">●</span>
                        <span>{workout.caloriesBurned} kcal</span>
                    </div>

                    <div className="flex items-center gap-1 text-xs text-[#9CA3AF]">
                        <span className="text-[#C2F800] text-[1rem]">★</span>
                        <span>{workout.rating}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WorkoutCard;