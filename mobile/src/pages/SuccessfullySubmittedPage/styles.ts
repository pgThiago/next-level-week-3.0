import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#39CC83',
        alignItems: 'center',
        justifyContent: 'center',
    },

    content: {
        width: '90%',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
    },

    GreenGirlIcon: {
        position: 'absolute',
        bottom: 10,
    },

    titleText: {
        fontFamily: 'Nunito_800ExtraBold',
        fontSize: 40,
        lineHeight: 45,
        textAlign: 'center',
        color: '#FFFFFF',
        
        position: 'absolute',
        top: 30,
    },

    contentText: {
        fontFamily: 'Nunito_600SemiBold',
        fontSize: 20,
        lineHeight: 30,
        textAlign: 'center',
        color: '#FFFFFF',

        position: 'absolute',
        top: 90,
    },

    button: {
        width: 120,
        height: 56,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#19C06D',

        position: 'absolute',
        top: 200,
    },

    buttonText: {
        fontFamily: 'Nunito_800ExtraBold',
        fontSize: 15,
        color: '#FFFFFF',
        lineHeight: 25,
    },
});
  
export default styles;