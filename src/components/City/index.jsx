import styles from './City.module.scss'

export function City({name,min,max}){
    return(
        <div className={styles.city}>
            <div className={styles.city__temperature}>
             <div className={styles.city__caption}>Min</div>
             <div className={styles.city__degree}>{min}°C</div>
            </div>
            <div className={styles.city__temperature}>
             <div className={styles.city__caption}>Max</div>
             <div className={styles.city__degree}>{max}°C</div>
            </div>
            <p className={styles.city__name}>{name}</p>
        </div>
    )
}
