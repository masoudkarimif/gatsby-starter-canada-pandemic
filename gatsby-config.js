module.exports = {
  siteMetadata: {
		siteUrl: `https://gatsby-starter-canada-pandemic.netlify.com/`,
    name: `The Local News`,
    description: `Tracking The Spread of Coronavirus in Canada`,
    last_updated: `Mar 30, 2020 - 9:45 a.m. ET`,
    data_source: `<a target="_blank" href="https://newsinteractives.cbc.ca/coronavirustracker/" rel="noopener noreferrer">CBC Coronavirus Website</a>`,

    //order of provinces is important!
    data: [
        {"province": "Alberta", "cases": 661, "deaths": 3},
        {"province": "Saskatchewan", "cases": 156, "deaths": 0},
        {"province": "Manitoba", "cases": 72, "deaths": 1},
        {"province": "Newfoundland", "cases": 135, "deaths": 1},
        {"province": "Prince Edward Island", "cases": 11, "deaths": 0},
        {"province": "Nova Scotia", "cases": 122, "deaths": 0},
        {"province": "Northwest Territories", "cases": 1, "deaths": 0},
        {"province": "Nunavut", "cases": 0, "deaths": 0},
        {"province": "Ontario", "cases": 1355, "deaths": 23},
        {"province": "New Brunswick", "cases": 66, "deaths": 0},
        {"province": "Yukon", "cases": 4, "deaths": 0},
        {"province": "British Columbia", "cases": 884, "deaths": 17},
        {"province": "Quebec", "cases": 2840, "deaths": 22},
      ],
    faqs: [
      {"question": `What is a Coronavirus?`, "answer": `<p>Coronaviruses are a large family of viruses. They cause a range of illness ranging from the common cold to more severe diseases — such as Middle East Respiratory Syndrome (MERS-CoV) and Severe Acute Respiratory Syndrome (SARS-CoV).</p>`},
      {"question": `How is it transmitted?`, "answer": `<p>Coronaviruses are zoonotic, meaning they originally pass from animals to humans. But some, like the current one, can also pass directly between humans.</p><p>Chinese scientists confirmed there has been human-to-human transmission of the virus among close contacts such as family members. It's unclear how easily the virus is transmitted between people.</p><p>According to the Centers for Disease Control in the U.S., coronaviruses are most commonly spread by coughing or sneezing; close personal contact, such as shaking hands; or touching an object or surface with the virus on it and then touching your mouth, eyes or nose.</p>`},
      {"question": `What are the symptoms?`, "answer": `<p>According to the World Health Organization, signs of infection can include respiratory complaints, fever, cough, shortness of breath and breathing difficulties. In more severe cases, infection can cause pneumonia, severe acute respiratory syndrome, kidney failure and even death. The only way to confirm infection is with a lab test.</p>`},
      {"question": `What can I do to prevent the spread?`, "answer": `<p>To prevent infection: Wash your hands often with soap and water for at least 20 seconds or use an alcohol-based hand sanitizer.</p><p>Avoid touching your eyes, nose and mouth.</p><p>Practice social distancing.</p><p>Stay home if you're sick.</p>`},
      {"question": `What is social distancing?`, "answer": `<p>Social distancing involves interacting with as few people as possible and trying to avoid getting too close (nearer than two metres) when you do.</p><p>Other social distancing measures, like working from home, school closures and cancelling sporting events, could help slow the rate of new infections. </p><a target="_blank" rel="noopener noreferrer" href="https://www.cbc.ca/news/health/covid-19-social-distancing-1.5500876">Read more</a>`},
      {"question": `How do I self-isolate?`, "answer": `<p>People in self-isolation are asked to stay at home, unless absolutely necessary, such as to seek medical care. They should arrange to have groceries and supplies dropped off at the door.</p><p>Relatives and housemates can stay with you, however, health officials advise that any person in self-isolation should avoid contact with others — keeping a distance of at least two metres — and wear a mask that covers their nose and mouth. Frequent handwashing is critical. Officials also advise staying in separate rooms and using separate bathrooms if possible. If you live in a very small space, health officials advise that, if possible, people who are not infected stay elsewhere. It could take up to three weeks for the person who is ill to test negative for the virus.</p><p><a target="_blank" rel="noopener noreferrer" href="http://newsletters.cbc.ca/c/117xES8MW2LBdtnOc2fvnvGu0">Read more</a></p>`},
      {"question": `Should I travel?`, "answer": `<p>Not outside of Canada.</p><p>The federal government has warned against all international travel and is limiting inbound flights as part of a series of measures to limit the spread of COVID-19.</p><p>Because the COVID-19 situation is changing daily, people also need to think beyond the actual risk of infection — because no matter where you travel, there's still always a chance you could be told to go into quarantine as a precaution, whether by another country's government or by your employer upon your return.</p><p><a target="_blank" rel="noopener noreferrer" href="http://newsletters.cbc.ca/c/117xESkjhlQVskzUlOlCQBVpX">Read more</a></p>`},
      {"question": `Should I wear a mask?`, "answer": `<p>If you're not sick, the answer is no. There's no evidence that wearing a mask will protect you from becoming infected in your day-to-day life.</p><p>Health-care workers wear N95 masks — these are specialized masks that block smaller particles. It’s important to preserve the supply of these masks for health-care workers.</p><p>But if you are sick, there is some evidence that wearing a mask will help reduce the amount of virus around you, potentially offering a measure of protection to others.</p>`},
      {"question": `How long is someone with COVID-19 contagious?`, "answer": `<p>That's an area under study. It will likely be another month before experts are able to answer that question with confidence.</p>`},
      {"question": `Can a person transmit coronavirus if they don't have symptoms?`, "answer": "<p>Right now, it's unclear.</p>"},
      {"question": `Can the virus live on surfaces outside the body?`, "answer": `<p>Unlike bacteria, viruses don't continue to grow outside the body. But they do survive.</p><p>They usually survive on a surface longer if they're surrounded by a bodily fluid, such as saliva.</p><p>But to infect you, the virus has to get from the surface inside your body — which means touching it and then putting your hand to your eyes, nose or mouth.</p><p>Contact with infected people, rather than objects, is likely more of a risk.</p>`},
      {"question": `Is there a vaccine?`, "answer": `<p>A vaccine to stop the spread is at least a year away. Here’s a look inside some of the Canadian labs doing research.</p><p><a target="_blank" rel="noopener noreferrer" href="https://www.cbc.ca/news/health/covid-19-vaccine-research-1.5497697">Read more</a></p>`}
    ],
    },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-111111111-1",
        head: true,
      },
    },
  ],
}
