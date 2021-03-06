import React from 'react';

class ModuleEditor extends React.Component {

    constructor(props) {
        super(props);

        this.setCourseId = this.setCourseId.bind(this);
        this.setModuleId = this.setModuleId.bind(this);
        this.state = {
            courseId: '', moduleId: ''
        };
    }

    componentDidMount() {
        this.setCourseId(this.props.match.params.courseId);

        this.setModuleId(this.props.match.params.moduleId);
    }

    componentWillReceiveProps(newProps) {
        this.setCourseId(newProps.match.params.courseId);

        this.setModuleId(newProps.match.params.moduleId);
    }

    setCourseId(courseId) {
        this.setState
        ({courseId: courseId});
    }
    setModuleId(moduleId) {
        this.setState
        ({moduleId: moduleId});
    }


    render() {
        return (
            <div>
                {/*<h3>Module Editor</h3>*/}
                {/*{this.state.courseId},*/}
                {/*{this.state.moduleId}*/}
            </div>

    )}
}

export default ModuleEditor;
