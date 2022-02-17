import { USERS } from './users'

export const POSTS = [
    {
        imageUrl: 'https://i.imgur.com/cqxrmld.jpg',
        user: USERS [0].user,
        likes: 7871,
        caption: 'Super Lemby bumbum!',
        profile_picture: USERS[0].image,
        comments: [
            {
                user: 'mcklazie',
                comment: 'Cute little stinker x',
            },
            {
                user: 'gomland',
                comment: 'How cute, sweetie to greety beety',
            },
        ],
    },
    {
        imageUrl: 'https://i.imgur.com/MiwRSsB.jpg',
        user: USERS [1].user,
        likes: 6270,
        caption: 'Fat cat tigger',
        profile_picture: USERS[1].image,
        comments: [
            {
                user: 'lemby',
                comment: 'woof woof',
            },
            {
                user: 'sandrash',
                comment: 'hmmmmmmmmm',
            },
        ], 
    },
]