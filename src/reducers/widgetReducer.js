

let initialState = {
    widgets:
        [
            {title: 'Heading Widget 1', id: 1, widgetType: 'HEADING'},
            {title: 'List Widget 1', id: 2, widgetType: 'LIST', ordered: false,
            listItems: 'item1\nitem2\nitem3'},
            {title: 'YouTube Widget 1', id: 3, widgetType: 'YOUTUBE'},
            {title: 'Widget 1', id: 123, widgetType: 'WT1'},
            {title: 'Widget 2', id: 234, widgetType: 'WT2'},
            {title: 'Widget 3', id: 345, widgetType: 'WT3'},
            {title: 'Widget 4', id: 456, widgetType: 'WT4'}
        ]
};

export const widgetReducer = (
    state=initialState,
    action) => {

    switch (action.type) {
        case 'DELETE_WIDGET':
            return {
                widgets: state.widgets.filter(
                    widget => widget.id !== action.widgetId
                )
            };
        case 'CREATE_WIDGET':
            return {
                widgets: [
                    action.widget,
                    ...state.widgets
                ]
            };
        case 'UPDATE_WIDGET':
            return {
                widgets: state.widgets.map(widget => {
                    // NOTE: widget is old widget; action.widget is new widget
                    if (widget.id === action.widget.id) {
                        return action.widget;
                    }
                    else {
                        return widget;
                    }
                })
            }



        default: return state;
    }

}
