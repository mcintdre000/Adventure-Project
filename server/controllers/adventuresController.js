module.exports = {

    getAdventures: (req, res, next ) => {
        axios.get("").then(adventures =>res.status(200).send(adventures))
        .catch( error => console.log(error, "-----------------------> api call error"))
        
    }
}