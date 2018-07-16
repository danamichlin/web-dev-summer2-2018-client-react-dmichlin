import React from 'react';
import CourseRow from "../components/CourseRow";
import CourseService from '../services/CourseService';


class CourseList extends React.Component {

    constructor() {
        super();
        this.courseService = CourseService.instance;
        this.state = {courses: [],
                        course: ''};

        //binding "this" to event handlers
        this.titleChanged = this.titleChanged.bind(this);
        //this.createCourse = this.createCourse.bind(this);
        this.saveCourse = this.saveCourse.bind(this);
        this.deleteCourse = this.deleteCourse.bind(this);
        this.findAllCourses = this.findAllCourses.bind(this);
    }

    // lifecycle function of react
    componentDidMount() {
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
                              deleteCourse={self.deleteCourse}/>;


            // alternate way of writing contents of map:
            // map(module => <CourseRow course={courseInfo}/>)
        });
        return rows
    }

    titleChanged(event) {
        this.setState({course: {title: event.target.value}});
    }

    saveCourse() {
        console.log(this.state.course.title);
    }

    deleteCourse(courseId) {
        this.courseService.deleteCourse(courseId)
            .then(this.findAllCourses);
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
                        <th><button onClick={this.saveCourse}>Save</button></th>
                    </tr>
                    </thead>
                    {this.courseRows()}
                </table>

            </div>
        )
    }


}
export default CourseList;