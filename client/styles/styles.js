import { StyleSheet } from 'react-native'
import { yellow, black, white, errorRed } from './globalsVariables'

export const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: `${white}`,
        color: `${white}`,
        textAlign: "center"
    },
    headerOut: {
        top: 0,
        left: 0,
        width: "100%",
        backgroundColor: `${white}`,
    },
    header: {
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
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
        paddingVertical: 10
    },
    post :{
        backgroundColor: black,
        borderRadius: 10,
        paddingHorizontal: 10,
        paddingVertical: 5,
        marginBottom: 10,
        borderColor: yellow,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "flex-start"
    },
    postList :{
        color: white,
        fontSize: 15,
        alignSelf: "center",
        paddingVertical: 10
    },
    postTag: {
        fontWeight: "bold",
        backgroundColor: `${yellow}`,
        borderRadius: 100,
        paddingHorizontal: 10,
        alignSelf: "center"
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
    h3: {
        color: black,
        fontSize: 15,
        marginVertical: 10,
        fontWeight: "bold"
    },
    h4: {
        color: white,
        fontSize: 15,
        marginVertical: 10,
        fontWeight: "bold"
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
    formNewPost: {
        flex: 1,
        padding: 20,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: "#00FFFF",
        borderRadius: 15,
        backgroundColor: `${white}`,
        width: "90%",
        height: "100%",
        minHeight: 300 ,
        marginLeft: "auto",
        marginRight: "auto",
        marginVertical: "30%",
        padding: 20,
        borderRadius: 10,
    },
    input: {
        borderRadius: 15,
        borderWidth: 1,
        borderColor: yellow,
        height: 30,
        width: '80%',
        marginTop: 5,
        justifyContent: "center",
        textAlign: "center",
        color: `${white}`
    },
    inputNewPost: {
        borderRadius: 8,
        borderWidth: 1,
        borderColor: `${black}`,
        height: 30,
        width: '80%',
        marginVertical: 5,
        justifyContent: "center",
        textAlign: "center",
        padding: 5
    },
    inputDescription: {
        borderRadius: 10,
        borderWidth: 1,
        borderColor: `${black}`,
        height: 100,
        width: '80%',
        marginVertical: 5,
        justifyContent: "center",
        textAlign: "center",
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
        backgroundColor: `${yellow}`,
        borderRadius: 100,
        height: 30,
        width: '80%',
        justifyContent: "center",
        marginTop: 20,
        marginBottom: 20
    },
    linkForm: {
        color: `${white}`,
        marginBottom: 10,
        marginTop: 5
    },
    card: {
        backgroundColor: `${white}`,
        width: "80%",
        display: "flex",
        justifyContent: "center",
        alignItems:"center",
        marginVertical: 30,
        padding: 20,
        borderRadius: 10,
    },
    cardPostList: {
        backgroundColor: `${white}`,
        width: "85%",
        display: "flex",
        justifyContent: "center",
        marginVertical: 30,
        padding: 20,
        borderRadius: 10,
    },
    imgHenry: {
        alignSelf: "center",
        width: 200,
        height: 100,
        zIndex: 1,
        marginLeft: -50
    },
    imgHenryOut: {
        alignSelf: "center",
        width: 200,
        height: 100,
        zIndex: 1,
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