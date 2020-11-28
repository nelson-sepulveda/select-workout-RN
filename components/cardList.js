import React, { useEffect } from 'react'
import { View, Text, TouchableOpacity, Image, Animated, Easing } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from '../styles/AppStyles';

const CardList = ({ card }) => {
  return (
    <View style={styles.containerCard}>
      <View style={[styles.containerBodyCard,{ backgroundColor: card.color }]}>
        <View style={styles.containerSeccionIzq}>
          <Text style={styles.textTitleCard}>
            {card.key}
          </Text>
          <Text style={[styles.containerWithText,{color: card.textColor}]}>
            With {card.with}
          </Text>
          <TouchableOpacity>
            <View style={styles.containerHideTime}>
              <Ionicons style={styles.marginLeft5} name="md-arrow-dropright" size={32} color="black" />
              <Text style={styles.textTime}>
                {card.time}
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.containerSeccionDer}>
          <Animated.Image source={{uri: card.imagen}} style={styles.containerImagen} />
        </View>
      </View>
    </View>
  )
}

export default CardList;