import React from 'react';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ("../Details/Details.css");



const Details = ({activity}) => {
    const notify = () => toast.success("Congratulations You Have Done It!",{
        position:"top-center",
        
        
    });
    console.log(activity)
    let total=0;
    for(const newActivity of activity){
        total=total+newActivity.time
    }

    const [btime,setbreakTime]= useState(localStorage.getItem("breaktime"))
    
    const breakTime=(time)=>{

        console.log(time)
        setbreakTime(time)
        localStorage.setItem("breaktime",time);
        
    }
    return (
        <div className='details'>
            <ToastContainer /> 
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

            {
                
            }

            <div className="break">
                <div className="time">
                    <p onClick={()=>breakTime(10)}>10s</p>
                </div>
                <div  className="time">
                    <p onClick={()=>breakTime(20)}>20s</p>
                </div>
                <div className="time">
                    <p onClick={()=>breakTime(30)}>30s</p>
                </div>
                <div className="time">
                    <p onClick={()=>breakTime(40)}>40s</p>
                </div>
                <div className="time">
                    <p onClick={()=>breakTime(50)}>50s</p>
                </div>
            </div>

            <h2>Exercise Details</h2>
            <div className="">
                <div className='ex-time'><h1>Exercise Time</h1> <p>{total}s</p></div>
            </div>
            <div className="">
                {/* <div className='ex-time'><h1>Break Time</h1> <p>{breakTime}</p></div> */}
                <div className='ex-time'><h1>Break Time</h1> <p>{btime}</p></div>
            </div>
            <div className="">
                <button onClick={notify} className='completed'>Finish Activity</button>
            </div>
        </div>
    );
};

export default Details;