import React, { useEffect, useState } from 'react';
import Exercise from '../Exercise/Exercise';
import ('../Exercises/Exercises.css')


const Exercises = () => {
    const [exercises,setexercise] = useState([])
    useEffect(()=>{
        fetch('exercises.json').then(res=>res.json()).then(data=>setexercise(data))
        
    },[])
    const click = (exercise)=>{
        console.log(exercise)
    }

    return (
        <div className='cards'>
            {
                exercises.map(exercise=> <Exercise exercise={exercise} click={click}></Exercise>)
            }
        </div>
    );
};

export default Exercises;