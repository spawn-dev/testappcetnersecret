import { AppRegistry, Platform } from 'react-native';
import App from './src/App';

AppRegistry.registerComponent('testappcetnersecret', () => App);

if (Platform.OS === 'web') {
  const rootTag = document.getElementById('root') || document.getElementById('main');
  AppRegistry.runApplication('testappcetnersecret', { rootTag });
}
