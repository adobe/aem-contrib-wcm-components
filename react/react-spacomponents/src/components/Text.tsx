import React from 'react';

const Text = (props:any) => {
    const text:string = props.text;
    return (
        <div dangerouslySetInnerHTML={{__html: text}}></div>
    );
};

export default Text;