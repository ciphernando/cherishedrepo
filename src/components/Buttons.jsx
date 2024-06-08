import React from 'react'
let commonStyle = "inline-flex items-center font-medium py-2.5 px-6 mr-2 mt-2 rounded-full transition-all duration-400 ease-in-out"
export const ButtonPri = (props) => {
    return (
        <button className={` justify-center text-violet-950 bg-violet-300 border-0 ${commonStyle} hover:bg-violet-500  ${props.xtraClass}`}>{props.text}{props.icon}</button>

        )
}

export const ButtonSec = (props) => {
    return (
        <button className={` text-violet-500 bg-violet-300/30 ${commonStyle} hover:bg-opacity-25   ${props.xtraClass}`}>{props.text}
            {props.icon}
        </button>)
}

export const ButtonTer = (props) => {
    return (
        <button className={` text-violet-600 border-2 border-violet-600 py-1.5 px-6 hover:bg-violet-600 hover:text-violet-50 rounded-full ${props.xtraClass}`}>{props.text}
            {props.icon}
        </button>)
}


export const ButtonIco = (props) => {
    return (
        <a href={props.link} className={`inline-flex  mr-2 text-violet-950  font-medium hover:text-violet-600 border-violet-600 ${props.xtraClass} transition-all duration-400 ease-in-out`}>{props.text}{props.icon}</a>)
}
//default props
ButtonPri.defaultProps = {
    text: "Button",

}
ButtonSec.defaultProps = {
    text: "Button",

}
ButtonTer.defaultProps = {
    text: "Button",

}



