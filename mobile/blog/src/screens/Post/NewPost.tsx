import React, { useState } from 'react'
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Keyboard,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from 'react-native'
import { feedNavigatorProps } from '../../common/navigation/types'
import { useAppDispatch } from '../../app/store'
import { addPost } from '../../features/Feed/FeedSlice'

type Props = {
  navigation: feedNavigatorProps['navigation']
}

export const NewPost: React.FC<Props> = ({
  navigation,
}: Props): JSX.Element => {
  const dispatch = useAppDispatch()
  const [post, setPost] = useState('')
  const [postTitle, setPostTitle] = useState('')
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.newPostContainer}>
        <Text style={styles.postLabel}>What's on your mind?</Text>
        <Text style={{ ...styles.postLabel, fontSize: 13, marginTop: 3 }}>
          Give your post a title and some content
        </Text>
        <TextInput
          style={styles.postInput}
          value={postTitle}
          onChangeText={(text) => setPostTitle(text)}
        />
        <TextInput
          style={styles.postBodyInput}
          value={post}
          onChangeText={(text) => setPost(text)}
          multiline={true}
        />
        <TouchableOpacity
          style={styles.create}
          onPress={() => {
            dispatch(addPost({ title: postTitle, body: post }))
            navigation.goBack()
          }}
        >
          <Text style={styles.createText}>Create</Text>
        </TouchableOpacity>
      </View>
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
  newPostContainer: {
    marginHorizontal: 20,
    marginVertical: 20,
  },
  postLabel: {
    fontSize: 30,
    fontWeight: '400',
    marginVertical: 10,
  },
  postInput: {
    fontSize: 17,
    borderWidth: 1,
    borderColor: '#d6d4d4',
    width: '100%',
    marginVertical: 10,
    height: 40,
    borderRadius: 5,
    paddingLeft: 10,
  },
  postBodyInput: {
    fontSize: 17,
    borderWidth: 1,
    borderColor: '#d6d4d4',
    width: '100%',
    marginVertical: 10,
    height: 320,
    borderRadius: 5,
    paddingLeft: 10,
    textAlign: 'left',
  },
  create: {
    backgroundColor: '#5800FF',
    height: 50,
    borderRadius: 10,
    marginVertical: 25,
    width: '100%',
    alignSelf: 'center',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  createText: {
    color: '#eee',
    fontSize: 20,
  },
})
