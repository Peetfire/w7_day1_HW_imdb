import React from "react";

const Film = ({name, children}) => {
    return(
        <div id="film">
        <a href={children}>{name}</a>
        </div>

    )
}

export default Film;