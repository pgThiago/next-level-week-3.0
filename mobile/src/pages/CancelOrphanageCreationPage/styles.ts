import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FF669D',
        alignItems: 'center',
        justifyContent: 'center',
    },

    content: {
        width: '90%',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
    },

    closeButtonBackground: {
        width: 75,
        height: 75,
        borderRadius: 20,
        backgroundColor: '#FFF',
        
        alignItems: 'center',
        justifyContent: 'center',

        position: 'absolute',
        bottom: 70,
    },

    closeButton: {
    },

    titleText: {
        fontFamily: 'Nunito_800ExtraBold',
        fontSize: 32,
        lineHeight: 34,
        textAlign: 'center',
        color: '#FFFFFF',
        
        position: 'absolute',
        bottom: 10,
    },

    contentText: {
        fontFamily: 'Nunito_600SemiBold',
        fontSize: 20,
        lineHeight: 30,
        textAlign: 'center',
        color: '#FFFFFF',

        position: 'absolute',
        top: 10,
    },

    buttonsContainer: {
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',

        position: 'absolute',
        top: 100,
    },

    yesButton: {
        width: 120,
        height: 56,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FF669D',
        
        borderWidth: 2,
        borderColor: '#EA578C',
        margin: 7,
    },

    noButton: {
        width: 120,
        height: 56,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FF669D',

        borderWidth: 2,
        borderColor: '#EA578C',
        margin: 7,
    },

    buttonText: {
        fontFamily: 'Nunito_800ExtraBold',
        fontSize: 15,
        color: '#FFFFFF',
        lineHeight: 25,
    },

    selectedButton: {
        backgroundColor: '#D6487B',
    },
});
  
export default styles;