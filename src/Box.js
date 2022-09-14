import React, { useState } from 'react'

export default function Box(props) {

    const styles = {
        backgroundColor: props.on ? '#222222' : 'transparent',
        color: props.on ? 'white' : 'black',
        cursor: 'pointer',
    }

    return (
        <>
            <div
                style={styles}
                className="box"
                onClick={() => props.toggle()}
            >
                <p>click here!</p>
            </div>
        </>
    )
}