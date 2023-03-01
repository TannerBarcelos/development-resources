import React from 'react'
import DropShadow from 'react-native-drop-shadow'
import { View, Image, Text, StyleSheet } from 'react-native'
import { Business } from './types/interfaces'

type Props = {
  data: Business
}

export const SearchResultCard = ({ data }: Props) => {
  return (
    <DropShadow style={styles.shadowProp}>
      <View style={styles.card}>
        <Image
          source={{ uri: data?.image_url }}
          resizeMode='cover'
          style={styles.image}
        />
        <Text style={styles.headingText}>{data?.name}</Text>
        <Text style={styles.reviewText}>
          {data?.rating}, {data?.review_count} reviews
        </Text>
      </View>
    </DropShadow>
  )
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    width: 220,
    height: 270,
    borderRadius: 15,
    borderWidth: 0.5,
    borderColor: 'lightgrey',
    marginLeft: 15,
  },
  shadowProp: {
    shadowColor: '#171717',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  headingText: {
    fontSize: 13,
    fontWeight: 'bold',
    margin: 8,
  },
  reviewText: {
    marginLeft: 8,
  },
  image: {
    width: '100%',
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
    height: 180,
  },
})
