import React from 'react'
import { FlatList, Image, StyleSheet } from 'react-native'
import DropShadow from 'react-native-drop-shadow'

interface Props {
  data: any
}

export const HorizontalImageCarousel = ({ data }: Props) => {
  return (
    <FlatList
      style={styles.carousel}
      data={data}
      keyExtractor={(key) => key}
      renderItem={({ item }: { item: string }) => (
        <DropShadow style={styles.shadowProp}>
          <Image
            style={styles.imageCard}
            source={{ uri: item }}
            resizeMode='cover'
          />
        </DropShadow>
      )}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
    />
  )
}

const styles = StyleSheet.create({
  carousel: {
    marginBottom: 12,
  },
  imageCard: {
    backgroundColor: 'white',
    width: 220,
    height: 170,
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
})
