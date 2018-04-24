import React from 'react';
import { Form, Icon, Input, Button } from 'antd';
const FormItem = Form.Item;

export const LoginDisplay = ({mostrar, toggleMostrar, saveInput, onSubmit, error, changeRegistro}) => (

    <div className="formu">
        <div className="box_form">
            <h2 >Inicia sesión</h2>
            <h1>{error}</h1>

                <Form onSubmit={onSubmit} className="login-form">
                    <FormItem>

                            <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Email" name="email" onChange={saveInput} />

                    </FormItem>
                    <FormItem>

                            <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}  name="password" placeholder="Password" onChange={saveInput} type={mostrar ? "text" : "password"} />
                        <label className="mostrar" htmlFor="">
                           <span style={{marginRight:"5px"}}>Mostrar Password</span>

                            <input onClick={toggleMostrar} type="checkbox" value="Mostrar pass"/>
                        </label>
                    </FormItem>
                    <FormItem>
                        <Button type="primary" htmlType="submit" className="login-form-button">
                            Log in
                        </Button>

                    </FormItem>
                </Form>



        </div>
    </div>
);