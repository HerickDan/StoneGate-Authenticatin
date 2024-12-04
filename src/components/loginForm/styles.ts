import { CSSProperties } from "react";

export const styles: Record<string, CSSProperties>={
    box:{
        width:'30%',
        display:'flex',
        flexDirection:'column'
    }, 
    backgroundForm:{
        margin:0,
        padding:'2%',
        background:'rgba(255, 255, 255, 0.5)',
        height:'50vh',
        backdropFilter: 'blur(2px)',
        display:'flex',
        flexDirection:'column',
    },
    title:{
        fontFamily: 'Gemunu Libre, sans-serif',
        color:'black',
        marginBottom:'5%'
    },
    input:{
        height:'10%',
        marginBottom:'5%'
    },
    label:{

    },
    button:{

    }
}