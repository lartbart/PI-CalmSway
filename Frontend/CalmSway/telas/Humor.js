import { Image, Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { LineChart } from 'react-native-chart-kit';


export default function Humor({navigation}) {
    return (
    <ScrollView contentContainerStyle={styleHumor.container}>
        <Text style={styleHumor.titulo}>Rastreamento de Humor</Text>
        <LineChart
         data={{
            datasets: [
              {
                labels: ['Jan', 'Fev', 'Mar'],
                data: [0,1,1,2,2]
              }
            ],
          }}
          width={322} 
          height={220}
          yAxisLabel=""
          yAxisSuffix=""
          yAxisInterval={1}
          chartConfig={{
            backgroundColor: '#FFFFFF',
            backgroundGradientFrom: '#FFFFFF',
            backgroundGradientTo: '#FFFFFF',
            decimalPlaces: 0, 
            color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
            style: {
              borderRadius: 16,
            },
            propsForDots: {
              r: '6',
              strokeWidth: '2',
              stroke: '#155B24'
            },
          }}
          style={{
            marginVertical: 8,
            borderRadius: 16,
          }}
          withHorizontalLabels={false}
          withVerticalLabels={false}
        />
        <Pressable style={styleHumor.humor_atual}>
            <Image source={require('../assets/images/happy.svg')}/>
            <Text style={styleHumor.texto1}>Humor Atual</Text>
        </Pressable>
        <Pressable style={styleHumor.registrar_humor}>
            <Image source={require('../assets/images/plus.svg')}/>
            <Text style={styleHumor.texto1}>Registrar Nível de Humor</Text>
        </Pressable>
        <Pressable style={styleHumor.compartilhar}>
            <Image source={require('../assets/images/share.svg')}/>
            <Text style={styleHumor.texto1}>Compartilhar</Text>
        </Pressable>
        <Pressable style={styleHumor.apoio} onPress={() => {navigation.navigate('Apoio')}}>
            <Image source={require('../assets/images/support.svg')}/>
            <Text style={styleHumor.texto1}>Comunidade de Apoio</Text>
        </Pressable>
        <View style={styleHumor.insights}>
            <Text style={styleHumor.titulo2}>Insights IA</Text>
            <Text style={styleHumor.texto2}>Registre mais valores para obter relatórios personalizados gerados por Inteligência Artificial que te ajudam com dicas de como melhorar seu humor e estresse.</Text>
        </View>
    </ScrollView>
    )

}

const styleHumor = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    titulo: {
        fontFamily: 'Poppins-ExtraBold.ttf',
        fontWeight: '700',
        fontSize: 22,
        marginBottom: 30,
        marginTop: 30
    },     
    titulo2: {
        fontFamily: 'Poppins-Black.ttf',
        fontWeight: '700',
        fontSize: 22,
        color: '#FFFFFF',
        paddingBottom: 10
    }, 
    texto1: {
        fontFamily: 'Poppins-Black.ttf',
        fontWeight: '700',
        fontSize: 16,
        color: '#FFFFFF',
    },
    texto2: {
        fontFamily: 'Poppins-Black.ttf',
        fontWeight: '700',
        fontSize: 14,
        color: '#FFFFFF',
    },
    humor_atual: {
        flexDirection: 'row',
        backgroundColor: '#301F45',
        opacity: 0.9,
        borderRadius: 30,
        marginBottom: 20,
        minWidth: 322,
        alignItems: 'center',
        paddingHorizontal: 10,
        borderBottomColor: 'black',
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 4 }, 
        shadowOpacity: 1,
        shadowRadius: 4,
        elevation: 4
    },
    registrar_humor: {
        flexDirection: 'row',
        backgroundColor: '#0038FF',
        opacity: 0.9,
        borderRadius: 30,
        marginBottom: 20,
        minWidth: 322, 
        alignItems: 'center',
        paddingHorizontal: 10,
        shadowColor: 'black',
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 4 }, 
        shadowOpacity: 1,
        shadowRadius: 4,
        elevation: 4
    },
    compartilhar: {
        flexDirection: 'row',
        backgroundColor: '#1AC64A',
        opacity: 0.9,
        borderRadius: 30,
        marginBottom: 20,
        minWidth: 322,
        alignItems: 'center',
        paddingHorizontal: 10,
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 4 }, 
        shadowOpacity: 1,
        shadowRadius: 4,
        elevation: 4
    },
    insights: {
        backgroundColor: '#000000',
        borderTopEndRadius: 30,
        borderTopLeftRadius: 30,
        paddingTop: 20,
        paddingHorizontal: 20,
        paddingBottom: 100,
        width: '100%'
    },
    apoio: {
        flexDirection: 'row',
        backgroundColor: '#AFAEDF',
        borderRadius: 30,
        marginBottom: 20,
        minWidth: 322,
        alignItems: 'center',
        paddingHorizontal: 10,
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 4 }, 
        shadowOpacity: 1,
        shadowRadius: 4,
        elevation: 4
    }
})

