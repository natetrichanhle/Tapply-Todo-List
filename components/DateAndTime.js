import React from 'react'

export default function DateAndTime() {
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
            zIndex: '10',
            color: '#ccc',
            fontSize: '30px',
        },
        h1: {
            transition: '0.5s',
            cursor: 'pointer',
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
            webkitBoxReflect: 'below 1px linear-gradient( transparent, #0005)',

            '&:hover': {
                transform: 'translateY(-10px)'
            }
        },
        h2: {
            transition: '0.5s',
            cursor: 'pointer',
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
            webkitBoxReflect: 'below 1px linear-gradient( transparent, #0005)',

            '&:hover': {
                transform: 'translateY(-10px)'
            }
        }
    }

    return (
        <>
            <div style={dateStyle.main}>
                <div style={dateStyle.date}>
                    <h1 style={dateStyle.h1}>{day}</h1>
                    <h2 style={dateStyle.h2}>{date}</h2>
                    <h2 style={dateStyle.h2}>{month}</h2>
                    <h2 style={dateStyle.h2}>{year}</h2>
                </div>
            </div>
        </>
    )
}
