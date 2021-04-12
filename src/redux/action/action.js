//ACTIONS

export const ActionEnum = {
    SET_NB_PLAYER: 'SET_NB_PLAYER',
    ADD_PLAYER: 'ADD_PLAYER',
}

export const setNbPlayer = (value) => {
    return {
        type: ActionEnum.SET_NB_PLAYER,
        value: value,
    }
}
  
export const addPlayer = (value) => {
    return {
        type: ActionEnum.ADD_PLAYER,
        value: value,
    }
}