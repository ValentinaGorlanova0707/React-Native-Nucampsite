import { Platform, View } from 'react-native';
import Constants from 'expo-constants';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import DirectoryScreen from './DirectoryScreen';
import CampsiteInfoScreen from './CampsiteInfoScreen';
import HomeScreen from './HomeScreen';

const screenOptions = {
    headerTintColor: '#fff',
    headerStyle: { backgroundColor: '#5637DD' }
}

const Drawer = createDrawerNavigator();

const HomeNavigator = () => {
    const Stack = createStackNavigator();

    return (
        <Stack.Navigator 
        initialRouteName='Home'
        screenOptions={screenOptions}>
            <Stack.Screen
                name='Home'
                component={HomeScreen}
                options={{ title: 'Home' }}
            />
        </Stack.Navigator>
    )
}

const DirectoryNavigator = () => {
    const Stack = createStackNavigator();

    return(
        <Stack.Navigator 
        initialRouteName='Directory'
        screenOptions={screenOptions}
        >
                <Stack.Screen
                    name='DirectoryMain'
                    component={DirectoryScreen}
                    options={{title: 'Campsite Directory'}}/>
                <Stack.Screen
                    name='CampsiteInfo'
                    component={CampsiteInfoScreen}
                    options={({ route }) => ({
                        title: route.params.campsite.name
                })}/>    
            </Stack.Navigator>
    )
}

const Main = () => {
   
    return( 
        <View style={{ flex: 1 , paddingTop: Platform.OS === 'ios' ? 0 : Constants.statusBarHeight}}>
             <NavigationContainer>
                <Drawer.Navigator
                    initialRouteName='HomeNav'
                    screenOptions={{
                        drawerStyle: { backgroundColor: "#CEC8FF" },
                        headerShown: true,
                        }}
                >
                    <Drawer.Screen
                        name='HomeNav'
                        component={HomeNavigator}
                        options={{
                                title: "Home",
                                headerShown: false,
                            }}
                    />
                </Drawer.Navigator>
                <Drawer.Screen
                    name='DirectoryNav'
                    component={DirectoryNavigator}
                    options={{
                            title: "Campsite Directory",
                            headerShown: false,
                        }}
                />
            </NavigationContainer>
        </View>
    )
}

export default Main;