import {NativeBaseProvider, Text} from 'native-base';
import React, {useEffect} from 'react';
import {LogBox} from 'react-native';
import {
  NavigationContainer,
  createNavigationContainerRef,
  useNavigationContainerRef,
} from '@react-navigation/native';
import {HomeStack} from './src/routes/HomeStack';
import {useReduxDevToolsExtension} from '@react-navigation/devtools';
import {deeplinkingConfig} from './deeplinkingConfig';
import {BottomTabBar} from './src/routes/BottomTabBar';

function App() {
  useEffect(() => {
    LogBox.ignoreLogs([
      'In React 18, SSRProvider is not necessary and is a noop. You can remove it from your app.',
    ]);
  }, []);

  const navigationRef = useNavigationContainerRef();

  useReduxDevToolsExtension(navigationRef);

  return (
    <NavigationContainer ref={navigationRef} linking={deeplinkingConfig}>
      <NativeBaseProvider>
        {/* <HomeStack /> */}
        <BottomTabBar />
      </NativeBaseProvider>
    </NavigationContainer>
  );
}

export default App;
