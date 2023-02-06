import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'

const PlaylistScreen = ({ navigation }) => {
    const [playlist] = useState([{
        name: "video 1",
        urlMp4 : "https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
        duration : 70, 
        poster : "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F6%2F2020%2F01%2Feminem-1-2000.jpg"


    }, {
        name: "video 2",
        urlMp4 : "https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
        duration : 70,
        poster : "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F6%2F2020%2F01%2Feminem-1-2000.jpg"



    }])
    return (
        <View style={{flex: 1, backgroundColor: "#1F1D2B"}}>

           

            <View style={{ height: 20 }} />

            <Button title='Artiste' onPress={()=> {navigation.navigate('Artiste')}}>

            </Button>
            
            <View style={{ height: 20 }} />

            <Button title='Play Liste' onPress={()=> {navigation.navigate('ListePlaylist')}}>

            </Button>

        </View>
    )
}

export default PlaylistScreen

const styles = StyleSheet.create({})