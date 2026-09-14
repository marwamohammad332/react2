import { FaFacebookF, FaTwitter, FaLinkedinIn, FaDribbble } from 'react-icons/fa';

function Footer() {


    return <>
        <div className="py-5"
            style={{ background: '#2c3e50', color: '#fff' }}>
            <div className="container mx-6">
                <div className='row'>
                    <div className='col text-center'>
                        <h4>
                            Location
                        </h4>
                        <p className="small">
                            2215 John Daniel Drive <br />
                            Clark, MO 65243
                        </p>
                    </div>
                    <div className="col mb-5 mb-lg-0 text-center">
                        <h4 className="text-uppercase tetx-center mb-4">Around the Web</h4>
                        <div className='d-flex justify-content-center align-items-center gap-1'>
                            <a className='btn btn-outline-light rounded-circle d-flex justify-content-center align-items-center'
                                style={{ width: '40px', height: '40px' }} href='#'>
                                <FaFacebookF />
                            </a>
                            <a className='btn btn-outline-light rounded-circle d-flex justify-content-center align-items-center'
                                style={{ width: '40px', height: '40px' }} href='#'>
                                <FaTwitter />
                            </a>
                            <a className='btn btn-outline-light rounded-circle d-flex justify-content-center align-items-center'
                                style={{ width: '40px', height: '40px' }} href='#'>
                                <FaLinkedinIn />
                            </a>
                            <a className='btn btn-outline-light rounded-circle d-flex justify-content-center align-items-center'
                                style={{ width: '40px', height: '40px' }} href='#'>
                                <FaDribbble />
                            </a>
                        </div>
                    </div>
                    <div className='col text-center'
                    style={{width:'50%'}}>
                        <h4>
                            About Freelancer
                        </h4>
                        <p className='small mx-auto'
                        style={{width:'70%'}}>
                            Freelance is a free to use, MIT licensed Bootstrap theme created by Start Bootstrap .
                        </p>
                    </div>
                </div>

            </div>

        </div>
    </>
}
export default Footer;