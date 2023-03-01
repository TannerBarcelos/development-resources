import { Text, StyleSheet, TouchableOpacity } from 'react-native'

type Props = {
  setIsAdding: (addingPredicate: boolean) => void
}

export const AddButton = ({ setIsAdding }: Props) => {
  return (
    <TouchableOpacity
      onPress={() => setIsAdding(true)}
      style={styles.touchable}
    >
      <Text
        style={{
          fontSize: 35,
          color: '#eee',
          marginBottom: 3,
        }}
      >
        +
      </Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  touchable: {
    fontWeight: '300',
    backgroundColor: '#006ee6',
    width: 60,
    height: 60,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    textAlignVertical: 'center',
    position: 'absolute',
    bottom: -70,
    right: 10,
    shadowColor: 'rgba(0,0,0, .2)', // IOS
    shadowOffset: { height: 2, width: 0 }, // IOS
    shadowOpacity: 2, // IOS
    shadowRadius: 1, //IOS
  },
})
