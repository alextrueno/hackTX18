import { StyleSheet, Platform, Dimensions } from 'react-native'

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    justifyContent: 'center',
    alignSelf: 'center',
    marginBottom: 15,
    position: 'relative',
    backgroundColor: 'rgba(52, 52, 52, 0.3)',
  },
  buttonText: {
    fontWeight: 'bold',
    fontSize: 14,
  },
  imgPreview: {
    width: 200,
    height: 200,
  },
});
