import React from 'react'
import { Switch } from 'react-router-dom'
import Route from './route'

import Declarations from '../screens/Declarations'
import Home from '../screens/Home'

export default function Routes() {
    return (
        <Switch>
            <Route path="/Home" component={Home} />
            <Route path="/" component={Declarations} />
        </Switch>
    )
}
