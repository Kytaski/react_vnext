import React from 'react'
import MainLayout from '../../Main/MainLayout'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import { getAllDeclarations } from '../../services/declarationsService'
import { IDeclarationsHeaderDto } from '../../models/IDeclarationsHeaderDto'
import {
    Paper,
    Typography,
    GridList,
    GridListTile,
    CardContent,
    Card,
} from '@material-ui/core'
import { render } from 'react-dom'
import { JSXElement } from '@babel/types'

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
        },
        paper: {
            padding: theme.spacing(3),
            margin: 'auto',
            maxWidth: 500,
            // border: 'solid 1px black' 
            alignContent:'center',
            "&:hover": {
                background: "#efefef"
              },
        },
        image: {
            width: 128,
            height: 128,
        },
        img: {
            margin: 'auto',
            display: 'block',
            maxWidth: '100%',
            maxHeight: '100%',
        },
    })
)

interface Props {
    decla: IDeclarationsHeaderDto;
    class: any;
}

// const DisplayDeclarations = (props: Props) => {
//     const classes = useStyles()

//     const declaration = props.decla
//     return (
//         <div className={classes.root}>
//             <Paper className={classes.paper}>
//                 <Grid container spacing={2}>
//                     <Grid item xs={12} sm container>
//                         <Grid item xs container direction="column" spacing={2}>
//                             <Grid item xs>
//                                 <Typography gutterBottom variant="subtitle1">
//                                     Siret: {declaration.siret}
//                                 </Typography>
//                                 <Typography variant="body2" gutterBottom>
//                                     Date de création:
//                                     {declaration.dateCreation}
//                                 </Typography>
//                                 <Typography
//                                     variant="body2"
//                                     color="textSecondary"
//                                 >
//                                     Etablissement:
//                                     {declaration.etablissement}
//                                 </Typography>
//                             </Grid>
//                             <Grid item>
//                                 <Typography
//                                     variant="body2"
//                                     style={{ cursor: 'pointer' }}
//                                 >
//                                     Version CT: {declaration.versionCT}
//                                 </Typography>
//                             </Grid>
//                         </Grid>
//                         <Grid item>
//                             <Typography variant="subtitle1">
//                                 Statut: {declaration.status}
//                             </Typography>
//                         </Grid>
//                     </Grid>
//                 </Grid>
//             </Paper>
//         </div>
//     )
// }
const DeclarationItem = (props: Props) => {
    const declaration = props.decla
    const classes = props.class

    return (
        <Grid container spacing={2} className={classes.paper}>
            <Grid  item xs={12} sm container>
                <Grid item xs container direction="column" spacing={2}>
                    <Grid item xs>
                        <Typography gutterBottom variant="subtitle1">
                            Siret: {declaration.siret}
                        </Typography>
                        <Typography variant="body2" gutterBottom>
                            Dépôt:
                            {declaration.depot}
                        </Typography>
                        <Typography variant="body2" color="textSecondary">
                            Etablissement:
                            {declaration.etablissement}
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography
                            variant="body2"
                            style={{ cursor: 'pointer' }}
                        >
                            Version CT: {declaration.versionCT}
                        </Typography>
                    </Grid>
                </Grid>
                <Grid item>
                    <Typography variant="subtitle1">
                        Statut: {declaration.status}
                    </Typography>
                </Grid>
            </Grid>
        </Grid>
    )
}

const Declarations: any = () => {
    const classes = useStyles()
    const declarations = getAllDeclarations()

    return (
        <div className={classes.root}>
            <GridList cellHeight={200} spacing={1} className={classes.paper}>
                {declarations.map(declaration => (
                    <DeclarationItem
                        key={declaration.id}
                        decla={declaration}
                        class={classes}
                    />
                ))}
            </GridList>
        </div>
    )
}

export default () => (
    <MainLayout headerTitle="Liste des déclarations">
        <Declarations />
    </MainLayout>
)
