import './footer.css'
import { FiTwitter } from 'react-icons/fi'
import { CgMail } from 'react-icons/cg'
import { AiFillGithub } from 'react-icons/ai'

const Footer = () => {
    return (
        <>
            <div className='footer-container'>
                <div className='header'>
                    <h4>
                        © Namig Samadov 
                    </h4>
                </div>
                <div className='icons'>
                    <a href='https://github.com/snamig' target='_blank'>
                        <AiFillGithub size='25px' />
                    </a>
                    <a href='https://twitter.com/namig_samadov' target='_blank'>
                        <FiTwitter size='25px' />
                    </a>
                    <a href='mailto:namigsamadov02@gmail.com'>
                        <CgMail size='25px' />
                    </a>
                </div>
            </div>
        </>
    )
}
export default Footer