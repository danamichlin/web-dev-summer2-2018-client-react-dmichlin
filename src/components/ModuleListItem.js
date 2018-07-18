import React from 'react';
import { Link } from 'react-router-dom'

class ModuleListItem extends React.Component {

    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div>
                <li>Module Title</li>
                <li><Link to={`/course/
                        ${this.props.courseId}
                        /module/${this.props.module.id}`}>
                        {this.props.module.title}
                    </Link>

                    <button onClick={() =>
                    {this.props.delete
                    (this.props.module.id)}}>
                        DELETE</button>
                </li>

            </div>
        )}
}

export default ModuleListItem;