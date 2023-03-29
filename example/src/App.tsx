import * as React from 'react';

import {SafeAreaView, View, Text } from 'react-native';
import Timeline from 'react-native-simple-timeline';

export default function App() {
  return (
    <SafeAreaView>
      <View style={{ marginTop: '20%', marginHorizontal: '5%' }}>
        <Text style={{ marginBottom: 20, fontWeight: 'bold', fontSize: 20 }}>Timeline Horizontal</Text>
        <Timeline data={data} direction='horizontal' />
      </View>
      <View style={{ marginTop: '20%', padding: 20 }}>
        <Text style={{ marginBottom: 20, fontWeight: 'bold', fontSize: 20 }}>Timeline Default</Text>
        <Timeline data={data} />
      </View>
    </SafeAreaView>
  )
}

const data = [
  {
    id: 0,
    status: 'On-Progress',
    date: '03-03-2023'
  },
  {
    id: 1,
    status: 'Paid',
    date: '04-03-2023'
  },
  {
    id: 3,
    status: 'Finish',
    date: '05-03-2023'
  },
  {
    id: 3,
    status: 'Finish',
    date: '05-03-2023'
  },
  {
    id: 3,
    status: 'Finish',
    date: '05-03-2023'
  },
]

