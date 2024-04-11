import "./OtherReviewSection.css"

import formatMonthAndYear from "../../../utils/formatMonthAndYear";

function OtherReviewSection({ reviews }) {
    return (
        reviews.allReviewsId.map((el, i) => {
            const currReview = reviews.allReviews[el]
            return (
                <div id="other-reviews" key={i}>
                    <section id="review-user-info">
                        <div id='review-icon-container'>
                            {reviews.allReviews[el].User.firstName.slice(0, 1)}
                        </div>
                        <aside>
                            <section id="review-name">
                                {currReview.User.firstName} {currReview.User.lastName}
                            </section>
                            <section id="review-date">
                                {formatMonthAndYear(currReview.createdAt.slice(0, 10))}
                            </section>
                        </aside>
                    </section>
                    <div id="review">
                        {currReview.review}
                    </div>
                </div>
            )
        })
    )
}

export default OtherReviewSection
