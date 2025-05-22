import { useContext } from 'react'
import { NavLink } from "react-router-dom";
import styles from './styles.module.scss'
import { MenuContext } from '../../context/contextMenu'
const Sidebar = () => {    
    const { isMenu } = useContext(MenuContext)
    const menus = [
        {
            to : '/',
            name : 'My Profile'
        },
        {
            to : '/mywallet',
            name : 'My Wallet'
        },
        {
            to : '/credits',
            name : 'Credits'
        },
        {
            to : '/settings',
            name : 'Settings'
        },
        {
            to : '/termsandconditions',
            name : 'Terms and Conditions'
        }
    ];
    return(
        <div className={`box ${styles.nav} ${isMenu ? '' : 'dn'}`}>
            <nav>
                <ul>
                    {
                        menus.map(value => {
                            return <li key={value.name}>
                                <NavLink className={({isActive}) => (isActive ? styles.active : '')} to={value.to}>{value.name}</NavLink>
                            </li>
                        })
                    }
                </ul>
            </nav>
        </div>
    )
}

export default Sidebar