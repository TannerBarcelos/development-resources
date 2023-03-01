import React, { useState } from 'react'
import { Text } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { ResultsList } from './ResultsList'
import { SearchBar } from '../../components/SearchBar'
import { useSearch } from '../../hooks/useSearch'
import { filterByPrice } from '../../utils/helpers'

export const Search: React.FC = (): JSX.Element => {
  const [term, setTerm] = useState('')
  const { result, err } = useSearch(term)

  if (err) return <Text>{err}</Text>

  return (
    <>
      <SearchBar setSearchableTerm={setTerm} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <ResultsList
          sectionHeader='Affordable'
          data={filterByPrice(result, '$')}
        />
        <ResultsList
          sectionHeader='Pricey'
          data={filterByPrice(result, '$$')}
        />
        <ResultsList
          sectionHeader='Expensive'
          data={filterByPrice(result, '$$$')}
        />
      </ScrollView>
    </>
  )
}
