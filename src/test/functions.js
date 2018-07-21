module.exports ={
    register: function(user){
        return user.length ? true : false;},   
    
   userInfo:  function(info){
       return  info[0].name == "Adam" || info[0].email == "adamdreier1" ? true : false;
           
   }
    
}




