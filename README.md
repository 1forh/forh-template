#Forh Template
###Static Website Generator

- Star Wars Theme --- Fake text: http://star-wars-ipsum.herokuapp.com/
- SCSS
- NPM 
- Bower
- Gulp

Made with Foundation 6 --- http://foundation.zurb.com

Made with Panini --- http://foundation.zurb.com/sites/docs/panini.html

Panini Documentation: https://github.com/zurb/panini

Icon font --- https://materialdesignicons.com

## Setup

Navigate to directory and download repo:


    cd path/to/directory
    git clone https://github.com/1forh/hls-template-0


Install project dependencies:


    npm install
    npm install gulp
    bower install


`npm start` starts a server that is viewable at: `http://localhost:4000`. 

`npm run build:dist` does a production build

`npm run serve:dist` does a production build and then starts a server that is viewable at: `http://localhost:4000`

All Gulp task configuration is done in `gulpfile.js/config.json`

##Source Directory - app_source

All work is done in the `app_source/` directory.

###Example Structure - app_source 

    assets/
    layouts/
    pages/
    partials/
    data/
    favicon.png
    robots.txt
    BingSiteAuth.xml
    google124512.html

`assets/` houses sass, javascript, and images.

`layouts/` houses the default layouts of the theme

`pages/` houses individual pages

`partials/` houses all components parts

`data/` houses all json or yml data

Outside of the sub folders, extra files can be place like the favicon, robots.txt, a Google Webmaster Tools authentication file, etc. 


##Data



`data/sample.json` - Sample json file that holds some data

    [
      {
        "name": "Breakfast Item 1",
        "description": "This is the description for item 1",
        "price": "$4.00"
      },
      {
        "name": "Breakfast Item 2",
        "description": "This is the description for item 2",
        "price": "$1.00"
      },
      {
        "name": "Breakfast Item 3",
        "description": "This is the description for item 3",
        "price": "$1.29"
      }
    ]

Code sample iterating through `sample.json` for each item in the array of objects. 

    {{#each sample}}
    <p>Name: {{name}}</p>
    <p>Description: {{description}}</p>
    <p>Price: {{price}}</p>
    {{/each}}
