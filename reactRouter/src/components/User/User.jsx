import React from "react"
import { useParams } from "react-router-dom"

export default function User() {

    const { userid } = useParams();

    return(
        <>
            <h1 className="flex justify-center items-center text-5xl">User: {userid}</h1>
        </>
    )
}