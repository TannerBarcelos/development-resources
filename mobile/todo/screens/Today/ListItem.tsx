import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from 'react-native'
import { Todo, JSX, Priority, PriorityColors } from './types'
import { useState } from 'react'
import { SimpleLineIcons } from '@expo/vector-icons'
import Checkbox from 'expo-checkbox'

type Props = {
  todo: Todo
  setTodos(todo: Todo[]): void
  todos: Todo[]
}

export const ListItem = ({ todo, setTodos, todos }: Props): JSX => {
  const [optionsShowing, setOptionsShowing] = useState<boolean>(false)

  return (
    <View
      style={{ ...styles.listItem, paddingBottom: optionsShowing ? 50 : 0 }}
    >
      <Checkbox
        color={PriorityColors[todo.priority]}
        style={{ width: 25, height: 25, borderRadius: 50 }}
        value={todo.complete}
        onValueChange={() => {
          const newTodos = todos.map((t) => {
            if (t.id === todo.id) {
              t.complete = !t.complete
            }
            return t
          })
          setTodos(newTodos)
        }}
      />
      <Text
        style={{ ...styles.text, color: todo.complete ? 'grey' : '#2C3333' }}
      >
        {todo.name}
      </Text>
      <TouchableOpacity
        onPress={() => setOptionsShowing(!optionsShowing)}
        style={{
          position: 'absolute',
          right: 0,
          top: optionsShowing ? 20 : 30,
        }}
      >
        <SimpleLineIcons
          name='options'
          size={15}
          color='#2C3333'
          style={{ position: 'absolute', right: 10, top: -8 }}
        />
      </TouchableOpacity>
      {optionsShowing && (
        <FlatList
          style={styles.priorityList}
          horizontal
          renderItem={({ item: PriorityItem, index }) => {
            return (
              <TouchableOpacity
                onPress={() => {
                  setTodos(
                    todos.map((t) => {
                      if (t.id === todo.id) {
                        t.priority = PriorityItem
                      }
                      return t
                    }),
                  )
                  setOptionsShowing(!optionsShowing)
                }}
                style={{
                  backgroundColor: PriorityColors[PriorityItem],
                  width: 20,
                  height: 20,
                  borderRadius: 50,
                  borderWidth: 1,
                  borderColor: 'black',
                  marginRight: 10,
                }}
              >
                <Text key={PriorityItem}>{''}</Text>
              </TouchableOpacity>
            )
          }}
          data={Object.values(Priority)}
        />
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  listItem: {
    display: 'flex',
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    minHeight: 60,
  },
  priorityList: {
    position: 'absolute',
    bottom: '30%',
  },
  text: {
    marginVertical: 10,
    marginRight: 10,
    marginLeft: 20,
    fontSize: 18,
    color: '#2C3333',
  },
})
