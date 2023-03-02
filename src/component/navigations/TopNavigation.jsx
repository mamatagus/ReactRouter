import React, {useEffect, useState} from 'react'
import {Row, Col, Menu, Button} from 'antd'
import { Link, NavLink, redirect, useNavigate } from 'react-router-dom'
import { supabase } from '../../configs/supabase'

const leftItems = [
    {
        label: <NavLink to="/">Home</NavLink>,
        key: 'home',
        style:{
            color: '#fca311'
        }
    },

];

const rightItems = [
    {
        label: <NavLink to="/auth/login">Login</NavLink>,
        key: 'login',
        style:{
            color:'#fca311'
        }
    },
    {
        label: <NavLink to="/auth/register">Register</NavLink>,
        key: 'register',
        style:{
            color:'#fca311'
        }

    },

];


const TopNavigation = ()=>{
    const navigation = useNavigate()
    const [current, setCurrent] = useState('');
    const [user, setUser] = useState(null)
    const checkUser = async () =>{
        const {data, error} = await supabase.auth.getUser();

        if(data.user){
            setUser(data.user)
        }

        if(error){
            return
        }
    }

    const handleLogout = () =>{
        supabase.auth.signOut().then(() =>{
            navigation('/auth/login')
        })
    }

    const authItems = [
        {
            label: <Button onClick={handleLogout}>Logout</Button>,
            key: 'logout',
            style: {
                color:'#fca311'
            }
        },
    ] ;


    useEffect(() =>{
        checkUser()
    },[current])

    const onClick= (e) =>{
        console.log('clik ', e);
        setCurrent(e.key);
    };
    return(
        <Row style={{width:'100%'}}>
            <Col span={16}>
                <Menu style={{ backgroundColor:'#14213d', display:'flex', justifyContent:'start'}} onClick={onClick} selectedKeys={[current]} mode="horizontal" items={leftItems} />
            </Col>
            <Col flex='auto'>
                <Menu style={{ backgroundColor:'#14213d', display:'flex', justifyContent:'end'}} onClick={onClick} selectedKeys={[current]} mode="horizontal" items={user? authItems : rightItems} />
            </Col>
        </Row>
    )

}

export default TopNavigation



