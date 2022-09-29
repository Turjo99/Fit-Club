import React from 'react';
import ('../Exercise/Exercise.css')

const Exercise = (props) => {
    const {name,img,time} = (props.exercise)
    console.log(props)

    return (
        <div className='card'>
            <h1>{name}</h1>
            <img src={img} alt="" className='card-img center' />
            <p>Time Required : {time}s</p>
            <button onClick={()=>props.click(props.exercise)} className='btn center'>Add</button>
        </div>
    );
};

export default Exercise;