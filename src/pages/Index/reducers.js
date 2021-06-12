const initState = {
    optionNumber: 1,
    optionSelect: '',
    optionPassword: '',
    editText: '',
}
const edit = (state = initState, action) => {
    switch (action.type) {
        case 'Index-changeOptionNumber':
            return Object.assign({}, state, {
                optionNumber: action.optionNumber
            })
        case 'Index-changeOptionSelect':
            return Object.assign({}, state, {
                optionSelect: action.optionSelect
            })
        case 'Index-changeOptionPassword':
            return Object.assign({}, state, {
                optionPassword: action.optionPassword
            })
        case 'Index-changeEditText':
            return Object.assign({}, state, {
                editText: action.editText
            })
        default:
            return state;
    }
}

export default edit;