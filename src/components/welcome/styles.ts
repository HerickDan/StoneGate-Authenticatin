import { CSSProperties } from "react";

export const styles: Record<string, CSSProperties> = {
  box: {
    width: '70%',
    height: '65vh',
    color: "#281a1a",
    backgroundColor:'#fffffd',
    border: 'solid 2px',
    borderRadius: '4px',
    padding: '14px',
    display: 'grid',
    gridTemplateColumns: '1fr 1fr', 
    boxSizing: 'border-box', 
    overflow: 'hidden', 
  },
  title: {
    fontSize: '3em', 
    wordWrap: 'break-word', 
    textAlign: 'center',
  },
  logoName: {
    fontFamily: 'Gemunu Libre, sans-serif',
    fontSize: '5em', 
    color: '#ff8826',
    fontWeight: '600',
    textAlign: 'center',
  },
  slogan: {
    fontSize: '1.2em',
    wordWrap: 'break-word',
    textAlign: 'center',
  },
  divs: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden', 
  },
  containerButton:{
      width:'100%',
      gridColumn:'1/-1',
      display:'flex',
      justifyContent:'center',
      gap:'2%'
  },
  button:{
    width:'40%',
    marginTop:'5%',
    height:'30%',
    fontWeight:700,
    fontSize: '1.8em', 
    backgroundColor:'#ff8826'
  }
};
