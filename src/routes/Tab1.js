import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Tab1Screen1} from '../screens/Tab1Screen1';
import {Tab1Screen2} from '../screens/Tab1Screen2';
import {Tab1Screen3} from '../screens/Tab1Screen3';

const Stack = createNativeStackNavigator();

export const Tab1 = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Tab1Screen1" component={Tab1Screen1} />
      <Stack.Screen name="Tab1Screen2" component={Tab1Screen2} />
      <Stack.Screen name="Tab1Screen3" component={Tab1Screen3} />
    </Stack.Navigator>
  );
};
