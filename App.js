import { Provider } from 'react-redux';
import { store } from './redux/store';

import { NavigationContainer } from '@react-navigation/native';
import Main from './screens/MainComponent';


const App = () => {
    return (
        <Provider store={store}> 
            <NavigationContainer>
                <Main />
            </NavigationContainer>
        </Provider>
    );
}

export default App;

