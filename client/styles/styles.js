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
        backgroundColor: `${white}`,
        display: 'flex',
        flexDirection: "row",
        justifyContent: "space-between"
    },
    body: {
        textAlign: "center",
        backgroundColor: `${black}`,
        color: `${white}`,
        flex: 1,
    },
    h3: {
        color: `${yellow}`,
        fontSize: 18,
        marginVertical: 15,
        fontWeight: "bold"
    },
    postList :{
        color: `${white}`,
        fontSize: 15
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
    welcome: {
        color: `${black}`,
        marginTop: 30,
        marginBottom: 20,
        marginRight: 10,
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
        alignSelf: "center",
        width: 200,
        height: 100,
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
    },
    containerInputComment:{
        borderRadius:10,
        borderColor:'yellow',
        backgroundColor:'black',
        padding:8,
        margin:10,
        widh:200,
        height:100,
        color:'white'
    },
    comment:{
        padding:8,
        margin:10,
        widh:200,
        height:100,
        color:'white'
    },
   
});