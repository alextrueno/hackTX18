import React from 'react';
import { Image } from 'react-native'
import { Text, Button, Container, Content } from 'native-base'
import { ImagePicker, Permissions, LinearGradient } from 'expo';

import styles from '../styles/HomeScreenStyles'

export default class ImagePickerExample extends React.Component {
  static navigationOptions = {
    headerVisible: false,
  };

  state = {
    image: null,
  };

  async componentWillMount() {
    // Permissions for accessing photo library and camera
    await Permissions.askAsync(Permissions.CAMERA);
    await Permissions.askAsync(Permissions.CAMERA_ROLL);

    // Load fonts required by Expo
    await Expo.Font.loadAsync({
    'Roboto': require('native-base/Fonts/Roboto.ttf'),
    'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
  });
  }

  render() {
    let { image } = this.state;
    return (
      <Container>
        <LinearGradient colors={['#659999', '#f4791f']} style={styles.container}>
          <Button onPress={this._pickImage} style={styles.button}>
          <Text style={styles.buttonText}>Choose an image from library</Text>
          </Button>
          <Button onPress={this._takePhoto} style={styles.button}>
          <Text style={styles.buttonText}>Take a Photo</Text>
          </Button>
          {image &&
            <Image source={{ uri: image }} style={styles.imgPreview} />}
        </LinearGradient>
      </Container>
    );
  }

  _pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync();

    console.log(result);

    if (!result.cancelled) {
      this.setState({ image: result.uri });
    }
  };

  _takePhoto = async () => {
    let result = await ImagePicker.launchCameraAsync();

    console.log(result);

    if (!result.cancelled) {
      this.setState({ image: result.uri });
    }
  }
/*
  readOcrImage(sourceImageUrl, responseTextArea) {
    // Request parameters.
    var params = {
        "language": "unk",
        "detectOrientation ": "true",
    };

    // Perform the REST API call.
    $.ajax({
        url: common.uriBasePreRegion +
             $("#subscriptionRegionSelect").val() +
             common.uriBasePostRegion +
             common.uriBaseOcr +
             "?" +
             $.param(params),

        // Request headers.
        beforeSend: function(jqXHR){
            jqXHR.setRequestHeader("Content-Type","application/json");
            jqXHR.setRequestHeader("Ocp-Apim-Subscription-Key",
                encodeURIComponent($("#subscriptionKeyInput").val()));
        },

        type: "POST",

        // Request body.
        data: '{"url": ' + '"' + sourceImageUrl + '"}',
    })

    .done(function(data) {
        // Show formatted JSON on webpage.
        responseTextArea.val(JSON.stringify(data, null, 2));
    })

    .fail(function(jqXHR, textStatus, errorThrown) {
        // Put the JSON description into the text area.
        responseTextArea.val(JSON.stringify(jqXHR, null, 2));

        // Display error message.
        var errorString = (errorThrown === "") ? "Error. " : errorThrown + " (" + jqXHR.status + "): ";
        errorString += (jqXHR.responseText === "") ? "" : (jQuery.parseJSON(jqXHR.responseText).message) ?
            jQuery.parseJSON(jqXHR.responseText).message : jQuery.parseJSON(jqXHR.responseText).error.message;
        alert(errorString);
    });
  }
}
*/
}
