import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react-native";
import { AvatarIIT } from "./Avatar";

const AvatarIITMeta :ComponentMeta<typeof AvatarIIT>={
    title : "Avatar iit",
    component : AvatarIIT,
   
    args:{
       photo:'../assets/reactnative.jpg'
    }
}

export default AvatarIITMeta;

type AvatarIITStory = ComponentStory<typeof AvatarIIT>
export const Basic : AvatarIITStory = (args) => <AvatarIIT {...args} />
