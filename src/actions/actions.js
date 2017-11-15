export const ADD_CHARACTER = 'ADD_CHARACTER';
export const SUBTRACT_CHARACTER = 'SUBTRACT_CHARACTER';

export function addCharacterById(id){
    const action={
        type: ADD_CHARACTER,
        id
    }
    return action
}

export function subtractCharacterById(id){
    const action ={
        type: SUBTRACT_CHARACTER,
        id
    }
    return action;
}

