module.exports ={
    //get everything
    getProducts(req,res){
        const db= req.app.get("db")
    db.getProducts()
        .then(products => res.status(200).json(products))
        .catch(console.log)
    },
    //get the tops
    getTops(req,res){
        const db =req.app.get("db")
        db.getTops()
        .then(products => res.status(200).json(products))
        .catch(err => res.status(500).send({oooops}))
    },
    //get bottoms
    getBottoms(req,res){
        const db =req.app.get("db")
        db.getBottoms()
        .then(products => res.status(200).json(products))
        .catch(err => res.status(500).send({oooops}))
    },
    //get acessorys
    getAcessorys(req,res){
        const db =req.app.get("db")
        db.getAcessorys()
        .then(products => res.status(200).json(products))
        .catch(err => res.status(500).send({oooops}))
    },
}