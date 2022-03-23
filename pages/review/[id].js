import { useRouter } from 'next/router'
import { Button, Card } from "react-bootstrap";
import Link from 'next/link';
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');

const ReviewDetails = (props) => {
  const router = useRouter()
  const { id } = router.query

  const {title, img, release, review } = props.review

  return (
      <>

<div  className="row review-card">
         <div className="col-md-8 mt-3 text-center">
         <Card className='text-center'>
    <div className="card-img">
    <Card.Img variant="top" style={{height:'450px', width:'400px'}} src={img} alt={title} />
    </div>
    <Card.Body>
    <Card.Title>{title} ({release})</Card.Title>
      <Card.Text>
        {review}
      </Card.Text>
      <Link href='/'>
      <a   className='btn card-btn'   >Back</a>
      </Link>
      
    </Card.Body>
  </Card>
         </div>
         
       </div>
      
      </>
  )
}

export async function getStaticPaths(){

  const uri = `mongodb+srv://rakibul:${process.env.DB_PASS}@cluster0.gpypc.mongodb.net/movie-diary?retryWrites=true&w=majority`;
  const client = await MongoClient.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

  const db = client.db();
  const reviewCollection = db.collection("reviews");

  const reviews = await reviewCollection.find({}, {_id: 1}).toArray();
  console.log('only id', reviews)
  client.close();

  return {
    fallback: 'blocking',
    paths: reviews.map((review) =>({
        params: {id: review._id.toString()},
      })),
    
  };

}

export async function getStaticProps(context){

  const id= context.params.id;

  const uri = `mongodb+srv://rakibul:${process.env.DB_PASS}@cluster0.gpypc.mongodb.net/movie-diary?retryWrites=true&w=majority`;
  const client = await MongoClient.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });


  const db = client.db();

  const reviewCollection = db.collection("reviews");


  const details = await reviewCollection.findOne({_id : ObjectId(id)})
  console.log('single review' ,id, details)
  client.close();

  

    return {
      props: {
        review: {
          title: details.title,
          img : details.img,
          release : details.release,
          review : details.review
        }
      },
      revalidate:10
    }
    
  
  
}

export default ReviewDetails