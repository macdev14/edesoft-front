import * as React from "react"
import {
  ChakraProvider,
  theme,
} from "@chakra-ui/react"


import { Routes, Route } from 'react-router-dom';
import List from "./components/list"
import Register from "./components/register"
import Login from "./components/login"
import Update from "./components/update"
import Loading from "./components/loading"
export const App = () => (
  <ChakraProvider theme={theme}>
      <React.Suspense fallback={<Loading />}>

    <Routes>
    <Route path='/login' element={<Login/>} />
    <Route path='/' element={<Register/>} />
    <Route path='/update' element={<Update/>} />
    <Route path='/list' element={<List/>} />
  </Routes>
  </React.Suspense>

  
  </ChakraProvider>
)
