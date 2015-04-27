import React from 'react-native'
import Tweet from './components/tweet.jsx'

const {AppRegistry, NavigatorIOS} = React

const styles = {
  flex: 1,
  backgroundColor: 'white'
}
const app = React.createClass({
  displayName: 'app',
  render () {
    return (
      <NavigatorIOS
        style={styles}
        initialRoute={{
          title: 'wallpul.se',
          component: Tweet
        }} />
    )
  }
})

AppRegistry.registerComponent('example', () => app)
