import { DashboardType } from "./dashboard"

export async function getDataService(date: Date): Promise<DashboardType> {
  const mock = [
    {
      id: 1,
      user_id: 1,
      start_training: new Date('2023-02-07T12:00:00'),
      end_training: new Date('2023-02-07T13:00:00'),
      training_type: 'Fartlek',
    },
    {
      id: 2,
      user_id: 1,
      start_training: new Date('2023-02-08T12:00:00'),
      end_training: new Date('2023-02-08T13:00:00'),
      training_type: 'Funcional'
    },
    {
      id: 3,
      user_id: 1,
      start_training: new Date('2023-02-06T12:00:00'),
      end_training: new Date('2023-02-06T13:00:00'),
      training_type: 'Funcional'
    },
    
  ] as DashboardType[]
  
  await setTimeout(()=> {}, 15000)
  
  console.log('date', date)
  const data = mock.find((item) => item.start_training.toISOString() == date.toISOString())
  console.log('data', data)

  return data || mock[0]

}