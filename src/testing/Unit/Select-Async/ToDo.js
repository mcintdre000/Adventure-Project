module.exports = {

    completedCopy: [],
    goalsCopy: [],
    data: {},

    wasSelected: function(event) {
        let user = {
            adventures_completed: [],
            adventure_goals: []
        }
        if ( event.name === 'completed') {
            this.completedCopy = user.adventures_completed.slice();
            this.completedCopy.push(1)
            
        } else {
            this.goalsCopy = user.adventure_goals.slice();
            this.goalsCopy.push(2)
        }
    },

    toMap: () => {
        console.log('-----',this.data)
        let displayAdventureGoals;
        let obj = {
            adventures_completed: [],
            adventure_goals: [ {name: 'name'} ]
        }
        if( !this.data ){ 
            this.data = obj.adventure_goals.map( e => {
            return e.name
        })}
        return this.data
    }

    // photoFunction: () => {
    //     let axiosPromise = axios.get('')
    //     axiosPromise = axiosPromise.then( res => {
    //         let adventures = []
    //         let id;
    //         for( let i = 0; i < this.data.places.length; i++ ){
    //             id = this.data.places[i].unique_id
    //             return function getPhoto(id).then( photo => {
    //                 this.data.places[i].picture = photo[0].photo
    //                 adventures.push(this.data.places[i])
    //             })
    //     }
    //     return adventures;
    //  }
    //     })
    //     let adventures = []
    //     let id;
    //     for( let i = 0; i < this.data.places.length; i++ ){
    //         id = this.data.places[i].unique_id
    //         return function getPhoto(id).then( photo => {
    //             this.data.places[i].picture = photo[0].photo
    //             adventures.push(this.data.places[i])
    //         })
    // }
    // return adventures;
//  }

}