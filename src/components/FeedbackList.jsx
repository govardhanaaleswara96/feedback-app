import FeedbackItem from "./FeedbackItem"


function FeedbackList({feedback}) {
    if(!feedback || feedback.length === 0) {
        return ('No Feedback Yet')
    }

  return (
    <div className="feedback-list">
     {
        feedback.map((item)=>(
            <FeedbackItem key={item.id} 
            rating = {item.rating} text={item.text}/>
        ))
     }
    </div>
  )
}

export default FeedbackList
