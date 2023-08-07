import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#131016',
    flex: 1,
    padding: 24
  },
  eventName: {
    color: '#FDFCFE',
    marginTop: 48,
    fontSize: 24
  },
  eventDate: {
    color: '#6B6B6B',
    fontSize: 20
  },
  input: {
    height: 50,
    backgroundColor: '#1F1E25',
    borderRadius: 8,
    color: '#FDFCFE',
    padding: 16,
    fontSize: 16,
    flex: 1
  },
  buttonText: {
    color: '#FFF',
    fontSize: 16
  },
  button: {
    width: 50,
    height: 50,
    backgroundColor: '#31CF67',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center'
  },
  form: {
    width: '100%',
    marginTop: 36,
    flexDirection: 'row',
    marginBottom: 42,
    gap: 8
  },
  emptyList: {
    color: '#FDFCFE'
  },
  clearButton: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 5,
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#E23C44',
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'flex-end'
  },
  clearText: {
    color: '#E23C44',
    fontSize: 16
  },
  totalWraper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24
  }
})
