import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import HomeScreenViewModel from '../viewModel/HomeScreenViewModel';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {isReadyRef, navigationRef} from '../services/Navigation';
import DetailScreenViewModel from '../viewModel/DetailScreenViewModel';
import CartScreenViewModel from '../viewModel/CartScreenViewModel';
import {useSelector} from 'react-redux';
import {RootState} from '../redux/store';
import FavouriteViewModel from '../viewModel/FavouriteViewmodel';
import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const CustomTabBadge = ({
  count,
  focused,
}: {
  count: number;
  focused: boolean;
}) => {
  if (count === 0) return null;

  return (
    <View
      style={[
        styles.badge,
        {backgroundColor: focused ? '#E96E6E' : '#91A1B0'},
      ]}>
      <Text style={styles.badgeText}>{count}</Text>
    </View>
  );
};

const TabNavigator = () => {
  const CartData = useSelector((state: RootState) => state?.cart?.items);
  const FavouriteData = useSelector(
    (state: RootState) => state?.Favourite?.items,
  );
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: '#E96E6E',
        tabBarStyle: {
          height: 80,
          paddingTop: 10,
        },
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
        options={({route}) => ({
          tabBarIcon: ({ size, color, focused }: { size: number; color: string; focused: boolean }) => (
            <>
              <MaterialIcons name="reorder" size={size} color={color} />
              <CustomTabBadge count={FavouriteData.length} focused={focused} />
            </>
          ),
        })}
      />
      <Tab.Screen
        name="CART"
        component={CartScreenViewModel}
        options={({route}) => ({
          tabBarIcon: ({ size, color, focused }: { size: number; color: string; focused: boolean }) => (
            <>
              <MaterialIcons name="shopping-cart" size={size} color={color} />
              <CustomTabBadge count={CartData.length} focused={focused} />
            </>
          ),
        })}
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

const styles = StyleSheet.create({
  badge: {
    position: 'absolute',
    top: -10,
    right: -15,
    width: 20,
    height: 20,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  badgeText: {
    color: '#000',
    fontSize: 10,
  },
});

export default Navigation;
