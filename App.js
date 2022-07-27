import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { withAuthenticator } from 'aws-amplify-react-native';
import { Amplify } from 'aws-amplify';

import config from './src/aws-exports';

import RootNavigator from './src/navigation/Navigators';
import AuthContextProvider from './src/contexts/AuthContext';

Amplify.configure({
    ...config,
    Analytics: { disabled: true }
});

function App() {
    return (
        <NavigationContainer>

            <AuthContextProvider>
                <RootNavigator />
            </AuthContextProvider>

            <StatusBar style='auto' />
            
        </NavigationContainer>
    );
}

export default withAuthenticator(App);