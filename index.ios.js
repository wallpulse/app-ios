var React = require('react-native')
var Router = require('react-native-router')

var {
  AppRegistry,
  StyleSheet,
  TouchableHighlight
} = React

var Timeline = require('./components/timeline')
var SettingsScreen = require('./components/settingsscreen')
var Icon = require('FAKIconImage')

var SettingsIcon = React.createClass({
  switchToSettings () {
    this.props.toRoute({
      name: 'Settings',
      component: SettingsScreen
    })
  },

  render () {
    return (
      <TouchableHighlight
        onPress={this.switchToSettings}
        underlayColor='transparent'
        activeOpacity={0.5}
      >
        <Icon
          name='ion|ios-gear-outline'
          size={30}
          color='white'
          style={styles.icon}
        />
      </TouchableHighlight>)
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
  },
  icon: {
    marginRight: 5,
    width: 44,
    height: 44
  }
})

AppRegistry.registerComponent('wallpulse', () => wallpulse)
