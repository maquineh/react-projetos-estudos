/** @format */

import {AppRegistry} from 'react-native';
//import App from './App';
//import Agenda from './src/ui/Agenda'
import {name as appName} from './app.json';
import Navigator from './src/Navigator'
AppRegistry.registerComponent(appName, () => Navigator);
