var React = require('react-native')

var {
  StyleSheet,
  Text,
  View,
  Image
} = React

module.exports = React.createClass({
  propTypes: {
    data: React.PropTypes.object
  },

  render () {
    var tweet = this.props.data
    var user = tweet.user
    var avatar = {
      uri: user.profile_image_url_https
    }
    return (
      <View style={styles.view}>
        <Image source={avatar} style={styles.avatar}/>
        <View style={styles.textContainer}>
          <Text style={[styles.text, styles.username]}>
            {user.screen_name}
          </Text>
          <Text style={styles.text}>{tweet.text}</Text>
        </View>
      </View>
    )
  }
})

var styles = StyleSheet.create({
  view: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'darkgray'
  },
  text: {
    fontFamily: 'Avenir'
  },
  avatar: {
    margin: 20,
    width: 60,
    height: 60,
    borderRadius: 30,
    borderWidth: 1
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  username: {
    fontWeight: '900'
  }
})
