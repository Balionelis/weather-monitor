import { StyleSheet } from 'react-native';
 
export const styles = StyleSheet.create({
 
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    centeredContent: {
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#31255a',
        marginBottom: 20,
    },
    input: {
        height: 40,
        width: '80%',
        borderColor: '#31255a',
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
        marginBottom: 20,
        color: '#31255a',
    },
    button: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#31255a',
        padding: 10,
        borderRadius: 5,
    },
    buttonText: {
        color: 'white',
        marginLeft: 10,
    },
    weatherInfo: {
        marginTop: 20,
        alignItems: 'center',
    },
    heading: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#31255a',
        marginTop: 10,
    },
    subheading: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#31255a',
        marginTop: 10,
    },
    weatherText: {
        color: '#31255a',
        fontSize: 16,
        marginBottom: 8,
    },
    monitor: {
        width: 30,
        height: 30,
        bottom: 310,
        right: 160,
        tintColor: '#31255a'
    }
});