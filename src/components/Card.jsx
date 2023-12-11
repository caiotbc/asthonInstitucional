import styles from "./Card.module.css";

export default function Card({ img, desc}) {
    return (
        <div className={styles.card}>
            <img src={img} alt={desc} />
            <p>{desc}</p>
        </div>
    );
}