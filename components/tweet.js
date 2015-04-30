var React = require('react-native')

var {
  StyleSheet,
  PixelRatio,
  Text,
  View,
  Image
} = React

module.exports = React.createClass({
  displayName: 'Tweet',

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
    alignItems: 'stretch',
    paddingBottom: 5,
    paddingTop: 5
  },
  text: {
    fontFamily: 'Avenir'
  },
  avatar: {
    margin: 20,
    width: 60,
    height: 60,
    borderColor: 'violet',
    borderRadius: 30,
    borderWidth: 1 / PixelRatio.get()
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
    borderWidth: 1 / PixelRatio.get(),
    borderColor: 'transparent',
    borderBottomColor: 'violet'
  },
  username: {
    fontWeight: '900'
  }
})
