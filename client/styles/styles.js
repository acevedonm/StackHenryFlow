import { StyleSheet } from 'react-native'
import { yellow, black, white, lightYellow, errorRed } from './globalsVariables'

export const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: `${white}`,
        color: `${white}`,
        textAlign: "center"
    },
    header: {
        top: 0,
        left: 0,
        width: "100%",
        height: 120,
        backgroundColor: `${white}`,
        overflow: "visible",
        alignItems: 'center',
        justifyContent: 'center',
    },
    headerIn: {
        top: 0,
        left: 0,
        width: "100%",
        height: 120,
        backgroundColor: `${white}`,
        overflow: "visible",
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    body: {
        textAlign: "center",
        backgroundColor: `${black}`,
        flex: 1,
        color: "white",
    },
    h1: {
        color: `${yellow}`,
        marginTop: 30,
        marginBottom: 20,
        fontSize: 30,
        fontWeight: "bold",
        textAlign: "center",
        zIndex: 10
    },
    h2: {
        color: `${white}`,
        fontSize: 20,
        textAlign: "center",
        marginTop: 15,
        marginBottom: 10
    },
    form: {
        flex: 1,
        padding: 20,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: "#00FFFF",
        borderRadius: 15,
        backgroundColor: "#00000005",
        width: "95%",
        marginLeft: "auto",
        marginRight: "auto",
        marginTop: "2%",
        marginBottom: "3%"
    },
    input: {
        borderRadius: 15,
        borderWidth: 1,
        borderColor: 'yellow',
        height: 30,
        width: '80%',
        marginTop: 5,
        justifyContent: "center",
        textAlign: "center",
        color: `${white}`
    },
    label: {
        color: `${white}`,
        marginTop: 15,
    },
    errorForm: {
        fontSize: 12, 
        color: `${errorRed}`,
        marginTop: 5,
        marginBottom: 15
    },
    boton: {
        color: `${black}`,
        fontWeight: "bold",
        backgroundColor: 'yellow',
        borderRadius: 100,
        height: 30,
        width: '80%',
        alignItems: "center",
        justifyContent: "center",
        marginTop: 20,
        marginBottom: 20
    },
    linkForm: {
        color: `${white}`,
        marginBottom: 10,
        marginTop: 5
    },
    imgHenry: {
        width: 200,
        height: 200,
        zIndex: 1,
    },
    inputdescription: {
        borderRadius: 15,
        borderWidth: 1,
        borderColor: 'yellow',
        height: 100,
        width: '80%',
        marginTop: 5,
        justifyContent: "center",
        textAlign: "center",
        color: `${white}`
    }
   
});