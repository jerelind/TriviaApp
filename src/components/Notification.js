import React from 'react'

const Notification = (props) => {
    return(
        <div>
            <p>{props.notification}</p>
            <p style={notificationText}>{props.text}</p>
        </div>
    )
}

const notificationText = {
    fontSize: "15px"
}

export default Notification
