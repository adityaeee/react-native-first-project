import { createStackNavigator } from "@react-navigation/stack";
import Welcome from "../screens/Welcome";
import Login from "../screens/Login";
import Signup from "../screens/Signup";
import { SafeAreaView } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/Home";
import Product from "../screens/Product";
import Profile from "../screens/Profile";
import COLORS from "../constants/colors";
import { Ionicons } from "@expo/vector-icons";
import { AuthProvider, useAuth } from "../context/AuthContext";
import ProductDetail from "../screens/ProductDetail";
import SectionListScreen from "../screens/SectionList";
import ScrollViewScreen from "../screens/ScrollView";
import Employee from "../screens/Employee";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function getTabBarIcon(routeName, { color, focused, size }) {
    let name;
    switch (routeName) {
        case "Home":
            name = focused ? "home" : "home-outline";
            break;
        case "ProductStack":
            name = focused ? "cart" : "cart-outline";
            break;
        case "Employee":
            name = focused ? "id-card" : "id-card-outline";
            break;
        case "Profile":
            name = focused ? "person" : "person-outline";
            break;
    }
    return <Ionicons name={name} size={size} color={color} />;
}

function StackNavigation() {
    const { isLoggedIn } = useAuth();
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            {isLoggedIn ? (
                <>
                    <Stack.Screen name="MainTab" component={TabNavigation} />
                </>
            ) : (
                <>
                    <Stack.Screen name="Welcome" component={Welcome} />
                    <Stack.Screen name="Login" component={Login} />
                    <Stack.Screen name="Signup" component={Signup} />
                </>
            )}
        </Stack.Navigator>
    );
}

function ProductStack() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Product" component={Product} />
            <Stack.Screen name="FlatList" component={ProductDetail} />
            <Stack.Screen name="SectionList" component={SectionListScreen} />
            <Stack.Screen name="ScrollView" component={ScrollViewScreen} />
        </Stack.Navigator>
    );
}

function TabNavigation() {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => {
                return {
                    headerShown: false,
                    tabBarActiveTintColor: COLORS.primary,
                    tabBarInactiveIntColor: COLORS.black,
                    tabBarIcon: (opt) => getTabBarIcon(route.name, opt),
                };
            }}
        >
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="ProductStack" component={ProductStack} />
            <Tab.Screen name="Employee" component={Employee} />
            <Tab.Screen name="Profile" component={Profile} />
        </Tab.Navigator>
    );
}

function Navigator() {
    return (
        <AuthProvider>
            <SafeAreaView style={{ flex: 1 }}>
                <NavigationContainer>
                    <StackNavigation />
                </NavigationContainer>
            </SafeAreaView>
        </AuthProvider>
    );
}

export default Navigator;
