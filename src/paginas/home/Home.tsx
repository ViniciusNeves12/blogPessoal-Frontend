import React, {useEffect} from 'react';
import { Box, Button , Grid , Typography } from '@material-ui/core';
import TabPostagem from '../../components/postagens/tabpostagem/TabPostagem';
import useLocalStorage from 'react-use-localstorage';
import { useNavigate } from 'react-router-dom';
import './Home.css';

function Home(){

    return(
        <>
             <Grid container direction="row" justifyContent="center" alignItems="center" className="caixa">
                <Grid alignItems="center" item xs={6}>
                    <Box paddingX={20} >
                        <Typography variant="h3" gutterBottom color="textPrimary" component="h3" align="center" className="titulo">Seja bem vindo(a)!</Typography>
                        <Typography variant="h5" gutterBottom color="textPrimary" component="h5" align="center" className="titulo">expresse aqui os seus pensamentos e opiniões!</Typography>
                    </Box>
                    <Box display="flex" justifyContent="center">
                        <Box marginRight={1}>
                        </Box>
                        <Button variant="outlined" className="botao">Ver Postagens</Button>
                    </Box>
                </Grid>
                <Grid item xs={6} >
                    <img src="https://i.imgur.com/H88yIo2.png" alt="gatin" width="400px" height="400px" />
                </Grid>
                <Grid xs={12} className="postagem">
                    <TabPostagem />
                </Grid>
            </Grid>
        </>
    );
}

export default Home;