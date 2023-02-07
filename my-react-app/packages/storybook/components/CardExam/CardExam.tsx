import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'


type CardExamProp = {
    borderRadius: number;
    imageUrl: string;
    height: number;
    width: number;
    text1:string;
    text2:string;
  };
  const CardExam: React.FC<CardExamProp> = (props) => {
    const { borderRadius, imageUrl,height,width,text1,text2 } = props;
  return (
    <View>
     <ImageBackground
        source={{ uri: imageUrl }}
        imageStyle={{borderRadius}}
        style={{ height, width}}
      ></ImageBackground>
      <text style={{ color: 'white'  , fontWeight: 'bold' , fontFamily:'cursive'}}>
        {text1}
        </text>
     <text style={{ color: 'white' , fontStyle:'italic' , fontFamily:'cursive', fontSize : 12  }}>
        {text2}
        </text>
    </View>
  )
}

export default CardExam

const styles = StyleSheet.create({})