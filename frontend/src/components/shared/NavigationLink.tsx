// Imports

import { Link } from "react-router-dom";


// Types for Information Management
type Props = {
    to: string;
    bg: string;
    text: string;
    textColor: string;
    onClick?: () => Promise<void>; 
};

const NavigationLink = (props: Props) => {
  return (<Link 
    className='nav-link' 
    to={props.to} 
    style={{background: props.bg, position: "static", boxShadow: "none", color: props.textColor}}>
    { props.text }
  </Link>);
};

export default NavigationLink;
