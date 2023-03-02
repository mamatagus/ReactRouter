import React from 'react'
import AppLayout from '../../../components/layouts/app.layout'
import { Form, Input, Button, Checkbox } from 'antd'
import { supabase } from '../../../configs/supabase';
import { useNavigate } from 'react-router-dom';
import FormItem from 'antd/es/form/FormItem';


const LoginPage = () =>{
    const navigate = useNavigate()
    const onFinish = async (value) =>{
        const {data, error} = await supabase.auth.signInWithPassword 

        if(data){
            navigate('/')
        }
    }

    return(
        (
            <AppLayout>
                <h1>Login Page</h1>
                <div style={{backgroundColor:'white', padding:'5rem'}}>
                <Form
                name="basic"
                labelCol={{ span: 8}}
                wrapperCol={{ span: 16}}
                style={{ maxWidth: 500, }}
                initialValues={{ remember: true }}
                onFinish={onFinish}
                autoComplete="off"
                >
                <Form.Item
                label="Email"
                name="email"
                rules={[{ required: true, message: 'Please input email'}]}
                >
                  <Input />
                 <Form.Item
                label="Password"
                name="password"
                rules={[{ required: true, message: 'Please input email'}]}
                >
                 <Input.Password />
                 </Form.Item>
                 </Form.Item>
                 <Form.Item name="remember" valuePropName="checkbox">
                    <Checkbox>Remember me</Checkbox>
                 </Form.Item>
                 
                 <Form.Item wrapperCol={{ offset: 8, span:16 }}>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                 </Form.Item>
                 </Form>
                 </div>
            </AppLayout>
        )
    );
}

export default LoginPage