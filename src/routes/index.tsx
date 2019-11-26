import React from 'react'
import { Switch } from 'react-router-dom'
import Route from './route'

import Home from '../screens/Home/Home'
import Declarations from '../screens/DeclarationsList/Index'
import ImportFile from '../screens/ImportFile'

export default function Routes() {
    return (
        <Switch>
            <Route path="/liste-declarations" component={Declarations} />
            <Route path="/importer-fichier" component={ImportFile} />
            <Route path="/" component={Home} />
        </Switch>
    )
}
