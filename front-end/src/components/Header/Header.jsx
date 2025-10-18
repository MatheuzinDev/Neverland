import Logo from "../Logo/Logo"
import styles from "./Header.module.css"

export default function Header() {
    return (
        <>
            <div className={styles.container}>
                <Logo></Logo>

                <ul className={styles.list}>
                    <li>Membros</li>
                    <li>História</li>
                    <li>Galeria</li>
                </ul>
            </div>
        </>
    )
}