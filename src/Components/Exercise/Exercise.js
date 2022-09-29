import React from 'react';
import ('../Exercise/Exercise.css')

const Exercise = (props) => {
    const {name,img,time} = (props.exercice)
    return (
        <div className='card'>
            <h1>{name}</h1>
            <img src={img} alt="" className='card-img center' />
            <p>Time Required : {time}s</p>
        </div>
    );
};

export default Exercise;