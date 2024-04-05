import styles from './Details.module.scss'
import { MdClose } from "react-icons/md";
import { IoMdArrowDown, IoMdArrowUp } from "react-icons/io";


export function Details() {
    return (
        <div className={styles.details}>
            <div className={styles.details__header}>
                <p className={`${styles.details__text} ${styles['details__text--medium']}`}>
                    Niteroi,RJ - Brasil
                </p>
                <button className={styles.details__btn} >
                    <MdClose />
                </button>
            </div>
            <div className={styles.details__content}>
                <p className={`${styles.details__text} ${styles['details__text--big']}`}>
                    28°C Nublado
                </p>
                <div className={styles.details__info}>
                    <div className={styles.details__info__item}>
                        <div className={styles.details__item__wrapper}>
                            <IoMdArrowDown />
                            <p className={`${styles.details__text} ${styles['details__text--small']}`}>
                                16°C
                            </p>
                        </div>
                        <div className={styles.details__item__wrapper}>
                            <IoMdArrowUp />
                            <p className={`${styles.details__text} ${styles['details__text--small']}`}>
                                18°C
                            </p>
                        </div>
                    </div>
                    <div className={styles.details__info__item}>
                        <p className={`${styles.details__text} ${styles['details__text--small']} ${styles['details__text--light']}`}>
                            Sensação
                        </p>
                        <p className={`${styles.details__text} ${styles['details__text--small']}`}>
                            16°C
                        </p>
                    </div>
                    <div className={styles.details__info__item}>
                        <p className={`${styles.details__text} ${styles['details__text--small']} ${styles['details__text--light']}`}>
                            Vento
                        </p>
                        <p className={`${styles.details__text} ${styles['details__text--small']}`}>
                            18km/h
                        </p>
                    </div>
                    <div className={styles.details__info__item}>
                        <p className={`${styles.details__text} ${styles['details__text--small']} ${styles['details__text--light']}`}>
                            Humidade
                        </p>
                        <p className={`${styles.details__text} ${styles['details__text--small']}`}>
                            89%
                        </p>
                    </div>
                </div>
            </div>
            <div className={styles.details__line}></div>
            <div className={styles.details__footer}>
                <div className={styles.details__day}>
                    <p className={`${styles.details__text} ${styles['details__text--small']}`}>
                        Terça
                    </p>
                    <p className={`${styles.details__text} ${styles['details__text--small']}
                     ${styles['details__text--orange']}`}>
                        18°C 16°C
                    </p>
                </div> 
                <div className={styles.details__day}>
                    <p className={`${styles.details__text} ${styles['details__text--small']}`}>
                        Quarta
                    </p>
                    <p className={`${styles.details__text} ${styles['details__text--small']}
                     ${styles['details__text--orange']}`}>
                        18°C 16°C
                    </p>
                </div>
                <div className={styles.details__day}>
                    <p className={`${styles.details__text} ${styles['details__text--small']}`}>
                        Quinta
                    </p>
                    <p className={`${styles.details__text} ${styles['details__text--small']}
                     ${styles['details__text--orange']}`}>
                        18°C 16°C
                    </p>
                </div>
                <div className={styles.details__day}>
                    <p className={`${styles.details__text} ${styles['details__text--small']}`}>
                        Sexta
                    </p>
                    <p className={`${styles.details__text} ${styles['details__text--small']}
                     ${styles['details__text--orange']}`}>
                        18°C 16°C
                    </p>
                </div>
                <div className={styles.details__day}>
                    <p className={`${styles.details__text} ${styles['details__text--small']}`}>
                        Sabado
                    </p>
                    <p className={`${styles.details__text} ${styles['details__text--small']}
                     ${styles['details__text--orange']}`}>
                        18°C 16°C
                    </p>
                </div>
            </div>
        </div>
    )
}