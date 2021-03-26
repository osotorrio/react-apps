import React, {Component} from 'react'
import html5QrcodeScanner from 'html5-qrcode'

class App extends Component {
  componentDidMount() {
      const verbose = true;

      const config = {
        fps: 2,
        qrBox: 250,
        disableFlip: false,
      };

      // Suceess callback is required.
      if (!(this.props.qrCodeSuccessCallback )) {
          throw 'qrCodeSuccessCallback is required callback.';
      }

      this.html5QrcodeScanner = new Html5QrcodeScanner('qr-code-full-region', config, verbose);
      
      this.html5QrcodeScanner.render(
          this.qrCodeSuccessCallback, this.qrCodeErrorCallback);
  }

  qrCodeSuccessCallback(a, b, c, d, e){
    debugger;
  }

  qrCodeErrorCallback(a, b, c, d, e){
      debugger;
  }

  componentWillUnmount() {
      // TODO(mebjas): See if there is a better way to handle
      //  promise in `componentWillUnmount`.
      this.html5QrcodeScanner.clear().catch(error => {
          console.error('Failed to clear html5QrcodeScanner. ', error);
      });
  }

  render() {
      return <div id={'qr-code-full-region'} />;
  }
}

export default App;
