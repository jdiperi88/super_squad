import React, { Component } from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import { addCharacterById} from '../actions/actions'


class CharacterList extends Component{
    render(){
        console.log('props baby',this.props);
        return (
            <div>
                <h4>characters</h4>
                <ul className='list-group'>
                    {
                        this.props.characters.map(character =>{
                            return <li key={character.id} className='list-group-item'> 
                                        <div className='list-item'>{character.name}</div>
                                        <div 
                                            className='list-item right-button' 
                                            onClick={()=>{
                                                return this.props.addCharacterById(character.id)
                                        }}>
                                            +
                                        </div>
                                   </li>
                        })
                    }
                </ul>
            </div>
        )
    }
}

function mapStateToProps(state){
    console.log(state)
    return {
        characters : state.characters
    }
}

// if you dont want to write out the mapDispatchToProps function, you can just pass 
// in the action creators in an object as the second argument of the connect function
// function mapDispatchToProps(dispatch){
//     return bindActionCreators({ addCharacterById}, dispatch )
// }

export default connect(mapStateToProps, { addCharacterById })(CharacterList);