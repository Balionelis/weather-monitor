import React from 'react';
import { View } from 'react-native';
import Weather from './components/Weather';
import { styles } from './components/styles'

const App = () => {
  return (
    <View style={styles.container}>
        <Weather />
    </View>
  );
};

export default App;