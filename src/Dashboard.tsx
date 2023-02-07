import { useEffect, useState } from "react"
import { Text, TouchableOpacity, View } from "react-native"
import { getData } from "./controller"

export type DashboardType = {
  id: number
  user_id: number
  start_training: Date
  end_training: Date
  training_type: 'Funcional' | 'Fartlek' | 'Descanso' | 'F. Controlado'
}

export default function Dashboard() {
  const [dashboardData, setDashboardData] = useState({
    load: false
  } as DashboardType & {load: boolean})
  const [date, setDate] = useState(new Date('2023-02-07T12:00:00'))

  async function fetchData() {
    const data = await getData(date)
    setDashboardData({...data, load: true})
  } 
  useEffect(() => {
    fetchData().catch(erro => console.log(erro))
  }, [date])

  if(!dashboardData.load) {
    return(
    <View>
      <Text>Loading</Text>
    </View>
    )
  }

  function handleDate(date: Date){
    setDate(date)
  }

  const {
    id,
    user_id,
    start_training,
    end_training,
    training_type
  } = dashboardData;

  return (
    <View>
      <View style={{
        paddingTop: 64,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 12,
        paddingEnd: 12,
      }}>
        <TouchableOpacity 
          onPress={() => handleDate(new Date('2023-02-06T12:00:00'))}
        >
          <Text style={{fontSize: 50}}>{'<'}</Text>
        </TouchableOpacity>
        
        <Text style={{fontSize: 16, textAlignVertical: 'center'}}>
          {start_training.toString()}
        </Text>
        
        <TouchableOpacity 
          onPress={() => handleDate(new Date('2023-02-08T12:00:00'))}
        >
          <Text style={{fontSize: 50}}>{'>'}</Text>
        </TouchableOpacity>
      </View>
      <Text>{id}</Text>
      <Text>{user_id}</Text>
      <Text>{end_training.toString()}</Text>
      <Text>{training_type}</Text>
    </View>
  )
}