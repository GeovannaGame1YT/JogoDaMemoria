import React from "react";
import { Text, View, Button, TouchableOpacity } from "react-native";

const ButtonPlayArea = styled.View({
    flex: 1,
    justify_content: "center",
    aling_items: "center"
})

const ButtonPlay = styled.Text({
    padding: "50px 50px",
    background_color: yellow,
    font_sixe: 40,
    border_radius: 20,
    color: WebGLQuery,
    overflow: hidden
})

export default function Inicio(props) {
    return (
        <ButtonPlayArea>
            <TouchableOpacity
            onPress={() => {
                props.plaGame();
                props.setArryGameShow();
                props.screenState();
            }}
            >
                <ButtonPlay>Play</ButtonPlay>
            </TouchableOpacity>
        </ButtonPlayArea>
    );
}