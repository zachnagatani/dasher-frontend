export default function() {

  // These comments are here to help you get started. Feel free to delete them.

  /*
    Config (with defaults).

    Note: these only affect routes defined *after* them!
  */

  // this.urlPrefix = '';    // make this `http://localhost:8080`, for example, if your API is on a different server
  // this.namespace = '';    // make this `/api`, for example, if your API is namespaced
  // this.timing = 400;      // delay for each request, automatically set to 0 during testing

  /*
    Shorthand cheatsheet:

    this.get('/posts');
    this.post('/posts');
    this.get('/posts/:id');
    this.put('/posts/:id'); // or this.patch
    this.del('/posts/:id');

    http://www.ember-cli-mirage.com/docs/v0.3.x/shorthands/
  */

  this.namespace = '/api';

  let issues =
    {
        "data": [
            {
                "id": "1",
                "type": "issue",
                "attributes": {
                    "customer-name": "Sargent Guichard",
                    "customer-email": "byurevich0@cnn.com",
                    "description": "sapien in sapien iaculis congue vivamus metus arcu adipiscing molestie hendrerit at vulputate vitae nisl aenean lectus pellentesque eget",
                    "status": true,
                    "opened-at": "06/09/2016",
                    "closed-at": "06/04/2016",
                    "handling-employee": "Betteann Yurevich"
                },
            }, {
                "id": "2",
                "type": "issue",
                "attributes": {
                    "customer-name": "Sargent Guichard",
                    "customer-email": "byurevich0@cnn.com",
                    "description": "sapien in sapien iaculis congue vivamus metus arcu adipiscing molestie hendrerit at vulputate vitae nisl aenean lectus pellentesque eget",
                    "status": true,
                    "opened-at": "06/09/2016",
                    "closed-at": "06/04/2016",
                    "handling-employee": "Betteann Yurevich"
                }
            }
        ]
    };

    let months =
        {
            "data": [
                {
                    "id": "May, 2017",
                    "type": "month",
                    "attributes": {
                        "label": "05/2017",
                        "value": 6
                    }
                }, {
                    "id": "April, 2017",
                    "type": "month",
                    "attributes": {
                        "label": "04/2017",
                        "value": 5
                    }
                }, {
                    "id": "March, 2017",
                    "type": "month",
                    "attributes": {
                        "label": "03/2017",
                        "value": 4
                    }
                }, {
                    "id": "February, 2017",
                    "type": "month",
                    "attributes": {
                        "label": "02/2017",
                        "value": 3
                    }
                }, {
                    "id": "January, 2017",
                    "type": "month",
                    "attributes": {
                        "label": "01/2017",
                        "value": 2
                    }
                }, {
                    "id": "December, 2016",
                    "type": "month",
                    "attributes": {
                        "label": "12/2016",
                        "value": 1
                    }
                }
            ]
        };

  this.get('/issues', function() {
    return issues;
  });

  this.get('/months', function() {
    return months;
  });
}
