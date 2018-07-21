const ToDo = require( './ToDo' );

describe( 'Selected ToDo function', function (){
    const event = {
        name: 'completed'
    }
    const event2 = {
        name: 'something else'
    }
    const event3 = {
        name: 'completed'
    }
    test( 'Check', function () {
        ToDo.wasSelected(event)
        expect( ToDo.completedCopy).toContain(1)
    })
})

describe( 'Testing map', () => {
    test( 'Check adventure goals', () => {
        ToDo.toMap()
        expect( ToDo.toMap()).toEqual(['name']);
    })
})

