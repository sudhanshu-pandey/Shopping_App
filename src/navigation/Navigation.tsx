import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import HomeScreenViewModel from '../viewModel/HomeScreenViewModel';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {isReadyRef, navigationRef} from '../services/Navigation';
import DetailScreenViewModel from '../viewModel/DetailScreenViewModel';
import CartScreenViewModel from '../viewModel/CartScreenViewModel';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import FavouriteViewModel from '../viewModel/FavouriteViewmodel';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const TabNavigator = () => {
  const CartData = useSelector((state:RootState) => state?.cart?.items);
  const FavouriteData = useSelector((state:RootState) => state?.Favourite?.items);
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: '#E96E6E',
        tabBarStyle: {
          height: 80,
          paddingTop: 10
        }
      }}>
      <Tab.Screen
        name="HOME"
        component={HomeScreenViewModel}
        options={{
          tabBarIcon: ({size, color}) => (
            <MaterialIcons name={'home'} size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="REORDER"
        component={FavouriteViewModel}
        options={{
          tabBarIcon: ({size, color}) => (
            <MaterialIcons name={'reorder'} size={size} color={color} />
          ),
          tabBarBadge: FavouriteData.length > 0 ? FavouriteData.length : undefined,
          tabBarBadgeStyle: {
            backgroundColor: '#91A1B0',  
            color: '#000', 
            fontSize: 10, 
            width: 20,    
            height: 20,   
            borderRadius: 10,
            alignItems: 'center', 
            justifyContent: 'center', 
            top: -15
          },
        }}
      />
      <Tab.Screen
        name="CART"
        component={CartScreenViewModel}
        options={{
          tabBarIcon: ({size, color}) => (
            <MaterialIcons name={'shopping-cart'} size={size} color={color} />
          ),
          tabBarBadge: CartData.length > 0 ? CartData.length : undefined,
          tabBarBadgeStyle: {
            backgroundColor: '#91A1B0',  
            color: '#000', 
            fontSize: 10, 
            width: 20,    
            height: 20,   
            borderRadius: 10,
            alignItems: 'center', 
            justifyContent: 'center', 
            top: -15
          },
        }}
      />
      <Tab.Screen
        name="PROFILE"
        component={HomeScreenViewModel}
        options={{
          tabBarIcon: ({size, color}) => (
            <MaterialIcons name={'manage-accounts'} size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const Navigation = () => {
  return (
    <NavigationContainer
      ref={navigationRef}
      onReady={() => {
        isReadyRef.current = true;
      }}>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {/* Stack Screen for Tab Navigator */}
        <Stack.Screen name="Tabs" component={TabNavigator} />
        <Stack.Screen name="Detail" component={DetailScreenViewModel} />
        <Stack.Screen name="Cart" component={CartScreenViewModel} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
