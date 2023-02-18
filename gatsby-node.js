const _ = require('lodash')
const path = require('path')

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  return graphql(`
    {
      allMarkdownRemark(limit: 1000) {
        edges {
          node {
            id
          }
        }
      }
    }
  `).then((result) => {
    if (result.errors) {
      result.errors.forEach((e) => console.error(e.toString()))
      return Promise.reject(result.errors)
    }

    const mdFiles = result.data.allMarkdownRemark.edges

    const contentTypes = _.groupBy(mdFiles, 'node.fields.contentType')

    createPage({
      path: '/',
      component: path.resolve(`src/pages/LandingPage.js`)
    })
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  // Create smart slugs
  // https://github.com/Vagr9K/gatsby-advanced-starter/blob/master/gatsby-node.js
  let slug
  if (node.internal.type === 'MarkdownRemark') {
    const fileNode = getNode(node.parent)
    const parsedFilePath = path.parse(fileNode.relativePath)

    if (_.get(node, 'frontmatter.slug')) {
      slug = `/${node.frontmatter.slug.toLowerCase()}/`
    } else if (
      // home page gets root slug
      parsedFilePath.name === 'home' &&
      parsedFilePath.dir === 'pages'
    ) {
      slug = `/`
    } else if (_.get(node, 'frontmatter.title')) {
      slug = `/${_.kebabCase(parsedFilePath.dir)}/${_.kebabCase(
        node.frontmatter.title
      )}/`
    } else if (parsedFilePath.dir === '') {
      slug = `/${parsedFilePath.name}/`
    } else {
      slug = `/${parsedFilePath.dir}/`
    }

    createNodeField({
      node,
      name: 'slug',
      value: slug
    })

    // Add contentType to node.fields
    createNodeField({
      node,
      name: 'contentType',
      value: parsedFilePath.dir
    })
  }
}

// Random fix for https://github.com/gatsbyjs/gatsby/issues/5700
module.exports.resolvableExtensions = () => ['.json']
