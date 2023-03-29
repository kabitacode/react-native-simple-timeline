import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flex: 1
  },
  leftColumn: {
    zIndex: 999,
    position: 'relative',
    top: 15,
    alignItems: 'center', marginRight: 10
  },
  rightColumn: {
  },
  connector: {
    height: 40,
    width: 2,
    backgroundColor: 'gray'
  },
  dotContainer: {
    backgroundColor: '#D9F3FD',
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    width: 18,
    height: 18
  },
  dot: {
    backgroundColor: '#408E91',
    borderRadius: 50,
    width: 10,
    height: 10
  },
  txtStatus: {
    color: '#000000',
    fontSize: 16,
    marginBottom: 5,
    fontWeight: 'bold'
  },
  txtDate: {
    color: '#000000',
    fontSize: 14
  },


  containerHorizontal: {
    flex: 1,
    width: 100
  },
  connectorHorizontal: {
    flex: 1,
    height: 2,
    backgroundColor: 'gray'
  },
  dotContainerHorizontal: {
    backgroundColor: '#D9F3FD',
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    width: 20,
    height: 20
  },
  dotHorizontal: {
    backgroundColor: '#FFD966',
    borderRadius: 50,
    width: 10,
    height: 10
  },
  dotConnectorHorizontalWrapper: {
    flexDirection: 'row', alignItems: 'center', marginBottom: 10
  }
})