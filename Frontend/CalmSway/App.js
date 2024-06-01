import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Inicio from './telas/Inicio';
import Login from './telas/Login';
import Apoio from './telas/Apoio';
import Humor from './telas/Humor';
import Cadastro from './telas/Cadastro';

  const Stack = createStackNavigator();

  const App = () => {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Inicio" >
          <Stack.Screen name="Inicio" component={Inicio} options={{headerTransparent: true, headerTitle: ''}}/>
          <Stack.Screen name="Login" component={Login} options={{headerTransparent: true, headerTitle: ''}}/>
          <Stack.Screen name="Cadastro" component={Cadastro} options={{headerTransparent: true, headerTitle: ''}}/>
          <Stack.Screen name="Humor" component={Humor} options={{headerTransparent: true, headerTitle: '', headerLeft: null}}/>
          <Stack.Screen name="Apoio" component={Apoio} options={{headerTransparent: true, headerTitle: ''}}/>
        </Stack.Navigator>
      </NavigationContainer>
    )
}

  export default App;