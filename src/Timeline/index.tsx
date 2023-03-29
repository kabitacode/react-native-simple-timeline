/**
 * Simple React Native Timeline
 * https://github.com/kabitacode/react-native-simple-timeline
 *
 * @format
 */

import React from 'react'
import { View, Text, FlatList, ScrollView } from 'react-native'

import { styles } from "./style";

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

function Timeline({ data, direction, customStyle = {} }: Props) {
  const {
    container = {},
    leftColumn = {},
    rightColumn = {},
    dotContainer = {},
    dot = {},
    connector = {},
    dotConnectorHorizontalWrapper = {},
    containerHorizontal = {},
    dotContainerHorizontal = {},
    dotHorizontal = {},
    connectorHorizontal = {},
    textStyle = {}
  } = customStyle;

  const renderItem = ({ item, index }: any) => {
    let lastIndex = index === data.length - 1

    return (
      <View key={index} style={[styles.container, container]}>
        <View style={[styles.leftColumn, leftColumn]}>
          <View style={[styles.dotContainer, dotContainer]}>
            <View style={[styles.dot, dot]} />
          </View>
          {!lastIndex && <View style={[styles.connector, connector]} />}
        </View>
        <View style={[styles.rightColumn, rightColumn]}>
          <Text style={[styles.txtStatus, textStyle.txtStatus]}>{item?.status}</Text>
          <Text style={[styles.txtDate, textStyle.txtDate]}>{item?.date}</Text>
        </View>
      </View>
    )
  }

  if (direction == 'horizontal') {
    return (
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-around', height: 100 }}>
          {
            data.map((item, index) => {
              let lastIndex = index === data.length - 1

              return (
                <View key={index} style={[styles.containerHorizontal, containerHorizontal]}>
                  <View style={[styles.dotConnectorHorizontalWrapper, dotConnectorHorizontalWrapper]}>
                    <View style={[styles.dotContainerHorizontal, dotContainerHorizontal]}>
                      <View style={[styles.dotHorizontal, dotHorizontal]} />
                    </View>
                    {!lastIndex && <View style={[styles.connectorHorizontal, connectorHorizontal]} />}
                  </View>
                  <View style={customStyle.containerHorizontalText}>
                    <Text style={[styles.txtStatus, textStyle.txtStatus]}>{item?.status}</Text>
                    <Text style={[styles.txtDate, textStyle.txtDate]}>{item?.date}</Text>
                  </View>
                </View>
              )

            })
          }
        </View>
      </ScrollView>
    )
  } else {
    return (
      <FlatList
        data={data}
        renderItem={renderItem}
      />
    )
  }
}

export default Timeline
