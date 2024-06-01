import { useState } from "react";
import { View , Text, Pressable, StyleSheet, TextInput} from "react-native";


export default function Cadastro({navigation}) {
    const [CPF, setCPF] = useState()
    const [Senha, setSenha] = useState('')
    const [Nome, setNome] = useState('')
    const [Email, setEmail] = useState('')

    const [Erro, setErro] = useState('')

    const userRegister = {
        CPF: CPF,
        username: Nome,
        email: Email,
        password: Senha
    }

    return (
        <View style={styleRegister.container}>
            <Text style={styleRegister.texto}>Bem vindo(a) à bordo!</Text>
            <TextInput placeholder='Digite seu nome' style={styleRegister.input} value={Nome} onChangeText={setNome}/>
            <TextInput placeholder='Digite seu CPF' style={styleRegister.input} value={CPF} onChangeText={setCPF}/>
            <TextInput placeholder='Digite seu email' style={styleRegister.input} value={Email} onChangeText={setEmail}/>
            <TextInput secureTextEntry={true} placeholder='Digite sua Senha' style={styleRegister.input} value={Senha} onChangeText={setSenha}/>
            <Pressable
            onPress={() => { 
                fetch('http://localhost:8080/api/users/register', {
                    method: 'POST',   
                    headers: {
                    'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(userRegister)
                })
                .then(response => {if (!response.ok) {setErro('Algo deu errado')} else {navigation.navigate('Login')}})}} 
                >
                <Text style={styleRegister.texto}>Registrar</Text>
                <Text>{Erro}</Text>
            </Pressable>
        </View>
    )
}

const styleRegister = StyleSheet.create({
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
        padding: 10,
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


