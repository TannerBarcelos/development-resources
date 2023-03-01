import React from 'react'
import { View, Text, Image, StyleSheet, FlatList } from 'react-native'
import DropShadow from 'react-native-drop-shadow'
import { Review } from './types/interfaces'

interface Props {
  reviews?: Review[]
}

export const VerticalReviewCarousel: React.FC<Props> = ({
  reviews,
}: Props): JSX.Element | null => {
  if (reviews) {
    return (
      <>
        <Text style={styles.reviewHeading}>Reviews</Text>
        <FlatList
          data={reviews}
          keyExtractor={(review: Review) => review.id}
          renderItem={({ item }: { item: Review }) => (
            <DropShadow style={styles.shadowProp}>
              <View style={styles.card}>
                <View style={styles.reviewer}>
                  <Text
                    style={{
                      ...styles.reviewCardUsername,
                      marginLeft: item.user.image_url ? 60 : 0,
                      paddingVertical: item.user.image_url ? 20 : 0,
                    }}
                  >
                    {item.user.name}
                  </Text>
                  <Text style={styles.ratingFromUser}>{item.rating}/5</Text>
                </View>
                <Image
                  style={styles.profileImg}
                  source={{ uri: item.user.image_url }}
                  resizeMode='cover'
                />
                <Text style={styles.review}>{item.text}</Text>
              </View>
            </DropShadow>
          )}
          horizontal={false}
          showsVerticalScrollIndicator={false}
        />
      </>
    )
  } else return null
}

const styles = StyleSheet.create({
  meta: {
    display: 'flex',
    flexDirection: 'row',
    width: '97%',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  phoneText: {
    fontSize: 13,
  },
  headingText: {
    fontSize: 20,
    fontWeight: 'bold',
    margin: 15,
    marginVertical: 20,
  },
  reviewHeading: {
    fontSize: 20,
    fontWeight: 'bold',
    margin: 15,
    marginVertical: 10,
  },
  importantContainer: {
    marginHorizontal: 15,
    marginVertical: 20,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 190,
    alignItems: 'center',
  },
  doesDelivery: {
    fontSize: 14,
    backgroundColor: '#6E85B7',
    color: '#eee',
    fontWeight: '500',
    padding: 8,
    borderWidth: 0,
    display: 'flex',
    borderRadius: 15,
    overflow: 'hidden',
    marginHorizontal: 10,
  },
  rating: {
    backgroundColor: '#D3CEDF',
    fontWeight: '500',
    padding: 8,
    borderWidth: 0,
    display: 'flex',
    borderRadius: 15,
    fontSize: 14,
    overflow: 'hidden',
  },
  ratingFromUser: {
    backgroundColor: '#D3E4CD',
    padding: 8,
    borderRadius: 17,
    fontSize: 14,
    overflow: 'hidden',
  },
  open: {
    backgroundColor: '#C2DED1',
    fontWeight: '500',
    padding: 8,
    borderWidth: 0,
    display: 'flex',
    borderRadius: 15,
    fontSize: 14,
    overflow: 'hidden',
  },
  card: {
    backgroundColor: 'white',
    width: '93%',
    minHeight: 100,
    borderRadius: 15,
    borderWidth: 0.5,
    borderColor: 'lightgrey',
    marginLeft: 15,
    marginBottom: 25,
    position: 'relative',
  },
  shadowProp: {
    shadowColor: '#171717',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  image: {
    width: '100%',
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
    height: 180,
  },
  reviewCardUsername: {
    padding: 8,
    fontSize: 14,
    fontWeight: '700',
    marginLeft: 50,
  },
  profileImg: {
    width: 50,
    height: 50,
    borderRadius: 50,
    position: 'absolute',
    left: 10,
    top: 10,
  },
  reviewer: {
    width: '100%',
    paddingHorizontal: 10,
    paddingVertical: 5,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  review: {
    width: '80%',
    marginLeft: 10,
    marginVertical: 10,
    lineHeight: 19,
  },
})
