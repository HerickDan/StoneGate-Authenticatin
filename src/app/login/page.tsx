'use client'

import {styles} from './style'
import dynamic from 'next/dynamic'

const LoginFormComponent = dynamic(()=>import('../../components/loginForm'),{
    ssr:false
  })
  

const LoginPage = () =>{
    return(
        <div style={styles.page}>
            <LoginFormComponent/>
        </div>
    )
}

export default LoginPage