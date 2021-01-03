import { useStaticQuery, graphql } from "gatsby";

const useSiteMetaData = () => {
    const { site } = useStaticQuery(
        graphql`
            query SiteMetaData {
                site {
                    siteMetadata {
                        author
                        description
                        disqusShortname
                        url
                    }
                }
            }
        `
    );
    return site.siteMetadata;
};

export default useSiteMetaData;
