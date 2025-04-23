import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { supabase } from '../lib/supabase';
import { useNavigation } from '@react-navigation/native';

const HomeScreen: React.FC = () => {
  const navigation = useNavigation();
  const [user, setUser] = React.useState<any>(null);
  
  React.useEffect(() => {
    getUserData();
  }, []);
  
  async function getUserData() {
    try {
      const { data: { user } } = await supabase.auth.getUser();
      setUser(user);
    } catch (error: any) {
      Alert.alert('Error', error.message);
    }
  }

  async function handleSignOut() {
    try {
      const { error } = await supabase.auth.signOut();
      if (error) throw error;
    } catch (error: any) {
      Alert.alert('Error', error.message);
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.greeting}>Hi</Text>
        <Text style={styles.email}>{user?.email}</Text>
      </View>
      
      <TouchableOpacity
        style={styles.logoutButton}
        onPress={handleSignOut}
      >
        <Text style={styles.logoutButtonText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8fafc',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  headerContainer: {
    alignItems: 'center',
    marginBottom: 40,
  },
  greeting: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#0f172a',
    marginBottom: 10,
  },
  email: {
    fontSize: 16,
    color: '#64748b',
  },
  logoutButton: {
    backgroundColor: '#f43f5e',
    borderRadius: 12,
    paddingVertical: 14,
    paddingHorizontal: 30,
  },
  logoutButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default HomeScreen;