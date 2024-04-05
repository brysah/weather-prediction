import styles from './Details.module.scss'
import { MdClose } from "react-icons/md";
import { IoMdArrowDown, IoMdArrowUp } from "react-icons/io"; 

export function Details({ data }) { 
    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    return (
        <div className={styles.details}>
            <div className={styles.details__header}>
                <p className={`${styles.details__text} ${styles['details__text--medium']}`}>
                    {data.name} - {data.sys.country}
                </p>
                <button className={styles.details__btn} >
                    <MdClose />
                </button>
            </div>
            <div className={styles.details__content}>
                <p className={`${styles.details__text} ${styles['details__text--big']}`}>
                    {Math.round(data.main.temp)}°C {capitalizeFirstLetter(data.weather[0].description)}
                </p>
                <div className={styles.details__info}>
                    <div className={styles.details__info__item}>
                        <div className={styles.details__item__wrapper}>
                            <IoMdArrowDown />
                            <p className={`${styles.details__text} ${styles['details__text--small']}`}>
                                {Math.round(data.main.temp_min)}°C
                            </p>
                        </div>
                        <div className={styles.details__item__wrapper}>
                            <IoMdArrowUp />
                            <p className={`${styles.details__text} ${styles['details__text--small']}`}>
                                {Math.round(data.main.temp_max)}°C
                            </p>
                        </div>
                    </div>
                    <div className={styles.details__info__item}>
                        <p className={`${styles.details__text} ${styles['details__text--small']} ${styles['details__text--light']}`}>
                            Sensação
                        </p>
                        <p className={`${styles.details__text} ${styles['details__text--small']}`}>
                            {Math.round(data.main.feels_like)}°C
                        </p>
                    </div>
                    <div className={styles.details__info__item}>
                        <p className={`${styles.details__text} ${styles['details__text--small']} ${styles['details__text--light']}`}>
                            Vento
                        </p>
                        <p className={`${styles.details__text} ${styles['details__text--small']}`}>
                            {data.wind.speed}m/s
                        </p>
                    </div>
                    <div className={styles.details__info__item}>
                        <p className={`${styles.details__text} ${styles['details__text--small']} ${styles['details__text--light']}`}>
                            Humidade
                        </p>
                        <p className={`${styles.details__text} ${styles['details__text--small']}`}>
                            {data.main.humidity}%
                        </p>
                    </div>
                </div>
            </div>
            <div className={styles.details__line}></div> 
        </div>
    )
}