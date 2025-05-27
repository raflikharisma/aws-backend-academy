const routes = [

    {
        method: `*`,
        path: `/`,
        handler: (request, h) => {
            return `Page Not Found`
        }
    },{
        method:`GET`,
        path: `/`,
        handler: (request, h) => {
            return `Homepage`
        },
    },
    {
        method:`GET`,
        path:`/about`,
        handler: (request, h) => {
            return `About page`;
        },
    },
    {
        method:`GET`,
        path: `/users/{username?}`,
        handler: (request, h) => {
            const { username = "unknown" } = request.params;
            const { lang } = request.query;

            if(lang === 'kr'){
                return `Anyong, Oppa ${username}`
            }
            return `Hello, ${username}`
        },
    },
    
]


module.exports = routes