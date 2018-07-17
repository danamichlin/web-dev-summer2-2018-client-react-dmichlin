let _singleton = Symbol();

// URL of the backend server
//const COURSE_API_URL =
//    'https://intense-journey-34677.herokuapp.com/';

const MODULE_API_URL = 'http://localhost:8080/api/course/CID/module'

class ModuleService {

    constructor(singletonToken) {
        if (_singleton !== singletonToken)
            throw new Error('Cannot instantiate directly.');
    }

    static get instance() {
        if (!this[_singleton])
            this[_singleton] = new ModuleService(_singleton);
        return this[_singleton]
    }


    createModule(courseId, module) {
        return fetch(MODULE_API_URL.replace('CID', courseId), {
            body: JSON.stringify(module),
            headers: { 'Content-Type': 'application/json' },
            method: 'POST'
        }).then(function (response) {
            return response.json(); })
    }

    deleteModule(moduleId) {
        return fetch(MODULE_API_URL + "/" + moduleId, {method: 'delete'})
    }

    findAllModules() {
        return fetch(MODULE_API_URL)
            .then(function(response){
                return response.json();
            });
    }

    findModuleById(moduleId) {
        return fetch(MODULE_API_URL + "/" + moduleId)
            .then(function(response) {
                return response.json();
            });
    }

    updateModule(moduleId, module) {
        var url = MODULE_API_URL + "/" + moduleId;
        return fetch(url, {
            method: 'Put',
            body: JSON.stringify(module),
            headers: {
                'Content-Type': 'application/json'
            }
        });
    }
}
export default ModuleService;
