import React from 'react';
import { Provider } from 'react-redux';
import Display from './components/Display';
import { Store } from '../features/Store';

const App = () => {
    return (
        <div>
            <Provider store={Store}>
                <Display />
            </Provider>
            
        </div>
    );
};

export default App;