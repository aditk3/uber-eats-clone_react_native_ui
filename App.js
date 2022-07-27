import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { withAuthenticator } from 'aws-amplify-react-native';
import { Amplify } from 'aws-amplify';

import config from './src/aws-exports';

import RootNavigator from './src/navigation/Navigators';
import AuthContextProvider from './src/contexts/AuthContext';
import CartContextProvider from './src/contexts/CartContext';
import OrderContextProvider from './src/contexts/OrderContext';

Amplify.configure({
    ...config,
    Analytics: { disabled: true }
});

function App() {
    return (
        <NavigationContainer>

            <AuthContextProvider>
                <CartContextProvider>
                    <OrderContextProvider>

                        <RootNavigator />

                    </OrderContextProvider>
                </CartContextProvider>
            </AuthContextProvider>

            <StatusBar style='auto' />

        </NavigationContainer>
    );
}

export default withAuthenticator(App);
