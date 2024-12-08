import { CSSProperties } from "react";

export const styles: Record<string, CSSProperties> = {
  box: {
    width: '37%',
    height: '90vh',
    color: "#281a1a",
    background: 'linear-gradient(180deg, rgba(246,158,70,1) 0%, rgba(155,70,252,0.9528186274509804) 100%)',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.3)',
    border: 'solid 2px',
    borderRadius: '20px',
    padding: '14px',
    boxSizing: 'border-box', 
    overflow: 'hidden', 
    textAlign:'center',
  },
  title: {
    fontSize: '3em', 
    wordWrap: 'break-word', 
    color:'white',
    textAlign: 'center',
    marginTop:'2%'
  },
  slogan: {
    fontSize: '1.2em',
    wordWrap: 'break-word',
    textAlign: 'center',
    width:'100%',
    marginTop:'2%'
  },
  form:{
   width:'100%', 
   padding:0, 
   display:'flex', 
   flexDirection:'column', 
   justifyContent:'space-between', 
   height:'45%',
    marginTop:'5%',
    fontWeight:'550',
    fontSize:'20px'
  },
  lineInput:{
    width:'100%',
    display:'flex',
    justifyContent:'space-between',
    marginBottom:'0.5em',
  }
};
