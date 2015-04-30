var React = require('react-native')

var SettingsScreen = require('./settings-screen')
var Icon = require('FAKIconImage')

var {
  StyleSheet,
  TouchableHighlight
} = React

var SettingsIcon = React.createClass({
  displayName: 'Settings Icon',

  propTypes: {
    toRoute: React.PropTypes.object
  },

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

var styles = StyleSheet.create({
  icon: {
    marginRight: 5,
    width: 44,
    height: 44
  }
})

module.exports = SettingsIcon
