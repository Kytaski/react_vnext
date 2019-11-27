import React from 'react'
import MainLayout from '../../Main/MainLayout'
import Upload from '../../components/Upload'
import { Typography } from '@material-ui/core'

const UploadFile = () => {
    return (
        <div>
            <Typography variant='h5'>Importer un fichier</Typography>
            <Upload />
        </div>
    )
}

export default () => (
    <MainLayout headerTitle="Import fichier">
        <UploadFile />
    </MainLayout>
)
