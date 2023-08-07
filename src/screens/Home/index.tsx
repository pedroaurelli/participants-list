import { styles } from './styles'
import { View, Text, TextInput, TouchableOpacity, ScrollView, FlatList, Alert } from 'react-native'
import { Participant } from '../../components/Participant'
import { useState } from 'react'

export function Home () {
  const date = new Date();
  const [participants, setParticipants] = useState<string[]>([])
  const [newParticipant, setNewParticipant] = useState<string>('')

  const handleRemoveParticipant = (user: string) => {
    Alert.alert('Remover participante', `Deseja remover ${user} do evento?`, [
      {
        text: 'Sim',
        onPress: () => {
          setParticipants(prevState => prevState.filter(participant => participant !== user))
          Alert.alert('Participante removido', `${user} foi removido do evento`)
        }
      },
      {
        text: 'Não'
       }
    ])
  }

  const handleAddParticipant = () => {
    if (participants.includes(newParticipant)) {
      return Alert.alert('Participante já cadastrado', `${newParticipant} já foi adicionado ao evento`)
    }

    setParticipants(prevState => [...prevState, newParticipant])
    setNewParticipant('')
  }

  const handleClear = () => {
    Alert.alert('Limpar participantes', 'Deseja remover todos os participantes? Essa ação é irreversível', [
      { text: 'Sim', onPress: () => setParticipants([]) },
      { text: 'Não' }
    ])
  }


  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>
        Nome do evento
      </Text>
      <Text style={styles.eventDate}>
        {date.toDateString()}
      </Text>
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder='Nome do participante'
          placeholderTextColor={'#6B6B6B'}
          onChangeText={setNewParticipant}
          value={newParticipant}
        />
        <TouchableOpacity style={styles.button} onPress={handleAddParticipant}>
          <Text style={styles.buttonText}>
            +
          </Text>
        </TouchableOpacity>
      </View>
      {participants.length != 0 && (
        <View style={styles.totalWraper}>
          <Text style={styles.emptyList}>
            Total de participantes: {participants.length}
          </Text>
          <TouchableOpacity style={styles.clearButton} onPress={handleClear}>
            <Text style={styles.clearText}>
              Limpar
            </Text>
          </TouchableOpacity>
        </View>
      )}
      <FlatList
        data={participants}
        keyExtractor={item => item}
        renderItem={({ item }) => (
          <Participant
            user={item}
            onRemove={() => handleRemoveParticipant(item)}
          />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <Text style={styles.emptyList}>
            Nenhum participante cadastrado
          </Text>
        )}
      />
    </View>
  )
}
