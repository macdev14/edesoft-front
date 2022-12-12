import * as React from "react"
import { useNavigate } from "react-router-dom";

import {
    Button,
    Container,
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText, Input, Heading,
    Grid, GridItem ,Text
  } from '@chakra-ui/react'
//   import { useDispatch,useSelector } from "react-redux";
import { useAppSelector, useAppDispatch } from "./hooks";
  import {fetchusers} from './userSlice'


  interface User {
   
    address: string,
    id: number,
    email: string,
    username: string,
    password: string,
    name : string,
    phone: string,
   
  
  }

interface MyState {
    user: User
  }

export default function List(){
    let navigate = useNavigate();
    const [allusers, setUsers] = React.useState([])
    const dispatch = useAppDispatch()
   
   
    const idselector = useAppSelector((state:any) => state.user.id)
    const userslist = useAppSelector((state:any) => state.user.users)

    React.useEffect(()=>{
        dispatch(fetchusers())
    },[])
    
    
    //return(<> <p>t</p> </>)

    return(
    
<Container > 
<Grid gap={4} rowGap={4}>
<GridItem>
<Heading>Usuário(s)</Heading>
<GridItem>
<Button
            style={ { float:'right' } }
            mt={4}
            colorScheme='orange'
            onClick={()=>{ return navigate('/') } }
            type='submit'
          >
            Atualizar Dados
          </Button>
</GridItem>
</GridItem>

{ userslist.length >0 ? 
    userslist.map((data:User,index:number)=>{ 
        console.log(Object.keys(data))
        return( 

<GridItem key={index}>
      <Text>{data.username}</Text>
      <Text>{data.email}</Text>
</GridItem>
    )


}

)

 : 
<GridItem>
<Heading>Nenhum usuario cadastrado</Heading>
</GridItem>


}


</Grid>
</Container>
    
    
    )
}