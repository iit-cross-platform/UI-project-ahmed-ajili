import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { UpNextButton, RoundButtonMusic, Cover } from '@my-workspace/my-ui'
import { AntDesign, Feather } from '@expo/vector-icons';
import Slider from '@react-native-community/slider';
import { FontAwesome } from '@expo/vector-icons';


import { Video, AVPlaybackStatus } from 'expo-av';


const HomeScreen = ({ navigation, route }) => {
    console.log(route)
    const video = React.useRef(null);

    const [dataPlayer, setDataPlayer] = useState(route.params)
    const [currentDuration, setCurrentDuration] = useState(0)
    const [maxDuration, setMaxDuration] = useState(dataPlayer.duration)
    const [isPlaying, setIsPlaying] = useState(false)
    let interval;
    console.log(dataPlayer)

    const convertSecondToHHMMSS = (seconds) => {
        let hours = Math.floor(seconds / 3600);
        let minutes = Math.floor((seconds % 3600) / 60);
        let secs = seconds % 60;

        let timeString = '';
        if (hours !== 0) {
            timeString += `${hours.toString().padStart(2, '0')}:`;
        }
        timeString += `${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
        return timeString;
    }
    const handlePlay = (isPlaying) => {
        setIsPlaying(isPlaying)
        if (isPlaying) {
            video.current.playAsync()
        } else {          
            video.current.pauseAsync()
        }
    }




    useEffect(() => {

        if (currentDuration >= maxDuration) {
            setIsPlaying(false)
            setCurrentDuration(maxDuration)
        }
        if (currentDuration < 0) {
            setCurrentDuration(0)
        }

    }, [currentDuration])
    useEffect(() => {

        if (isPlaying) {
            interval = setInterval(() => {
                setCurrentDuration(oldValue => oldValue + 1)

            }, 1000)
        }

        return () => clearInterval(interval)

    }, [isPlaying])

    return (
        <View style={{ flex: 1, backgroundColor: "#1F1D2B", justifyContent: 'center', alignItems: 'center' }}>
            <Text>{name}</Text>

            <Video
                ref={video}
                source={{
                    uri: dataPlayer.urlMp4,
                }}
                useNativeControls
                resizeMode="contain"
                isLooping
            />

            <View style={{ flex: 1, alignItems: 'center', flexDirection: 'row', justifyContent: 'center' }}>

                <RoundButtonMusic
                    backgroundColor="transparent"
                    size={70}
                    icon={<AntDesign name="left" size={24} color="white" />}
                    onClickButton={() => { navigation.goBack() }}
                />
                <Text style={{ color: 'white', fontSize: 16, fontWeight: 'bold', paddingLeft: 10 }}>Now Playing</Text>
            </View>
            <View style={{ flex: 4 , alignItems:'center'}}>


                <Cover 
                    borderRadius={9}
                    imageUrl={dataPlayer.poster}
                    height={200}
                    width={200}
                />
                <text style={{ color: 'white'  , fontWeight: 'bold' , fontFamily:'cursive'}}>{dataPlayer.namePlayList}</text>
                <text style={{ color: 'white' , fontStyle:'italic' , fontFamily:'cursive', fontSize : 12  }}>{dataPlayer.name}</text>
                


            </View>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

                <View style={{ flex: 1, minWidth: 300, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                    <Text style={{ color: 'white' }}>{convertSecondToHHMMSS(currentDuration)}</Text>
                    <Text style={{ color: 'white' }}>{convertSecondToHHMMSS(maxDuration - currentDuration)}</Text>


                </View>
                <Slider
                    value={currentDuration}
                    onValueChange={(value) => { setCurrentDuration(value) 
                        video.current.playFromPositionAsync(currentDuration*1000)}}
                    style={{ width: 200, height: 40 }}
                    minimumValue={0}
                    step={1}
                    maximumValue={maxDuration}
                    minimumTrackTintColor="#FFFFFF"
                    maximumTrackTintColor="#FDFDFD"
                    thumbTintColor="#F00DFD"
                />
            </View>
            <View style={{ flex: 1, flexDirection: "row", alignItems: 'center', justifyContent: 'center' }}>
             

                <RoundButtonMusic
                    backgroundColor="#393737"
                    icon={<AntDesign name="stepbackward" size={24} color="white" />}
                    onClickButton={() => { setCurrentDuration(oldValue => oldValue - 2) 
                        video.current.playFromPositionAsync(currentDuration*1000)
                    }}
                    size={40}
                    padding={10}
                /> <RoundButtonMusic
                    backgroundColor="#393737"
                    icon={isPlaying ? <FontAwesome name="pause" size={24} color="white" /> : <FontAwesome name="play" size={24} color="white" />}
                    onClickButton={() => { handlePlay(!isPlaying) }}
                    size={50}
                    padding={10}
                /> <RoundButtonMusic
                    backgroundColor="#393737"
                    icon={<AntDesign name="stepforward" size={24} color="white" />}
                    onClickButton={() => { setCurrentDuration(oldValue => oldValue + 2) 
                        video.current.playFromPositionAsync(currentDuration*1000)
                    }}

                    size={40}
                    padding={10}
                /> 

            </View>
            <View style={{ flex: 2 }}></View>
            <View style={{ flex: 1 , alignItems:'center'}}>
          
                <UpNextButton
                    backgroundColor="white"
                    borderRadius="10"
                    text="Up Next"
                    textColor="white"
                    type="link"
                />
                </View>
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({})