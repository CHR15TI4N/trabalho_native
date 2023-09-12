import Home from './src/components/screens/Home';
import LoginPage from './src/components/screens/LoginPage';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';
import CountryDetails from './src/components/screens/CountryDetails';
import RegisterPage from './src/components/screens/RegisterPage';

const Stack = createStackNavigator()

function StackNavigator () {
  return (
      <Stack.Navigator>
        <Stack.Screen 
          name='Países' 
          component={Home} 
          options={{
            headerStyle: {
              backgroundColor: '#412',
              borderBottomColor: '#fccc9f',
              borderBottomWidth: 1,
            },
            headerTintColor: '#fff',
            headerLeft: null,
          }}
        /> 
      </Stack.Navigator>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name='Login' 
          component={LoginPage}
          options={{
            headerShown:false,
          }}
        />
        <Stack.Screen 
          name='Caso tenha login, volte' 
          component={RegisterPage}
          options={{
            headerStyle: {
              backgroundColor: '#bd9066',
              borderBottomColor: '#6e4f35',
              borderBottomWidth: 2,
            },
            headerTintColor: '#422f20',
          }}
        />
        <Stack.Screen 
          name='Voltar' 
          component={StackNavigator} 
          options={{
            headerShown:false,
          }}
        />
        <Stack.Screen 
          name='Detalhes' 
          component={CountryDetails} 
          options={{
            headerStyle: {
              backgroundColor: '#fccc9f',
              borderBottomColor: '#412',
              borderBottomWidth: 2,
            },
            headerTintColor: '#412'
          }}
        /> 
      </Stack.Navigator>
    </NavigationContainer>
  );
}
