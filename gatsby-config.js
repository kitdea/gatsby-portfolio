module.exports = {
  siteMetadata: {
    title: `gatsby-portfolio`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: [{
    resolve: 'gatsby-source-contentful',
    options: {
      "accessToken": "wdrVuIOyx97C8mh9cAE0VEKU9BfQCC7oCcRYeo1ZZAA",
      "spaceId": "1daipl7z93ig"
    }
  }, "gatsby-plugin-image", "gatsby-plugin-sharp", "gatsby-transformer-sharp", "gatsby-plugin-sass", {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": "./src/images/"
    },
    __key: "images"
  }]
};