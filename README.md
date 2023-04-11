# react-native-simple-timeline

React Native Timeline



https://user-images.githubusercontent.com/30437682/228461243-f8c9d3b2-e8b3-427c-9964-4472ed665d69.mp4



## Installation

```sh
npm install react-native-simple-timeline
npm install --save-dev @types/react-native-simple-timeline
```

## Usage

```js
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


```
<br/>

## Properties
| Prop              | Type  | Description | Default |
|---|---|---|---|
| <b>data</b>       | Array | array of object for data. | `null` |
| <b>direction</b>  | String| choose "vertical" or horizontal. | vertical |
| <b>customStyle</b> | Object| Custom Style for the Timeline | `null` |

## See The Props

```js

 type Props = {
  data: Array<{ id: number, status: string, date: string }>,
  direction?: 'horizontal' | 'vertical',
  customStyle?: {
    container?: object,
    leftColumn?: object,
    rightColumn?: object,
    dotContainer?: object,
    dot?: object,
    connector?: object,
    dotConnectorHorizontalWrapper?: object,
    containerHorizontal?: object,
    dotContainerHorizontal?: object,
    dotHorizontal?: object,
    connectorHorizontal?: object,
    containerHorizontalText?: object,
    textStyle?: {
      txtStatus?: object,
      txtDate?: object
    }
  }
}
```
<br/>

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)
