import React from 'react';
import { View, Image, TouchableOpacity, StyleSheet, Text, ImageBackground } from 'react-native';
import { useFonts } from 'expo-font';
import { Mali_600SemiBold } from "@expo-google-fonts/mali";

const WinnerComponent = ({ navigation }) => {
  // Load fonts
  const [fontsLoaded] = useFonts({
    Mali_600SemiBold,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <>
      <View style={styles.container}>
        <ImageBackground
          source={require('../assets/background.jpg')}
          style={{ width: '100%', height: '100%' }}
        ></ImageBackground>
        <View style={styles.topRightIcon}>
          <Image
            source={require('../assets/diamond.png')}
            style={{ width: 30, height: 30 }}
          />
          <Text style={{ fontSize: 15, paddingTop: 5, fontFamily: 'Mali_600SemiBold' }}>100</Text>
          <TouchableOpacity>
            <Image
              source={require('../assets/plus.png')}
              style={{ width: 30, height: 30 }}
            />
          </TouchableOpacity>
        </View>
        <Text
          style={{ position: 'absolute', fontFamily: 'Mali_600SemiBold', top: 150, left: 100, fontSize: 50,color: 'white' }}
        >
          Congratss!!
        </Text>
        <Text
          style={{ position: 'absolute', top: 200, left: 10, fontSize: 50, color: 'white', fontFamily: 'Mali_600SemiBold' }}
        >
          You all the Winner
        </Text>
        <View style={styles.contener}>
          <View style={styles.centerAvatar}>
            <View>
              <Image
                source={require('../assets/logo.png')}
                style={{ width: 400, height: 300, position: 'absolute', top: -300, left: -200, right: 0, bottom: 10, margin: 'auto' }}
              />
            </View>
            {/* Winner Number 1 */}
            <View
              style={{ height: 20, borderWidth: 50, borderColor: 'rgba(128, 128, 128, 0.5)', borderRadius: 20, position: 'absolute', top: 60, left: 50, right: 50, bottom: 10, margin: 'auto' }}
            >
              <Image
                source={require('../assets/avatar.png')}
                style={{ width: 80, height: 80, backgroundColor: '#12486B', borderRadius: 50, position: 'absolute', top: -40, left: -35, right: 0, bottom: 10, margin: 'auto' }}
              />
              <Text style={{ position: 'absolute', top: -10, left: 50, fontSize: 20, color: 'black', fontFamily: 'Mali_600SemiBold' }}>M Yoga Atmajaya</Text>
              <Image
                source={require('../assets/Number1.png')}
                style={{ width: 80, height: 80, position: 'absolute', top: -45, left: 190, right: 0, bottom: 10, margin: 'auto' }}
              />
            </View>
            {/* Winner Number 2 */}
            <View
              style={{ height: 20, borderWidth: 50, borderColor: 'rgba(128, 128, 128, 0.5)', borderRadius: 20, position: 'absolute', top: 170, left: 50, right: 50, bottom: 10, margin: 'auto' }}
            >
              <Image
                source={require('../assets/avatar.png')}
                style={{ width: 80, height: 80, backgroundColor: '#12486B', borderRadius: 50, position: 'absolute', top: -40, left: -35, right: 0, bottom: 10, margin: 'auto' }}
              />
              <Text style={{ position: 'absolute', top: -10, left: 50, fontSize: 20, color: 'black', fontFamily: 'Mali_600SemiBold' }}>M Yoga Atmajaya</Text>
              <Image
                source={require('../assets/number2.png')}
                style={{ width: 80, height: 80, position: 'absolute', top: -45, left: 190, right: 0, bottom: 10, margin: 'auto' }}
              />
            </View>
            {/* Winner Number 3 */}
            <View
              style={{ height: 20, borderWidth: 50, borderColor: 'rgba(128, 128, 128, 0.5)', borderRadius: 20, position: 'absolute', top: 280, left: 50, right: 50, bottom: 10, margin: 'auto' }}
            >
              <Image
                source={require('../assets/avatar.png')}
                style={{ width: 80, height: 80, backgroundColor: '#12486B', borderRadius: 50, position: 'absolute', top: -40, left: -35, right: 0, bottom: 10, margin: 'auto' }}
              />
              <Text style={{ position: 'absolute', top: -10, left: 50, fontSize: 20, color: 'black', fontFamily: 'Mali_600SemiBold' }}>M Yoga Atmajaya</Text>
              <Image
                source={require('../assets/number3.png')}
                style={{ width: 80, height: 80, position: 'absolute', top: -45, left: 190, right: 0, bottom: 10, margin: 'auto' }}
              />
            </View>
          </View>
          <TouchableOpacity style={styles.bottomButton1} onPress={() => navigation.navigate('Matching')}>
            <Text style={{ textAlign: 'center', fontSize: 30, color: 'white', fontFamily: 'Mali_600SemiBold' }}>
              Start Again
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.bottomButton2} onPress={() => navigation.navigate('StartGame')}>
            <Text style={{ textAlign: 'center', fontSize: 30, color: 'white', fontFamily: 'Mali_600SemiBold' }}>
              Back To Home
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#12486B',
    position: 'relative',
  },
  contener: {
    flex: 1,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    // backgroundColor: 'white',
    position: 'absolute',
    top: '30%',
    left: 0,
    right: 0,
    bottom: 0,
  },
  topRightIcon: {
    position: 'absolute',
    display: 'flex',
    flexDirection: 'row',
    borderColor: 'white',
    gap: 10,
    borderRadius: 50,
    backgroundColor: 'white',
    borderWidth: 5,
    width: 110,
    top: 35,
    right: 20,
  },
  centerAvatar: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomButton1: {
    alignSelf: 'center',
    position: 'absolute',
    bottom: 130,
    padding: 5,
    borderRadius: 10,
    width: "50%",
    backgroundColor: '#FFA33C',
  },
  bottomButton2: {
    alignSelf: 'center',
    position: 'absolute',
    bottom: 50,
    padding: 5,
    borderRadius: 10,
    width: "70%",
    backgroundColor: '#FFA33C',
  },
});

export default WinnerComponent;
