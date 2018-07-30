import React from 'react'

export const LinkWidget = ({widget, updateWidget}) => {
    let widgetType;
    let url;
    let name;
    return (

        <div>
            {!widget.showPreview &&
             <div>
                 <h3>Link Widget - {widget.title} - {widget.widgetType}</h3>
                 <label>Link URL</label>
                 <input className="form-control"
                        value={widget.url}
                        ref={node => url = node}
                        placeholder="URL"
                        onChange={ () => {
                            widget.url = url.value;
                            updateWidget(widget);
                        }}>
                 </input>

                 <label>Link Name</label>
                 <input className="form-control"
                        value={widget.name}
                        ref={node => name = node}
                        placeholder="This is a link"
                        onChange={ () => {
                            widget.name = name.value;
                            updateWidget(widget);
                        }}>
                 </input>

                 <a href={widget.url}>{widget.name}</a>
                 <h4>Preview</h4>
             </div>
            }

            <a href={widget.url}>{widget.name}</a>

            {/*<select className="form-control-sm float-right"*/}
            {/*ref={node => widgetType = node}*/}
            {/*onChange={() => {*/}
            {/*let w = {*/}
            {/*id: widget.id,*/}
            {/*widgetType: widgetType.value*/}
            {/*};*/}
            {/*updateWidget(w)}}>*/}
            {/*<option value="PARAGRAPH">Paragraph Widget</option>*/}
            {/*<option value="WT2">Widget Type 2</option>*/}
            {/*<option value="WT3">Widget Type 3</option>*/}
            {/*<option value="WT4">Widget Type 4</option>*/}
            {/*</select>*/}

        </div>
    )
}
