import {Button, Text} from 'native-base';

export const DetailsScreen = ({navigation}) => {
  return (
    <>
      <Text>Home Screen</Text>
      <Button onPress={() => navigation.navigate('Settings')}>Settings</Button>
    </>
  );
};
