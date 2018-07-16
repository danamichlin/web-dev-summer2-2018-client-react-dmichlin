import React from 'react';
import CourseService from '../services/CourseService';

class CourseRow extends React.Component {
    constructor(props) {
        super(props);
        this.courseService = CourseService.instance;


    }



    render() {
        return (
                <tbody>
                    <tr>
                        <td>{this.props.course.title}</td>
                        <td>{this.props.course.created}</td>
                        <td>{this.props.course.modified}</td>
                        <td id={this.props.course.id}>
                            <button onClick={() => this.props.deleteCourse(this.props.course.id)}>Delete</button>
                            <button>Update</button>
                        </td>
                    </tr>
            </tbody>
    )}}

export default CourseRow;