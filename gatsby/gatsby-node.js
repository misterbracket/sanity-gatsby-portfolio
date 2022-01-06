import { createFilePath } from "gatsby-source-filesystem";
import path from "path";

async function turnProjectsIntoPages({ graphql, actions }) {
  const projectTemplate = path.resolve("./src/templates/ProjectTemplate.tsx");
  // 2. Query all projects
  const result = await graphql(`
    query {
      projects: allSanityProject {
        edges {
          node {
            id
            name
            slug {
              current
            }
            tags {
              name
            }
          }
        }
      }
    }
  `);
  if (result.errors) {
    reporter.panicOnBuild('🚨  ERROR: Loading "createPages" query');
  }
  // 3. Loop over each project and create a page for that project
  result.data.projects.edges.forEach((project) => {
    actions.createPage({
      // What is the URL for this new page??
      path: `project/${project.node.slug.current}`,
      component: projectTemplate,
      context: {
        context: { id: project.node.id },
        slug: project.node.slug.current,
      },
    });
  });
}

async function turnBlogPostsIntoPages({ graphql, actions }) {
  // Destructure the createPage function from the actions object
  const { createPage } = actions;
  const result = await graphql(`
    query {
      allMdx {
        edges {
          node {
            id
            fields {
              slug
            }
          }
        }
      }
    }
  `);
  if (result.errors) {
    reporter.panicOnBuild('🚨  ERROR: Loading "createPages" query');
  }
  // Create blog post pages.
  const posts = result.data.allMdx.edges;
  // you'll call `createPage` for each result
  posts.forEach(({ node }, index) => {
    createPage({
      // This is the slug you created before
      // (or `node.frontmatter.slug`)
      path: node.fields.slug,
      // This component will wrap our MDX content
      component: path.resolve("./src/templates/PostTemplate.tsx"),
      // You can use the values in this context in
      // our page layout component
      context: { id: node.id },
    });
  });
}

export async function createPages(params) {
  // Create pages dynamically
  // Wait for all promises to be resolved before finishing this function
  await Promise.all([
    turnProjectsIntoPages(params),
    turnBlogPostsIntoPages(params),
  ]);
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;
  // you only want to operate on `Mdx` nodes. If you had content from a
  // remote CMS you could also check to see if the parent node was a
  // `File` node here
  if (node.internal.type === "Mdx") {
    const value = createFilePath({ node, getNode });
    createNodeField({
      // Name of the field you are adding
      name: "slug",
      // Individual MDX node
      node,
      // Generated value based on filepath with "blog" prefix. you
      // don't need a separating "/" before the value because
      // createFilePath returns a path with the leading "/".
      // Replace trailing '/' with empty string
      value: `/blog${value}`,
    });
  }
};
