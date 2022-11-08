import React from "react";
import { Button, Text, View } from "react-native";

type CardProps={
    a:string
    b:string
    colorButton:string
}
export const CardIIT : React.FC<CardProps> =(props) => {
    const {a,b,colorButton} = props
    return (<View>
        <Text>
            {a}
        </Text>
        <Button title={b} color={colorButton}></Button>
        
    </View>)
}