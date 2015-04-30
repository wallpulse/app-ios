var React = require('react-native')

var {
  StyleSheet,
  Text,
  TextInput,
  View,
  ListView,
  ActivityIndicatorIOS
} = React

var Tweet = require('./tweet')

module.exports = React.createClass({
  getInitialState () {
    return {
      searchTerm: '#jsunconf',
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1.id !== row2.id
      }),
      loaded: false
    }
  },

  componentDidMount () {
    this.fetchData(this.state.searchTerm)
  },

  fetchData (searchTerm) {
    fetch(getRequestURL(searchTerm))

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
    return (<View style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <ActivityIndicatorIOS size='large' color='darkviolet'/>
    </View>)
  },

  renderTweet (tweet) {
    return <Tweet data={tweet} />
  },

  shouldComponentUpdate (nextProps, nextState) {
    if (this.state.searchTerm !== nextState.searchTerm) {
      this.fetchData(nextState.searchTerm)
    }
    return true
  },

  renderHeader () {
    return (<TextInput
      value={this.state.searchTerm}
      style={{
        flex: 1,
        backgroundColor: 'violet',
        height: 30,
        paddingHorizontal: 20,
        paddingVertical: 10,
        color: 'white',
        fontSize: 30,
        fontWeight: '900'
      }}
      onSubmitEditing={(event) => {
        this.setState({
          searchTerm: event.nativeEvent.text
        })
      }}
    />)
  },

  renderTweets () {
    return (
      <ListView
        dataSource={this.state.dataSource}
        renderRow={this.renderTweet}
        renderHeader={this.renderHeader}
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
  }
})

function getRequestURL (searchTerm) {
  return `http://dev.wallpul.se/tweets?s=${encodeURIComponent(searchTerm)}`
}
