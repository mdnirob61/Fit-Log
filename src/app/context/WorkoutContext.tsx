'use client';

import React, { createContext, ReactNode, useState } from 'react';
import { IWorkout } from '../types/workout';

interface IWorkoutContext {
    planCount: number;
    saveCount: number;

    planWorkouts: IWorkout[];
    savedWorkouts: IWorkout[];

    doneWorkouts: number[];

    setPlanCount: React.Dispatch<React.SetStateAction<number>>;
    setSaveCount: React.Dispatch<React.SetStateAction<number>>;

    setPlanWorkouts: React.Dispatch<React.SetStateAction<IWorkout[]>>;
    setSavedWorkouts: React.Dispatch<React.SetStateAction<IWorkout[]>>;

    setDoneWorkouts: React.Dispatch<React.SetStateAction<number[]>>;
}

export const FitLogContext = createContext<IWorkoutContext | undefined>(
    undefined
);

const WorkoutProvider = ({ children }: { children: ReactNode }) => {

    const [planCount, setPlanCount] = useState(0);
    const [saveCount, setSaveCount] = useState(0);

    const [planWorkouts, setPlanWorkouts] = useState<IWorkout[]>([]);
    const [savedWorkouts, setSavedWorkouts] = useState<IWorkout[]>([]);

    const [doneWorkouts, setDoneWorkouts] = useState<number[]>([]);

    const sharedData = {
        planCount,
        saveCount,

        planWorkouts,
        savedWorkouts,

        doneWorkouts,

        setPlanCount,
        setSaveCount,

        setPlanWorkouts,
        setSavedWorkouts,

        setDoneWorkouts
    };

    return (
        <FitLogContext.Provider value={sharedData}>
            {children}
        </FitLogContext.Provider>
    );
};

export default WorkoutProvider;