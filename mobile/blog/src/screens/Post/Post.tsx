import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native'
import { postNavigatorProps } from '../../common/navigation/types'
import { useSelector } from 'react-redux'
import { deletePost, feedSelector } from '../../features/Feed/FeedSlice'
import { Feather } from '@expo/vector-icons'
import { useAppDispatch } from '../../app/store'

type Props = {
  navigation: postNavigatorProps['navigation']
  route: postNavigatorProps['route']
}

export const Post: React.FC<Props> = ({
  route,
  navigation,
}: Props): JSX.Element => {
  const feed = useSelector(feedSelector)
  const dispatch = useAppDispatch()

  const post = feed.find((post) => post.id === route.params.id)

  return (
    <>
      <View style={{ height: '90%', position: 'relative' }}>
        <ScrollView
          style={styles.postContainer}
          showsVerticalScrollIndicator={false}
        >
          <Text style={styles.postTitle}>{post?.title}</Text>
          <Text style={styles.postBody}>{post?.body}</Text>
        </ScrollView>
      </View>
      <View style={styles.actionContainer}>
        <TouchableOpacity
          style={[styles.actionBtn, styles.delete]}
          onPress={() => {
            dispatch(deletePost(post!)) // post could be undefined according to compilelr - we know it will always exist
            navigation.pop()
          }}
        >
          <Feather name='trash' style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity style={[styles.actionBtn, styles.edit]}>
          <Feather name='edit' style={styles.icon} />
        </TouchableOpacity>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  postContainer: {
    margin: 20,
    height: 300,
  },
  postTitle: {
    fontSize: 30,
    fontWeight: '500',
  },
  postBody: {
    fontSize: 15,
    lineHeight: 20,
    marginTop: 20,
  },
  actionContainer: {
    width: '100%',
    height: 50,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    flexDirection: 'row',
    position: 'absolute',
    bottom: 40,
  },
  actionBtn: {
    height: '100%',
    width: '45%',
    borderRadius: 15,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  delete: {
    backgroundColor: '#E64848',
  },
  edit: {
    backgroundColor: '#76BA99',
  },
  icon: {
    color: '#eee',
    fontSize: 23,
  },
})
