import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Tab2} from './Tab2';
import {Tab1} from './Tab1';

const Tab = createBottomTabNavigator();

export const BottomTabBar = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Tab1" component={Tab1} options={{headerShown: false}} />
      <Tab.Screen name="Tab2" component={Tab2} options={{headerShown: false}} />
    </Tab.Navigator>
  );
};
