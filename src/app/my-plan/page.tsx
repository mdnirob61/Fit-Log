'use client';
import React, { useContext } from 'react';
import MyPlanCard from "../components/MyPlanCard";
import { FitLogContext } from "../context/WorkoutContext";

const MyPlanPage = () => {

    const context = useContext(FitLogContext);

    if (!context) {
        throw new Error("MyPlanPage must be used within FitLogContext.Provider");
    }

    const { planWorkouts, saveWorkouts } = context;
    // console.log(planWorkouts);
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

            <div className="mt-8 grid grid-cols-3">
                <div className="rounded-xl border border-[#25282E] bg-[#15171D] p-4">
                    <p className="text-xs text-[#9CA3AF]">
                        EXERCISES
                    </p>
                    <p className="mt-2 text-4xl font-bold text-white">
                        0
                    </p>
                </div>

                <div className="rounded-xl border border-[#25282E] bg-[#15171D] p-4">
                    <p className="text-xs text-[#9CA3AF]">
                        MINUTES
                    </p>
                    <p className="mt-2 text-4xl font-bold text-white">
                        0
                    </p>
                </div>

                <div className="rounded-xl border border-[#25282E] bg-[#15171D] p-4">
                    <p className="text-xs text-[#9CA3AF]">
                        CALORIES
                    </p>
                    <p className="mt-2 text-4xl font-bold text-white">
                        0
                    </p>
                </div>
            </div>

            <div className="tabs tabs-box mt-9">
                <input
                    type="radio"
                    name="my_tabs_6"
                    className="tab"
                    aria-label="Today's Plan"
                    defaultChecked />
                <div className="tab-content bg-base-100 border-base-300 p-6 mt-4 space-y-3">
                    {planWorkouts.map((workout) => (
                        <MyPlanCard
                            key={workout.id}
                            workout={workout} />
                    ))}
                </div>

                <input
                    type="radio"
                    name="my_tabs_6"
                    className="tab"
                    aria-label="Saved" />
                <div className="tab-content bg-base-100 border-base-300 p-6 mt-4 space-y-3">
                    {saveWorkouts.map((workout) => (
                        <MyPlanCard
                            key={workout.id}
                            workout={workout} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default MyPlanPage;