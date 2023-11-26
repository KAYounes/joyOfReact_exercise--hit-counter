"use client"
import React from "react"

export default function Censored({ firstCensor, children })
{
    const [censored, setCensored] = React.useState(firstCensor)

    return(
        <button onClick={() => setCensored(!censored)} class={censored && "censored"}>
            {children}
        </button>
    )
}