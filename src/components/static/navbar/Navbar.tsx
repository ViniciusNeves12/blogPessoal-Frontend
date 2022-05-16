import React, { MouseEventHandler } from "react";
import { AppBar, Box, Toolbar, Typography } from "@material-ui/core";
import { Link, useNavigate } from "react-router-dom";
import useLocalStorage from "react-use-localstorage";
import './Navbar.css';
import { useDispatch, useSelector } from "react-redux";
import { TokenState } from "../../../store/tokens/tokensReducer";
import { addToken } from "../../../store/tokens/actions";

function Navbar() {

    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    );

    const dispatch = useDispatch()
    let history = useNavigate()

    function zerarToken() {
        dispatch(addToken(''))
        history('/login')
    }

    var navbarComponent;

    if (token !== '') {

        navbarComponent = <AppBar position="static">
            <Toolbar variant="dense">
                <Box className="cursor" >
                    <Typography variant="h5" color="inherit">
                        Blog Pessoal
                    </Typography>
                </Box>
                <Box display="flex" justifyContent="start">
                    <Link to='/home' className='text-decoration-none'>
                        <Box mx={1} className="cursor">
                            <Typography variant="h6" color="inherit">
                                home
                            </Typography>
                        </Box>
                    </Link>
                    <Link to='/posts' className='text-decoration-none'>
                        <Box mx={1} className="cursor">
                            <Typography variant="h6" color="inherit">
                                postagens
                            </Typography>
                        </Box>
                    </Link>
                    <Link to='/temas' className='text-decoration-none'>
                        <Box mx={1} className="cursor">
                            <Typography variant="h6" color="inherit">
                                temas
                            </Typography>
                        </Box>
                    </Link>
                    <Link to='/formularioTema' className='text-decoration-none'>

                        <Box mx={1} className="cursor">
                            <Typography variant="h6" color="inherit">
                                cadastrar tema
                            </Typography>
                        </Box>
                    </Link>
                    <Box mx={1} className="cursor" onClick={zerarToken}>
                        <Typography variant="h6" color="inherit" >
                            logout
                        </Typography>
                    </Box>
                </Box>
            </Toolbar>
        </AppBar>
    }


    return (
        <>
            {
                navbarComponent
            }
        </>
    )
}

export default Navbar;
