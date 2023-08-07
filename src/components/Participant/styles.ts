import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1F1E25',
    width: '100%',
    flexDirection: 'row',
    borderRadius: 5,
    alignItems: 'center',
    paddingLeft: 16,
    marginBottom: 12
  },
  name: {
    color: '#FDFCFE',
    flex: 1,
    fontSize: 16
  },
  buttonText: {
    color: '#FFF',
    fontSize: 16
  },
  button: {
    width: 50,
    height: 50,
    backgroundColor: '#E23C44',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
