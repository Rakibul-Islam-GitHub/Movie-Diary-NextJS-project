import { Card, Form } from "react-bootstrap";


const AddReview = () => {
    return (
        <>
        <div className="addreview">

        <div className="mt-5">
                            <Form className="review-from">
                    <Form.Group controlId="exampleForm.ControlInput1">
                        <Form.Label>Movie Name</Form.Label>
                        <Form.Control type="text"  />
                    </Form.Group>

                    <Form.Group controlId="exampleForm.ControlInput1">
                        <Form.Label>Release Year</Form.Label>
                        <Form.Control type="text"  />
                    </Form.Group>

                    <Form.Group controlId="exampleForm.ControlInput1">
                        <Form.Label>Image Url</Form.Label>
                        <Form.Control type="text"  />
                    </Form.Group>
                    
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Review</Form.Label>
                        <Form.Control as="textarea" rows={5} />
                    </Form.Group>
                    </Form>
        </div>

        </div>
               
                
               
        
            
        </>
    );
};

export default AddReview;