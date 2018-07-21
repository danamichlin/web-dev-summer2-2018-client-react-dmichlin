import React from 'react';
import { Link } from 'react-router-dom'

class LessonTab extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            editMode: false,
            title: this.props.lesson.title}

        this.setEditMode = this.setEditMode.bind(this);
        this.titleChanged = this.titleChanged.bind(this);
    }

    setEditMode(editMode) {
        this.setState({editMode: editMode});
        if (!editMode) {
            this.setState({title: this.props.lesson.title});
        }
    }

    titleChanged(event) {
        this.setState({title: event.target.value});
    }


    updateLesson() {
        
    }



    render() {
        if (this.state.editMode) {
            return (
                <div>
                    <input onChange={(event) => this.titleChanged(event)} value={this.state.title}/>
                    <button onClick={() => this.updateLesson()}>OK</button>
                    <button onClick={() => this.setEditMode(false)}>CANCEL</button>
                </div>
            )
        }
        else {
            return (
                // not edit mode (has edit + delete buttons, no input field)
                <div>
                    <a href="#">
                        {/*// onClick={() => this.props.onLessonSelected(this.props.lesson)}>*/}
                        {this.state.title}</a>
                    <button onClick={() => {
                        this.props.delete(this.props.lesson.id)
                    }}>
                        DELETE
                    </button>
                    <button onClick={() => this.setEditMode(true)}>EDIT</button>

                </div>
            )
        }
    }
}



export default LessonTab;