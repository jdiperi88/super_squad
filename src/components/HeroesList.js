import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addCharacterById } from '../actions/actions';

class HeroesList extends Component{
    render(){
        return (
            <div>
                <h4>Heroes</h4>
                <ul className='list-group'>
                    {
                        this.props.heroes.map(hero =>{
                            return <li key={hero.id} className='list-group-item'>
                                        <div className='list-item'>{hero.name}</div>

                                    </li>
                        })
                    }
                </ul>
            </div> 
        )
    }
}

function mapStateToProps(state){
    console.log(state);
    return {
        heroes: state.heroes,
    }
}

export default connect(mapStateToProps,{addCharacterById})(HeroesList)