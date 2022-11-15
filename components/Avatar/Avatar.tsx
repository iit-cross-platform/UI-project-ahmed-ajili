import React from "react";
import { View ,Image } from "react-native";

type AvatarProps={
   photo:string;
}


export const AvatarIIT : React.FC<AvatarProps> =(props) => {
    const {photo} = props
    return (<View>
        <Image style={{ width: 300, height: 300 }} source={ require(photo)} />
        
    </View>)
}