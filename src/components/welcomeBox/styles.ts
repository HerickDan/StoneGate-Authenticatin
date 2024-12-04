import { CSSProperties } from "react";

export const styles: Record<string, CSSProperties> = {
  box: {
    width: '30%',
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
    marginTop:'5%'
  },
  logoName: {
    fontFamily: 'Gemunu Libre, sans-serif',
    fontSize: '2.7em', 
    color: 'white',
    width:'80%',
    height:'20%',
    padding:'2%',
    borderRadius:'40px',
    fontWeight: '600',
    backgroundColor:'#321553',
    textAlign:'center'
  },

  slogan: {
    fontSize: '1.2em',
    wordWrap: 'break-word',
    textAlign: 'center',
    width:'100%',
    marginTop:'5%'
  },
  containerButton:{
      display:' flex',
      justifyContent:"space-between",
      width:'100%',
      gap:'2%'
  },
  button:{
    width:'50%',
    marginTop:'8%',
    height:'30%',
    fontWeight:700,
    fontSize: '1.6em', 
    borderRadius:'60px',
    backgroundColor:'#ff8826'
  }
};
