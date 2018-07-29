import React from 'react'

const WidgetListComponent = ({widgets, deleteWidget, createWidget}) =>
{
    let widgetTitle;
    return (
        <div>
            <h1>Widget List ({widgets.length})</h1>
            <ul className="list-group">
                <li className="list-group-item">
                    <input className="form-control" ref={node => widgetTitle = node}/>
                    <button className="btn btn-primary"
                            onClick={() => {
                            let widget={
                                title: widgetTitle.value,
                                id: (new Date()).getTime()
                            };
                            widgetTitle.value = '';
                            createWidget(widget)}}>
                        Add Widget
                    </button>
                </li>
                {widgets.map((widget, index) =>
                                 <li className='list-group-item'
                                     key={index}>
                                     {widget.title} {widget.id} - {widget.widgetType}
                                     <button className='float-right btn btn-danger'
                                             onClick={() => deleteWidget(widget.id)}>
                                         Delete
                                     </button>
                                 </li>
                )}
            </ul>
        </div>
    )
}

export default WidgetListComponent