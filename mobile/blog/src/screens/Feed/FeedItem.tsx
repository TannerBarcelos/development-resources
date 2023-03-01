import React from 'react'
import { Text, StyleSheet, TouchableOpacity } from 'react-native'
import { feedNavigatorProps } from '../../common/navigation/types'

type Post = {
  id: string
  title: string
  body: string
}

type Props = {
  item: Post
  navigation: feedNavigatorProps['navigation']
}

export const FeedItem: React.FC<Props> = ({
  item,
  navigation,
}: Props): JSX.Element => {
  return (
    <TouchableOpacity
      style={styles.card}
      onPress={() =>
        navigation.navigate('Post', { id: item.id, title: item.title })
      }
    >
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.previewContent}>
        {item.body.length > 200 ? `${item.body.slice(0, 200)}...` : item.body}
      </Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  card: {
    padding: 10,
    marginVertical: 10,
    marginHorizontal: 10,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: 'lightgrey',
    width: 190,
    height: 270,
  },
  title: {
    fontSize: 21,
    fontWeight: '500',
    letterSpacing: 1.2,
  },
  postActions: {
    flexDirection: 'row',
    width: 65,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  previewContent: {
    marginTop: 10,
    fontSize: 12,
    lineHeight: 20,
    color: 'grey',
  },
})
