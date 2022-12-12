import * as React from "react"
import { useNavigate } from "react-router-dom";
import {
  Button,
  Container,
  FormControl,
  FormLabel,

  FormHelperText, Input,Heading,
  Grid, GridItem, 
} from '@chakra-ui/react'
import {user, password, email, phone, update} from './userSlice'
import { useDispatch,useSelector } from "react-redux";
export default function Register(){



  let navigate = useNavigate();
  const dispatch = useDispatch();
  const userid = useSelector((state:any) => state.id)
  const emailc:(e: {target: {value: any;};}) => any = (e: { target: { value: any; }; }) => dispatch( email(e.target.value)  );
  const userc:(e: {target: {value: any;};}) => any = (e: { target: { value: any; }; }) => dispatch( user(e.target.value)  );
  const passwordc:(e: {target: {value: any;};}) => any = (e: { target: { value: any; }; }) => dispatch( password(e.target.value)  );
  const phonec:(e: {target: {value: any;};}) => any = (e: { target: { value: any; }; }) => dispatch( phone(e.target.value)  );
  
    return(
    <>
 
<Container > 

<Grid gap={4} rowGap={4}>

      <GridItem>
      <Heading>Cadastro</Heading>
      </GridItem>

  <GridItem >

     <FormControl>
  <FormLabel>Email</FormLabel>
  <Input type='email' onChange={emailc}
    // (e: { target: { value: any; }; }) => dispatch( email(e.target.value)  )
  />
  <FormHelperText>Digite seu email.</FormHelperText>
</FormControl>

</GridItem>

<GridItem >

<FormControl>
<FormLabel>Senha</FormLabel>
<Input type='password' onChange={passwordc}/>
<FormHelperText>Digite sua senha.</FormHelperText>
</FormControl>

</GridItem>

<GridItem >

<FormControl>
<FormLabel>Usuário</FormLabel>
<Input type='username' onChange={userc}/>
<FormHelperText>Digite seu usuário</FormHelperText>
</FormControl>

</GridItem>

<GridItem >

<FormControl>
<FormLabel>Telefone</FormLabel>
<Input type='phone' onChange={phonec} />
<FormHelperText>Digite seu telefone</FormHelperText>
</FormControl>

</GridItem>
<GridItem>

<Button
            mt={4}
            colorScheme='teal'
            onClick={()=>{ dispatch(update());alert(userid?"ID "+userid:"Favor preencher campos") ;navigate('/list')  }  }
            type='submit'
          >
            Atualizar
          </Button>


          <Button style={ { float:'right' } }
            mt={4}
            colorScheme='whatsapp'
            onClick={()=>{
              return navigate('/list')
            }}
            type='submit'
          >
            Voltar
          </Button>  

</GridItem>

</Grid>
</Container>

    </>)
}