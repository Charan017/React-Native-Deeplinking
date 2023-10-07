import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Tab2Screen1} from '../screens/Tab2Screen1';
import {Tab2Screen2} from '../screens/Tab2Screen2';
import {Tab2Screen3} from '../screens/Tab2Screen3';

const Stack = createNativeStackNavigator();

export const Tab2 = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Tab2Screen1" component={Tab2Screen1} />
      <Stack.Screen name="Tab2Screen2" component={Tab2Screen2} />
      <Stack.Screen name="Tab2Screen3" component={Tab2Screen3} />
    </Stack.Navigator>
  );
};
