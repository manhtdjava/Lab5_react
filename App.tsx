import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Provider } from 'react-redux'
import store from './store'
import Dem from './Dem'

const App = () => {
  return (
    <Provider store={store}>
      <Dem />
    </Provider>
  )
}

export default App

const styles = StyleSheet.create({})