import styles from './styles.module.scss'
const Button = ({onClick, children, type = ''}) => {
    return(
        <button onClick={onClick} role="button" tabIndex="0" className={`ripple ${styles.button} ${styles[type]}`}>{children}</button>
    )
}
export default Button