import {ActionEnum} from "../action/action";

const initialState = {
    nbPlayers: 0,
    players: [],
    questions: [],
}

function addPlayer(state, value) {
    const array = state.players;
    array.push(value);
    return {
        ...state,
        players: array,
    }
}

//REDUCER
const playerReducer = (state = initialState, action) => {
    switch(action.type) {
        case ActionEnum.SET_NB_PLAYER:
            return {
                ...state,
                nbPlayers: action.value,
            }
            //return state.nbPlayers + action.value;
        case ActionEnum.ADD_PLAYER:
            return addPlayer(state, action.value)
        default:
            return state;
    }
}

export default playerReducer;