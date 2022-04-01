import React from 'react'
import { ICDiscord, ICFacebook, ICGitHub, ICInstagram, ICTelegram, ICTwitter, LogoHK } from '../../../assets'
import './footer.scss'

const Icon = ({img}) => {
    return (
        <div className='icon-wraper'>
            <img className='icon-medoso' src={img} alt='icon' />
        </div>
    )
}


const Footer = () => {
  return (
    <div>
        <div className='footer'>
            <div>
                <img className='logo' src={LogoHK} alt='logohk' />
            </div>
            <div className='social-wraper'>
                <Icon img={ICFacebook} />
                <Icon img={ICTwitter} />
                <Icon img={ICInstagram} />
                <Icon img={ICTelegram} />
                <Icon img={ICDiscord} />
                <Icon img={ICGitHub} />
            </div>
        </div>
        <div className='copyright'>
            <p>Copyright &copy; 2022 - Handy Kharisma Coding All Right Reserved</p>
        </div>
    </div>
  )
}

export default Footer