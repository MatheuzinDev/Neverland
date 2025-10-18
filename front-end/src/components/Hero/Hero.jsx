import styles from "./Hero.module.css"
import HeroVideo from "../../assets/hero.mp4"

export default function Hero() {

    return (
        <>
            <div className={styles.container}>
                <video className={styles.video} autoPlay muted loop>
                    <source src={HeroVideo} type="video/mp4"/>
                </video>

                <div className={styles.overlay}></div>

                <div className={styles.content}>
                    <h1 className={styles.title}>Neverland</h1>
                    <h3 className={styles.subtitle}>Um lugar em que o entretenimento é garantido!</h3>
                </div>
            </div>
        </>
    )
}