let comments = [
    {
        id: 1,
        content: 'hey',
        created: 'today',
        hiking_id: '16731',
        hiking_name: 'Brushy Creek State Recreation Area',
        users_id: 19
    } 
]

module.exports = {
    test: (a, b) => {
        return a + b;
    },

    postComment: (newComment) => {
        const { id, content, created, hiking_id, hiking_name, users_id } = newComment
        comments.push({ id, content, created, hiking_id, hiking_name, users_id })
        return comments[1]
    },

    getComment: (id) => {
        let index = comments.findIndex( e => e.id == id )
        let getComment = comments[ index ]
        return getComment
    },

    deleteComment: (id) => {
        let index = comments.findIndex( e => e.id == id )
        comments.splice(index, 1)
        return comments.length
    },

    editComment: (editComment) => {
        let { id, content, created, hiking_id, hiking_name, users_id } = editComment
        let index = comments.findIndex( e => e.id == id )
        let comment = comments[index]

        comments[index] = {
            id: id,
            content: content,
            created: created,
            hiking_id: hiking_id,
            hiking_name: hiking_name,
            users_id: users_id
        }

        return comments[0]
    }
}

