import { Tabs, useRouter, useSegments } from 'expo-router';
import { COLORS } from '../constants';
import { Home, MapPin, BarChart2 } from 'lucide-react-native';
import { View, TouchableOpacity, StyleSheet } from 'react-native';

const CustomTabBar = () => {
  const router = useRouter();
  const segments = useSegments();

  const tabs = [
    { name: 'index', icon: Home },
    { name: 'CompareLocations', icon: MapPin },
    { name: 'Trends', icon: BarChart2 },
  ];

  return (
    <View style={styles.container}>
      {tabs.map(({ name, icon: Icon }) => {
        const isActive = segments.includes(name);
        return (
          <TouchableOpacity
            key={name}
            onPress={() => router.push(`/${name === 'index' ? '' : name}`)}
            style={styles.tabButton}
          >
            <Icon color={isActive ? COLORS.primary : '#888'} size={24} />
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const Layout = () => {
  return (
    <>
      <Tabs
        screenOptions={{
          headerShown: false,
          tabBarStyle: { display: 'none' }, 
        }}
      >
        <Tabs.Screen name="index" />
        <Tabs.Screen name="CompareLocations" />
        <Tabs.Screen name="Trends" />
      </Tabs>
      <CustomTabBar />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 20,
    alignSelf: 'center',
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 40,
    width: 250,
    height: 65,
    justifyContent: 'space-around',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 4 },
    elevation: 10,
    borderWidth: 0.5,
    borderColor: '#e0e0e0',
  },
  tabButton: {
    flex: 1,
    alignItems: 'center',
  },
});

export default Layout;
