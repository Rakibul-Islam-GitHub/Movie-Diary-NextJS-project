import { Card, Form, Button } from "react-bootstrap";
import axios from "axios";
import { useRouter } from "next/router";


const AddReview = () => {
    const router = useRouter();
    const addReviewHandler= async (e)=> {
        e.preventDefault();
        const title = e.target.movieName.value;
        const release= e.target.releaseYear.value;
        const img = e.target.imageUrl.value;
        const review= e.target.review.value;

      
        try {
            const res = await axios.post('/api/add-review', {title, release, img, review});
            if(res.status===200){
                e.target.review.value= '';
                e.target.imageUrl.value='';
                e.target.releaseYear.value= '';
                e.target.movieName.value= '';

                router.push('/')
            }
            
        } catch (error) {
            console.log(error);
            
        }

    }
    return (
        <>
        <div className="addreview">

        <div className="mt-5">
                    <Form onSubmit={addReviewHandler} className="review-form">
                        <Form.Group controlId="exampleForm.ControlInput1">
                            <Form.Label>Movie Name</Form.Label>
                            <Form.Control type="text" name="movieName" />
                        </Form.Group>

                        <Form.Group controlId="exampleForm.ControlInput1">
                            <Form.Label>Release Year</Form.Label>
                            <Form.Control type="text" name="releaseYear" />
                        </Form.Group>

                        <Form.Group controlId="exampleForm.ControlInput1">
                            <Form.Label>Image Url</Form.Label>
                            <Form.Control type="text" name="imageUrl" />
                        </Form.Group>
                        
                        <Form.Group controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Review</Form.Label>
                            <Form.Control as="textarea" name="review" rows={5} />
                        </Form.Group>
                    <Button className="mt-2" type="submit">submit</Button>
                    </Form>
        </div>

        </div>
               
                
               
        
            
        </>
    );
};

export default AddReview;