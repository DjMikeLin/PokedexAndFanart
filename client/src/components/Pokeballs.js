import React from 'react';
import { bounce, shake, swing } from 'react-animations';
import { StyleSheet, css } from 'aphrodite';
import styled from 'styled-components';

const styles = StyleSheet.create({
  bounce: {
    animationName: bounce,
    animationDuration: '1s',
    animationIterationCount: 'infinite',
  },
  shake: {
    animationName: shake,
    animationDuration: '1s',
    animationIterationCount: 'infinite',
  },
  swing: {
    animationName: swing,
    animationDuration: '1s',
    animationIterationCount: 'infinite',
  },
})

const StyledImg = styled.img`
    width: 6.66666667%;
`;

class Pokeballs extends React.Component{
    state = {
        balls: [
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/master-ball.png",
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/ultra-ball.png",
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/great-ball.png",
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/poke-ball.png",
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/safari-ball.png",
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/net-ball.png",
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/dive-ball.png",
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/nest-ball.png",
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/repeat-ball.png",
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/timer-ball.png",
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/luxury-ball.png",
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/premier-ball.png",
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/dusk-ball.png",
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/quick-ball.png",
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/cherish-ball.png",
        ]
    }

    componentDidMount = () => {
        this.shuffle();
    }

    shuffle = () => {
        const ballsCopy = [...this.state.balls];
        for(let i = 0; i < 500; i++){
            let randomIndex1 = Math.floor(Math.random() * ballsCopy.length);
            let randomIndex2 = Math.floor(Math.random() * ballsCopy.length);
            let element1 = ballsCopy[randomIndex1];
            let element2 = ballsCopy[randomIndex2];

            ballsCopy[randomIndex1] = element2;
            ballsCopy[randomIndex2] = element1;
        }
        this.setState({balls: ballsCopy});
    }

    render(){
        return(
            <div>
                <StyledImg className={css(styles.bounce)} src={this.state.balls[0]}/>
                <StyledImg className={css(styles.swing)} src={this.state.balls[1]}/>
                <StyledImg className={css(styles.shake)} src={this.state.balls[2]}/>
                <StyledImg className={css(styles.bounce)} src={this.state.balls[3]}/>
                <StyledImg className={css(styles.swing)} src={this.state.balls[4]}/>
                <StyledImg className={css(styles.shake)} src={this.state.balls[5]}/>
                <StyledImg className={css(styles.bounce)} src={this.state.balls[6]}/>
                <StyledImg className={css(styles.swing)} src={this.state.balls[7]}/>
                <StyledImg className={css(styles.shake)} src={this.state.balls[8]}/>
                <StyledImg className={css(styles.bounce)} src={this.state.balls[9]}/>
                <StyledImg className={css(styles.swing)} src={this.state.balls[10]}/>
                <StyledImg className={css(styles.shake)} src={this.state.balls[11]}/>
                <StyledImg className={css(styles.bounce)} src={this.state.balls[12]}/>
                <StyledImg className={css(styles.swing)} src={this.state.balls[13]}/>
                <StyledImg className={css(styles.shake)} src={this.state.balls[14]}/>
            </div>
        )
    }
}
export default Pokeballs;
