import React from 'react'
import {WidgetType1} from './WidgetType1'
import {WidgetType2} from './WidgetType2'
import {WidgetType3} from './WidgetType3'
import {WidgetType4} from './WidgetType4'
import {HeadingWidget} from "./HeadingWidget";
import {ListWidget} from "./ListWidget";
import {VideoWidget} from "./VideoWidget";
import {ParagraphWidget} from "./ParagraphWidget";
import {LinkWidget} from "./LinkWidget";

class WidgetListComponent extends React.Component {
    constructor(props) {
        super(props);
        let widgetTitle;
        let widgetType;
        this.props.loadAllWidgets();
    }

    showPreview;

    render() {
        return (
            <div>
                <button className="btn btn-success float-right"
                        onClick={this.props.saveWidgets}>
                    SAVE
                </button>

                <input type="checkbox"
                       checked={this.showPreview}
                       ref={node => this.preview = node}
                       onChange={() => {
                           this.showPreview = this.preview.checked;
                           this.props.updateView(this.showPreview);
                       }}/>Preview

                <h1>Widget List ({this.props.widgets.length})</h1>

                <ul className="list-group">
                    <li className="list-group-item">
                        <input className="form-control" ref={node => this.widgetTitle = node}/>
                        <button className="btn btn-primary"
                                onClick={() => {
                                    let widget={
                                        title: this.widgetTitle.value,
                                        widgetType: this.widgetType.value,
                                        showPreview: this.showPreview
                                    };
                                    this.widgetTitle.value = '';
                                    this.props.createWidget(widget)}}>
                            Add Widget
                        </button>
                        <select className="form-control"
                                ref={node => this.widgetType = node}>
                            <option value="HEADING">Heading Widget</option>
                            <option value="LIST">List Widget</option>
                            <option value="VIDEO">Video Widget</option>
                            <option value="PARAGRAPH">Paragraph Widget</option>
                            <option value="LINK">Link Widget</option>
                            <option value="WT3">Widget Type 3</option>
                            <option value="WT4">Widget Type 4</option>

                        </select>
                    </li>
                    {this.props.widgets.map((widget, index) =>
                        <li className='list-group-item'
                            key={index}>
                            {widget.title} {widget.id} - {widget.widgetType}

                            <button className='float-right btn btn-danger'
                                    onClick={() => this.props.deleteWidget(widget.id)}>
                                Delete
                            </button>

                            <button className='float-right btn btn-warning'
                                    onClick={() => this.props.down(widget.id)}>
                                <i className='fa fa-chevron-down'/>
                            </button>

                            <button className='float-right btn btn-warning'
                                    onClick={() => this.props.up(widget.id)}>
                                <i className='fa fa-chevron-up'/>
                            </button>

                            <select className="form-control-sm float-right"
                                    //ref={node => this.widgetType = node}
                                    onChange={(e) => {
                                        let w = {
                                            id: widget.id,
                                            widgetType: e.currentTarget.value
                                        };
                                        this.props.updateWidget(w)}}>
                                <option value="HEADING">Heading Widget</option>
                                <option value="PARAGRAPH">Paragraph Widget</option>
                                <option value="LIST">List Widget</option>
                                <option value="VIDEO">Video Widget</option>
                                <option value="IMAGE">Image Widget</option>
                                <option value="HYPERLINK">Link Widget</option>
                            </select>


                            <div>
                                {widget.widgetType === 'HEADING' &&
                                 <HeadingWidget widget={widget}
                                                updateWidget={this.props.updateWidget}/>}

                                {widget.widgetType === 'LIST' &&
                                 <ListWidget widget={widget}
                                             updateWidget={this.props.updateWidget}/>}

                                {widget.widgetType === 'VIDEO' &&
                                 <VideoWidget widget={widget}
                                              updateWidget={this.props.updateWidget}/>}

                                {widget.widgetType === 'PARAGRAPH' &&
                                 <ParagraphWidget widget={widget}
                                              updateWidget={this.props.updateWidget}/>}

                                {widget.widgetType === 'LINK' &&
                                 <LinkWidget widget={widget}
                                              updateWidget={this.props.updateWidget}/>}

                                {widget.widgetType === 'WT3' &&
                                 <WidgetType3 widget={widget}
                                              updateWidget={this.props.updateWidget}/>}

                                {widget.widgetType === 'WT4' &&
                                 <WidgetType4 widget={widget}
                                              updateWidget={this.props.updateWidget}/>}
                            </div>
                        </li>
                    )}
                </ul>
            </div>
        )
    }
}

export default WidgetListComponent