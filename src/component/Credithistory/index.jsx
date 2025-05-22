import styles from './styles.module.scss'
import { HiAdjustmentsHorizontal } from "react-icons/hi2";
import { HiArrowDown } from "react-icons/hi2";
import Button from '../Button'
const Credithistory = () => {
    return(
        <div className={styles.credithistory}>
            <div className={styles.credithistory__top}>
                <h3>Credits history</h3>
                <div className={styles.buttonwrap}>
                    <Button type='button__secondary'>
                        <HiAdjustmentsHorizontal />
                        <span>Filters</span>
                    </Button>
                    <Button type='button__secondary'>
                        <span>Download Statement</span>
                    </Button>
                </div>
            </div>
            <div className={styles.credithistory__bottom}>
                <table cellSpacing="0" className={styles.table}>
                    <thead>
                        <tr>
                            <th>Credit from/used</th>
                            <th>Credit Point</th>
                            <th>Date</th>
                            <th>Credit Used</th>
                            <th>Remarks</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <span className={styles.credit}>
                                    <span className={`imgwrap ${styles.downarrow}`}>
                                        <HiArrowDown />
                                    </span>
                                    <span className={styles.credit__right}>
                                        <span>Credit Out</span>
                                        <span>Order: ABC12345</span>
                                    </span>
                                </span>
                            </td>
                            <td>1500.00</td>
                            <td>10 June 2025</td>
                            <td>Quiz Reattempt</td>
                            <td>Credit Utilized for Quiz Reattempt on Day 2 = 21st April 2025</td>
                        </tr>
                        <tr>
                            <td></td>
                        </tr>
                        <tr>
                            <td>
                                <span className={styles.credit}>
                                    <span className={`imgwrap ${styles.uparrow}`}>
                                        <HiArrowDown />
                                    </span>
                                    <span className={styles.credit__right}>
                                        <span>Credit Out</span>
                                        <span>Order: ABC12345</span>
                                    </span>
                                </span>
                            </td>
                            <td>1500.00</td>
                            <td>10 June 2025</td>
                            <td>Quiz Reattempt</td>
                            <td>Credit Utilized for Quiz Reattempt on Day 2 = 21st April 2025</td>
                        </tr>
                        <tr>
                            <td></td>
                        </tr>
                        <tr>
                            <td>
                                <span className={styles.credit}>
                                    <span className={`imgwrap ${styles.uparrow}`}>
                                        <HiArrowDown />
                                    </span>
                                    <span className={styles.credit__right}>
                                        <span>Credit Out</span>
                                        <span>Order: ABC12345</span>
                                    </span>
                                </span>
                            </td>
                            <td>1500.00</td>
                            <td>10 June 2025</td>
                            <td>Quiz Reattempt</td>
                            <td>Credit Utilized for Quiz Reattempt on Day 2 = 21st April 2025</td>
                        </tr>
                        <tr>
                            <td></td>
                        </tr>
                        <tr>
                            <td>
                                <span className={styles.credit}>
                                    <span className={`imgwrap ${styles.downarrow}`}>
                                        <HiArrowDown />
                                    </span>
                                    <span className={styles.credit__right}>
                                        <span>Credit Out</span>
                                        <span>Order: ABC12345</span>
                                    </span>
                                </span>
                            </td>
                            <td>1500.00</td>
                            <td>10 June 2025</td>
                            <td>Quiz Reattempt</td>
                            <td>Credit Utilized for Quiz Reattempt on Day 2 = 21st April 2025</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Credithistory