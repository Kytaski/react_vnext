import React from 'react'
import MainLayout from '../../Main/MainLayout'
import { Typography } from '@material-ui/core'

const Home = () => {
    return (
        <div>
            <Typography variant='h5'>Accueil</Typography>
        </div>
    )
}

export default () => (
    <MainLayout headerTitle="Accueil">
        <Home />
    </MainLayout>
)
