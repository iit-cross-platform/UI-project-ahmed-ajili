import { Button, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'

export type SliderMusicProps ={
    duration : number
    durationMax: number
    setDuration : (duration : number) => void
}

export const SliderMusic : React.FC<SliderMusicProps>= (props) => {
    const {duration,durationMax,setDuration} = props;
    const [currentDuration,setcurrentDuration] = useState(0)

    const onPressButton = () => {
        setcurrentDuration(oldvalue => oldvalue + 1)
        if (currentDuration ===10){
            console.log("end stream",currentDuration)
        }
    }

    useEffect(() => {
        console.log("use effect currentDuration", currentDuration)
        setDuration(currentDuration)
        if (currentDuration ===10){
            console.log("end stream currentDuration")
        }
    },[currentDuration])
    const onEndStream = () => {

    }
    
  return (
    <View>
      <Text>SliderMusic</Text>
      <Text>duration : {duration}</Text>
      <Text>currentDuration : {currentDuration}</Text>
      <Text>durationMax : {durationMax}</Text>
      <Button title='increment current duration' onPress= {onPressButton}/>
    </View>
  )
}

export default SliderMusic

const styles = StyleSheet.create({})

