import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import Button from '../Button'
import { HiBars3 } from "react-icons/hi2";
import { HiOutlineWallet } from "react-icons/hi2";
import { HiOutlineBell } from "react-icons/hi2";
import { HiMiniUserCircle } from "react-icons/hi2";
import styles from './styles.module.scss'
import { MenuContext } from '../../context/contextMenu'
const Header = () => {
    const { handleMenu } = useContext(MenuContext)
    const [isProfile, setIsProfile] = useState(false)
    return(
        <div className={`${styles.header}`}>
            <header>
                <div className={styles.header__left}>
                    <Button onClick={handleMenu} type="button__icon">
                        <span className={styles.icon__menu}>
                            <HiBars3 />
                        </span>
                    </Button>
                    <Link to="/">
                        <img className={styles.logo} src="https://www.invest19.com/images/logo/invest-19-logo2.svg" alt="logo" />
                    </Link>
                </div>
                <div className={styles.header__right}>
                    <span className={styles.wallet}>
                        <Button type="button__primary">
                            <span className={`${styles.icon__wallet}`}>
                                <Button type="button__icon">
                                    <HiOutlineWallet />
                                </Button>
                            </span>
                            <span>₹ 340.00</span>
                        </Button>
                    </span>
                    <span className={styles.notification}>
                        <Button type={`button__icon`}>
                            <span className={styles.icon__notification}>
                                <HiOutlineBell />
                                <span className={styles.count}>8</span>
                            </span>
                        </Button>
                    </span>
                    <span className={styles.profile}>
                        {!isProfile ? <HiMiniUserCircle /> :
                            <img src="https://www.invest19.com/images/logo/invest-19-logo2.svg" alt="profile" />}
                    </span>
                </div>
            </header>
        </div>
    )
}

export default Header