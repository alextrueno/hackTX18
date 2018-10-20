import React from 'react';
import { Button, Image, View } from 'react-native';
import { ImagePicker, Permissions } from 'expo';

export default class ImagePickerExample extends React.Component {
  state = {
    image: null,
  };

  async componentWillMount() {
    await Permissions.askAsync(Permissions.CAMERA);
    await Permissions.askAsync(Permissions.CAMERA_ROLL);
  }

  render() {
    let { image } = this.state;

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button
          title="Pick an image from camera roll"
          onPress={this._pickImage}
        />
        <Button
          title="Take a photo"
          onPress={this._takePhoto}
        />
        {image &&
          <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
      </View>
    );
  }

  _pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [4, 3],
    });

    console.log(result);

    if (!result.cancelled) {
      this.setState({ image: result.uri });
    }
  };

  _takePhoto = async () => {
    let result = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
    });

    console.log(result);

    if (!result.cancelled) {
      this.setState({ image: result.uri });
    }
  }
}
