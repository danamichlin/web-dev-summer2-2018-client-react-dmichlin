import React from 'react'

export const VideoWidget = ({widget, updateWidget}) => {

    let src;
    return (
        <div>

            <input id="URL"
                   className="form-control"
                   ref={node => src = node}
                    onChange={() => {
                        widget.src = src.value;
                        updateWidget(widget);
                    }}/>

            <h4>Preview</h4>
            {widget.src}
            <iframe width="560" height="315"
                    src={`https://www.youtube.com/embed/${widget.src}`}
                    frameBorder="0" allow="autoplay; encrypted-media"
                    allowFullScreen></iframe>

        </div>
    )

}