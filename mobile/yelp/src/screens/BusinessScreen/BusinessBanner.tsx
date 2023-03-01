import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Feather } from '@expo/vector-icons'
import { Business } from '../SearchScreen/types/interfaces'

type Props = {
  businessDetails: Business
}

export const BusinessBanner: React.FC<Props> = ({
  businessDetails,
}: Props): JSX.Element => {
  return (
    <View style={styles.meta}>
      <Text style={styles.headingText}>{businessDetails.name}</Text>
      <Feather
        name='phone-call'
        style={{ position: 'absolute', right: 110, fontSize: 16 }}
      />
      <Text style={styles.phoneText}>{businessDetails.phone}</Text>
    </View>
  )
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
})
