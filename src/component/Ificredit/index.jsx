import styles from './styles.module.scss'
import Button from '../Button'
const Ificredit = () => {    
    return(
        <div className={styles.ificredit}>
            <h3>IFI Credits</h3>
            <div className={`box ${styles.ificredit__inner}`}>
                <div className={styles.ificredit__left}>
                    <span className={styles.credittext}>Credits</span>
                    <b>340.00</b>
                    <span className={styles.usetext}>Use for quiz, pause &amp; replay</span>
                </div>
                <div className={styles.ificredit__right}>
                    <span>Like to earn some credits?</span>
                    <p className={`mb-2`}>Refer people you know and everyone benefits!</p>
                    <Button type='button__primary'>Earn IFI Credits</Button>
                </div>
            </div>
        </div>
    )
}

export default Ificredit