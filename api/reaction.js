export default async function handler(req, res){
    if(req.method == "POST"){
        const {reaction} = req.body;
        console.log("User Reaction: ", reaction);
        res.status(200).json({message: "Reaction recorded"});
    }else{res.status(405).json({message: "Method not allowed"});

    }
}