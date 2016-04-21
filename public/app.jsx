var Greeter = React.createClass({
  getDefaultProps: function () {
    return {
      name: 'React',
      message: 'This is from a component'
    }
  },
  render: function () {
    var name = this.props.name
    var givenMessage = this.props.message
    return (
      <div>
        <h1>Hello, {name}!</h1>
        <p>{givenMessage}</p>
      </div>
    )
  }
})

var firstName = 'World'
var message = 'Welcome Home...'

ReactDOM.render(
  <Greeter name={firstName} message={message} />,
  document.getElementById('app')
)
