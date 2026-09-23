import React from 'react';

const workout = async () => {
    const res = await fetch("https://api.abcz.workers.dev/api/fitlog");
    const data = await res.json();
    return data;
}

const Library = async () => {
    const workoutData = await workout();
    console.log(workoutData)
    return (
        <section id='library'>
            The Library 
        </section>
    );
};

export default Library;