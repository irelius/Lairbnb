// import formatMonthAndYear from "../../../utils/formatMonthAndYear";

// const LoadReview = ({ allReviews, user }) => {
//     return (
//         Object.values(allReviews).map((el, i) => {
//             if (el.userId === user.id) {
//                 return null;
//             } else if (el.User.id) {
//                 return (
//                     <div id="other-reviews" key={i}>
//                         <section id="review-user-info">
//                             <div id='review-icon-container'>
//                                 {el.User.firstName.slice(0, 1)}
//                             </div>
//                             <aside>
//                                 <section id="review-name">
//                                     {el.User.firstName} {el.User.lastName}
//                                 </section>
//                                 <section id="review-date">
//                                     {formatMonthAndYear(el.createdAt.slice(0, 10))}
//                                 </section>
//                             </aside>
//                         </section>
//                         <div id="review">
//                             {el.review}
//                         </div>
//                     </div>
//                 )
//             }
//             return null
//         })
//     )
// }

// export default LoadReview
