import CourseList from './CourseList';
import CourseEditor from './CourseEditor';
import ModuleEditor from './ModuleEditor';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import React from 'react';

class CourseManager extends React.Component {
    render() {
        return (
            <Router>
                <root>
                    <Route exact path="/course/list"
                           component={CourseList}>
                    </Route>
                    <Route exact path="/course/:courseId/edit"
                           component={CourseEditor}>
                    </Route>
                    {/*<Route exact path="/course/:courseId/module/:moduleId"*/}
                           {/*component={ModuleEditor}/>*/}
                </root>
            </Router>
        )};
}

export default CourseManager;
