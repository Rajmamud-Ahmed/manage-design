import { StyleSheet } from 'react-native';
import { NativeBaseProvider } from 'native-base';
import { NavigationContainer } from '@react-navigation/native';
import Navigation from './src/Navigation';
import ChangeProvider from './src/provider/ChangeProvider';

export default function App() {
  return (
    <NativeBaseProvider>
      <ChangeProvider>
        <Navigation />
      </ChangeProvider>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 14
  }
});
