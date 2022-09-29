import React, { useEffect, useState } from 'react';
import Exercise from '../Exercise/Exercise';
import ('../Exercises/Exercises.css')


const Exercises = () => {
    const [exercises,setexercise] = useState([])
    useEffect(()=>{
        fetch('exercises.json').then(res=>res.json()).then(data=>setexercise(data))
        
    },[])

    return (
        <div className='cards'>
            {
                exercises.map(exersice=> <Exercise exercice={exersice}></Exercise>)
            }
        </div>
    );
};

export default Exercises;