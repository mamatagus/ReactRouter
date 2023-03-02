import React from 'react'
import {createBrowserRouter, redirect, Routes} from 'react-router-dom'
import {supabase} from './configs/supabase'
import LoginPage from './pages/auth/login'
import RegisterPage from './pages/auth/register'
import MainPage from './pages/index'

const Router = createBrowserRouter([
  {
    path:'/',
    element:<MainPage />,
  },
  {
    path:'/auth',
    children:[
        {
            path:'login',
            element:<LoginPage />,
            loader: async () =>{
                const {data, error} = await supabase.auth.getSession()
                if(data.session){
                    return redirect('/')
                }

                return null
            }
        },
        {
            path:'register',
            element:<RegisterPage />,
            loader: async () =>{
                const {data, error} = await supabase.auth.getSession()
                if(data.session){
                    return redirect('/')
                }

                return null
            }
        }
    ]
  }  
])
export default Routes