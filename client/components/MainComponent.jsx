const React = require('react');

const SearchInput = require('./search/SearchInputComponent.jsx').default

class Main extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      query: ''
    }
  }
  render () {
    return (
      <div id="main-window" className="row">
        <div className="col-xs-12 offset-xs-0 col-md-10 offset-md-1">
          <SearchInput query={this.state.query} changeHandler={this._queryChangeHandler} />
        </div>
      </div>
    );
  }
  _queryChangeHandler = (e) => {
    return this.setState({
      query: e.target.value
    })
  }
}

export default Main;
