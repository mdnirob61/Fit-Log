'use client';
import React, { createContext, ReactNode, useState } from 'react';

interface IWorkoutContext {
    planCount: number;
    saveCount: number;
    setPlanCount: React.Dispatch<React.SetStateAction<number>>;
    setSaveCount: React.Dispatch<React.SetStateAction<number>>;
}

export const FitLogContext = createContext<IWorkoutContext | undefined>(undefined);

const WorkoutProvider = ({ children }: { children: ReactNode }) => {
    const [planCount, setPlanCount] = useState(0);
    const [saveCount, setSaveCount] = useState(0);

    const sharedData = {
        planCount,
        saveCount,
        setPlanCount,
        setSaveCount,
    }

    return (
        <FitLogContext.Provider value={sharedData}>{children}</FitLogContext.Provider>
    );
};

export default WorkoutProvider;