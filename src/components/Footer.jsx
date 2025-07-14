import React from 'react'
import { FaChrome, FaDiscord, FaFirefoxBrowser, FaGithub, FaTelegram, FaTwitter } from 'react-icons/fa'

const links = [
    { href: 'https://discord.com', icon: <FaDiscord />},
    { href: 'https://x.com/aladejobi_david', icon: <FaTwitter />},
    { href: 'https://t.me/davestin', icon: <FaTelegram />},
    { href: 'https://github.com/Catobrainstorm', icon: <FaGithub />},
    { href: 'https://catobrainstorm.github.io/Davestein/', icon: <FaChrome />},
]

const Footer = () => {
    return (
        <footer className='w-screen bg-violet-600 py-4 text-black'>
            <div className='container mx-auto flex flex-col items-center justify-between gap-4 px-4 md:flex-row'>
                <p className='text-center text-sm md:text-left'>
                    &copy; DaveStein 2025. All rights reserved
                </p>

                <div className='flex justify-center gap-4 md:justify-start'>
                    {links.map((link) => (
                        <a key={link} href={link.href} target='_blank' rel='noopener noreferrer' className='text-black transition-colors duration-500 ease-in-out hover:text-white'>
                            {link.icon}
                        </a>
                    ))}
                </div>

                <a href="#privacy-policy" className='text-center text-sm hover:underline md:text-right'> Privacy Policy</a>
            </div>
        </footer>
    )
}

export default Footer