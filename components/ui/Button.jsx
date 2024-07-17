import React from 'react'

const Button = ({ text, color, textColor }) => {
    const colorVariants = {
        primary: "bg-primary",
        secondary: "bg-secondary",
        white: "bg-white"
    }

    const textVariants = {
        primary: "text-primary",
        secondary: "text-secondary",
        white: "text-white"
    }
    return (
        <button className={`font-bold ${colorVariants[color]} ${textVariants[textColor]} hover:bg-opacity-85 rounded-md px-2 py-2`}>{text}</button>
    )
}

export default Button