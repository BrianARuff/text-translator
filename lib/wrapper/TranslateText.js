import React from 'react';

function isObject (value) {
    if(value) {
        return Object.prototype.toLocaleString.apply(value) === "[object Object]" &&
               Object.keys(value).length > 0 ? 
               true : 
               false
    } else {
        return false;
    }
}

function locale()
{
 if (navigator.languages !== undefined) 
 return navigator.languages[0]; 
 else 
 return navigator.language;
}

const TranslateText = (props) => {
    return (
        <span>
            {
                isObject(props.content) ?
                props.content[locale()] :
                console.warn(new Error("Translate Text Error: Must provide object as this.props.content, and must contain at least 1 key value pair."))
            }
        </span>
    )
}

export default TranslateText;
