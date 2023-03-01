import React from 'react'
import { View, Text } from 'react-native'
import { useSearch } from '../../hooks/useSearch'
import { HorizontalImageCarousel } from '../../components/HorizontalImageCarousel'
import { VerticalReviewCarousel } from './VerticalReviewCarousel'
import { MetadataPills } from './MetadataPills'
import { BusinessBanner } from './BusinessBanner'

// Using for V4 Reeact Navigation - look at docs for v6
type Props = {
  navigation: {
    navigate(to: string, options?: {}): void
    getParam(param: string): string
  }
}

export const BusinessScreen = ({ navigation }: Props): JSX.Element | null => {
  const id: string = navigation?.getParam('id')

  const { result, err, reviews } = useSearch(id, {
    byId: true,
    includeReviews: true,
  })

  if (!result.length) return null
  if (err) return <Text>{err}</Text>

  const businessDetails = result[0]

  return (
    <View>
      <BusinessBanner businessDetails={businessDetails} />
      <HorizontalImageCarousel data={businessDetails?.photos} />
      <MetadataPills businessDetails={businessDetails} />
      <VerticalReviewCarousel reviews={reviews} />
    </View>
  )
}
