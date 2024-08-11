import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';

class App extends Component {
  state = {
    count: 0,
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.count}>Count {this.state.count}</Text>
        <Text>+</Text>
        <Text>-</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },

  count: {
    fontSize: 45,
  },

  
})

export default App