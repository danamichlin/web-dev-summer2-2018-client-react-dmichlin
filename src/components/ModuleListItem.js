import React from 'react';
import { Link } from 'react-router-dom'

class ModuleListItem extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <tr className={this.props.selected ? 'table bg-success' : ''}>
                <td>
                    <a href="#" onClick={() => this.props.onModuleSelected(this.props.module)}>
                        {this.props.module.title}</a>
                </td>
                <td>
                    <button onClick={() =>
                    {this.props.edit(this.props.module)}}>
                        <i className="fa fa-pencil"/>
                    </button>
                    <button onClick={() =>
                    {this.props.delete(this.props.module.id)}}>
                        <i className="fa fa-remove"/>
                    </button>
                </td>

            </tr>
        )}
}

export default ModuleListItem;