import "./OtherReviewSection.css"

import formatMonthAndYear from "../../../utils/formatMonthAndYear";

function OtherReviewSection({ reviews }) {
    return (
        reviews.allReviewsId.map((el, i) => {
            const currReview = reviews.allReviews[el]
            return (
                <div className="other-reviews-section" key={i}>
                    <section className="review-user-info">
                        <div className='review-icon-container'>
                            {reviews.allReviews[el].User.firstName.slice(0, 1)}
                        </div>
                        <aside>
                            <section className="review-name">
                                {currReview.User.firstName} {currReview.User.lastName}
                            </section>
                            <section className="review-date">
                                {formatMonthAndYear(currReview.createdAt.slice(0, 10))}
                            </section>
                        </aside>
                    </section>
                    <div className="other-reviews-review">
                        {currReview.review}
                    </div>
                </div>
            )
        })
    )
}

export default OtherReviewSection
