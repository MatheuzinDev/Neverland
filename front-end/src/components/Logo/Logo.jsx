import LogoImg from "../../assets/logo.png"
import styles from "./Logo.module.css"

export default function Logo() {

    return (
        <>
            <div className={styles.container}>
                <img className={styles.img} src={LogoImg} alt="" />
                <h1 className={styles.title}>Neverland</h1>
            </div>
        </>
    )
}