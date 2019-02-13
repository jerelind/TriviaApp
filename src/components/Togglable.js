import React from 'react'
import {Button} from 'semantic-ui-react'

class Togglable extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        visible: false
      }
    }
  
    toggleVisibility = () => {
      this.setState({visible: !this.state.visible})
    }
  
    render() {
      const hideWhenVisible = { display: this.state.visible ? 'none' : '' }
      const showWhenVisible = { display: this.state.visible ? '' : 'none' }
  
      return (
        <div>
          <div style={hideWhenVisible}>
            <Button style={genQButtonStyle} size="big" color="blue" onClick={this.toggleVisibility}>{this.props.buttonLabel}</Button>
          </div>
          <div style={showWhenVisible}>
            {this.props.children}<br/>
            <Button style={genQButtonStyle} size="big" color="red" onClick={this.toggleVisibility}>Hide</Button>
          </div>
        </div>
      )
    }
  }

  const genQButtonStyle = {
    boxShadow: "1px 1px black",
    textAlign: "center",
    fontFamily: "Anton"
}

  export default Togglable