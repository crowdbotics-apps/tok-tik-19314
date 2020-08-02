import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import ArticleList86736Navigator from '../features/ArticleList86736/navigator';
import ArticleList86735Navigator from '../features/ArticleList86735/navigator';
import ArticleList86734Navigator from '../features/ArticleList86734/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
ArticleList86736: { screen: ArticleList86736Navigator },
ArticleList86735: { screen: ArticleList86735Navigator },
ArticleList86734: { screen: ArticleList86734Navigator },

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
