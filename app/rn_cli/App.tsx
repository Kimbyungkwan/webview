import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  useColorScheme,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import WebView from 'react-native-webview';
import useInitialURL from './src/hooks/useInitialURL';

const Tab = createBottomTabNavigator();

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <WebView source={{uri: 'http://127.0.0.1:3030'}} />
    </SafeAreaView>
  );
};
const SettingScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <WebView source={{uri: 'http://127.0.0.1:3040'}} />
    </SafeAreaView>
  );
};

const BottomTab = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarIcon() {
            return <Entypo name="home" size={24} color="#4F8EF7" />;
          },
        }}
      />
      <Tab.Screen
        name="Mypage"
        component={SettingScreen}
        options={{
          headerShown: false,
          tabBarIcon() {
            return <Ionicons name="ios-person" size={24} color="#4F8EF7" />;
          },
        }}
      />
    </Tab.Navigator>
  );
};
const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const {} = useInitialURL();
  return (
    <NavigationContainer>
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />

        <BottomTab />
      </SafeAreaView>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
