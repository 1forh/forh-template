#Forh Template

###"Static" website boilerplate --- Powered by Gulp and Panini

- Foundation 6 --- http://foundation.zurb.com
- Font Awesome --- https://fortawesome.github.io/Font-Awesome
- Sass ---http://sass-lang.com
- Gulp --- http://gulpjs.com
- Panini --- https://github.com/zurb/panini

Named branches are example templates.

- Star Wars --- www.projects.zacharyminner.com/forh-template
- Space --- www.projects.zacharyminner.com/forh-template-2

##Setup

Navigate to directory and clone repo:

    cd path/to/directory
    git clone https://github.com/1forh/forh-template .

Install project dependencies:

    npm run setup

This command runs a shell script that installs NPM and Bower dependencies.

##Configuration

All Gulp task configuration is done in `gulp/config.js`

##Useful Commands

`npm start` serves `build/` directory at: `http://localhost:4000`. 

`npm run build:dist` runs a production build and places optimized files into the  `dist/` directory

`npm run serve:dist` runs a production build and then serves the `dist/` directory viewable at: `http://localhost:4000`

`npm run deploy` can be run after `npm run build:dist` to deploy to a server using FTP.

##Source Directory - src/

All work is done in the `src/` directory.

###Example Structure - src/

    assets/
        images/
        scripts/
        styles/
    data/
        example.json
    helpers/
        example.js
    static/
        layouts/
            default.html
        pages/
            404.html
            index.html
        partials/
            header.html
            footer.html
            sidebar.html
    favicon.png
    robots.txt
    BingSiteAuth.xml
    google124512.html

`assets/` houses sass, javascript, and images

`layouts/` houses the default layouts of the theme

`pages/` houses individual pages

`partials/` houses all components parts

`data/` houses all json or yml data

`helpers/` houses all custom Handlebar helpers

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

- Minified styles
- Uglify scripts
- Autoprefixer
- Image optimization with Imagemin

##Tips

[Move active class on menu item with Panini helper #ifpage](https://gist.github.com/1forh/06bbf4b7c90465fc5ad5)

