import React from 'react'
import Header from '../../components/Header/header'
import MainLayout from '../../Main/MainLayout'
import { Typography } from '@material-ui/core'

const Declarations = () => {
    return (
        <div>
            <Typography variant="h5">Liste des déclarations</Typography>
        </div>
    )
}

export default () => (
    <MainLayout headerTitle="Cegid VNext | Liste des déclarations">
        <Declarations />
    </MainLayout>
)
