import React, { Component } from 'react'

class AboutPage extends Component {
  render(){
    return (
      <div>
        About Page
        <h3>{this.props.params.name}</h3>
      </div>
    )
  }
}

export default AboutPage
