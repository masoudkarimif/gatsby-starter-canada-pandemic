module.exports = {
  /* Your site config here */
  siteMetadata: {
		siteUrl: `https://gatsby-starter-clean-resume.netlify.com/`,
    name: `The Local News`,
    description: `Tracking The Spread of Coronavirus in Canada`,
    last_updated: `Mar 29, 2020 - 12:30 PM`,
    data: [
        {"province": "Alberta", "cases": 542, "deaths": 2},
        {"province": "Saskatchewan", "cases": 104, "deaths": 5},
        {"province": "Manitoba", "cases": 64, "deaths": 4},
        {"province": "Newfoundland", "cases": 120, "deaths": 2},
        {"province": "Prince Edward Island", "cases": 11, "deaths": 4},
        {"province": "Nova Scotia", "cases": 110, "deaths": 7},
        {"province": "Northwest Territories", "cases": 1, "deaths": 10},
        {"province": "Nunavut", "cases": 0, "deaths": 2},
        {"province": "Ontario", "cases": 1144, "deaths": 10},
        {"province": "New Brunswick", "cases": 51, "deaths": 16},
        {"province": "Yukon", "cases": 4, "deaths": 30},
        {"province": "British Columbia", "cases": 884, "deaths": 17},
        {"province": "Quebec", "cases": 2498, "deaths": 9},
      ]
      ,
    data_source: `<a target="_blank" href="https://newsinteractives.cbc.ca/coronavirustracker/" rel="noopener noreferrer">CBC Coronavirus Website</a>`,
    email: `luke@thelightside.com`,
    faqs: [
      {"question": `What is a Coronavirus?`, "answer": `<p>Coronaviruses are a large family of viruses. They cause a range of illness ranging from the common cold to more severe diseases — such as Middle East Respiratory Syndrome (MERS-CoV) and Severe Acute Respiratory Syndrome (SARS-CoV).</p>`},
      {"question": `How is it transmitted?`, "answer": `<p>Coronaviruses are zoonotic, meaning they originally pass from animals to humans. But some, like the current one, can also pass directly between humans.</p><p>Chinese scientists confirmed there has been human-to-human transmission of the virus among close contacts such as family members. It's unclear how easily the virus is transmitted between people.</p><p>According to the Centers for Disease Control in the U.S., coronaviruses are most commonly spread by coughing or sneezing; close personal contact, such as shaking hands; or touching an object or surface with the virus on it and then touching your mouth, eyes or nose.</p>`},
      {"question": `What are the symptoms?`, "answer": `<p>According to the World Health Organization, signs of infection can include respiratory complaints, fever, cough, shortness of breath and breathing difficulties. In more severe cases, infection can cause pneumonia, severe acute respiratory syndrome, kidney failure and even death. The only way to confirm infection is with a lab test.</p>`},
      {"question": `What can I do to prevent the spread?`, "answer": `<p>To prevent infection: Wash your hands often with soap and water for at least 20 seconds or use an alcohol-based hand sanitizer.</p><p>Avoid touching your eyes, nose and mouth.</p><p>Practice social distancing.</p><p>Stay home if you're sick</p>`},
      {"question": `What is social distancing?`, "answer": `<p>Social distancing involves interacting with as few people as possible and trying to avoid getting too close (nearer than two metres) when you do.</p><p>Other social distancing measures, like working from home, school closures and cancelling sporting events, could help slow the rate of new infections. </p><a target="_blank" rel="noopener noreferrer" href="https://www.cbc.ca/news/health/covid-19-social-distancing-1.5500876">Read more</a>`},
      {"question": `How do I self-isolate?`, "answer": `<p>People in self-isolation are asked to stay at home, unless absolutely necessary, such as to seek medical care. They should arrange to have groceries and supplies dropped off at the door.</p><p>Relatives and housemates can stay with you, however, health officials advise that any person in self-isolation should avoid contact with others — keeping a distance of at least two metres — and wear a mask that covers their nose and mouth. Frequent handwashing is critical. Officials also advise staying in separate rooms and using separate bathrooms if possible. If you live in a very small space, health officials advise that, if possible, people who are not infected stay elsewhere. It could take up to three weeks for the person who is ill to test negative for the virus.</p><p><a target="_blank" rel="noopener noreferrer" href="http://newsletters.cbc.ca/c/117xES8MW2LBdtnOc2fvnvGu0">Read more</a></p>`},
      {"question": `Should I travel?`, "answer": `<p>Not outside of Canada.</p><p>The federal government has warned against all international travel and is limiting inbound flights as part of a series of measures to limit the spread of COVID-19.</p><p>Because the COVID-19 situation is changing daily, people also need to think beyond the actual risk of infection — because no matter where you travel, there's still always a chance you could be told to go into quarantine as a precaution, whether by another country's government or by your employer upon your return.</p><p><a target="_blank" rel="noopener noreferrer" href="http://newsletters.cbc.ca/c/117xESkjhlQVskzUlOlCQBVpX">Read more</a></p>`},
      {"question": `Should I wear a mask?`, "answer": `<p>If you're not sick, the answer is no. There's no evidence that wearing a mask will protect you from becoming infected in your day-to-day life.</p><p>Health-care workers wear N95 masks — these are specialized masks that block smaller particles. It’s important to preserve the supply of these masks for health-care workers.</p><p>But if you are sick, there is some evidence that wearing a mask will help reduce the amount of virus around you, potentially offering a measure of protection to others.</p>`},
      {"question": `How long is someone with COVID-19 contagious?`, "answer": `<p>That's an area under study. It will likely be another month before experts are able to answer that question with confidence.</p>`},
      {"question": `Can a person transmit coronavirus if they don't have symptoms?`, "answer": "<p>Right now, it's unclear.</p>"},
      {"question": `Can the virus live on surfaces outside the body?`, "answer": `<p>Unlike bacteria, viruses don't continue to grow outside the body. But they do survive.</p><p>They usually survive on a surface longer if they're surrounded by a bodily fluid, such as saliva.</p><p>But to infect you, the virus has to get from the surface inside your body — which means touching it and then putting your hand to your eyes, nose or mouth.</p><p>Contact with infected people, rather than objects, is likely more of a risk.</p>`},
      {"question": `Is there a vaccine?`, "answer": `<p>A vaccine to stop the spread is at least a year away. Here’s a look inside some of the Canadian labs doing research.</p><p><a target="_blank" rel="noopener noreferrer" href="https://www.cbc.ca/news/health/covid-19-vaccine-research-1.5497697">Read more</a></p>`}
    ],
    socialMedia : [
        {"province": "github", "link": "https://github.com/masoudkarimif/gatsby-starter-clean-resume"},
        {"province": "linkedin", "link": "https://linkedin.com"},
        {"province": "facebook", "link": "https://facebook.com"},
        {"province": "twitter", "link": "https://twitter.com"},
        {"province": "instagram", "link": "https://instagram.com"},
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
