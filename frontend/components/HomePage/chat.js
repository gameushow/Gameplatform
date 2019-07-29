import React, { useState } from 'react'
export const chat = (props) => {
    return (
        <form onSubmit={props.handleChat}>
            username <input className='m-2' type="text" defaultValue={''} id="username" />
            <br></br>
            message <input className='m-2' type="text" defaultValue={''} id="message" />
            <input className='m-2' type="submit" id="submit"/>
        </form>
    )
}