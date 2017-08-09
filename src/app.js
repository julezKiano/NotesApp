import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import store from './store';

import { Welcome, List, Form, Single } from './components';

class App extends Component {
    render() {
        return(
            <Provider store={store}>
                <View style={{flex: 1, backgroundColor: 'black'}}>
                    <Form />
                </View>
            </Provider>
        );
    }
}

export default App;
