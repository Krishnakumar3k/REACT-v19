<div className={styles['card-Content']}>
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