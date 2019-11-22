import React from 'react';
import { BrowserRouter as Router} from 'react-router-dom';
import history from './services/history';
import Routes from './routes';

function App() {
    return(
        <Router histoty={history}>
            <Routes />
        </Router>
    );
};

export default App