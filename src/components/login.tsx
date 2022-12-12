import * as React from "react"
import { useNavigate } from "react-router-dom";
import {
    Button,
    Container,
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText, Input, Heading,
    Grid, GridItem 
  } from '@chakra-ui/react'
import {login} from './userSlice'
import { useDispatch,useSelector } from "react-redux";
export default function Login(){
    let navigate = useNavigate();
    const dispatch = useDispatch();
    return(<>
    
        <Container > 
<Grid gap={4} rowGap={4}>
<GridItem>
      <Heading>Login</Heading>
      </GridItem>
<GridItem >

<FormControl>
<FormLabel>Usuário</FormLabel>
<Input type='username' />
<FormHelperText>Digite seu usuário</FormHelperText>
</FormControl>

</GridItem>

<GridItem >

<FormControl>
<FormLabel>Senha</FormLabel>
<Input type='password' />
<FormHelperText>Digite sua senha.</FormHelperText>
</FormControl>

</GridItem>

<GridItem>

<Button
            mt={4}
            colorScheme='teal'
            onClick={()=>{dispatch(login()); navigate('/list') }}
            type='submit'
          >
            Entrar
          </Button>

          <Button
            style={ { float:'right' } }
            mt={4}
            colorScheme='orange'
            onClick={()=>{ return navigate('/') } }
            type='submit'
          >
            Cadastrar
          </Button>

</GridItem>

</Grid>
</Container>
    </>)
}