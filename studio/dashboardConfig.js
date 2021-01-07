export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
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
                  buildHookId: '5ff717c227dc5bf9220acef6',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-rzzhahyq',
                  apiId: '5be475c6-7626-4d0e-964e-be6f11ce4089'
                },
                {
                  buildHookId: '5ff717c31aa0ebeb563129b8',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-3wcdg9d2',
                  apiId: '01974ab7-1ba6-47b9-9990-77ff40a3913b'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Bankon1/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-3wcdg9d2.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
