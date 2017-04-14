const React = require('react');

class SearchInput extends React.Component {
  constructor (props) {
    super(props);
  }
  render () {
    return (
      <div id="search-input-container" className="row">
        <div className="col-xs-12 offset-xs-0 col-md-10 offset-md-1">
          <div id="search-input">
            <input type="text" placeholder="Search for products..." value={this.props.query} onChange={this.props.changeHandler}/>
          </div>
        </div>
      </div>
    );
  }
}

export default SearchInput;
