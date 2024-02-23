/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/react-in-jsx-scope */

import {Text, View, KeyboardAvoidingView} from 'react-native';
import colors from '../../components/common/colors';
import CustomTextInput from '../../components/CustomTextInput';
import {useState} from 'react';
import {useDimensionContext} from '../../context';
import CustomButton from '../../components/CustomButton';
import {useNavigation} from '@react-navigation/native';
import {validateEmail} from '../../components/common/validations';
import firestore from '@react-native-firebase/firestore';
import Snackbar from 'react-native-snackbar';

const Login = () => {
  //const dimensions = useDimensionContext();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  const handleLogin = async () => {
    if (email.trim() !== '' && password.trim() !== '') {
      if (validateEmail(email.trim())) {
        await firestore()
          .collection('Users')
          .where('email', '==', email.trim().toLocaleLowerCase())
          .get()
          .then(async snapshot => {
            if (snapshot.empty) {
              Snackbar.show({
                text: 'User is not Registered, Create new account',
                duration: Snackbar.LENGTH_LONG,
                backgroundColor: colors.red,
                textColor: colors.white,
              });
            } else {
              snapshot.forEach(documentSnapshot => {
                const respData = documentSnapshot.data();
                console.warn(respData);
                if (password.trim() === respData.password) {
                  Snackbar.show({
                    text: 'Login Succesful',
                    backgroundColor: colors.primaryBlue,
                    textColor: colors.white,
                    duration: Snackbar.LENGTH_LONG,
                  });
                  navigation.navigate('Drawer');
                } else {
                  Snackbar.show({
                    text: 'The password is wrong',
                    duration: Snackbar.LENGTH_LONG,
                    backgroundColor: colors.red,
                    textColor: colors.white,
                  });
                }
              });
            }
          })
          .catch(err => console.warn(err));
      } else {
        Snackbar.show({
          text: 'Enter a valid email address',
          duration: Snackbar.LENGTH_LONG,
          backgroundColor: colors.red,
          textColor: colors.white,
        });
      }
    } else {
      Snackbar.show({
        text: 'Fill up the fields to continue',
        duration: Snackbar.LENGTH_LONG,
        backgroundColor: colors.red,
        textColor: colors.white,
      });
    }
  };

  return (
    <View style={{flex: 1, backgroundColor: colors.primaryBlue}}>
      <Text
        style={{
          color: colors.white,
          fontFamily: 'ProtestRiot-Regular',
          fontSize: 50,
          justifyContent: 'center',
          alignSelf: 'center',
          top: 100,
        }}>
        Home Rental
      </Text>
      <View
        style={{
          backgroundColor: colors.white,
          paddingVertical: 90,
          margin: 15,
          marginTop: 150,
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 30,
        }}>
        <View
          style={{
            bottom: 40,
          }}>
          <Text
            style={{
              fontFamily: 'Lato-Bold',
              fontSize: 22,
              color: colors.black,
            }}>
            Login Account
          </Text>
        </View>
        <CustomTextInput
          type="email"
          handleText={text => setEmail(text)}
          placeholder="Email Address"
        />
        <CustomTextInput
          type="password"
          handleText={text => setPassword(text)}
          placeholder="Password"
        />
        <CustomButton
          type="primary"
          handleButtonPress={handleLogin}
          buttonText={'Login'}
        />
      </View>
      <Text
        style={{
          fontFamily: 'Lato-Regular',
          fontSize: 15,
          color: colors.white_level_2,
          textAlign: 'center',
          marginVertical: 10,
        }}>
        If you are new, Create Now
      </Text>
    </View>
  );
};

export default Login;
