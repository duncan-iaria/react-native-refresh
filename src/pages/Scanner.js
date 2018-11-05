import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Camera, BarCodeScanner, Permissions } from 'expo';

class Scanner extends Component {
  constructor(props) {
    super(props);
    this.state = {
      permissionsGranted: false,
    };
  }

  async componentWillMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    console.log('status — ', status);
    this.setState({ permissionsGranted: status === 'granted' });
  }

  onReadCode = tEvent => {
    console.log('tEvent — ', tEvent);
    // console.log('event data — ', tEvent.data);
    // console.log('event type — ', tEvent.type);
  };

  cameraView = () => {
    return (
      <View style={{ flex: 1, backgroundColor: 'green' }}>
        <Text>Scanner page.</Text>
        <Camera
          type={Camera.Constants.Type.back}
          useCamera2Api
          barCodeScannerSettings={{
            barcodeTypes: [
              ...BarCodeScanner.Constants.BarCodeType,
              // BarCodeScanner.Constants.BarCodeType.code128,
              // BarCodeScanner.Constants.BarCodeType.code93,
            ],
          }}
          onBarCodeScanned={this.onReadCode}
          style={{ flex: 1 }}
        >
          <View
            style={{
              flex: 1,
              // flexDirection: 'column',
              backgroundColor: 'transparent',
              flexDirection: 'row',
            }}
          >
            <Text>Camera?</Text>
          </View>
        </Camera>
      </View>
    );
  };

  render() {
    const { permissionsGranted } = this.state;
    console.log('permissionsGranted — ', permissionsGranted);
    return permissionsGranted ? this.cameraView() : <Text>no permissions</Text>;
  }
}

export default Scanner;
