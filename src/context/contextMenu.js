import { createContext, useState } from 'react';

export const MenuContext = createContext();

export const MenuProvider = ({ children }) => {
    const [isMenu, setIsMenu] = useState(false)
    const handleMenu = () => {
        // alert('menu')
        setIsMenu(!isMenu)
    }
    return(
        <MenuContext.Provider value={{isMenu, handleMenu}}>
            {children}
        </MenuContext.Provider>
    )
}