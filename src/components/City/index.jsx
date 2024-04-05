import styles from './City.module.scss'

export function City(){
    return(
        <div className={styles.city}>
            <div className={styles.city__temperature}>
             <div className={styles.city__caption}>Min</div>
             <div className={styles.city__degree}>18°C</div>
            </div>
            <div className={styles.city__temperature}>
             <div className={styles.city__caption}>Max</div>
             <div className={styles.city__degree}>23°C</div>
            </div>
            <p className={styles.city__name}>Rio de Janeiro</p>
        </div>
    )
}
