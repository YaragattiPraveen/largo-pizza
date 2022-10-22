import React from 'react'
import '../styles/footer.css'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import MailIcon from '@mui/icons-material/Mail';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';

function Footer() {
    return (
        <>
            <div className='footer_section'>
                <div className='About_us'>
                    <h4>About US</h4>
                    <p>Far far away, behind the word mountains, <br />far from the countries Vokalia and Consonantia,<br /> there live the blind texts.</p>
                </div>
                <div className='Services'>
                    <h4>Services</h4>
                    <li>Cooked</li>
                    <li>Deliver</li>
                    <li>Quality Foods</li>
                    <li>Mixed</li>
                </div>
                <div className='QA'>
                    <h4>Contact US</h4>
                    <p className='center'><span><LocationOnIcon className='icons' style={{fontSize:'2.2rem'}} /></span> 203 Fake St. Mountain View, San Francisco, California, USA</p>
                    <p className='center'><span><PhoneIcon className='icons' style={{fontSize:'2.2rem'}}/></span>+2 392 3929 210
                    </p>
                    <p className='center'><span><MailIcon className='icons' style={{fontSize:'2.2rem'}} /></span> pby@youdomain.com</p>
                </div>
                <div className='social_media'>
                    <h4>Social Media</h4>
                    <div className='social_media_icons'>
                        <FacebookOutlinedIcon className='icons' style={{fontSize:'2.2rem'}} />
                        <YouTubeIcon className='icons' style={{fontSize:'2.2rem'}} />
                        <TwitterIcon className='icons' style={{fontSize:'2.2rem'}} />
                        <InstagramIcon className='icons' style={{fontSize:'2.2rem'}} />
                    </div>

                </div>
            </div>
            <div className='copyright'>
                <p>Copyright &copy;2022 all rights reserved | Praveen Yaragatti</p>
            </div>
        </>
    )
}

export default Footer