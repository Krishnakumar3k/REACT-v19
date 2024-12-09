
import styles from "./Movies.module.css";
export const SeriesCard = (props) => {
    // Destructure props.data at the start
    const { img_url, name, rating, description, cast, genre, watch_url } = props.data;

    const btn_style  = {
        padding: "1.2rem 1.4rem",
        border: "none",
        fontSize: "1.6rem",
        backgroundColor: `${rating >= 8.5 ?"#5fec9c" : "#f1e95a"}`,
        color: "var(--bg-color)",
        fontWeight : "bold"
    };

    // Now you can use `rating` without any issues
    const ratingClass = rating >= 8.5 ? styles.hit : styles.average;

    return (
        <li className={styles.card}>
            <div>
                <img src={img_url} alt={name} width="40%" height="40%" />
            </div>
            {/* <div className={styles['card-Content']}> */}
            <div className="flex flex-col gap-4 p-4 px-[1rem] py-[1rem">
                <h2>Name: {name}</h2>
                {/* Below this code we can add multiple className using template literals to style the CSS */}
                <h3>Rating: <span className={`${styles.rating} ${ratingClass}`}>{rating}</span></h3>
                <p className="text-3xl font-bold underline">Summary: {description}</p>
                <p>Genre: {genre}</p>
                <p>Cast: {cast}</p>
                <a href={watch_url} target="_blank" rel="noopener noreferrer">
                    <button style={btn_style}>Watch Now</button>
                </a>
            </div>
        </li>
    );
};
