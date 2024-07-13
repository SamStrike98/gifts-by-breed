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
        <button className={`${colorVariants[color]} ${textVariants[textColor]} rounded-md px-2 py-1`}>{text}</button>
    )
}

export default Button