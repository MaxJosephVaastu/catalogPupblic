import React from 'react';
import Catalog from '../containers/Catalog';


class App extends React.Component {

    componentWillMount() {

        this.props.initFakeApi();
    }

    render() {
        return (
            <Catalog/>
        );
    }
}

export default App;
