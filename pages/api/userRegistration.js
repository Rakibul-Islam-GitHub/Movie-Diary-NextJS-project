import {client} from '../../database/dbConnect';

function handler(req, res) {
    
    if (req.method === 'POST') {
        // const reviewCollection= dbobj.collection('reviews');
        
        const data = req.body
        if(data.email && data.password && data.displayName){

            client.connect(async err => {
                const collection = client.db("movie-diary").collection("users");
                
                const result= await collection.insertOne(data);
                // console.log(result)
                if(result){
                    client.close();
                    res.status(200).send('Registration done successfully');
                }else{
                    console.log(err);
                    res.status(500).send('server error')
                }
                
              });


            
            

        }
        else{
            res.status(403).send('invalid data')
        }
       
    }
    
}


export default handler;