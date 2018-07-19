import React from 'react'

export default class LessonTabs extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedLessonIndex: 0
        }
    }
    selectLesson = (index) => {
        this.setState({
                          selectedLessonIndex: index
                      })
    }

    deleteLesson = (index) => {
      alert ("delete lesson " + index);
    }

    addLesson = () => {
        alert ("add lesson");
    }



  render() {
    if (!this.props.module) {
      return <div>Please select Module</div>
    }
    else {
        return (
            <div>
              <h7>Lesson Tabs {this.props.module.lessons.length}</h7>
              <ul className="nav nav-tabs">
                  {this.props.module.lessons.map(
                      (lesson, i) => {
                          return (
                              <li className="nav-item" onClick={() => this.selectLesson(i)}
                                  key={i}>
                                <span>
                                  <a className="nav-link" href="#">{lesson.title}</a>&nbsp;&nbsp;
                                  <a href="#" onClick={() => this.deleteLesson(i)}>x</a>
                                </span>
                              </li>

                          )
                      }
                  )}
                  <li>
                    <a href="#" onClick={() => this.addLesson()}>+</a>
                  </li>
              </ul>
                {this.state.selectedLessonIndex}
                {/*<TopicPills lesson={this.props.module.lessons[this.state.selectedLessonIndex]}/>*/}
            </div>
        )
    }
  }
}