let _singleton = Symbol();

// URL of the backend server
//const COURSE_API_URL =
//    'https://intense-journey-34677.herokuapp.com/';

const URL = 'http://localhost:8080';
const LESSON_API_URL = 'http://localhost:8080/api/course/CID/lesson'

class LessonService {

    constructor(singletonToken) {
        if (_singleton !== singletonToken)
            throw new Error('Cannot instantiate directly.');
    }

    static get instance() {
        if (!this[_singleton])
            this[_singleton] = new LessonService(_singleton);
        return this[_singleton]
    }


    createLesson(courseId, lesson) {
        console.log(courseId);
        var url = "http://localhost:8080/api/course/" + courseId + '/lesson';
        return fetch(url, {
            body: JSON.stringify(lesson),
            headers: { 'Content-Type': 'application/json' },
            method: 'POST'
        }).then(function (response) {
            return response.json(); })
    }

    deleteLesson(lessonId) {
        console.log(lessonId);
        var url = 'http://localhost:8080/api/lesson/' + lessonId;
        return fetch(url, {
            method: 'delete'
        });
    }


    findAllLessonsForCourse(courseId) {
        var url = 'http://localhost:8080/api/course/' + courseId + '/lesson';
        return fetch(url)
            .then(function (response) {
                return response.json();
            })
    }


    findLessonById(lessonId) {
        return fetch(LESSON_API_URL + "/" + lessonId)
            .then(function(response) {
                return response.json();
            });
    }

    updateLesson(lessonId, lesson) {
        var url = URL + '/api/lesson/' + lessonId;
        return fetch(url, {
            method: 'Put',
            body: JSON.stringify(lesson),
            headers: {
                'Content-Type': 'application/json'
            }
        });
    }
}
export default LessonService;
