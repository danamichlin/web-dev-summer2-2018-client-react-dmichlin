import React from 'react'
import LessonTab from '../components/LessonTab'
import LessonService from '../services/LessonService'

export default class LessonTabs extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedLessonIndex: 0
        }

        this.lessonService = LessonService.instance;

        this.deleteLesson = this.deleteLesson.bind(this);
    }


    selectLesson = (index) => {
        this.setState({
                          selectedLessonIndex: index
                      })
    }


    addLesson = () => {
        alert ("add lesson");
    }

    deleteLesson(lessonId) {
        this.lessonService.deleteLesson(lessonId);
        for (var i = 0; i < this.props.module.lessons.length; i++) {
            if (this.props.module.lessons[i].id == lessonId) {
                this.props.module.lessons.splice(i, 1);
                break;
            }
        }
        this.forceUpdate();
    }
            // .then(() => {
            //     this.findAllLessonsForModule
            //     (this.props.courseId)
            // });


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
                              <LessonTab lesson={lesson}
                                         onClick={() => this.selectLesson(i)}
                                  key={lesson.id} deleteLesson={this.deleteLesson}>
                                <span>
                                  <a className="nav-link" href="#">{lesson.title}</a>&nbsp;&nbsp;
                                </span>
                              </LessonTab>

                          )
                      }
                  )}
              </ul>
                {this.state.selectedLessonIndex}
                {/*<TopicPills lesson={this.props.module.lessons[this.state.selectedLessonIndex]}/>*/}
            </div>
        )
    }
  }
}