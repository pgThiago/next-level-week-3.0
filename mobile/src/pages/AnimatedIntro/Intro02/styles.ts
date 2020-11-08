import { StyleSheet, Dimensions } from 'react-native';


const styles = StyleSheet.create({
  container: {
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: 'rgba(21, 203, 205, 0.5)',
  position: 'relative',
  zIndex: 2,
  width: Dimensions.get('screen').width,
  height: Dimensions.get('screen').height,
},

cursorSelectHand: {
 
},

textImageContainer: {
  position: 'absolute',
  
  zIndex: 2,
},

textContent: {
  fontFamily: 'Nunito_800ExtraBold',
  fontSize: 24,
  lineHeight: 34,
  textAlign: 'center',
  color: '#FFFFFF',

},

mapIntro02: {
  width: Dimensions.get('screen').width,
  height: Dimensions.get('screen').height,
  position: 'absolute',
  zIndex: 1,
},
});
  
export default styles;

