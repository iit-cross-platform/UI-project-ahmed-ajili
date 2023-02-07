import React, { useState } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

const Search = () => {
  const [value, setValue] = useState('');

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
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
  },
});

export default Search;
