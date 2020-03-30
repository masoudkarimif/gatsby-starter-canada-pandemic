# gatsby-starter-canada-pandemic

Build a single-page website that covers the spread of a pandemic in Canada.

Check the live demo [here](https://gatsby-starter-canada-pandemic.netlify.com/).

Based on [gatsby-starter-hello-world](https://github.com/gatsbyjs/gatsby-starter-hello-world). This project uses the [Milligram](https://github.com/milligram/milligram) framework for styling.

<p align="center">
  <a href="https://gatsby-starter-canada-pandemic.netlify.com">
    <img alt="Gatsby" src="https://mkf-public.s3.ca-central-1.amazonaws.com/gatsby-starter-canada-pandemic-screenshot.png" width="600px"/>
  </a>
</p>


## 💫 Deploy

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/masoudkarimif/gatsby-starter-canada-pandemic)

[![Deploy with ZEIT Now](https://zeit.co/button)](https://zeit.co/import/project?template=https://github.com/masoudkarimif/gatsby-starter-canada-pandemic)

## 🚀 Quick start

1.  **Create a Gatsby site.**

    Use the Gatsby CLI to create a new site, specifying the canada-pandemic starter.

    ```shell
    # create a new Gatsby site using the canada-pandemic starter
    gatsby new my-pandemic-coverage https://github.com/masoudkarimif/gatsby-starter-canada-pandemic
    ```

1.  **Start developing.**

    Navigate into your new site’s directory and start it up.

    ```shell
    cd my-pandemic-coverage/
    gatsby develop
    ```

1.  **Open the source code and start editing!**

    Your site is now running at `http://localhost:8000`!


    Open the `my-pandemic-coverage` directory in your code editor of choice and edit `gatsby-config.js`. Save your changes and the browser will update in real time!

## Customizing `gatsby-config.js`

All you need to do for customizing this template is to edit this file.

1. **General information**

	```shell
    siteUrl: `https://gatsby-starter-canada-pandemic.netlify.com/`,
    name: `The Local News`,
    description: `Tracking The Spread of Coronavirus in Canada`,
    last_updated: `Mar 30, 2020 - 9:45 a.m. ET`,
	```
  	Here you will enter the general information about your website.


2. **Data**

	```shell
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
	```
	 This is where you put the information about cases and deaths for each province. Please note that the order of the provinces is important.


3. **FAQs**

	```shell
	    faqs: [
	      {"question": `What is a Coronavirus?`, "answer": `<p>Answer</p>`},
	      ]
  	```

    Here you will put your frequently asked questions. As you can see, you can use HTML tags to further customize your question and answers. There's no limit with regard to the number of questions.


4. **Google Analytics**

	```shell
    plugins: [
        {
          resolve: `gatsby-plugin-google-analytics`,
          options: {
            trackingId: "UA-111111111-1",
            head: true,
          },
        },
      ],
	```
	Add your Google Analytics tracking id here.

<br/>


## AWS build file
You can use the `buildspec.yml` file in the root directory for AWS CodeBuild. You just need to define an environment variable named `BUCKET` inside your CodeBuild project that points to the S3 bucket you want to deploy your website from.


## Changing favicon
Simply replace the `favicon.ico` files in the `/static` directory.


## Contributions
PRs are welcome!


## License
[![Open Source Love](https://badges.frapsoft.com/os/mit/mit.svg?v=102)](LICENSE)
