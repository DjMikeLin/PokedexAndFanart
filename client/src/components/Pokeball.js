import React from 'react';
import { rotateIn } from 'react-animations';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  rotateIn: {
    animationName: rotateIn,
    animationDuration: '5s'
  }
})

class Pokeball extends React.Component{
    render(){
        return(
            <img className={css(styles.rotateIn)} src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/poke-ball.png" alt="No Image Found"/>
        )
    }
}
export default Pokeball;
