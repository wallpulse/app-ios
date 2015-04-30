var React = require('react-native')

var {
  StyleSheet,
  Text,
  View,
  SwitchIOS
} = React

module.exports = React.createClass({
  displayName: 'Settings',
  render () {
    return (<View style={styles.container}>
      {[0, 1, 2, 3, 4, 5].map((idx) => {
        return (<View style={styles.setting}>
          <Text style={styles.label}>Setting</Text>
          <SwitchIOS
            onTintColor='darkviolet'
            value={idx % 2}
          />
        </View>)
      })}
    </View>)
  }
})

var styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column'
  },
  setting: {
    height: 50,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderTopColor: 'transparent',
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: 'violet'
  },
  label: {
    flex: 1,
    fontSize: 18,
    fontFamily: 'Avenir'
  }
})
