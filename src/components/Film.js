import React from "react";

const Film = ({name, children}) => {
    return(
        <>
        <h3>{name}</h3>
        <h4>{children}</h4> 
        </>

    )
}

export default Film;