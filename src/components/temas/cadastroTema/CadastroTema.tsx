import React, {useState, useEffect, ChangeEvent} from 'react'
import { Container, Typography, TextField, Button } from "@material-ui/core"
import Tema from '../../../models/Tema';
import './CadastroTema.css'
import { buscaId, post, put } from '../../../services/Service';
import { useNavigate, useParams } from 'react-router-dom';
import { TokenState } from '../../../store/tokens/tokensReducer';
import { useSelector } from 'react-redux';


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
          alert('Você precisa estar logado')
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

        if(id !== undefined){
            put(`/temas`, tema, setTema, {
                headers:{
                    'Authorization': token 
                }
            })
            alert("Tema atualizado com sucesso")
        }else{
            post(`/temas`, tema, setTema, {
                headers:{
                    'Authorization': token 
                }
            })
            alert("Tema cadastrado com sucesso")            
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