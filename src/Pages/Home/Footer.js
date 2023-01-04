import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-[url('/src/assets/images/footer.png')] bg-cover bg-center bg-no-repeat">
            <div className='my-10 lg:ml-48'>
                <div className='footer container mx-auto p-4 lg:p-0'>
                    <div>
                        <span className="footer-title">Services</span>
                        <a className="link link-hover" href='/'>Branding</a>
                        <a className="link link-hover" href='/'>Design</a>
                        <a className="link link-hover" href='/'>Marketing</a>
                        <a className="link link-hover" href='/'>Advertisement</a>
                    </div>
                    <div>
                        <span className="footer-title">Company</span>
                        <a className="link link-hover" href='/'>About us</a>
                        <a className="link link-hover" href='/'>Contact</a>
                        <a className="link link-hover" href='/'>Jobs</a>
                        <a className="link link-hover" href='/'>Press kit</a>
                    </div>
                    <div>
                        <span className="footer-title">Legal</span>
                        <a className="link link-hover" href='/'>Terms of use</a>
                        <a className="link link-hover" href='/'>Privacy policy</a>
                        <a className="link link-hover" href='/'>Cookie policy</a>
                    </div>
                </div>
            </div>
            <div className='text-center p-5'>
                <p>Copyright © 2023 - All right reserved by ACME Industries Ltd</p>
            </div>
        </footer>
    );
};

export default Footer;