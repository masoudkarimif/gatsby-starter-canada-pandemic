module.exports = {
  /* Your site config here */
  siteMetadata: {
		siteUrl: `https://gatsby-starter-clean-resume.netlify.com/`,
    name: `The Local News`,
    description: `Tracking The Spread of Coronavirus in Canada`,
    last_updated: `Mar 29, 2020 - 12:30 PM`,
    data_source: `<a target="_blank" href="https://newsinteractives.cbc.ca/coronavirustracker/" rel="noopener noreferrer">CBC Coronavirus Website</a>`,
    email: `luke@thelightside.com`,
    socialMedia : [
        {"name": "github", "link": "https://github.com/masoudkarimif/gatsby-starter-clean-resume"},
        {"name": "linkedin", "link": "https://linkedin.com"},
        {"name": "facebook", "link": "https://facebook.com"},
        {"name": "twitter", "link": "https://twitter.com"},
        {"name": "instagram", "link": "https://instagram.com"},
      ],
    about: `
      `,
    education: [
      {
        degree: "Ph.D.",
        major: "Computer Science",
        when: "2014-2018",
        school: "Harvard University",
        where: "Cambridge, MA",
        moreInfo: `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        See my thesis <a href="#">here</a>.</p>`
    },
      {
        degree: "M.Sc.",
        major: "Software Engineering",
        when: "2012-2014",
        school: "Stanford University",
        where: "Stanford, CA",
        moreInfo: `"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
        totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo."`
    },
    {
        degree: "B.Sc.",
        major: "Computer Engineering",
        when: "2008-2012",
        school: "UCLA",
        where: "Los Angeles, CA",
        moreInfo: `<p>I finally found out how it feels like to live in LA; it was awesome!</p>`
    },
    {
        degree: "High School Diploma",
        when: "2000-2008",
        school: "Awesome High School",
        where: "Los Angeles, CA",
    },
  ],
  experience: [
        {
          role: "Software Developer",
          when: "2014-Present",
          company: "Facebook",
          where: "Menlo Park, CA",
          moreInfo: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`
      },
        {
          role: "Web Developer",
          when: "2010-2014",
          company: "Amazon",
          where: "Vancouver, BC",
          moreInfo: `See my <a href="#" target="_blank" rel="noopener noreferrer">work</a>.`
      },
    ],
    skills: [
      {
        name: "JavaScript",
        level: "85",
        experience: "5 years"
      },
      {
        name: "Python",
        level: "75",
        experience: "2 years"
      },
      {
        name: "Java",
        level: "65",
        experience: "2 years"
      },
      {
        name: "React",
        level: "75",
        experience: "1 years"
      },
      {
        name: "Linux",
        level: "75",
        experience: "4 years"
      },
      {
        name: "C++",
        level: "40",
        experience: "1 years"
      },

    ],
    interests: ["Reading", "Programming", "Playing the violin", "Running", "Watching Monty Python and the Holy Grail"],
    //available_themes: ["great-gatsby", "master-yoda", "wonder-woman", "darth-vader", "luke-lightsaber"],
    theme: "great-gatsby",
    //fonts. Available: [default, programmer]
    font: "default"
  },
  plugins: [
    // Make sure this plugin is first in the array of plugins
    `gatsby-plugin-react-helmet`,
  ],
}
