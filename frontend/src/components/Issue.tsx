import React from "react";

const Issue = ({title, children}) => {

    return (
        <>
            <h4>{title}</h4>
            <p>{children}</p>
        </>
    )
}

export default Issue;