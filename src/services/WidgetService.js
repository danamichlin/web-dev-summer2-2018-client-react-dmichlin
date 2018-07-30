let _singleton = Symbol();

export default class WidgetService {

    constructor(singletonToken) {
        if (_singleton !== singletonToken)
            throw new Error('Cannot instantiate directly.');
    }

    static get instance() {
        if (!this[_singleton])
            this[_singleton] = new WidgetService(_singleton);
        return this[_singleton]
    }

    saveWidgets(widgets) {
        var url = 'http://localhost:8080/api/widget';
        return fetch(url, {
            method: 'post',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(widgets)
        });
        // }).then(function (response) {
        //     return response.json();
        // })
    }
}
