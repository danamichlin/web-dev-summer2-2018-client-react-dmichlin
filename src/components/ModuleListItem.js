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
                <li>
                {/*<li><Link to={`/course/${this.props.courseId}/module/${this.props.module.id}`}>*/}
                        {/*{this.props.module.title}*/}
                    {/*</Link>*/}
                    <a href="#" onClick={() => this.props.onModuleSelected(this.props.module)}>
                        {this.props.module.title}</a>
                    <button onClick={() =>
                    {this.props.delete(this.props.module.id)}}>
                        DELETE</button>
                    <button onClick={() =>
                    {this.props.edit(this.props.module)}}>EDIT</button>
                </li>

            </div>
        )}
}

export default ModuleListItem;