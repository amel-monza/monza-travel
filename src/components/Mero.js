import React from 'react';
import logo from '../images/logo1.png';
import pic1 from '../images/defaultBcg.jpg';
import pic2 from '../images/defaultBcg1.png';
import {Link} from 'react-router-dom';

export default function Mero({children,mero}) {
    return  <header className={mero}>{children}</header>;
}


    
        Mero.defaultProps ={
            mero: "defaultMero"
        }
        