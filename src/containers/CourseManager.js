import CourseList from './courses/CourseList';
import CourseEditor from './courses/CourseEditor';
import ModuleEditor from './modules/ModuleEditor';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import React from 'react';

class CourseManager extends React.Component {
    render() {
        return (
            <Router>
                <div>
                {/*<root>*/}
                    <Route exact path="/course/list"
                           component={CourseList}>
                    </Route>
                    <Route exact path="/course/:courseId/edit"
                           component={CourseEditor}>
                    </Route>
                    {/*<Route exact path="/course/:courseId/module/:moduleId"*/}
                           {/*component={ModuleEditor}/>*/}
                {/*</root>*/}
                </div>
            </Router>
        )};
}

export default CourseManager;
