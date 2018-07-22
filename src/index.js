import React from 'react'
import ReactDOM from 'react-dom'
import HelloWorld from './hello'
//import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
//import '../node_modules/font-awesome/css/font-awesome.min.css';
import LessonTabs from './containers/LessonTabs'
import TopicPills from './TopicPills'
import {BrowserRouter as Router}
    from 'react-router-dom'

import CourseCard from './components/CourseCard'
import CourseList from "./containers/CourseList";
//import ModuleList2 from "./containers/ModuleList2";
import CourseManager from './containers/CourseManager';

class ModuleListItem extends React.Component {
    render() {
        return(
            <li className="list-group-item">
                {this.props.title}
                <span className="pull-right">
          <i style={{'margin-right': '5px'}} className="fa fa-trash"></i>
          <i className="fa fa-pencil"></i>
        </span>
            </li>
        )
    }
}

// class ModuleList extends React.Component {
//     render() {
//         return (
//             <div>
//                 <h1>Module List</h1>
//                 <ul className="list-group">
//                     <ModuleListItem title="Module 1"/>
//                     <ModuleListItem title="Module 2"/>
//                     <ModuleListItem title="Module 3"/>
//                     <ModuleListItem title="Module 4"/>
//                 </ul>
//             </div>
//         )
//     }
// }


class WhiteBoard extends React.Component {
    render() {
        return (
            <div className="container-fluid" >
                <div class="p-3 mb-2 bg-secondary text-white">Whiteboard</div>
                <div>
                    <CourseManager/>
                </div>
            </div>
        )
    }
}

ReactDOM.render(
    <WhiteBoard/>,
    document.getElementById('root')
);