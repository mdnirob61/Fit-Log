'use client';

import React, { createContext, ReactNode, useState } from 'react';
import { IWorkout } from '../types/workout';

interface IWorkoutContext {
    planCount: number;
    saveCount: number;

    planWorkouts: IWorkout[];
    saveWorkouts: IWorkout[];

    setPlanCount: React.Dispatch<React.SetStateAction<number>>;
    setSaveCount: React.Dispatch<React.SetStateAction<number>>;

    setPlanWorkouts: React.Dispatch<React.SetStateAction<IWorkout[]>>;
    setSaveWorkouts: React.Dispatch<React.SetStateAction<IWorkout[]>>;
}

export const FitLogContext = createContext<IWorkoutContext | undefined>(undefined);

const WorkoutProvider = ({ children }: { children: ReactNode }) => {

    const [planCount, setPlanCount] = useState(0);
    const [saveCount, setSaveCount] = useState(0);

    const [planWorkouts, setPlanWorkouts] = useState<IWorkout[]>([]);
    const [saveWorkouts, setSaveWorkouts] = useState<IWorkout[]>([]);

    const sharedData = {
        planCount,
        saveCount,
        planWorkouts,
        saveWorkouts,

        setPlanCount,
        setSaveCount,
        setPlanWorkouts,
        setSaveWorkouts
    };

    return (
        <FitLogContext.Provider value={sharedData}>
            {children}
        </FitLogContext.Provider>
    );
};

export default WorkoutProvider;