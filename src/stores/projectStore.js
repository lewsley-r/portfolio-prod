import { defineStore } from 'pinia'

// You can name the return value of `defineStore()` anything you want, 
// but it's best to use the name of the store and surround it with `use` 
// and `Store` (e.g. `useUserStore`, `useCartStore`, `useProductStore`)
// the first argument is a unique id of the store across your application
export const useProjectStore = defineStore('project', {
    state: () => ({
        projects: [{
            title: 'Ulster Computing Blogs',
            description: 'This is a social blogging platform that I created as my final year dissertation project, it uses NLP to tag posts by the topics being discussed in the post itself',
            image: 'projects/UUCB.png',
            backend: 'https://github.com/lewsley-r/UUCB/tree/master/backend',
            frontend: 'https://github.com/lewsley-r/UUCB/tree/master/frontend'

        },
        {
            title: '682 MicroBlogs',
            description: 'This is a social platform that I created as my part of a cloud computing project.' +
                ' It uses Github actions for pipeline deployment, various Azure cloud services such as Azure functions, Cloud functions and static deployments. A key aspect of the project was demonstrate ability to use Cloud technologies on the Microsoft Azure platform. ',
            image: 'projects/COM682-Blogs-logos_black.png',
            frontend: 'https://github.com/lewsley-r/682-microblogs'

        },
        {
            title: 'Premier League Fantasy Team Builder',
            description: 'This is a fantasy team build that I created for a full stack development project, it uses Angular as a frontend SPA, with Python Flask as a backend API',
            image: 'projects/ftb-logos_black.png',
            frontend: 'https://github.com/lewsley-r/fantasy_team_builder/tree/master/frontend',
            backend: 'https://github.com/lewsley-r/fantasy_team_builder/tree/master/backend'

        },

        ],

    }),

    getters: {

    },

    actions: {

    },
})
