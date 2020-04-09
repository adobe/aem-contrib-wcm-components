import React from 'react';

const Text = (props:any) => {
    const text:string = props.text;
    return (
        <h1>{text}</h1>
    );
}

export default Text;