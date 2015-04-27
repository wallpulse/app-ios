var React = require('react-native')
var Router = require('react-native-router')

var {
  AppRegistry,
  StyleSheet,
  Text
} = React

var Timeline = require('./components/timeline')

var SettingsIcon = React.createClass({
  switchToSettings () {
    this.props.toRoute({
      name: 'Settings',
      component: SettingsIcon
    })
  },

  render () {
    return (<Text onPress={this.switchToSettings}>
      Settings
    </Text>)
  }
})

var wallpulse = React.createClass({
  render() {
    return (<Router
      firstRoute={{
        name: 'wallpul.se',
        component: Timeline,
        rightCorner: SettingsIcon
      }}
      style={styles.container}
      headerStyle={{
        backgroundColor: 'violet'
      }}
      titleStyle={{
        fontFamily: 'Avenir',
        fontWeight: 900
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
