
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';

export default function Inicio({navigation}) {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/images/inicio.svg')} style={styles.imagem_inicio}/>
      <Text style={styles.titulo}>Vamos controlar juntos sua Ansiedade</Text>
      <Text style={styles.conteudo}>
        Bem-vindo ao Relax
      </Text>
      <Text style={styles.conteudo}>
        Conquiste a Paz Interior e o Bem-Estar Mental
       </Text>
       <Text style={styles.conteudo}>
        Enfrente a ansiedade e redescubra o equilíbrio com o Relax. Nossa plataforma oferece ferramentas e recursos cuidadosamente projetados para ajudá-lo a gerenciar o estresse, cultivar a serenidade e promover uma vida mais plena e feliz.
       </Text>
      <Pressable style={styles.botão_login} onPress={() => {navigation.navigate("Login")}}>
        <Text style={styles.login}>
          Faça seu Login
        </Text>
        </Pressable>
      <Pressable style={styles.botão_cadastro} onPress={() => {navigation.navigate("Cadastro")}} >
        <Text style={styles.cadastro}>
          Não tenho uma conta - Cadastrar
        </Text>
        </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo: {
    fontWeight: '600',
    margin: 20,
    fontFamily: 'Poppins-SemiBold.ttf',
    fontSize: 18
  },
  conteudo: {
    fontWeight: '500',
    maxWidth: 350,
    lineHeight: 18,
    fontFamily: 'Poppins-SemiBold.ttf',
    fontSize: 14,
    textAlign: 'center',
    opacity: 0.8
  },
  botão_login: {
    padding: 20,
    paddingHorizontal: 80,
    margin: 10,
    marginTop: 30,
    backgroundColor: '#AFAEDF',
    opacity: 0.71
  },
  login: {
    fontWeight: '700',
    lineHeight: 30,
    fontFamily: 'Poppins-SemiBold.ttf',
    fontSize: 22
  },
  cadastro: {
    fontWeight: '500',
    fontFamily: 'Poppins-SemiBold.ttf',
    fontSize: 14
  },
  botão_cadastro: {
    margin: 10,
  },
  imagem_inicio: {
    width: 257,
    height: 225,
  }
});
