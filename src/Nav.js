import React from 'react'
import './Nav.css'
function Nav() {
  return (
    <div className='nav nav_black'>
        <div className='nav_contents'>
            <img className = 'nav__logo' 
            src='https://th.bing.com/th/id/R.7363a8ed84d5cfaa2c4aebb20cc05d57?rik=l1kDBncU2x6ywQ&riu=http%3a%2f%2fwww.audienciaelectronica.net%2fwp-content%2fuploads%2f2019%2f01%2fNetflix-logo-900x243.png&ehk=5lKrbBxqieO3jcVIiDuHn0shMgQdwAcL6ChvBKqP%2fLk%3d&risl=&pid=ImgRaw&r=0' 
            
            alt='Netflix picture'/>

            <img className = 'nav__avatar' 
            src='https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png' 
            alt='Netflix avatar'/>

            
        </div>
        
    
    </div>
  )
}

export default Nav