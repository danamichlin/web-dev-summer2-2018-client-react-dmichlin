import React from 'react'
import ModuleList2 from './ModuleList2'
import LessonTabs from './LessonTabs'
import CourseService from "../services/CourseService";

class CourseEditor extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            course: {
                modules: [{
                    title: ','
                }],
                courseId: 0,
                module: null
            }};
        this.courseService = CourseService.instance;

        this.selectCourse = this.selectCourse.bind(this);
        this.onModuleSelected = this.onModuleSelected.bind(this);
    }

    componentDidMount() {
        this.selectCourse(this.props.match.params.courseId);
    }

    selectCourse(courseId) {
        var id = parseInt(courseId);
        this.setState({courseId: id});
    }

    onModuleSelected(module) {
        this.setState({module: module});
    }

    render() {
        return(
        <div>
            <h2>Editing course: {this.state.courseId}</h2>
            <div className="row">
                <div className="col-4">
                    <ModuleList2 onModuleSelected={this.onModuleSelected}
                                 courseId={this.props.match.params.courseId}/>

                </div>
                <div className="col-8">
                    <LessonTabs module={this.state.module}/>
                </div>
            </div>
        </div>
    );}
}

export default CourseEditor;
