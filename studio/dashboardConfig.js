export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-eleventy-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5f2c01a2914cd36a06ddf942',
                  title: 'Sanity Studio',
                  name: 'sanity-eleventy-blog-studio-3qdaztow',
                  apiId: '3f8eb116-fa9d-4a64-a82f-daa2a3bed5f4'
                },
                {
                  buildHookId: '5f2c01a33db416695167d708',
                  title: 'Blog Website',
                  name: 'sanity-eleventy-blog-web-4oq6bpsh',
                  apiId: 'd4d218a7-36a8-4e20-b9bc-09cb12d0a7fb'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/vinu68/sanity-eleventy-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-eleventy-blog-web-4oq6bpsh.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
