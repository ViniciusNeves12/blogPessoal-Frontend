import React, {useState, useEffect, ChangeEvent} from 'react'
import { Container, Typography, TextField, Button } from "@material-ui/core"
import Tema from '../../../models/Tema';
import './CadastroTema.css'
import { buscaId, post, put } from '../../../services/Service';
import { useNavigate, useParams } from 'react-router-dom';
import { TokenState } from '../../../store/tokens/tokensReducer';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';


function CadastroTema() {
    
    const {id} = useParams<{id:string}>()
    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    );
    let history = useNavigate();
    
    const [tema, setTema] = useState<Tema>({
        id : 0,
        descricao: ''
    })

    useEffect(()=>{
        if(token == ''){
          history('/login')
          toast.error('Você precisa estar logado', {
            position: "top-right",
            autoClose: 4000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
        }
    }, [token])

    useEffect(()=>{
        if(id !== undefined){
            findById(id)
        }
    }, [id])

    async function findById(id: string){
        buscaId(`/temas/${id}`, setTema, {
            headers: {
                'Authorization': token
            }
        })
    }

    function upadatedTema(e: ChangeEvent<HTMLInputElement>){

        setTema({
            ...tema,
            [e.target.name]:e.target.value,
        })

    }

    async function onSubmit(e: ChangeEvent<HTMLFormElement>){
        e.preventDefault();

        if (id !== undefined) {

            try {
                await put(`/temas`, tema, setTema, {
                    headers: {
                        'Authorization': token
                    }
                })

                toast.success('Tema atualizado com sucesso', {
                    position: "top-right",
                    autoClose: 4000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });

            } catch (error) {
                console.log(`Error: ${error}`)
                toast.error('Erro, por favor verifique a quantidade minima de caracteres', {
                    position: "top-right",
                    autoClose: 4000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
            }

        } else {

            try {
                await post(`/temas`, tema, setTema, {
                    headers: {
                        'Authorization': token
                    }
                })
                
                toast.success('Tema cadastrado com sucesso', {
                    position: "top-right",
                    autoClose: 4000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
                
            } catch (error) {
                console.log(`Error: ${error}`)
                toast.error('Erro, por favor verifique a quantidade minima de caracteres', {
                    position: "top-right",
                    autoClose: 4000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });            }
        }
        back();
    }

    function back() {
        history('/temas');
    }
  
    return (
        <Container maxWidth="sm" className="topo">
            <form onSubmit={onSubmit}>
                <Typography variant="h3" color="textSecondary" component="h1" align="center" >Formulário de cadastro tema</Typography>
                <TextField value={ tema.descricao } onChange={(e: ChangeEvent<HTMLInputElement>)=> upadatedTema(e)}  id="descricao" label="descricao" variant="outlined" name="descricao" margin="normal" fullWidth />
                <Button type="submit" variant="contained" color="primary">
                    Finalizar
                </Button>
            </form>
        </Container>
    )
}

export default CadastroTema;