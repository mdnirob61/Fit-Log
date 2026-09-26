'use client';

import React, { useContext, useState } from 'react';
import MyPlanCard from "../components/MyPlanCard";
import { FitLogContext } from "../context/WorkoutContext";
import Link from 'next/link';
import { IWorkout } from '../types/workout';

const MyPlanPage = () => {

    const context = useContext(FitLogContext);

    if (!context) {
        throw new Error(
            "MyPlanPage must be used within FitLogContext.Provider"
        );
    }

    const {
        planWorkouts,
        savedWorkouts,
    } = context;

    const [activeTab, setActiveTab] = useState("plan");

    const currentWorkouts =
        activeTab === "plan"
            ? planWorkouts
            : savedWorkouts;

    const exerciseCount = currentWorkouts.length;
    const totalMinutes = currentWorkouts.reduce(
        (total, workout) => total + workout.duration,
        0
    );
    const totalCalories = currentWorkouts.reduce(
        (total, workout) => total + workout.caloriesBurned,
        0
    );

    const [sortBy, setSortBy] = useState<"duration" | "calories" | "rating">("duration");
    const sortWorkout = (workout: IWorkout[]) => {
        const sortedWorkouts = [...workout];

        if (sortBy === "duration") {
            sortedWorkouts.sort((a, b) => b.duration - a.duration);
        }
        else if (sortBy === "calories") {
            sortedWorkouts.sort((a, b) => b.caloriesBurned - a.caloriesBurned);
        }
        else if (sortBy === "rating") {
            sortedWorkouts.sort((a, b) => b.rating - a.rating);
        }

        return sortedWorkouts;
    }

    const sortedPlanWorkouts = sortWorkout(planWorkouts);
    const sortedSavedWorkouts = sortWorkout(savedWorkouts);

    return (
        <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-0">

            <div>
                <h1 className="text-3xl font-bold uppercase text-white sm:text-4xl">
                    MY PLAN
                </h1>

                <p className="mt-2 text-sm text-[#9CA3AF] sm:text-base">
                    Cap of five lifts for today. Finish them, then load more.
                </p>
            </div>

            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">

                <div className="rounded-xl border border-[#25282E] bg-[#15171D] p-4">
                    <p className="text-xs text-[#9CA3AF]">
                        EXERCISES
                    </p>

                    <p className="mt-2 text-4xl font-bold text-white">
                        {exerciseCount}
                    </p>
                </div>

                <div className="rounded-xl border border-[#25282E] bg-[#15171D] p-4">
                    <p className="text-xs text-[#9CA3AF]">
                        MINUTES
                    </p>

                    <p className="mt-2 text-4xl font-bold text-white">
                        {totalMinutes}
                    </p>
                </div>

                <div className="rounded-xl border border-[#25282E] bg-[#15171D] p-4">
                    <p className="text-xs text-[#9CA3AF]">
                        CALORIES
                    </p>

                    <p className="mt-2 text-4xl font-bold text-white">
                        {totalCalories}
                    </p>
                </div>
            </div>

            <div className="my-10 flex justify-end items-center">
                <p className="px-2 text-[#8A92A0]">Sort By  </p>
                <select
                    value={sortBy}
                    onChange={(e) =>
                        setSortBy(
                            e.target.value as "duration" | "calories" | "rating"
                        )
                    }
                    className="select select-success bg-[#13161D] max-w-30 border-[#8A92A0] rounded-xl">
                    <option value="duration">Duration</option>
                    <option value="calories">Calories</option>
                    <option value="rating">Rating</option>
                </select>
            </div>

            <div className="tabs tabs-box mt-9">
                <input
                    type="radio"
                    name="my_tabs_6"
                    className="tab"
                    aria-label="Today's Plan"
                    defaultChecked
                    onChange={() => setActiveTab("plan")}
                />

                <div className="tab-content p-4">
                    {sortedPlanWorkouts.length === 0 ? (
                        <div className="flex min-h-75 flex-col items-center justify-center text-center">
                            <h2 className="text-2xl font-bold text-white">
                                NOTHING HERE YET
                            </h2>

                            <p className="mt-2 text-sm text-[#9CA3AF]">
                                Browse the library and add a lift to get today moving.
                            </p>

                            <Link
                                href="/"
                                className="mt-6 rounded-3xl bg-[#C2F800] px-5 py-3 text-sm font-bold text-black">
                                Go to workouts
                            </Link>
                        </div>
                    ) : (
                        <div className="space-y-3">
                            {sortedPlanWorkouts.map((workout) => (
                                <MyPlanCard
                                    key={workout.id}
                                    workout={workout}
                                    type="plan"
                                ></MyPlanCard>
                            ))}
                        </div>
                    )}
                </div>

                <input
                    type="radio"
                    name="my_tabs_6"
                    className="tab"
                    aria-label="Saved"
                    onChange={() => setActiveTab("saved")}
                />

                <div className="tab-content p-4">
                    {sortedSavedWorkouts.length === 0 ? (
                        <div className="flex min-h-75 flex-col items-center justify-center text-center">
                            <h2 className="text-2xl font-bold text-white">
                                NOTHING SAVED HERE YET
                            </h2>

                            <p className="mt-2 text-sm text-[#9CA3AF]">
                                Browse the library and save a lift.
                            </p>

                            <Link
                                href="/"
                                className="mt-6 rounded-3xl bg-[#C2F800] px-5 py-3 text-sm font-bold text-black">
                                Go to workouts
                            </Link>
                        </div>
                    ) : (
                        <div className="space-y-3">
                            {sortedSavedWorkouts.map((workout) => (
                                <MyPlanCard
                                    key={workout.id}
                                    workout={workout}
                                    type="saved"
                                ></MyPlanCard>
                            ))}
                        </div>
                    )}
                </div>

            </div>

        </div>
    );
};

export default MyPlanPage;