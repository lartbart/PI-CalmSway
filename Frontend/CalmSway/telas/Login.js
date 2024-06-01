import { useState } from "react";
import { View , Text, Pressable, StyleSheet, TextInput} from "react-native";



export default function Login({navigation}) {

    const [CPF, setCPF] = useState('')
    const [Senha, setSenha] = useState('')

    const [Erro, setErro] = useState('')

    const userLogin = {
        CPF: CPF,
        password: Senha
    }

    return (
        <View style={styleLogin.container}>
            <Text style={styleLogin.texto}>Que bom te ver de volta !</Text>
            <TextInput placeholder='Digite seu CPF' style={styleLogin.input} value={CPF} onChangeText={setCPF}/>
            <TextInput secureTextEntry={true} placeholder='Agora sua Senha' style={styleLogin.input} value={Senha} onChangeText={setSenha} />
            <Pressable 
              onPress={() => { 
                fetch('http://localhost:8080/api/users/login', {
                    method: 'POST',   
                    headers: {
                    'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(userLogin)
                })
                .then(response => {if (!response.ok) {setErro('Algo deu errado')} else {navigation.navigate('Humor')}})}}  >
                <Text style={styleLogin.texto}>Login</Text>
                <Text>{Erro}</Text>
            </Pressable>
        </View>
    )
}

const styleLogin = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    input: {
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
        marginBottom: 50,
        marginTop: 20,
        fontSize: 22
    }
})

