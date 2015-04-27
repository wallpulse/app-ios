var React = require('react-native')

var REQUEST_URL = 'https://rawgit.com/boennemann/94b0bdb3ffd493dcc6ba/raw/19bd933ce34bc71fb2a0b17547036fa969b8aa5a/timeline.json'

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
