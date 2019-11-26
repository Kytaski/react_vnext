import React from 'react'
import MainLayout from '../../Main/MainLayout'
import { Typography } from '@material-ui/core'

const ImportFile = () => {
    return (
        <div>
            <Typography variant='h5'>Importer un fichier</Typography>
        </div>
    )
}

export default () => (
    <MainLayout headerTitle="Cegid VNext | Import fichier">
        <ImportFile />
    </MainLayout>
)
