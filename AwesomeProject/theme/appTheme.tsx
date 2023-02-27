import { StyleSheet } from "react-native";

 const styles = StyleSheet.create({
    fondo : {
        flex:1,
        backgroundColor:'black',
        paddingHorizontal:20,
        justifyContent: "flex-end"
        
    },
    resultado : {
        color : 'white',
        fontSize: 60,
        textAlign:'right',

    },
    resultadoChico : {
        color : 'rgba(255,255,255,0.5)',
        fontSize: 40,
        textAlign:'right',

    },
    boton : {
        height:80,
        width:80,
        backgroundColor: '#9B9B9B',
        borderRadius: 100,
        justifyContent:'center',
        marginHorizontal:10,
        marginVertical:10
        
    },
    botonTexto: {
        textAlign:'center',
        padding: 20,
        fontSize:25,
        color: 'black',
        fontWeight: "300"
    },
    fila: {
        flexDirection: 'row',
        justifyContent:'center',
        
    }
})
export default styles