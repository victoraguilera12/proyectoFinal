
module.exports = function(app){
    const url = "/comentarios";

    app.get(url+'/:id',function(req,res){
      const id = req.params.id;
    })
    
    
    app.post(url,function(req,res){
        
    })

    app.delete(url,function(req,res){
        
    })

}