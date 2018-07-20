const thread = require('./AdventureComment');

test('First Test', () => {
    expect( thread.test(1,2) ).toEqual(3);
})

test('postComment function to post comment', () => {
    let newComment = {
        id: 2,
        content: 'hey',
        created: 'today',
        hiking_id: '16731',
        hiking_name: 'Brushy Creek State Recreation Area',
        users_id: 19
    }
    expect( thread.postComment(newComment) ).toEqual(newComment)
})

test('getComment function to get comment', () => {
    let comment = {
        id: 1,
        content: 'hey',
        created: 'today',
        hiking_id: '16731',
        hiking_name: 'Brushy Creek State Recreation Area',
        users_id: 19
    }
    expect( thread.getComment(1) ).toEqual(comment)
})

test('deleteComment function to delete comment', () => {
    expect( thread.deleteComment(1) ).toEqual(1);
})

test('editComment function to edit comment', () => {
    let comment = {
        id: 2,
        content: 'hello',
        created: 'July 90th',
        hiking_id: '32842',
        hiking_name: 'Brushy Creek State Recreation Area',
        users_id: 19
    }
    expect( thread.editComment(comment) ).toEqual(comment);
})