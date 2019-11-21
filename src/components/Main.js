import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom';
import Home from './page/home/Home';
import About from './page/about/About';
import Process from './page/process/Process';
class Main extends Component {
    render() {
        return (
            <main>
                {/* <Switch >
                        <Route path="/" render={() => <Home />} exact />
                        <Route path="/work" render={() => <Work />} />
                        <Route path="/process" component={Process}/>
                        <Route path="/blog" render={() => <Blog />} />
                        <Route path="/career" render={() => <Career />} />
                        <Route path="/about" component={props => <About {...props} />} />
                        <Route path="/career-form" render={() => <CareerForm />} />
                        <Route path="/apps" render={() => < Apps />} />
                        <Route path="/iets" render={() => < Iets />} />
                    </Switch> */}
                <Switch >
                    <Route path="/" exact component={Home} />
                    <Route path="/about" exact component={About} />
                    <Route path="/process" exact component={Process} />
                    {/* <Route path="/blog" render={() => <Blog />} />
                        <Route path="/career" render={() => <Career />} />
                        <Route path="/about" component={props => <About {...props} />} />
                        <Route path="/career-form" render={() => <CareerForm />} />
                        <Route path="/apps" render={() => < Apps />} />
                        <Route path="/iets" render={() => < Iets />} /> */}
                </Switch>
            </main>
        )
    }
}
export default Main;