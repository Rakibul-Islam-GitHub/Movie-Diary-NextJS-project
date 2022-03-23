import { Button, Card } from "react-bootstrap";
import Link from 'next/link'

const ReviewList = ({title, release, review, id, img, author}) => {

    return (
        <div>
             <div  className="row review-card">
         <div className="col-md-8 mt-3 text-center">
         <Card className='text-center'>
    <div className="card-img">
    <Card.Img variant="top" style={{height:'350px', width:'320px'}} src={img} />
    </div>
    <Card.Body>
    <Card.Title>{title} ({release})</Card.Title>
      <Card.Text>
        {review.slice(0,120) + '...'}
      </Card.Text>
      <div>
        <p>Review Author: {author}</p>
      </div>
      <Link href={'/review/'+id}>
      <a   className='btn card-btn'   >Details</a>
      </Link>
      
    </Card.Body>
  </Card>
         </div>
         
       </div>
        </div>
    );
};

export default ReviewList;