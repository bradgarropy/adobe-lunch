require("dotenv").config({
    path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
    siteMetadata: {
        siteUrl: "https://adobe-lunch.netlify.com",
        title: "Adobe Lunch",
        description: "🥪 lunch, not launch",
        keywords: [
            "gatsby",
            "react",
            "styled-components",
            "eslint",
            "prettier",
            "adobe",
            "lunch",
            "domain",
        ],
        email: "bradgarropy@gmail.com",
    },
    plugins: [
        {
            resolve: "gatsby-plugin-react-helmet",
        },
        {
            resolve: "gatsby-plugin-manifest",
            options: {
                name: "Adobe Lunch",
                short_name: "Adobe Lunch",
                start_url: "/",
                background_color: "#ffffff",
                theme_color: "#ffffff",
                display: "standalone",
                icon: "static/android-chrome-192x192.png",
            },
        },
        {
            resolve: "gatsby-plugin-offline",
        },
        {
            resolve: "gatsby-plugin-google-analytics",
            options: {
                trackingId: process.env.TRACKING_ID,
                head: true,
                anonymize: true,
                respectDNT: false,
            },
        },
        {
            resolve: "gatsby-plugin-google-fonts",
            options: {
                fonts: ["roboto"],
            },
        },
        {
            resolve: "gatsby-plugin-styled-components",
        },
        {
            resolve: "gatsby-plugin-react-svg",
            options: {
                rule: {
                    include: /images/,
                },
            },
        },
        {
            resolve: "gatsby-plugin-layout",
            options: {
                component: require.resolve("./src/components/Layout.js"),
            },
        },
        {
            resolve: "gatsby-source-apiserver",
            options: {
                url:
                    "https://adobe-lunch.netlify.com/.netlify/functions/nearby",
                name: "place",
            },
        },
        {
            resolve: "gatsby-source-airtable",
            options: {
                apiKey: process.env.AIRTABLE_API_KEY,
                tables: [
                    {
                        baseId: "app5z2r9qwmnLFp9B",
                        tableName: "places",
                    },
                ],
            },
        },
    ],
}
