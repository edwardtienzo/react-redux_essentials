import { ADD } from './counterType'
import { RESET } from './counterType'

const initialState = {
    count: 0,
}

const counterReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD:
            return {...state, count: state.count + 1};
        case RESET:
            return {...initialState};
        default:
            return state;
    }
}

export default counterReducer;