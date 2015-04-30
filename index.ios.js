var React = require('react-native')
var Router = require('react-native-router')

var {
  AppRegistry,
  StyleSheet
} = React

var Timeline = require('./components/timeline')
var SettingsIcon = require('./components/settings-icon')

var wallpulse = React.createClass({
  displayName: 'wallpulse',
  render () {
    return (<Router
      firstRoute={{
        name: 'wallpul.se',
        component: Timeline,
        rightCorner: SettingsIcon
      }}
      style={styles.container}
      headerStyle={{
        backgroundColor: 'darkviolet'
      }}
      titleStyle={{
        fontFamily: 'Avenir',
        fontWeight: '900'
      }}
    />)
  }
})

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  }
})

AppRegistry.registerComponent('wallpulse', () => wallpulse)
