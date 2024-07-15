import React from 'react'

const page = async ({ params }) => {
    const breed = params.id

    // const res = await fetch()

    return (
        <div>{params.id}</div>
    )
}

export default page