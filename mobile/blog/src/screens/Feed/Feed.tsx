import React from 'react'
import {
  View,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Text,
} from 'react-native'
import { useSelector } from 'react-redux'
import { feedSelector } from '../../features/Feed/FeedSlice'
import { FeedItem } from './FeedItem'
import { feedNavigatorProps } from '../../common/navigation/types'
import { Feather } from '@expo/vector-icons'

type Post = {
  id: string
  title: string
  body: string
}

type Props = {
  navigation: feedNavigatorProps['navigation']
  route: feedNavigatorProps['route']
}

export const Feed: React.FC<Props> = ({ navigation }: Props): JSX.Element => {
  const feedState = useSelector(feedSelector)

  return (
    <>
      <View style={styles.container}>
        {feedState.length === 0 && (
          <>
            <Text style={styles.nothing}>Looks like nothings here.</Text>
            <Text style={styles.nothing2}>Care to change that?</Text>
          </>
        )}
        {feedState.length > 0 && (
          <>
            <Text style={styles.allPosts}>All Posts</Text>
            <FlatList<Post>
              data={feedState as Post[]} // hack
              keyExtractor={(post: Post) => post?.id}
              renderItem={({ item }): JSX.Element => (
                <FeedItem item={item} navigation={navigation} />
              )}
              showsVerticalScrollIndicator={false}
              numColumns={2}
              columnWrapperStyle={{ justifyContent: 'space-between' }}
            />
          </>
        )}
      </View>
      <TouchableOpacity
        style={styles.addPostButton}
        onPress={() => navigation.navigate('NewPost')}
      >
        <Feather style={styles.addPostButtonIcon} name='plus' />
      </TouchableOpacity>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    position: 'relative',
  },
  allPosts: {
    fontSize: 30,
    margin: 15,
    fontWeight: '500',
  },
  addPostButton: {
    width: 60,
    height: 60,
    borderRadius: 50,
    backgroundColor: '#5800FF',
    overflow: 'hidden',
    display: 'flex',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 20,
    right: 20,
  },
  addPostButtonIcon: {
    fontSize: 35,
    color: '#eee',
    alignSelf: 'center',
  },
  nothing: {
    textAlign: 'center',
    marginTop: 300,
    fontWeight: 'bold',
    color: 'gray',
  },
  nothing2: {
    textAlign: 'center',
    marginTop: 10,
    fontWeight: 'bold',
    color: 'gray',
  },
})
