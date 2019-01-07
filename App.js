import React , {Component} from 'react';
import {StyleSheet, Text, View, Button,StatusBar,Image} from 'react-native';
import {Provider} from 'react-redux';

import Store from './src/Store';
import {Header, CryptoContainer, Acercade} from './src/components';
import {createStackNavigator, createAppContainer, createDrawerNavigator} from 'react-navigation';

export default class App extends Component {
  render(){
    return (
      <AppContainer />
    );
  }
}
class Crypto extends Component {

  render(){
    return (
      <Provider store={Store}>
      <View>
      <View style={styles.headerContainer}>
        <Button style={styles.headerContainer} title= '=' onPress={() => this.props.navigation.openDrawer()}/>
      </View>
        <View>
          <Header />
          <CryptoContainer />
        </View>
        </View>
      </Provider>
    );
  }
}
class About extends Component {

  render(){
    return (
      <View>
      <View style={styles.headerContainer}>
        <Button style={styles.headerContainer} title= '=' onPress={() => this.props.navigation.openDrawer()}/>
      </View>
      <View style={styles.container}>
        <Image
        style={styles.image}
        source={{uri:'https://cdn-images-1.medium.com/max/1200/1*KANHihva9OdXx2-V5EDn3g.png'}}
        />
        <Text>Ricky Yancor</Text>
        <Text>4122-2688</Text>
        <Text>Rickyyancor@gmail.com</Text>

      </View>
      </View>
    );
  }
}

const AppDrawerNavigator = createDrawerNavigator(
  {
    Crypto:Crypto,
    About: About
  },
  {
    defaultNavigationOptions:{
      headerStyle:{
        backgroundColor:'orange'
      }
    }
  }
);

const AppContainer = createAppContainer(AppDrawerNavigator);

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#fff',
    alignItems: 'center',
    marginTop:50,
    justifyContent: 'center',
  },
  headerContainer:{
    display:"flex",
    marginTop: 25,
    alignItems: "flex-start",
  },
  image: {
      width: 100,
      height: 100,marginTop:50,
  },
  header:{
    fontWeight: "bold",
    fontSize: 20,
  }
});
