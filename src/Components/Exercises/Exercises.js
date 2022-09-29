import React, { useEffect, useState } from 'react';
import Details from '../Details/Details';
import Exercise from '../Exercise/Exercise';
import ('../Exercises/Exercises.css')


const Exercises = () => {
    const [exercises,setexercise] = useState([])
    useEffect(()=>{
        fetch('exercises.json').then(res=>res.json()).then(data=>setexercise(data))
        
    },[])
    const [activity,setActivity]= useState([])
    const click = (exercise)=>{
        console.log(exercise)
        const newActivity=[...activity,exercise]
        setActivity(newActivity)
    }
    


    return (
        <main className="main">

             <div className='cards'>
            {
                exercises.map(exercise=> <Exercise exercise={exercise} click={click}></Exercise>)
            }
            </div>
            <Details activity={activity}>
                
            </Details>
        
         </main>

        

    );
};

export default Exercises;