import React, { useState } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

type SearchProps = {

  backgroundColor : string
  borderColor: string
  

}

const Search : React.FC<SearchProps> = (  props )   => {
   const { backgroundColor , borderColor } = props;



  const [value, setValue] = useState('');

  return (
    <View style={styles.container}>
      <TextInput
        style={[styles.input , { borderColor : borderColor ,  backgroundColor : backgroundColor  } ]}
        placeholder="Search..."
        onChangeText={text => setValue(text)}
        value={value}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 15,
  },
  input: {
    height: 40,
    backgroundColor: '#f2f2f2',
    paddingHorizontal: 10,
    borderRadius: 5,
    borderWidth : 2,
    width:300
  },
});

export default Search;