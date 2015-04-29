var React = require('react-native')
var Router = require('react-native-router')

var {
  AppRegistry,
  StyleSheet,
  Image,
  TouchableHighlight
} = React

var Timeline = require('./components/timeline')

var icon = {uri: 'https://www.dropbox.com/s/l9tu3uum63dxwqk/settings.png?dl=1'}

var SettingsIcon = React.createClass({
  switchToSettings () {
    this.props.toRoute({
      name: 'Settings',
      component: SettingsIcon
    })
  },

  render () {
    return (
      <TouchableHighlight onPress={this.switchToSettings}>
        <Image
          source={icon}
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
        backgroundColor: 'violet'
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
    marginRight: 20,
    width: 20,
    height: 20,
  }
})

AppRegistry.registerComponent('wallpulse', () => wallpulse)
