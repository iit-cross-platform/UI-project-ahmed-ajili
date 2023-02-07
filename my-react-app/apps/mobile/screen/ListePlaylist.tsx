import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Cover , Search} from '@my-workspace/my-ui'
import React from 'react'







const ListePlaylist = ({ navigation }) => {

    const listPlay = [{
        name : "David Guetta",
        followers : "694, 856 Followers",
        poster : require('../assets/David guetta.jpg'),
        urlMp4 : require('../assets/David Guetta - Lovers On The Sun (Lyrics Video) ft Sam Martin.mp3'),
        duration : 203,
        namePlayList : "Lovers On The Sun"
    },{name : "Céline Dion",
    followers : "750, 555 Followers",
    poster : require('../assets/Celine Dion.png'),
    urlMp4 : "https://jesusful.com/wp-content/uploads/music/2022/06/C_line_Dion_-_Pour_que_tu_maimes_encore_(Jesusful.com).mp3",
    duration : 250,
    namePlayList : "Pour tu aimes encore"
    
    } 
  ]

  const listPlay1 = [{
    name : "Enrique Iglesias",
      followers : "520, 639 Followers",
      poster : require('../assets/Enrique iglesias.jpg'),
      urlMp4 : require('../assets/Enrique Iglesias - Bailamos.mp3'),
      duration : 215,
      namePlayList : "Bailamos"
  },{
    name : "Lara Fabien",
      followers : "320, 587 Followers",
      poster : require('../assets/Iara Fabian.jpg'),
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
   {listPlay.map(p=>{return(
          
                <TouchableOpacity onPress={()=>navigation.navigate("Home", {...p})} style={{padding:15 , alignItems:'center'}}>
                   <Cover
                    borderRadius={5} 
                    imageUrl={p.poster}
                    height={150}
                    width={150}
                />
                    <Text style={{ color: 'white' , fontWeight: 'bold' , fontFamily:'cursive' }}> {p.namePlayList} </Text>
              <Text style={{ color: 'white' , fontStyle:'italic' , fontFamily:'cursive', fontSize : 12 }}> {p.name} </Text>
                   
                </TouchableOpacity>
              

            )})}
        </View>
        <View style={{  flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
        {listPlay1.map(p=>{return(
          
          <TouchableOpacity onPress={()=>navigation.navigate("Home", {...p})} style={{padding:15 , alignItems:'center'}}>
             <Cover
              borderRadius={5}
              imageUrl={p.poster}
              height={150}
              width={150}
          />
              <Text style={{ color: 'white' , fontWeight: 'bold' , fontFamily:'cursive' }}> {p.namePlayList} </Text>
              <Text style={{ color: 'white' , fontStyle:'italic' , fontFamily:'cursive', fontSize : 12 }}> {p.name} </Text>
             
          </TouchableOpacity>
        

      )})}
        </View>
    </View>

    
  )
  
}

export default ListePlaylist

const styles = StyleSheet.create({})