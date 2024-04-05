import styles from './Home.module.scss'
import { Input } from '../../components/Input'

export function Home(){
    return(
        <div className={styles.container} >
            <h1 className={`${styles.container__title} ${styles['container__title--big']}`}>Previsão do tempo</h1>
            <Input/>
            <div className={styles.container__line}></div>
            <div className={`${styles.container} ${styles['container--pd']}`}>
            <h1 className={`${styles.container__title} ${styles['container__title--medium']}`}>Capitais</h1>
            </div>
        </div>
    )
}