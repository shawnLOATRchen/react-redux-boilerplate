import React, { Component } from 'react'

export default class Home extends Component {
  constructor(){
    super();
  }

  render(){
    return (
      <div>Home page 
        <img src="/assets/img/download.jpeg"/>
        {env.debug && <span>is debug mode {env.debug}</span>} 
      </div>
    )
  }
}