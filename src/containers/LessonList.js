import React from 'react';

class LessonList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            courseId: '',
            module: {
                title: '',
                id: 0,
                courseId: this.props.courseId
            },
            modules: []
        };
    }
}