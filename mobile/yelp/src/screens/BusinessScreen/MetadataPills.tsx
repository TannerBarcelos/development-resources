import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Business } from '../SearchScreen/types/interfaces'

type Props = {
  businessDetails: Business
}

export const MetadataPills: React.FC<Props> = ({
  businessDetails,
}: Props): JSX.Element => {
  return (
    <View style={styles.importantContainer}>
      <Text
        style={{
          ...styles.open,
          backgroundColor: businessDetails?.is_closed ? '#AC7088' : '#C2DED1',
        }}
      >
        {businessDetails?.is_closed ? 'Currently Closed' : 'Open'}
      </Text>
      <Text style={styles.doesDelivery}>
        {businessDetails?.transactions.find(
          (method: string) => method === 'delivery',
        )
          ? 'Delivers'
          : 'Pickup Only'}
      </Text>
      <Text style={styles.rating}>{businessDetails?.rating}/5</Text>
    </View>
  )
}

const styles = StyleSheet.create({
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
})
