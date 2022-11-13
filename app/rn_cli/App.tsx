import React, {useEffect} from 'react';
import {
  Linking,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  useColorScheme,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import WebView from 'react-native-webview';
// import {ScreenProps} from 'react-native-screens';

const Tab = createBottomTabNavigator();

// const Stack = createNativeStackNavigator();
const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <WebView
        allowsBackForwardNavigationGestures
        source={{uri: 'http://localhost:3030'}}
        javaScriptEnabled={true}
        domStorageEnabled={true}
      />
    </SafeAreaView>
  );
};
const SettingScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <WebView
        allowsBackForwardNavigationGestures
        source={{uri: 'http://localhost:3040'}}
        javaScriptEnabled={true}
        domStorageEnabled={true}
      />
    </SafeAreaView>
  );
};

const BottomTab = () => {
  return (
    <Tab.Navigator initialRouteName="Home">
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
        name="Setting"
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
  // const {} = useInitialURL();

  useEffect(() => {
    Linking.getInitialURL().then(url => console.log(url));
    Linking.addEventListener('url', ({url}) => {
      console.log(url);
    });
  }, []);
  const linking = {
    prefixes: ['webview://'],
    config: {
      screens: {
        Home: 'home',
        Setting: 'setting',
      },
    },
  };
  return (
    <NavigationContainer linking={linking}>
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
        {/* <Stack.Navigator initialRouteName="home">
          <Stack.Screen
            name="home"
            component={HomeScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="setting"
            component={SettingScreen}
            options={{headerShown: false}}
          />
        </Stack.Navigator> */}
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
