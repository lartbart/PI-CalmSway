import { Pressable, View, StyleSheet, Text } from "react-native";


export default function Apoio() {
    return (    
        <View style={styleApoio.container}>
            <Text style={styleApoio.titulo}>Comunidade de Apoio</Text>
            <Pressable style={styleApoio.botao}>
                <Text style={styleApoio.texto}>Assistência Social</Text>
            </Pressable>
            <Pressable style={styleApoio.botao} >
                <Text style={styleApoio.texto}>Psicologia</Text>
            </Pressable>
            <Pressable style={styleApoio.botao}>
                <Text style={styleApoio.texto}>Terapia Ocupacional</Text>
            </Pressable>
            <Pressable style={styleApoio.botao}>
                <Text style={styleApoio.texto}>Compartilhar com amigos</Text>
            </Pressable>
        </View>
    )
}

const styleApoio = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    botao: {
        margin: 10,
        marginTop: 20,
        backgroundColor: '#AFAEDF',
        opacity: 0.71,
        fontWeight: '700',
        lineHeight: 30,
        fontFamily: 'Poppins-SemiBold.ttf',
        fontSize: 18,
        borderRadius: 50,
        padding: 20,
        minWidth: 322
    },
    texto: {
        fontWeight: '700',
        fontFamily: 'Poppins-SemiBold.ttf',
        fontSize: 16,
        textAlign: 'center'
    },
    titulo: {
        fontWeight: '700',
        fontFamily: 'Poppins-SemiBold.ttf',
        fontSize: 28,
        textAlign: 'center'
    }
})

