import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import CopyOfBlankScreen115744Navigator from '../features/CopyOfBlankScreen115744/navigator';
import BlankScreen315743Navigator from '../features/BlankScreen315743/navigator';
import BlankScreen215741Navigator from '../features/BlankScreen215741/navigator';
import BlankScreen115739Navigator from '../features/BlankScreen115739/navigator';
import BlankScreen015738Navigator from '../features/BlankScreen015738/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
CopyOfBlankScreen115744: { screen: CopyOfBlankScreen115744Navigator },
BlankScreen315743: { screen: BlankScreen315743Navigator },
BlankScreen215741: { screen: BlankScreen215741Navigator },
BlankScreen115739: { screen: BlankScreen115739Navigator },
BlankScreen015738: { screen: BlankScreen015738Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
