import React from 'react'

export const ParagraphWidget = ({widget, updateWidget}) => {
    let widgetType;
    let text;
    return (

        <div>
            {!widget.showPreview &&
            <div>
                <h3>Paragraph Widget - {widget.title} - {widget.widgetType}</h3>

                <textarea className="form-control"
                          value={widget.text}
                          ref={node => text = node}
                          onChange={ () => {
                              widget.text = text.value;
                              updateWidget(widget);
                          }}>
                </textarea>
                <h4>Preview</h4>
            </div>
            }


                <p>{widget.text}</p>

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
