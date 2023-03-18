import React, { useState } from 'react'

export default function DateAndTime() {
    // time
    let time = new Date().toLocaleTimeString()
    const [currentTime, setCurrentTime] = useState(time)

    const updateTime = () => {
        let time = new Date().toLocaleTimeString()
        setCurrentTime(time)
    }

    setInterval(updateTime, 1000);

    // date
    const d = new Date();
    const weekDay = ['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat']
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec']
    const day = weekDay[d.getDay()]
    const month = months[d.getMonth()]
    const date = d.getDate()
    const year = d.getFullYear()

    const dateStyle = {
        date: {
            width: '100vw',
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            display: 'flex',
            alignItems: 'flex-end',
            justifyContent: 'center',
            // zIndex: '10',
            fontSize: '30px',
        },
        h1: {
            transition: '0.5s',
            margin: '0 20px',
            padding: '50px',
            height: '200px',
            width: '200px',
            borderRadius: '5px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'rgba(255,255,255,0.2)',
            boxShadow: '0.1em 0.5em 0.5em, 0.5em rgba(0,0,0,0.5)',
            WebkitBoxReflect: 'below 1px linear-gradient( transparent, #0005)',
        },
        h2: {
            transition: '0.5s',
            margin: '0 20px',
            padding: '50px',
            height: '200px',
            width: '200px',
            borderRadius: '5px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'rgba(255,255,255,0.2)',
            boxShadow: '0.1em 0.5em 0.5em, 5em rgba(0,0,0,0.5)',
            WebkitBoxReflect: 'below 1px linear-gradient( transparent, #0005)',
        }
    }

    return (
        <>
            <div style={dateStyle.main}>
                <div style={dateStyle.date} className='select-none'>
                    <h1 style={dateStyle.h1}>{day}</h1>
                    <h2 style={dateStyle.h2}>{date}</h2>
                    <h2 style={dateStyle.h2}>{month}</h2>
                    <h2 style={dateStyle.h2}>{year}</h2>
                </div>
                <div className='flex justify-center'>
                    <h1 className='flex justify-center text-5xl select-none'>{currentTime}</h1>
                </div>
            </div>
        </>
    )
}
