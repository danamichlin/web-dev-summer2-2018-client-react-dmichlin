import React from 'react'

export const VideoWidget = () => {

    return (
        <div>

            <input id="URL" className="form-control"/>

            <iframe width="560" height="315"
            src="https://www.youtube.com/embed/T-cit-seqvw"
            frameborder="0" allow="autoplay; encrypted-media"
            allowfullscreen></iframe>

        </div>
    )

}