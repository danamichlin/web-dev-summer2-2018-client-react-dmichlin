let _singleton = Symbol();

// URL of the backend server
//const COURSE_API_URL =
//    'https://intense-journey-34677.herokuapp.com/';

const COURSE_API_URL = 'http://localhost:8080/api/course'

class CourseService {
    constructor(singletonToken) {
        if (_singleton !== singletonToken)
            throw new Error('Cannot instantiate directly.');
    }

    static get instance() {
        if (!this[_singleton])
            this[_singleton] = new CourseService(_singleton);
        return this[_singleton]
    }



    findAllCourses() {
            return fetch(COURSE_API_URL)
                .then(function(response){
                    return response.json();
                });
    }


    deleteCourse(courseId) {
        return fetch(COURSE_API_URL + "/" + courseId, {method: 'delete'})
    }

}
export default CourseService;
