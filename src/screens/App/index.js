/* eslint-disable prettier/prettier */
/* eslint-disable react/react-in-jsx-scope */

import {Text, View} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import Login from '../Login';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Home from '../Home';
import CustomDrawer from '../../components/CustomDrawer';
import colors from '../../components/common/colors';
import Profile from '../Profile';

const Drawer = createDrawerNavigator();
const AppDrawer = () => {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      drawerContent={props => <CustomDrawer {...props} />}
    
      screenOptions={{
        drawerType: 'slide',
        drawerActiveBackgroundColor: colors.transparent,
        drawerInactiveBackgroundColor: colors.transparent,
        drawerActiveTintColor: colors.white,
        drawerInactiveTintColor: colors.shadow,
        overlayColor: colors.transparent,
        drawerStyle: {
          backgroundColor: colors.primaryBlue,
          width:'60%',
        },
        sceneContainerStyle: {
          backgroundColor: colors.primaryBlue,
        },
      }}>
      <Drawer.Screen name="Home" component={Home} options={{headerShown:false}}/>
      <Drawer.Screen name="Profile" component={Profile} options={{headerShown:false}}/>
    </Drawer.Navigator>
  );
};

const AppStack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <AppStack.Navigator screenOptions={{headerShown: false}}>
        <AppStack.Screen name="Login" component={Login} />
        <AppStack.Screen name="Drawer" component={AppDrawer} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
};

export default App;
