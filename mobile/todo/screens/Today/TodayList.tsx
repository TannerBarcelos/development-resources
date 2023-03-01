import { useState } from 'react'
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  TextInput,
} from 'react-native'
import { AddButton } from '../../common/components/AddButton'
import { Todo, JSX, Priority, PriorityColors } from './types'
import Checkbox from 'expo-checkbox'
import { ListItem } from './ListItem'

const todoList: Todo[] = [
  { id: 1, name: 'Study AWS', priority: 'none' as Priority, complete: false },
  {
    id: 2,
    name: 'Lose 30 Pounds',
    priority: 'urgent' as Priority,
    complete: false,
  },
  {
    id: 3,
    name: 'Study React Native',
    priority: 'high' as Priority,
    complete: false,
  },
  {
    id: 4,
    name: 'Design Fore App',
    priority: 'low' as Priority,
    complete: false,
  },
  {
    id: 5,
    name: 'Start Postgres Course',
    priority: 'medium' as Priority,
    complete: false,
  },
]

export const TodayList = (): JSX => {
  const [todos, setTodos] = useState<Todo[]>(todoList)
  const [isAdding, setIsAdding] = useState<boolean>(false)
  const [newTodo, setNewTodo] = useState<string>('')

  const addNewTodo = (): void => {
    const newT: Todo = {
      id: todos.length + 1,
      name: newTodo,
      complete: false,
      priority: 'none' as Priority,
    }
    setTodos([newT, ...todos])
    setIsAdding(false)
  }

  return (
    <View style={styles.listContainer}>
      <Text style={styles.todayHeading}>Today</Text>
      {/* Add picker here for sort order */}
      {todos.length > 0 || isAdding ? (
        <>
          <Text style={{ color: 'blue', fontSize: 17, marginVertical: 10 }}>
            {todos?.length} Todos
          </Text>
          {isAdding && (
            <View style={styles.listItem}>
              <Checkbox
                color={PriorityColors['none']}
                style={{ width: 25, height: 25, borderRadius: 50 }}
              />
              <TextInput
                style={styles.text}
                onChangeText={(char: string) => setNewTodo(char)}
                onSubmitEditing={addNewTodo}
                onBlur={() => setIsAdding(false)}
                autoFocus
              />
            </View>
          )}
          <FlatList
            showsVerticalScrollIndicator={false}
            keyExtractor={(item) => item.name}
            renderItem={({ item, index }) => (
              <ListItem todo={item} todos={todos} setTodos={setTodos} />
            )}
            data={todos}
          />
        </>
      ) : (
        !isAdding && (
          <Text
            style={{
              textAlign: 'center',
              marginVertical: '80%',
              fontSize: 18,
              color: 'gray',
            }}
          >
            All todos complete! 🎉
          </Text>
        )
      )}
      {todos.length > 0 && (
        <TouchableOpacity onPress={() => setTodos([])} style={styles.clearAll}>
          <Text style={styles.clearAll}>Clear All</Text>
        </TouchableOpacity>
      )}
      <AddButton setIsAdding={setIsAdding} />
    </View>
  )
}

const styles = StyleSheet.create({
  listContainer: {
    marginTop: 40,
    height: '84%',
    marginHorizontal: 20,
  },
  listItem: {
    marginBottom: 10,
    borderRadius: 4,
    flexDirection: 'row',
    alignItems: 'center',
    minHeight: 60,
    position: 'relative',
  },
  priorityList: {
    position: 'absolute',
    bottom: -15,
  },
  todayHeading: {
    fontSize: 35,
    fontWeight: '600',
    marginTop: 30,
    marginBottom: 10,
  },
  text: {
    marginVertical: 10,
    marginRight: 10,
    marginLeft: 20,
    fontSize: 18,
    color: '#2C3333',
  },
  heading: {
    fontSize: 35,
    fontWeight: 'bold',
  },
  todos: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    display: 'flex',
    alignItems: 'center',
    marginHorizontal: 20,
  },
  todoCount: {
    color: '#006ee6',
    marginVertical: 15,
    fontSize: 17,
  },
  clearAll: {
    position: 'absolute',
    bottom: -25,
    textAlign: 'center',
    width: 100,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'flex-end',
    color: '#B25068',
    fontSize: 18,
  },
})
