/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Fragment } from 'react';
import {
  ActivityIndicator,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button
} from 'react-native';
import {hasUserSetPinCode,deleteUserPinCode} from '@haskkor/react-native-pincode'; 
import PINCode from '@haskkor/react-native-pincode'
import styling from '../components/functions'
import { NavigationActions } from 'react-navigation';
var Consts = require('../components/consts.js');

export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pinEntered: false,
      isLoading: true,
      hasPin: true,
    };
    this.methods = {
      success: function() {
        props.navigation.replace("HomeScreen");
      }
    }
  }
  componentDidMount() {
    hasUserSetPinCode()
      .then((result) => {
        this.setState({
          isLoading: false,
          hasPin: result,
        }, function(){

        });
      });
  }
  render() {
    if(!this.state.isLoading && this.state.hasPin) {
      return (
        <View style={styles.container}>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <PINCode 
            status={'enter'}
            finishProcess={this.methods.success}/>
        </View>
        </View>
      )
    }
    else if(!this.state.isLoading && !this.state.hasPin) {
      return this.props.navigation.navigate("HomeScreen");
    }
    else {
      return(
        <View style={styles.container}>
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <ActivityIndicator/>
          </View>
        </View>
      )
    }
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: Consts.num,
  },
  headerStyle: {
    // bottom: auto,
    // boxSizing: border-box,
    // justifyContent: "flex-start",
    // alignItems: "flex-start"
    alignContent: "flex-start"
  }
});