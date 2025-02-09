import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { Platform, View, Text, StyleSheet, Image } from 'react-native';
import Constants from 'expo-constants';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList,
  } from "@react-navigation/drawer";
import { createStackNavigator } from '@react-navigation/stack';
import DirectoryScreen from './DirectoryScreen';
import CampsiteInfoScreen from './CampsiteInfoScreen';
import HomeScreen from './HomeScreen';
import AboutScreen from './AboutScreen';
import ContactScreen from './ContactSсreen';
import { Icon } from "react-native-elements";
import logo from '../assets/images/logo.png';
import { fetchPartners } from '../features/partners/partnersSlice';
import { fetchCampsites } from '../features/campsites/campsitesSlice';
import { fetchPromotions } from '../features/promotions/promotionsSlice';
import { fetchComments } from '../features/comments/commentsSlice';

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
                options={({ navigation }) => ({
                    title: "Home",
                    headerLeft: () => (
                      <Icon
                        name="home"
                        type="font-awesome"
                        iconStyle={styles.stackIcon}
                        onPress={() => navigation.toggleDrawer()}/>)
                    })
                }
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
                    options={({ navigation }) => ({
                        title: "Campsite Directory",
                        headerLeft: () => (
                          <Icon
                            name="list"
                            type="font-awesome"
                            iconStyle={styles.stackIcon}
                            onPress={() => navigation.toggleDrawer()}
                          />
                        ),
                      })}
                      />
                <Stack.Screen
                    name='CampsiteInfo'
                    component={CampsiteInfoScreen}
                    options={({ route }) => ({
                        title: route.params.campsite.name
                })}/>    
            </Stack.Navigator>
    )
}

const AboutNavigator = () => {
    const Stack = createStackNavigator();

    return (
        <Stack.Navigator 
        initialRouteName='About'
        screenOptions={screenOptions}>
            <Stack.Screen
                name='AboutMain'
                component={AboutScreen}
                options={({ navigation }) => ({
                    headerLeft: () => (
                      <Icon
                        name="info-circle"
                        type="font-awesome"
                        iconStyle={styles.stackIcon}
                        onPress={() => navigation.toggleDrawer()}
                      />
                    ),
                  })}
            />
        </Stack.Navigator>
    )
}

const ContactNavigator = () => {
    const Stack = createStackNavigator();

    return (
        <Stack.Navigator 
        initialRouteName='ContactMain'
        screenOptions={screenOptions}>
            <Stack.Screen
                name='ContactMain'
                component={ContactScreen}
                options={({ navigation }) => ({
                    title: "Contact Us",
                    headerLeft: () => (
                      <Icon
                        name="address-card"
                        type="font-awesome"
                        iconStyle={styles.stackIcon}
                        onPress={() => navigation.toggleDrawer()}
                      />
                    ),
                  })}
            />
        </Stack.Navigator>
    )
}

const CustomDrawerContent = (props) => (
    <DrawerContentScrollView {...props}>
      <View style={styles.drawerHeader}>
        <View style={{ flex: 1 }}>
          <Image source={logo} style={styles.drawerImage} />
        </View>
        <View style={{ flex: 2 }}>
          <Text style={styles.drawerHeaderText}>Nucamp</Text>
        </View>
      </View>
      <DrawerItemList {...props} labelStyle={{ fontWeight: "bold" }} />
    </DrawerContentScrollView>
  );

const Main = () => {
  const dispatch = useDispatch();

  useEffect(() => {
      dispatch(fetchCampsites());
      dispatch(fetchPromotions());
      dispatch(fetchPartners());
      dispatch(fetchComments());
  }, [dispatch]);

   
    return( 
        <View style={{ flex: 1 , paddingTop: Platform.OS === 'ios' ? 0 : Constants.statusBarHeight}}>

                <Drawer.Navigator
                    initialRouteName='HomeNav'
                    drawerContent={CustomDrawerContent}
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

                    <Drawer.Screen
                        name='DirectoryNav'
                        component={DirectoryNavigator}
                        options={{
                                title: "Campsite Directory",
                                headerShown: false,
                            }}
                    />

                    <Drawer.Screen
                        name='AboutNav'
                        component={AboutNavigator}
                        options={{
                                title: "About Us",
                                headerShown: false,
                            }}
                    />

                    <Drawer.Screen
                        name='ContactNav'
                        component={ContactNavigator}
                        options={{
                                title: "Contact Us",
                                headerShown: false,
                            }}
                    />
                    </Drawer.Navigator>

        </View>
    )
}

const styles = StyleSheet.create({
    drawerHeader: {
      backgroundColor: "#5637DD",
      height: 140,
      alignItems: "center",
      justifyContent: "center",
      flex: 1,
      flexDirection: "row",
    },
    drawerHeaderText: {
      color: "#fff",
      fontSize: 24,
      fontWeight: "bold",
    },
    drawerImage: {
      margin: 10,
      height: 60,
      width: 60,
    },
    stackIcon: {
      marginLeft: 10,
      color: "#fff",
      fontSize: 24,
    },
  });
  

export default Main;