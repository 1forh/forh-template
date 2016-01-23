#Forh Template

###Static website template --- Powered by Gulp and Panini

- Foundation 6 --- http://foundation.zurb.com
- Motion UI --- https://github.com/zurb/motion-ui
- Font Awesome --- https://fortawesome.github.io/Font-Awesome/
- Sass ---http://sass-lang.com/
- Gulp --- http://gulpjs.com/
- Panini --- https://github.com/zurb/panini

Named branches are example templates

- Star Wars --- www.projects.zacharyminner.com/forh-template
- Space --- www.projects.zacharyminner.com/forh-template-2
- Windows --- www.projects.zacharyminner.com/forh-template-3

## Setup

Navigate to directory and clone repo:

    cd path/to/directory
    git clone https://github.com/1forh/forh-template

Install project dependencies:

    npm install
    bower install

`npm start` serves `build/` at: `http://localhost:4000`. 

`npm run build:dist` does a production build

`npm run serve:dist` does a production build and then starts a server that is viewable at: `http://localhost:4000`

`npm run deploy` can be run after `npm run build:dist` to deploy to a server using FTP. Also runs the `gulp psi` task which console.log's Page Speed Insights scores for mobile and desktop versions of website.

All Gulp task configuration is done in `gulp-config.json`

##Source Directory - src/

All work is done in the `src/` directory.

###Example Structure - src/

    assets/
        images/
        scripts/
        styles/
    data/
        config.json
    layouts/
        default.html
    pages/
        404.html
        index.html
    partials/
        parts/
            form.html
            sidebar.html
        header.html
        footer.html
    favicon.png
    robots.txt
    BingSiteAuth.xml
    google124512.html

`assets/` houses sass, javascript, and images.

`layouts/` houses the default layouts of the theme

`pages/` houses individual pages

`partials/` houses all components parts

`data/` houses all json or yml data

 Extra files can be placed outside of the sub folders like the favicon, robots.txt, a Google Webmaster Tools authentication file, etc. 

 Please note: A sitemap is automatically generated with `npm run build:dist`. Change domain name config in `gulp-config.json`

###Data

`src/data/sample.json` - Sample json file that holds some data

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

##Build Directory - build/

Running `npm start` starts a server at `http://localhost:4000` and serves static files from the `build/` directory. These static files are semi-optimized while viewed on the server. 

###Optimizations

- Concatenated styles and scripts
- Autoprefixer
- Sourcemaps

##Dist Directory - dist/

Running the `npm run build:dist` command adds production ready static files to this directory. The files in this directory need to be uploaded to a server after build.

###Optimizations

- Inline above-the-fold styles with Critical
- Minified styles
- Uglify scripts
- Autoprefixer
- Image optimization with Imagemin

##Test Directory - test/

Running the `npm test` command runs all tests from the `test/` directory. Uses Mocha and Chai for tests

###Tests

TBD