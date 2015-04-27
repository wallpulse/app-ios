var React = require('react-native')

var REQUEST_URL = 'http://dev.wallpul.se/tweets?s=jsunconf'

var {
  StyleSheet,
  Text,
  View,
  ListView
} = React

var Tweet = require('./tweet')

module.exports = React.createClass({
  getInitialState () {
    return {
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1.id !== row2.id
      }),
      loaded: false
    }
  },

  componentDidMount () {
    this.fetchData()
  },

  fetchData () {
    fetch(REQUEST_URL)

    .then((res) => res.json())
    .then((data) => {
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(data),
        loaded: true
      })
    })
    .done()
  },

  renderLoadingView () {
    return (<View>
      <Text style={styles.loading}>Loading...</Text>
    </View>)
  },

  renderTweet (tweet) {
    return <Tweet data={tweet} />
  },

  renderTweets () {
    return (
      <ListView
        dataSource={this.state.dataSource}
        renderRow={this.renderTweet}
        style={styles.list}
      />
    )
  },

  render () {
    if (this.state.loaded) return this.renderTweets()
    return this.renderLoadingView()
  }
})

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  list: {
    flex: 1
  },
  loading: {
    color: 'white',
    fontSize: 30
  }
})
