import WorkoutDetailsCard from '@/app/components/WorkoutDetailsCard';
import { IWorkout } from '@/app/types/workout';
import React from 'react';

interface IWorkoutDetailsPageProps {
    params: Promise<{
        id: string
    }>;

}

const getWorkouts = async () => {
    const res = await fetch("https://api.abcz.workers.dev/api/fitlog");

    if (!res.ok) {
        throw new Error("Failed to fetch workouts");
    }

    const data = await res.json();
    return data;
};

const WorkoutDetailsPage = async ({ params }: IWorkoutDetailsPageProps) => {
    const { id } = await params;
    const workoutData = await getWorkouts();
    const workout = workoutData.find((work: IWorkout) => String(work.id) === String(id)) as IWorkout

    console.log(workout)
    return (
        <div>
            <WorkoutDetailsCard workout={workout}></WorkoutDetailsCard>
        </div>
    );
};

export default WorkoutDetailsPage;