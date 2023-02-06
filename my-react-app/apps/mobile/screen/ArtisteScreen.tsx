import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Cover , Search} from '@my-workspace/my-ui'
import React, { useState } from 'react'


const ArtisteScreen = ({ navigation }) => {
  


    const listArtiste = [{
        name : "David Guetta",
        followers : "694, 856 Followers",
        poster : "https://scontent.fnbe1-2.fna.fbcdn.net/v/t1.6435-9/157503794_296996541789581_4204198144748896044_n.jpg?_nc_cat=1&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=A1s_qFHg3CAAX98s6B3&_nc_ht=scontent.fnbe1-2.fna&oh=00_AfCWo_IaOGVsM7Ks8PX5ORcMRe7BHXOAS6o7NwiAwxyFmA&oe=64075184",
        urlMp4 : require('../assets/David Guetta - Lovers On The Sun (Lyrics Video) ft Sam Martin.mp3'),
        duration : 203,
        namePlayList : "Lovers On The Sun"
    },{name : "Céline Dion",
    followers : "750, 555 Followers",
    poster : "https://peopleauquotidien.com/wp-content/uploads/2022/10/Capture-de%CC%81cran-2022-10-25-a%CC%80-11.13.10.png",
    urlMp4 : "https://jesusful.com/wp-content/uploads/music/2022/06/C_line_Dion_-_Pour_que_tu_maimes_encore_(Jesusful.com).mp3",
    duration : 250,
    namePlayList : "Pour_que_tu_maimes_encore"
    
    } 
  ]

  const listArtiste1 = [{
    name : "Enrique Iglesias",
      followers : "520, 639 Followers",
      poster : "https://is4-ssl.mzstatic.com/image/thumb/Music128/v4/8a/c9/35/8ac935fe-57f0-9d6d-8c60-e55193212c47/00602517913783.rgb.jpg/592x592bb.webp",
      urlMp4 : require('../assets/Enrique Iglesias - Bailamos.mp3'),
      duration : 215,
      namePlayList : "Bailamos"
  },{
    name : "Lara Fabien",
      followers : "320, 587 Followers",
      poster : "https://m.media-amazon.com/images/I/616-T6Sz8RL._AC_SX679_.jpg",
      urlMp4 : require('../assets/Lara Fabian   Je Taime Lyrics.mp3'),
      duration : 258,
      namePlayList : "Je Taime"
  
  }]

  
  return (
    <View style={{ flex: 1, backgroundColor: "#1F1D2B", justifyContent: 'center', alignItems: 'center' }}>
      <View style={{  alignItems: 'center', justifyContent: 'center' }}>
      <Search
  backgroundColor="white"
  borderColor="#000000"
/>
      </View>
    <View style={{  flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
   {listArtiste.map(p=>{return(
          
                <TouchableOpacity onPress={()=>navigation.navigate("Home", {...p})} style={{padding:15 , alignItems:'center'}}>
                   <Cover
                    borderRadius={200}
                    imageUrl={p.poster}
                    height={150}
                    width={150}
                />
                    <Text style={{ color: 'white' , fontWeight: 'bold' , fontFamily:'cursive' }}> {p.name} </Text>
              <Text style={{ color: 'white' , fontStyle:'italic' , fontFamily:'cursive', fontSize : 12 }}> {p.followers} </Text>
                   
                </TouchableOpacity>
              

            )})}
        </View>
        <View style={{  flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
        {listArtiste1.map(p=>{return(
          
          <TouchableOpacity onPress={()=>navigation.navigate("Home", {...p})} style={{padding:15 , alignItems:'center'}}>
             <Cover
              borderRadius={200}
              imageUrl={p.poster}
              height={150}
              width={150}
          />
              <Text style={{ color: 'white' , fontWeight: 'bold' , fontFamily:'cursive' }}> {p.name} </Text>
              <Text style={{ color: 'white' , fontStyle:'italic' , fontFamily:'cursive', fontSize : 12 }}> {p.followers} </Text>
             
          </TouchableOpacity>
        

      )})}
        </View>
    </View>

    
  )
  
}

export default ArtisteScreen

const styles = StyleSheet.create({})