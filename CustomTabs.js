import React from 'react';
import {
    ScrollView,
    StyleSheet,
    StatusBar,
    Text,
} from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';
import { createNavigator, SafeAreaView, TabRouter } from 'react-navigation';
import { createAppContainer } from 'react-navigation';
import Dimensions from 'Dimensions';

const { height, width } = Dimensions.get('window');
const MyNavScreen = ({ navigation, banner }) => (
    <ScrollView>
        <SafeAreaView forceInset={{ horizontal: 'always' }} style={styles.content}>
            <Text>{banner}</Text>
        </SafeAreaView>
        <StatusBar barStyle="default" />
    </ScrollView>
);

const MyHomeScreen = ({ navigation }) => (
    <MyNavScreen banner="Home Screen" navigation={navigation} />
);

const MyNotificationsScreen = ({ navigation }) => (
    <MyNavScreen banner="Notifications Screen" navigation={navigation} />
);

const MySettingsScreen = ({ navigation }) => (
    <MyNavScreen banner="Settings Screen" navigation={navigation} />
);

const AScreen = ({ navigation }) => (
    <MyNavScreen banner="A Screen" navigation={navigation} />
);

const BScreen = ({ navigation }) => (
    <MyNavScreen banner="B Screen" navigation={navigation} />
);

const CScreen = ({ navigation }) => (
    <MyNavScreen banner="C Screen" navigation={navigation} />
);

const DScreen = ({ navigation }) => (
    <MyNavScreen banner="D Screen" navigation={navigation} />
);

const CustomTabBar = ({ navigation }) => {
    const { routes } = navigation.state;
    return (
        <SafeAreaView style={styles.tabContainer}>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.scrollView} >
                {routes.map(route => (
                    <BorderlessButton
                        onPress={() => navigation.navigate(route.routeName)}
                        style={styles.tab}
                        key={route.routeName}
                    >
                        <Text>{route.routeName}</Text>
                    </BorderlessButton>
                ))}
            </ScrollView>
        </SafeAreaView>
    );
};

const CustomTabView = ({ descriptors, navigation }) => {
    const { routes, index } = navigation.state;
    const descriptor = descriptors[routes[index].key];
    const ActiveScreen = descriptor.getComponent();
    return (
        <SafeAreaView forceInset={{ top: 'always' }}>
            <CustomTabBar navigation={navigation} />
            <ActiveScreen navigation={descriptor.navigation} />
        </SafeAreaView>
    );
};

const CustomTabRouter = TabRouter(
    {
        Home: {
            screen: MyHomeScreen,
            path: '',
        },
        Notifications: {
            screen: MyNotificationsScreen,
            path: 'notifications',
        },
        Settings: {
            screen: MySettingsScreen,
            path: 'settings',
        },
        AScreen: {
            screen: AScreen,
            path: 'a',
        },
        BScreen: {
            screen: BScreen,
            path: 'b',
        },
        CScreen: {
            screen: CScreen,
            path: 'c',
        },
        DScreen: {
            screen: DScreen,
            path: 'd',
        },
    },
    {
        initialRouteName: 'Home',
    }
);

const CustomTabs = createAppContainer(
    createNavigator(CustomTabView, CustomTabRouter, {})
);

const styles = StyleSheet.create({
    tabContainer: {
        flexDirection: 'row',
        height: 45,
    },
    scrollView:{

    },
    tab: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        color:'orange',
        width: width / 3,
        backgroundColor: '#fff'
    },
    content: {
        alignItems: 'center',
        justifyContent: 'center',
        height: height,
    }
});

export default CustomTabs;
