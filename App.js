import { SafeAreaProvider } from 'react-native-safe-area-context';
import Navigator from './app/navigation/Navigator';
import { Text } from 'react-native';

export default function App() {
  return (
    <SafeAreaProvider>
      <Navigator/>
    </SafeAreaProvider>
  );
}

