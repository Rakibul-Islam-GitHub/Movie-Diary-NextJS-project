import Head from 'next/head';
import ReviewList from '../components/ReviewList';
const { MongoClient, ServerApiVersion } = require('mongodb');




export default function Home(props) {
  const reviews= JSON.parse(props.reviews);
  // console.log(reviews)

  return (
    < >
      <Head>
        <title>Movie Diary App</title>
        <meta property="og:title" content="The app is built with NextJS"></meta>
        <meta name="description" content="This is a Movie Diary app, where you can write your favorite movie review" />
        <meta property="og:image" content="/images/screenshot.png"/>
        
      </Head>
      
     <div className="container ">
       {reviews.map( (review)=> {
          return(
            <ReviewList key={review._id.toString()} title= {review.title} id= {review._id.toString()} release={review.release} img={review.img} review={review.review} author={review.author}  />
          )
       })}
       
     </div>

    </>
  )

  
}

export async function getStaticProps(){


  const uri = `mongodb+srv://rakibul:${process.env.DB_PASS}@cluster0.gpypc.mongodb.net/movie-diary?retryWrites=true&w=majority`;
  const client = await MongoClient.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });


  const db = client.db();

  const reviewCollection = db.collection("reviews");


  const allreview = await reviewCollection.find().toArray();

  client.close();

  

    return {
      props: {
        reviews: JSON.stringify(allreview)
      },
      revalidate:1
    }
    
  
  
}
