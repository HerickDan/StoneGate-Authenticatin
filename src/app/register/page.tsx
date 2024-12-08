'use client'
import dynamic from 'next/dynamic'
import {styles} from './style'

const RegisterFormComponent = dynamic(()=>import('../../components/registerForm'),{
    ssr:false
  })
  

const LoginPage = () =>{
    return(
        <div style={styles.page}>
            <RegisterFormComponent/>
        </div>
    )
}

export default LoginPage