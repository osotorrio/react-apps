//import React, {Component} from 'react'
import QrReader from 'react-qr-scanner'

import './App.css';
import { Component } from 'react';

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      result: 'Hold QR Code Steady and Clear to Scan',
    }
    this.handleScan = this.handleScan.bind(this);
  }

  handleScan(data){
    if (data) {
      this.setState({
        result: data.text,
      });
    }
  }

  handleError(error){
      console.error(error);
  }

  render(){
    const previewStyle = {
      height: 700,
      width: 1000,
      display: 'flex',
      justifyContent: 'center'
    }

    const camStyle = {
      display: 'flex',
      justifyContent: 'center',
      marginTop: '-50px'
    }

    const textStyle = {
      fontSize: '30px',
      textAlign: 'center',
    }

    return (
      <div>
          <div style={camStyle}>
              <QrReader
                  delay={1000}
                  style={previewStyle}
                  onError={this.handleError}
                  onScan={this.handleScan}
              />
          </div>
          <div style={textStyle}>
              {this.state.result}
          </div>
      </div>
      );
  }
}

export default App;
