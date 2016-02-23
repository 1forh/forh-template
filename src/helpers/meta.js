// Problem: Hard to display different title tags and meta description with on multiple pages.

var meta = function(page) {

  // Get all of the pages
  var meta_config = {
    'index': {
      'title': 'Index | A Title Tag',
      'description': 'Some random meta description'
    },
    'about': {
      'title': 'About | A Title Tag',
      'description': 'The about page meta description'
    },
    'services': {
      'title': 'Services | A Title Tag',
      'description': 'The services page meta description'
    },
    'contact': {
      'title': 'Contact | A Title Tag',
      'description': 'The contact page meta description'
    }
  };

  // Get all the page names from meta_config and put into an array
  var get_pages = function() {
    
  };

  get_pages();

  // If the page is 'index', show the correct title tag and meta description
  if( page == 'index') {
    console.log(meta_config.index.title);
    console.log(meta_config.index.description);
  }
  else if ( page == 'about' ) {
    console.log(meta_config.about.title);
    console.log(meta_config.about.description);
  }
  else if ( page == 'services' ) {
    console.log(meta_config.services.title);
    console.log(meta_config.services.description);
  }
  else if ( page == 'contact' ) {
    console.log(meta_config.contact.title);
    console.log(meta_config.contact.description);
  }
  else {
    console.log('404. This page is missing');
  }

  // 

};

meta('index');
meta('about');
meta('services');
meta('contact');


