const path = require(`path`)
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  try {
    const { data } = await graphql(`
      {
        pages: allWordpressPage {
          edges {
            node {
              slug
              template
              wordpress_id
              path
            }
          }
        }
        galleries: allWordpressWpGallery {
          edges {
            node {
              slug
              title
              wordpress_id
            }
          }
        }
      }
    `)

    const pages = data.pages.edges
    pages.forEach(({ node }) => {
      if (node.slug === "home") {
        createPage({
          path: `/`,
          component: path.resolve(`./src/pages/index.js`),
        })
      } else if (node.template === "tpl-page-about.php") {
        createPage({
          path: `/${node.slug}`,
          component: path.resolve(`./src/templates/about.js`),
          context: {
            id: node.wordpress_id,
          },
        })
      } else if (node.template === "tpl-page-contact.php") {
        createPage({
          path: `/${node.slug}`,
          component: path.resolve(`./src/templates/contact.js`),
          context: {
            id: node.wordpress_id,
          },
        })
      } else if (node.template === "tpl-page-how-it-works.php") {
        createPage({
          path: `/${node.slug}`,
          component: path.resolve(`./src/templates/howItWorks.js`),
          context: {
            id: node.wordpress_id,
          },
        })
      } else if (node.template === "tpl-page-faq.php") {
        createPage({
          path: `/${node.slug}`,
          component: path.resolve(`./src/templates/faq.js`),
          context: {
            id: node.wordpress_id,
          },
        })
      } else if (node.template === "tpl-page-bring-furniture.php") {
        createPage({
          path: `${node.path}`,
          component: path.resolve(`./src/templates/bringFurniture.js`),
          context: {
            id: node.wordpress_id,
          },
        })
      } else if (node.template === "tpl-page-knob-selection.php") {
        createPage({
          path: `${node.path}`,
          component: path.resolve(`./src/templates/knobSelections.js`),
          context: {
            id: node.wordpress_id,
          },
        })
      } else if (node.template === "tpl-page-gallery.php") {
        createPage({
          path: `${node.path}`,
          component: path.resolve(`./src/templates/gallery.js`),
          context: {
            id: node.wordpress_id,
          },
        })
      } else if (node.template === "tpl-page-home.php") {
        createPage({
          path: `/${node.slug}`,
          component: path.resolve(`./src/templates/home.js`),
          context: {
            id: node.wordpress_id,
          },
        })
      } else if (node.template === "") {
        createPage({
          path: `/${node.slug}`,
          component: path.resolve(`./src/templates/defaultPage.js`),
          context: {
            id: node.wordpress_id,
          },
        })
      }
    })

    const galleries = data.galleries.edges
    galleries.forEach(({ node }) => {
      createPage({
        path: `/gallery/${node.slug}`,
        component: path.resolve(`./src/templates/singleGallery.js`),
        context: {
          id: node.wordpress_id,
        },
      })
    })
  } catch (err) {
    console.log("Error retrieving WordPress data", err)
  }
}
