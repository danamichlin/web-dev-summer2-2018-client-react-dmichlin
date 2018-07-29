import React from 'react'

export const HeadingWidget = ({widget, updateWidget}) => {

    // variables to bind to low-level node
    let text;
    let size;

    return (
    <div>
        <h1>Heading Widget</h1>
        <label htmlFor="text">Heading Text</label>
        <input className="form-control"
               placeholder="Heading Text"
               id="text"
               ref={node => text = node}
               onChange={() => {
                   widget.text = text.value;
                   updateWidget(widget);
                   // insert - check to see if no size set, then if true set default size to h1
               }}/>



        <label htmlFor="size">Heading Size</label>
        <select className="form-control"
                id="size"
                ref={node => size = node}
                onChange={() => {
                    widget.size = size.value;
                    updateWidget(widget);
                }}>
            <option value="1">Heading 1</option>
            <option value="2">Heading 2</option>
            <option value="3">Heading 3</option>
            <option value="4">Heading 4</option>
        </select>

        <h4>Preview</h4>
        {widget.text} - {widget.size}
        {widget.size === '1' && <h1>{widget.text}</h1>}
        {widget.size === '2' && <h2>{widget.text}</h2>}
        {widget.size === '3' && <h3>{widget.text}</h3>}
        {widget.size === '4' && <h4>{widget.text}</h4>}


    </div>
    )
}
