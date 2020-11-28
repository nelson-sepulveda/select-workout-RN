import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { AppLoading } from 'expo';
import { Text, View, FlatList, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import SvgTest from './svg/profile.js';
import { useFonts } from "@use-expo/font";
import styles from './styles/AppStyles';
import customFonts from './fonts/font-zona-pro'
import cards from './data/cards'
import deportes from './data/sports'
import CardList from './components/cardList'

export default function App() {
  const [isLoaded] = useFonts(customFonts);

  if (!isLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={styles.container}>
        <View style={styles.containerHeader}>
          <View style={styles.containerIconHeart}>
            <Ionicons name="ios-heart" size={36} color="#8a95b4" />
          </View>
          <View style={styles.containerProfileIcon}>
            <SvgTest />
          </View>
        </View>
        <View style={styles.containerTitle}>
          <Text style={[styles.textTitle]}>Select</Text>
          <Text style={styles.textTitle}>Workout</Text>
        </View>
        <View style={styles.containerListEmojis}>
          <FlatList
            showsHorizontalScrollIndicator={false}
            ItemSeparatorComponent={() => { return <View style={styles.separatorItem} />}}
            horizontal
            data={deportes}
            renderItem={({ item }) => {
              return (
                <TouchableOpacity>
                  <View style={styles.containerIconList}>
                    <Text style={styles.fontSizeImg}> {item.img} </Text>
                  </View>
                </TouchableOpacity>
              )
            }}
          />
        </View>
        <View style={styles.containerCards}>
          <FlatList
            showsVerticalScrollIndicator={false}
            numColumns={1}
            ItemSeparatorComponent={() => {
              return <View style={styles.itemSeparatorColumn}></View>;
            }}
            data={cards}
            renderItem={({ item }) => { return ( <CardList card={item} /> )}}
          />
        </View>
        <StatusBar style="auto" />
      </View>
    );
  }
}