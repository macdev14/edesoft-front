import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'

type UserObject = {
  id:number
  address: string
  // email: string,
  // username : string, 
  // password : string, 
  // name : string,
  // phone : string, 
  
  
}

type UserArray = {

}

interface userinit{
    id:number;
    email: string;
    password: string;
    username: string;
    nome: string;
    sobrenome: string;
    address: string,
    cidade: string;
    street: string;
    number: string;
    zipcode: string;
    lat: string;
    long: string;
    phone: string;
    users: UserObject[];
}
const initial:userinit = {
  id: 0,
  email: '',
  password: '',
  username: '',
  nome : '',
  sobrenome:'',
  cidade:'',
  street:'',
  number: '',
  zipcode: '',
  lat: '',
  long: '',
  phone: '',
  address: '',
  users: []

}


export const fetchusers = createAsyncThunk('user/fetchusers',()=>{
  let d;
  return fetch('https://fakestoreapi.com/users')
            .then(res=>res.json())
            .then((json : UserObject[])=>{
              //console.log( Object.keys(json))
           return json
              
             
              //return console.log(state.users)
            })
            
})

export const loginuser = createAsyncThunk('user/loginuser',()=>{

  return fetch('https://fakestoreapi.com/auth/login',{
            method:'POST',
            body:JSON.stringify({
                username: "mor_2314",
                password: "83r5^_"
            })
        })
            .then(res=>res.json())
            .then(json=>console.log(json))
            
})



export const userSlice = createSlice({
  name: 'user',
  initialState: initial,
  reducers: {
    register: (state) => {
        console.log(state)
        fetch('https://fakestoreapi.com/users',{
            method:"POST",
            body:JSON.stringify(
                {
                    email:state.email,
                    username:state.username,
                    password:state.password,
                    name:{
                        firstname: state.nome,
                        lastname: state.sobrenome
                    },
                    address:{
                        city: state.cidade,
                        street:state.street,
                        number: state.number,
                        zipcode: state.zipcode,
                        geolocation:{
                            lat: state.lat,
                            long: state.long
                        }
                    },
                    phone: state.phone
                }
            )
        })
            .then(res=>res.json())
            .then(json=>console.log(json))
    },

    update: (state) => {
      fetch('https://fakestoreapi.com/users/7',{
            method:"PUT",
            body:JSON.stringify(
                {
                  email:state.email,
                    username:state.username,
                    password:state.password,
                    name:{
                        firstname: state.nome,
                        lastname: state.sobrenome
                    },
                    address:{
                        city: state.cidade,
                        street:state.street,
                        number: state.number,
                        zipcode: state.zipcode,
                        geolocation:{
                            lat: state.lat,
                            long: state.long
                        }
                    },
                    phone: state.phone
                }
            )
        })
            .then(res=>res.json())
            .then(json=>console.log(json))
    },

    login: (state) => {
      fetch('https://fakestoreapi.com/auth/login',{
            method:'POST',
            body:JSON.stringify({
                username: "mor_2314",
                password: "83r5^_"
            })
        })
            .then(res=>res.json())
            .then(json=>console.log(json))
    },

   
    user: (state, action:PayloadAction<string>) => {
      console.log(state);
      
      state.username = action.payload
    },
    email: (state, action:PayloadAction<string>) => {
      console.log(state);
      state.email = action.payload
    },

    password: (state, action:PayloadAction<string>) => {
      console.log(state);
        state.password = action.payload
      },

      phone: (state, action:PayloadAction<string>) => {
        console.log(state);
        state.phone = action.payload
      },





  },

  extraReducers:(builder)=> {
      builder.addCase(fetchusers.fulfilled,
      (state, action : PayloadAction<UserObject[]> ) => {
      state.users = action.payload
      
      
      }
      )
  },
})

// Action creators are generated for each case reducer function
export const {login, user, update, email, password, phone, register } = userSlice.actions

export default userSlice.reducer