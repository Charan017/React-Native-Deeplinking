import {Button, Text} from 'native-base';

export const HomeScreen = ({navigation}) => {
  return (
    <>
      <Text>Home Screen</Text>
      <Button onPress={() => navigation.navigate('Details')}>Details</Button>
    </>
  );
};
