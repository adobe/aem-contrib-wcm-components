import React from 'react';
import {Link as RouterLink} from 'react-router-dom';


const Link = (props:any) => {
    const {to, ...otherProps} = props;
    
    const isExternal = /^https?:\/\//.test(to);
    
    return isExternal ?
        (<a
            href={to}
            {...props}
        />)
        :
        ( <RouterLink {...otherProps}
                        to={to}
        />)
};

export default Link;