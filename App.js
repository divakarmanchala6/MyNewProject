import React, {Component} from 'react';
import {Text, View, Button, TouchableOpacity, StyleSheet} from 'react-native';

class App extends Component {
  state = {
    count: 0,
  }

  increaseCount = () => {
    this.setState({count: this.state.count + 1})
  }

  decreaseCount = () => {
    this.setState({count: this.state.count - 1})
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.count}>Count {this.state.count}</Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={this.decreaseCount}>
            <Text style={styles.buttonText}>Decrease</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={this.increaseCount}>
            <Text style={styles.buttonText}>Increase</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },

  count: {
    fontSize: 45,
  },
  
  buttonContainer: {
    display: 'flex',
    flexDirection: 'row',
  },

  button: {
    backgroundColor: 'black',
    margin: 30,
    borderRadius: 6,
  }, 

  buttonText: {
    color: 'white',
    padding: 8,
    borderRadius: 6,
  }
})

export default App