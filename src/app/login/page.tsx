import LoginForm from '@/components/login'
import {styles} from './style'
import Image from 'next/image'
import people from '../../../public/people.png'


const LoginPage = () =>{
    return(
        <div style={styles.page}>
            <Image 
            src={people} 
            alt='' 
            style={{ 
                width: "20%", 
                height: "40%", 
                marginTop:'3%' }}/>
            <LoginForm/>
        </div>
    )
}

export default LoginPage