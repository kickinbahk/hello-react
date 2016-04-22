/* global React, ReactDOM */

var Greeter = React.createClass({
  getDefaultProps: function () {
    return {
      name: 'React',
      message: 'This is from a component'
    }
  },
  getInitialState: function () {
    return {
      name: this.props.name
    }
  },
  onButtonClick: function (e) {
    e.preventDefault()

    var name = this.refs.name.value

    this.setState({
      name: name
    })
  },
  render: function () {
    var name = this.state.name
    var message = this.props.message
    return (
      <div>
        <h1>Hello, {name}!</h1>
        <p>{message}</p>

        <form onSubmit={this.onButtonClick}>
          <input type='text' ref='name' />
          <button>Set Name</button>
        </form>
      </div>
    )
  }
})

var firstName = 'World'
var setMessage = 'This is the paragraph'

ReactDOM.render(
  <Greeter name={firstName} message={setMessage} />,
  document.getElementById('app')
)
