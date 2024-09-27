import { useState } from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import { Stack, useRouter } from 'expo-router';

import { COLORS, icons, images, SIZES } from '../constants';
import { 
  NearbyJobs, Popularjobs, ScreenHeaderBtn, Welcome 
} from '../components';
import { ScrollView } from 'react-native-web';

const Home = () => {
  const router = useRouter();
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: COLORS.lightWhite},
          headerShadowVisible: false,
          headerLeft: () => (
            <ScreenHeaderBtn iconUrl={icons.menu} dimension="60%" />
          ),
          headerRight: () => (
            <ScreenHeaderBtn iconUrl={images.profile} dimension="100%" />
          ),
          headerTitle: ""
        }}
      />
      <ScrollView showVerticalScrollIndicator={false}>
        <View
          style={{
            flex: 1,
            padding: SIZES.medium
          }}
        >
          <Welcome 
          />

          <Popularjobs />
          <NearbyJobs />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Home;