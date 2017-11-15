import characters_json from '../data/characters.json';
import {ADD_CHARACTER, SUBTRACT_CHARACTER} from '../actions/actions';
import { createCharacter } from './helpers';



function heroes(state = [],action){
    switch(action.type){
        case ADD_CHARACTER:
            let heroes = [...state, createCharacter(action.id)];
            return heroes;
        case SUBTRACT_CHARACTER:
            heroes = state.filter( item => item.id != action.id);
            return heroes;
        default:
            return state
    }
}

export default heroes