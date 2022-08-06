import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Articles from './pages/Articles';
import Home from './pages/Home';

const App = () => {
        
    return (
        <Router>
            <Switch>
                <Route path='/' component={Home} exact/>
                <Route path='/articles' component={Articles} exact />
            </Switch>
        </Router>
    );
}

export default App;
