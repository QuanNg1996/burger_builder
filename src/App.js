import React, { Component } from 'react';
import Layout from './hoc/Layout/Layout';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import Checkout from './containers/Checkout/Checkout';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Switch>
            <Layout>
              <Route path="/checkout" component={Checkout} />
              <Route exact path="/" component={BurgerBuilder} />
            </Layout>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
