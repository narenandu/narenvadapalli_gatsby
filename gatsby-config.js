let siteMetadata = {
    title: `Narendra Kumar Vadapalli`,
    capitalizeTitleOnHome: true,
    logo: `/images/logo.png`,
    icon: `/images/icon.png`,
    titleImage: `/images/wall.jpg`,
    introTag: `PROGRAMMER | VISUAL DESIGNER`,
    description: `Person with a balanced left and right brain`,
    author: `@_akzhy`,
    blogItemsPerPage: 10,
    portfolioItemsPerPage: 10,
    darkmode: true,
    switchTheme: true,
    navLinks: [
        {
            name: "HOME",
            url: "/"
        },
        {
            name: "BLOG",
            url: "/blog"
        },
        {
            name: "PORTFOLIO",
            url: "/portfolio"
        },
        {
            name: "ABOUT",
            url: "/about"
        },
        {
            name: "CONTACT",
            url: "/contact"
        }
    ],
    footerLinks: [
        {
            name: "GitHub",
            url: "https://github.com/narenandu/narenvadapalli_dot_com"
        }
    ],
    social: [
        {
            name: "Twitter",
            icon: "/images/twitter.svg",
            url: "https://twitter.com/narenandu"
        },
        {
            name: "LinkedIn",
            icon: "/images/linkedin.svg",
            url: "https://www.linkedin.com/in/narenandu/"
        },
        {
            name: "IMDB",
            icon: "/images/imdb.svg",
            url: "https://www.imdb.com/name/nm4511578/"
        },
        {
            name: "Github",
            icon: "/images/github.svg",
            url: "https://github.com/narenandu"
        }
    ],
    contact: {
        /* Leave the below value completely empty (no space either) if you don't want a contact form. */
        api_url: "./test.json",
        description: `Reach out to me on social media`,
        mail: "",
        phone: "",
        address: ""
    }
};

module.exports = {
    siteMetadata: siteMetadata,
    plugins: [
        `gatsby-plugin-sharp`,
        `gatsby-transformer-sharp`,
        `gatsby-plugin-react-helmet`,
        {
            resolve: `gatsby-transformer-remark`,
            options: {
                plugins: [
                    "gatsby-remark-copy-linked-files",
                    {
                        resolve: `gatsby-remark-images`,
                        options: {
                            maxWidth: 1280
                        }
                    }
                ]
            }
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `contents`,
                path: `${__dirname}/contents/`
            }
        },
        {
            resolve: `gatsby-plugin-less`,
            options: {
                strictMath: true
            }
        }
    ]
};
