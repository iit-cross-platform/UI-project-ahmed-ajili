import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import React from 'react';

type CoverProp = {
  borderRadius: number;
  imageUrl: string;
  height: number;
  width: number;
};

const Cover: React.FC<CoverProp> = (props) => {
  const { borderRadius, imageUrl,height,width } = props;
  return (
    <View>
      <ImageBackground
        source={{ uri: imageUrl }}
        imageStyle={{borderRadius}}
        style={{ height, width}}
      ></ImageBackground>
    </View>
  );
};

export default Cover;

const styles = StyleSheet.create({});
