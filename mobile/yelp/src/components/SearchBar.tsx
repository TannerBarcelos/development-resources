import React, { useState } from 'react'
import { View, StyleSheet, TextInput, Text } from 'react-native'
import { Feather } from '@expo/vector-icons'

type Props = {
  setSearchableTerm(searchTerm: string): void
}

export const SearchBar: React.FC<Props> = ({
  setSearchableTerm,
}: Props): JSX.Element => {
  const [term, setTerm] = useState('')
  return (
    <View style={styles.backgroundStyles}>
      <Feather name='search' style={styles.searchIconStyles} />
      <TextInput
        style={styles.inputStyles}
        placeholder='Search'
        value={term}
        onChangeText={(t) => setTerm(t)}
        autoCorrect={true}
        autoCapitalize='none'
        onEndEditing={() => setSearchableTerm(term)}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  backgroundStyles: {
    height: 50,
    marginHorizontal: 15,
    flexDirection: 'row',
    marginTop: 20,
    borderWidth: 0.5,
    borderColor: '#411530',
    borderRadius: 30,
    marginBottom: 10,
  },
  inputStyles: {
    flex: 1,
    fontSize: 18,
    paddingLeft: 10,
  },
  searchIconStyles: {
    backgroundColor: 'transparent',
    fontSize: 30,
    alignSelf: 'center',
    paddingLeft: 10,
    color: '#411530',
  },
})
