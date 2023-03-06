import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  Image,
} from 'react-native';

const Login = ({navigation}) => {
  return (
    <View style={styles.viewStyle}>
      <View>
        <ImageBackground
          source={require('../../assets/loginback.png')}
          style={styles.imageStyle}>
          <Text style={styles.titleStyle}>LOGIN</Text>
          <Image source={require('../../assets/logoFront.png')}></Image>
        </ImageBackground>
      </View>

      <View style={styles.emailStyle}>
        <TextInput style={styles.inputStyle} placeholder="username" />
      </View>

      <View style={styles.passStyle}>
        <TextInput style={styles.inputStyle} placeholder="password" />
      </View>
      <View>
        <TouchableOpacity
          style={styles.buttonStyle}
          onPress={() => navigation.navigate('Home')}>
          <Text style={styles.buttunTextStyle}>LOGIN</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    alignItems: 'center',
  },
  emailStyle: {
    height: 55,
    width: 390,
    backgroundColor: 'rgb(211,232,249)',
    borderRadius: 12,
    marginTop: 80,
  },
  passStyle: {
    height: 55,
    width: 390,
    backgroundColor: 'rgb(211,232,249)',
    borderRadius: 12,
    marginTop: 20,
  },
  inputStyle: {
    fontSize: 20,
    color: 'black',
    paddingStart: 20,
  },
  buttonStyle: {
    height: 55,
    width: 390,
    borderRadius: 12,
    backgroundColor: 'rgb(238,129,51)',
    marginTop: 140,
  },
  buttunTextStyle: {
    fontSize: 30,
    fontWeight: 'bold',
    alignSelf: 'center',
    color: 'white',
    padding: 5,
  },
  imageStyle: {
    height: 365,
    width: 413,
  },
  titleStyle: {
    color: 'white',
    alignSelf: 'center',
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 30,
  },
});

export default Login;
