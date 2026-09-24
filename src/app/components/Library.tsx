import WorkoutCard from './WorkoutCard';
import { IWorkout } from '../types/workout';

const getWorkouts = async () => {
    const res = await fetch("https://api.abcz.workers.dev/api/fitlog");

    if (!res.ok) {
        throw new Error("Failed to fetch workouts");
    }

    const data = await res.json();
    return data;
};

const Library = async () => {
    const workoutData = await getWorkouts();

    return (
        <section
            id="library"
            className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">

            <div>
                <h1 className="text-3xl font-bold text-black sm:text-4xl">
                    THE LIBRARY
                </h1>

                <p className="mt-2 text-sm text-[#9CA3AF] sm:text-base">
                    Twelve lifts covering every major muscle group.
                </p>
            </div>

            <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 container">
                {workoutData.map((workout: IWorkout) => (
                    <WorkoutCard
                        key={workout.id}
                        workout={workout}/>
                ))}
            </div>
        </section>
    );
};

export default Library;