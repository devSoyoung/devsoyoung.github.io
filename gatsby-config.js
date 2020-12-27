const siteMetadata = {
    title: "큐트리 개발 블로그",
    description: "Ego sum operarius studens",
    author: "@devSoyoung",
    disqusShortname: "cuteleeblog",
    url: "https://devsoyoung.github.io",
    siteUrl: "https://devsoyoung.github.io"
};

module.exports = {
    siteMetadata,
    plugins: [
        "gatsby-plugin-react-helmet",
        "gatsby-transformer-sharp",
        "gatsby-plugin-sharp",
        "gatsby-plugin-sass",
        // this (optional) plugin enables Progressive Web App + Offline functionality
        // To learn more, visit: https://gatsby.dev/offline
        // "gatsby-plugin-offline",
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "markdown-components",
                path: `${__dirname}/contents`
            }
        },
        {
            resolve: "gatsby-transformer-remark",
            options: {
                plugins: [
                    "gatsby-remark-relative-images",
                    {
                        resolve: "gatsby-remark-images",
                        options: {
                            maxWidth: 700,
                            withWebp: true
                        }
                    },
                    {
                        resolve: "gatsby-remark-prismjs",
                        options: {}
                    }
                ]
            }
        },
        {
            resolve: "gatsby-plugin-feed",
            options: {
                query: `
          {
            site {
              siteMetadata {
                site_url: url
                title
                description
              }
            }
          }
        `,
                feeds: [
                    {
                        serialize: ({ query: { site, allMarkdownRemark } }) =>
                            allMarkdownRemark.edges.map(edge =>
                                Object.assign({}, edge.node.frontmatter, {
                                    description:
                                        edge.node.frontmatter.description,
                                    date: edge.node.frontmatter.date,
                                    url:
                                        site.siteMetadata.site_url +
                                        edge.node.frontmatter.path,
                                    guid:
                                        site.siteMetadata.site_url +
                                        edge.node.frontmatter.path,
                                    custom_elements: [
                                        { "content:encoded": edge.node.html }
                                    ]
                                })
                            ),
                        query: `
              {
                allMarkdownRemark(
                  limit: 1000,
                  sort: { order: DESC, fields: [frontmatter___date] },
                  filter: { frontmatter: { template: { eq: "post" }, draft: { ne: true } } }
                ) {
                  edges {
                    node {
                      html
                      frontmatter {
                        title
                        date
                        template
                        draft
                        path
                        description
                      }
                    }
                  }
                }
              }
            `,
                        output: "/rss.xml",
                        title: siteMetadata.title
                    }
                ]
            }
        },
        {
            resolve: "gatsby-plugin-sitemap",
            options: {
                output: "/sitemap.xml",
                // Exclude specific components or groups of components using glob parameters
                // See: https://github.com/isaacs/minimatch
                // The example below will exclude the single `path/to/page` and all routes beginning with `category`
                exclude: [],
                query: `
          {
            site {
              siteMetadata {
                siteUrl: url
              }
            }
  
            allSitePage {
              nodes {
                path
              }
            }
        }`,
                resolveSiteUrl: ({ site, allSitePage }) => {
                    //Alternativly, you may also pass in an environment variable (or any location) at the beginning of your `gatsby-config.js`.
                    return site.siteMetadata.siteUrl;
                },
                serialize: ({ site, allSitePage }) =>
                    allSitePage.nodes.map(node => {
                        return {
                            url: `${site.siteMetadata.siteUrl}${node.path}`,
                            changefreq: "daily",
                            priority: 0.7
                        };
                    })
            }
        },
        {
            resolve: "gatsby-plugin-manifest",
            options: {
                name: "gatsby-starter-default",
                short_name: "starter",
                start_url: siteMetadata.siteUrl,
                background_color: "#663399",
                theme_color: "#663399",
                display: "minimal-ui",
                icon: "contents/profile.jpeg" // This path is relative to the root of the site.
            }
        }
    ]
};
