require("ts-node").register({ files: true });
import path from 'path';


async function turnProjectsIntoPages({ graphql, actions }) {
  const projectTemplate = path.resolve('./src/templates/Project.tsx');
  // 2. Query all projects
  const { data } = await graphql(`
    query {
      projects: allSanityProject {
        nodes {
          name
          slug {
            current
          }
        }
      }
    }
  `);
  // 3. Loop over each project and create a page for that project
  data.projects.nodes.forEach((project) => {
    actions.createPage({
      // What is the URL for this new page??
      path: `project/${project.slug.current}`,
      component: projectTemplate,
      context: {
        slug: project.slug.current,
      },
    });
  });
}


export async function createPages(params) {
  // Create pages dynamically
  // Wait for all promises to be resolved before finishing this function
  await Promise.all([
    turnProjectsIntoPages(params)
  ]);
}

exports.onCreatePage = ({
  page,
  actions: { createPage, deletePage },
}) => {
  const frontmatter = page.context.frontmatter;
  if (frontmatter && frontmatter.type === "post") {
    deletePage(page);
    createPage({
      ...page,
      path: `blog/posts${page.path}`,
    });
  }
};