import React from 'react'

const Notification = (props) => {
    return(
        <div>
            <p>{props.notification}</p>
            <p>{props.text}</p>
        </div>
    )
}

export default Notification
