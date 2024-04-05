import styles from './Home.module.scss'
import { Input } from '../../components/Input'
import { City } from '../../components/City'
import { api } from '../../services/api'
import { useEffect, useState } from 'react'

export function Home() {
    const [weather, setWeather] = useState();
    const [capitals, setCapitals] = useState([])

    useEffect(() => {
        const fetchCapitalsData = async () => {
            const brazilianCapitals = [
                "Manaus",
                "Salvador",
                "Fortaleza",
                "Brasília", 
                "Belo Horizonte",
                "Belém",
                "João Pessoa",
                "Curitiba", 
                "Rio de Janeiro",   
                "São Paulo", 
            ];
            try {
                const promises = brazilianCapitals.map(city =>
                    api.get('/weather', {
                        params: {
                            q: `${city},br`,
                            appid: 'f0b293bc2f014694931405528c7fb5a2',
                            lang:'pt_br',
                            units:'metric'
                        }
                    })
                )

                const responses = await Promise.all(promises);
                const capitalsData = responses.map(cityResponse => cityResponse.data);
                setCapitals(capitalsData);
            }
            catch (error) {
                console.error(error);
            }
        }
        fetchCapitalsData();
    }, [])

    return (
        <div className={styles.container} >
            <h1 className={`${styles.container__title} ${styles['container__title--big']}`}>Previsão do tempo</h1>
            <Input />
            <div className={styles.container__line}></div>
            <div className={`${styles.container} ${styles['container--pd']}`}>
                <h1 className={`${styles.container__title} ${styles['container__title--medium']}`}>Capitais</h1>
                <div className={styles.container__cities}>
                    {
                        
                        capitals && (
                            capitals.map((city,index)=>(
                                <City 
                                name={city.name} 
                                key={index} 
                                min={Math.round(city.main.temp_max)}
                                max={Math.round(city.main.temp_min)}
                                />
                            ))
                        )
                    }
                </div>
            </div>
        </div>
    )
}