import React from 'react';
import ModuleService from '../services/ModuleService';
import ModuleListItem from "../components/ModuleListItem";

class ModuleList2 extends React.Component {

    constructor(props) {
        super(props);
        this.state =  {courseId: '',
            module: {title: ''},
            modules: []};

        this.moduleService = ModuleService.instance;

        //binding to "this"
        this.setCourseId = this.setCourseId.bind(this);
        this.setModuleTitle = this.setModuleTitle.bind(this);
        this.createModule = this.createModule.bind(this);
        this.deleteModule = this.deleteModule.bind(this);
        //this.renderModules = this.renderModules.bind(this);

    }

    componentDidMount() {
        this.setCourseId(this.props.courseId);
    }

    componentWillReceiveProps(newProps){
        this.findAllModulesForCourse(newProps.courseId)
    }

    setModuleTitle(event) {
        this.setState({module: {
            title: event.target.value
        }});
    }

    setCourseId(courseId) {
        this.setState({courseId: courseId});
    }

    createModule() {
        this.moduleService.createModule
        (this.state.courseId, this.state.module)
            .then(() => {
                this.findAllModulesForCourse
                (this.state.courseId);
            });
    }

    deleteModule(moduleId) {
        this.moduleService
            .deleteModule(moduleId)
            .then(() => {
                this.findAllModulesForCourse
                (this.state.courseId)
            });

    }


    findAllModulesForCourse(courseId) {
        this.moduleService
            .findAllModulesForCourse(courseId)
            .then((modules) => {this.setModules(modules)});
    }

    setModules(modules) {
        this.setState({modules: modules})
    }

    renderModules() {
        let modules =
            this.state.modules.map((module) => {
                return <ModuleListItem module={module} key={module.id}
                                       delete={this.deleteModule}/>
            });
        return (<ul>{modules}</ul>)
    }

    render() {
        return (
            <div>
                <h1>Modules</h1>
                <h4>Modules for Course:
                    {this.state.courseId}</h4>
                //TODO
                {/* check why this.state.courseId does not give courseId*/}
                <input onClick={this.createModule}
                       value={this.state.module.title}
                       placeholder="New Module"
                       onChange={this.setModuleTitle}/>
                <button>Create</button>
                {this.renderModules()}
            </div>
        )}
}


export default ModuleList2;