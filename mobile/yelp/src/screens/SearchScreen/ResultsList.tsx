import React from 'react'
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from 'react-native'
import { Business } from './types/interfaces'
import { SearchResultCard } from './SearchResultCard'
import { withNavigation } from 'react-navigation'

type Props = {
  sectionHeader: string
  data: Business[]
  navigation?: {
    navigate(to: string, options?: {}): void
    getParam(param: string): string
  }
}

// Wrap any component with withNavigation in order to be injected all navigation methods from react-navigation
export const ResultsList = withNavigation<Props>(
  ({ sectionHeader, data, navigation }: Props): JSX.Element | null => {
    if (!data.length) return null
    return (
      <View style={{ marginBottom: sectionHeader === 'Expensive' ? 40 : 0 }}>
        <Text style={styles.sectionHeading}>{sectionHeader}</Text>
        <FlatList
          horizontal={true}
          data={data}
          keyExtractor={(result: Business) => result.id}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => navigation?.navigate('Business', { id: item.id })}
            >
              <SearchResultCard data={item} />
            </TouchableOpacity>
          )}
          showsHorizontalScrollIndicator={false}
        />
      </View>
    )
  },
)
const styles = StyleSheet.create({
  sectionHeading: {
    fontWeight: 'bold',
    fontSize: 18,
    margin: 15,
  },
})
