import {Button, Text} from 'native-base';

export const SettingsScreen = ({navigation}) => {
  return (
    <>
      <Text>Settings Screen</Text>
      <Button onPress={() => navigation.navigate('Home')}>Home</Button>
    </>
  );
};
