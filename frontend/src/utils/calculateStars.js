function calculateStars(allReviews) {
    // calculating stars
    let starRating = 0;
    let reviewTotal = 0;
    let averageRating = 0;
    Object.values(allReviews).forEach(el => {
        starRating += el.stars;
        reviewTotal++
    })
    if (starRating) {
        averageRating = (starRating / reviewTotal).toFixed(2);
    } else {
        averageRating = 0;
    }

    return averageRating
}

export default calculateStars
