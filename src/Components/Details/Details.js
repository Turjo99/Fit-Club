import React from 'react';
import ("../Details/Details.css")

const Details = () => {
    return (
        <div className='details'>
            <h2>Activity Details</h2>

            <div className="person">
                <img src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80" className='person-img' alt="" />
                <div className="person-details">
                    <p>Chomok Hasan</p>
                    <p><small>Dhaka,Bangladesh</small></p>
                </div>

            </div>
            <div className="info">
                    <div className="info-card"><p>75 Kg </p>
                    <p><small>Weight</small></p></div>
                    <div className="info-card"><p>6.2</p><p><small>Height</small></p></div>
                    <div className="info-card"><p>30 Years</p><p><small>Age</small></p></div>
                </div>

            <h2>Add a break</h2>

            <div className="break">
                <div className="time">
                    <p>10</p>
                </div>
                <div className="time">
                    <p>20</p>
                </div>
                <div className="time">
                    <p>30</p>
                </div>
                <div className="time">
                    <p>40</p>
                </div>
                <div className="time">
                    <p>50</p>
                </div>
            </div>

            <h2>Exercise Details</h2>
            <div className="">
                <div className='ex-time'><h1>Exercise Time</h1> <p>0</p></div>
            </div>
            <div className="">
                <div className='ex-time'><h1>Break Time</h1> <p>0</p></div>
            </div>
            <div className="">
                <button className='completed'>Activity Completed</button>
            </div>
        </div>
    );
};

export default Details;