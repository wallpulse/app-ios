var React = require('react-native')

var REQUEST_URL = 'https://rawgit.com/boennemann/94b0bdb3ffd493dcc6ba/raw/19bd933ce34bc71fb2a0b17547036fa969b8aa5a/timeline.json'

var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ListView,
  NavigatorIOS
} = React

var Timeline = require('./components/timeline')

var wallpulse = React.createClass({
  render () {
    return (
      <NavigatorIOS
        style={styles.container}
        barTintColor={'gold'}
        initialRoute={{
          title: 'wallpul.se',
          component: Timeline
        }}
      />
    )
  }
})

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  }
})

AppRegistry.registerComponent('wallpulse', () => wallpulse)
