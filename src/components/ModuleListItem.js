import React from 'react';

class ModuleListItem extends React.Component {

    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div>
                <li>Module Title</li>
                <li>{this.props.module.title}
                    <button onClick={() =>
                    {this.props.delete
                    (this.props.module.id)}}>
                        DELETE</button>
                </li>

            </div>
        )}
}

export default ModuleListItem;