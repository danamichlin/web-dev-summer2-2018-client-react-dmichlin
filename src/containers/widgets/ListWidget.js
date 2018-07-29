import React from 'react'

export const ListWidget = ({widget, updateWidget}) => {

    // variables to bind to low-level node
    let text;
    let ordered;

    return (
        <div>
            <h3>List Widget</h3>
            <textarea className="form-control"
                      value={widget.listItems}
                      ref={node => text = node}
                        onChange={ () => {
                            widget.listItems = text.value;
                            updateWidget(widget);
                        }}>

            </textarea>
            <label>
                <input type="checkbox"
                       checked={widget.ordered}
                       ref={node => ordered = node}
                onChange={() => {
                    widget.ordered = ordered.checked;
                    updateWidget(widget);
                }}/>Ordered
            </label>



            <h4>Preview</h4>

            {!widget.ordered &&
             <ul>
                 {widget.listItems.split("\n").map((item, index) => (
                     <li key={index}>{item}</li>
                 ))}
             </ul>
            }

            {widget.ordered &&
             <ol>
                 {widget.listItems.split("\n").map((item, index) => (
                     <li key={index}>{item}</li>
                 ))}
             </ol>
            }
        </div>
    )
}
