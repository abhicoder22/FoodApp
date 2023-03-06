import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Button,
} from 'react-native';

const Login = ({navigation}) => {
  return (
    <View style={styles.viewStyle}>
      <Text style={styles.titleStyle}>Login</Text>
      <View style={styles.userStyle}>
        <TextInput style={styles.inputStyle} placeholder="enter username" />
      </View>

      <View style={styles.userStyle}>
        <TextInput style={styles.inputStyle} placeholder="enter password" />
      </View>
      <View>
        <TouchableOpacity
          style={styles.buttonStyle}
          onPress={() => navigation.navigate('Home')}>
          <Text style={styles.buttunTextStyle}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    flex: 1,
    justifyContent: 'center',
  },
  userStyle: {
    height: 50,
    margin: 10,
    borderColor: 'black',
    borderWidth: 2,
    borderRadius: 12,
  },
  inputStyle: {
    fontSize: 20,
    color: 'black',
    padding: 10,
  },
  titleStyle: {
    color: 'gray',
    fontSize: 40,
    alignSelf: 'center',
    fontWeight: 'bold',
  },
  buttonStyle: {
    alignItems: 'center',
    height: 30,
  },
  buttunTextStyle: {
    borderColor: 'black',
    borderWidth: 1,
    backgroundColor: 'gray',
    height: 50,
    width: 160,
    borderRadius: 15,
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default Login;
