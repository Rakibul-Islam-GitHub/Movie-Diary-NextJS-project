import {client} from '../../database/dbConnect';

function handler(req, res) {
    
    if (req.method === 'POST') {
        
        
        const data = req.body
        const email = req.body.email;
        const password = req.body.password;
        if(data.email && data.password ){

            client.connect(async err => {
                const collection = client.db("movie-diary").collection("users");
                
                const result= await collection.findOne({ email, password})
                // console.log(result)
                if(result){
                    client.close();
                    res.status(200).send(result);
                }else{
                    console.log(err);
                    res.status(403).send('Invalid Username or Password');
                }
                
              });


            
            

        }
        else{
            res.status(403).send('invalid data')
        }
       
    }
    
}


export default handler;