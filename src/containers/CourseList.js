import React from 'react';
import CourseRow from "../components/CourseRow";
import CourseService from '../services/CourseService';

import {BrowserRouter as Router, Route} from 'react-router-dom';



class CourseList extends React.Component {

    constructor() {
        super();
        this.courseService = CourseService.instance;
        this.state = {course: {id: 0, title: ''},
                        courses: []};


        //binding "this" to event handlers
        this.titleChanged = this.titleChanged.bind(this);
        this.clearCourseFormInputs = this.clearCourseFormInputs.bind(this);
        this.createCourse = this.createCourse.bind(this);
        this.updateCourse = this.updateCourse.bind(this);
        this.deleteCourse = this.deleteCourse.bind(this);
        this.editCourse = this.editCourse.bind(this);
        this.findAllCourses = this.findAllCourses.bind(this);
        this.putCourseInForm = this.putCourseInForm.bind(this);
    }

    // lifecycle function of react
    componentDidMount() {
        this.findAllCourses();
    }

    componentWillReceiveProps() {
        this.findAllCourses();
    }

    courseRows() {
        var self = this;
        // map: says that for each course in courses, return the lambda function(courses)
        var rows = this.state.courses.map(function(courseInfo) {
            // course --> html attribute of <CourseRow>
            // {course} --> the course passed into the function (ie the course in the list of
            // courses
            return <CourseRow course={courseInfo} key={courseInfo.id}
                              deleteCourse={self.deleteCourse} editCourse={self.editCourse}/>;


            // alternate way of writing contents of map:
            // map(module => <CourseRow course={courseInfo}/>)
        });
        return rows
    }

    //TODO
    putCourseInForm(course) {
        this.setState({course: {title: this.state.course.title}});
    }

    //TODO
    clearCourseFormInputs() {
        this.setState({course: {title: ''}});
    }

    titleChanged(event) {
        this.setState({course: {id: this.state.course.id , title: event.target.value}});
        console.log(this.state)
    }

    //TODO check
    createCourse() {
      var c = this.state.course;
        this.courseService.createCourse(c)
            .then(() => {
                this.setState({
                    course: {title: ''}
                              });

            })
            .then(this.findAllCourses)
            .then(this.clearCourseFormInputs);
    }

    //TODO
    updateCourse(event) {
        console.log(this.state);
        //this.setState({course: {id: this.state.course.id, title: event.target.value}});
        this.courseService.updateCourse(this.state.course.id, this.state.course)
            .then(this.findAllCourses)
            .then(this.clearCourseFormInputs);

    }



    deleteCourse(courseId) {
        this.courseService.deleteCourse(courseId)
            .then(this.findAllCourses);
    }

    editCourse(course) {

        this.setState({course: course});
        console.log(this.state);
        // this.courseService.findCourseById(course)
        //     .then(this.putCourseInForm(this.state.course));
    }

    findAllCourses() {
        this.courseService.findAllCourses()
            .then(courses => {
                this.setState({courses: courses});
            });
    }

    render() {
        return (
            <div>
                <h2>Course List</h2>
                <table class="table-bordered table-striped">
                    <thead>
                        <tr>
                            <th><span>Title</span></th>
                            <th><span>Date Created</span></th>
                            <th><span>Date Modified</span></th>
                            <th><span>Actions</span></th>

                        </tr>
                    <tr>
                        <input id="titleFld"
                               placeholder="cs101"
                               onChange={this.titleChanged}
                               value={this.state.course.title}/>
                        <th></th>
                        <th></th>
                        <th><button onClick={this.createCourse}>Create</button>
                            <button onClick={this.updateCourse}>Update</button>
                        </th>
                    </tr>
                    </thead>
                    {this.courseRows()}
                    {/*<Route path={'/api/course/${this.props.course.id}/module'}*/}
                </table>

            </div>
        )
    }


}
export default CourseList;