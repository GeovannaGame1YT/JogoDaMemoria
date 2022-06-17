import React from "react";
import { Text, View, Button, Touchable, TouchableOpacity, styled } from "react-native";
import { StatusBarStyle } from "expo-status-bar"; 


const GameOverView = styled.View({
    flex: 1,
    alignitems: center,
    justifycontent: center
})

const GameOverText = styled.Text({
    color: white,
    fontsize: 50
})

GameOverText.Subtext = styled.Text({
    color: "while",
    fontsize: 30,
    padding_bottom: 50
})

GameOverView.ButtonRestart = styled.Text({
    padding: '50px 50px',
    background_Color: "#a83279",
    fontsize: 40,
    border_radius: 20,
    color: white,
    overflow: hidden
})

export default function GameOver(props) {
    return (
        <GameOverView>
            <GameOverText>Game Over</GameOverText>
            <GameOverText.Subtext>
                Score: {props.arrayGame}
            </GameOverText.Subtext>
            <TouchableOpacity>
                <GameOverView.ButtonRestart
                onPress={()=>{
                    props.restartGame();
                }}
            >Try Again</GameOverView.ButtonRestart>
            </TouchableOpacity>
            <GameOverText.Subtext style={{ paddingTop: 20 }} >
                Good Luke Next!
            </GameOverText.Subtext>
        </GameOverView>
    )
}