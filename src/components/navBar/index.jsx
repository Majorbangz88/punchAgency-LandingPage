import React, { useState } from 'react';
import Logo from '../../assets/logo.svg';
import GhostButton from '../../components/buttons/ghostButton';
import FilledButton from '../../components/buttons/filleButton';
import style from './index.module.css';

const NavBar = () => {
    const [isMenuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };

    return (
        <div className={style.container}>
            <div className={style.logo}>
                <img src={Logo} alt={'Logo'} />
            </div>
            <div className={style.menuItems}>
                <p>Find Work</p>
                <p>Find Talent</p>
                <p>Articles</p>
                <p>About Us</p>
                <p>Contact Us</p>
            </div>
            <div className={style.containerBtn}>
                <GhostButton text={'Log in'} color={'white'}
                             padding={'10px 20px'} fontFamily={'switzer'}
                             fontSize={'small'}
                />

                <FilledButton text={'Join Now'} padding={'10px 20px'}
                              borderRadius={'15px'} border={'none'}
                              color={'black'} fontFamily={'switzer'}
                />
            </div>
            <div className={style.hamburgerMenu} onClick={toggleMenu}>
                <div className={style.hamburgerIcon}>☰</div>
                {isMenuOpen && (
                    <div className={style.menuDropdown}>
                        <p>Find Work</p>
                        <p>Find Talent</p>
                        <p>Articles</p>
                        <p>About Us</p>
                        <p>Contact Us</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default NavBar;
