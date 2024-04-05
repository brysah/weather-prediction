import styles from './Input.module.scss'
import { FaSearch } from "react-icons/fa";

export function Input({handleSubmit,handleInput}) {
    return (
        <div className={styles.wrapper}>
            <label htmlFor="search"  ></label>
            <input
                type="text"
                name="search"
                id="search"
                placeholder='Insira o nome da cidade'
                className={styles.wrapper__input}
                onChange={handleInput}
            />
            <button className={styles.wrapper__btn} onClick={handleSubmit} >
                <FaSearch  />
            </button>
        </div>
    )
}