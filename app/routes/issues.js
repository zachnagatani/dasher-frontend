import Ember from 'ember';

export default Ember.Route.extend({
    model() {
        return {
            sections: ['Customer', 'Customer\'s Email', 'Description', 'Status', 'Opened At', 'Closed At', 'Employee'],
            issues:  [
                {
                    "customer_name": "Sargent Guichard",
                    "customer_email": "byurevich0@cnn.com",
                    "description": "sapien in sapien iaculis congue vivamus metus arcu adipiscing molestie hendrerit at vulputate vitae nisl aenean lectus pellentesque eget",
                    "status": true,
                    "opened_at": "06/09/2016",
                    "closed_at": "06/04/2016",
                    "handling_employee": "Betteann Yurevich"
                }, {
                    "customer_name": "Darnell Wilfinger",
                    "customer_email": "aalleyn1@bizjournals.com",
                    "description": "cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus vivamus vestibulum sagittis sapien cum sociis natoque penatibus",
                    "status": false,
                    "opened_at": "11/01/2016",
                    "closed_at": "01/12/2017",
                    "handling_employee": "Aldric Alleyn"
                }, {
                    "customer_name": "Sidonnie O'Criane",
                    "customer_email": "sknobell2@vkontakte.ru",
                    "description": "quisque ut erat curabitur gravida nisi at nibh in hac habitasse platea dictumst aliquam augue quam",
                    "status": false,
                    "opened_at": "07/02/2016",
                    "closed_at": "08/31/2016",
                    "handling_employee": "Sherrie Knobell"
                    }, {
                    "customer_name": "Lelah Sebastian",
                    "customer_email": "kskeats3@cdbaby.com",
                    "description": "ante vivamus tortor duis mattis egestas metus aenean fermentum donec ut mauris eget massa",
                    "status": false,
                    "opened_at": "09/12/2016",
                    "closed_at": "04/21/2017",
                    "handling_employee": "Kalinda Skeats"
                    }, {
                    "customer_name": "Odelle Pretswell",
                    "customer_email": "aboeck4@aol.com",
                    "description": "elementum nullam varius nulla facilisi cras non velit nec nisi vulputate nonummy maecenas tincidunt lacus at",
                    "status": true,
                    "opened_at": "12/29/2016",
                    "closed_at": "09/11/2016",
                    "handling_employee": "Astrix Boeck"
                    }, {
                    "customer_name": "Cristabel Stothert",
                    "customer_email": "ghaymes5@photobucket.com",
                    "description": "cursus urna ut tellus nulla ut erat id mauris vulputate elementum nullam varius",
                    "status": false,
                    "opened_at": "09/21/2016",
                    "closed_at": "10/20/2016",
                    "handling_employee": "Gannie Haymes"
                    }, {
                    "customer_name": "Felic Salthouse",
                    "customer_email": "dkees6@washington.edu",
                    "description": "tempus semper est quam pharetra magna ac consequat metus sapien ut nunc vestibulum ante",
                    "status": false,
                    "opened_at": "05/27/2016",
                    "closed_at": "05/21/2016",
                    "handling_employee": "Dory Kees"
                    }, {
                    "customer_name": "Melony Wollaston",
                    "customer_email": "bweitzel7@flavors.me",
                    "description": "rhoncus aliquet pulvinar sed nisl nunc rhoncus dui vel sem sed sagittis nam congue risus",
                    "status": true,
                    "opened_at": "07/15/2016",
                    "closed_at": "10/28/2016",
                    "handling_employee": "Bridie Weitzel"
                    }, {
                    "customer_name": "Diana Primarolo",
                    "customer_email": "dradborn8@prlog.org",
                    "description": "sollicitudin ut suscipit a feugiat et eros vestibulum ac est lacinia nisi venenatis tristique fusce congue diam id ornare",
                    "status": true,
                    "opened_at": "06/18/2016",
                    "closed_at": "02/02/2017",
                    "handling_employee": "Del Radborn"
                    }, {
                    "customer_name": "Dolly Rames",
                    "customer_email": "rstappard9@home.pl",
                    "description": "quis justo maecenas rhoncus aliquam lacus morbi quis tortor id nulla ultrices",
                    "status": true,
                    "opened_at": "03/01/2017",
                    "closed_at": "06/15/2016",
                    "handling_employee": "Riane Stappard"
                    }, {
                    "customer_name": "Parker Alberti",
                    "customer_email": "adaymonta@marketwatch.com",
                    "description": "duis consequat dui nec nisi volutpat eleifend donec ut dolor morbi vel lectus in",
                    "status": true,
                    "opened_at": "11/07/2016",
                    "closed_at": "02/19/2017",
                    "handling_employee": "Alisander Daymont"
                    }, {
                    "customer_name": "Tally Wabey",
                    "customer_email": "mtettherb@live.com",
                    "description": "feugiat et eros vestibulum ac est lacinia nisi venenatis tristique fusce congue diam id ornare imperdiet sapien urna",
                    "status": true,
                    "opened_at": "08/14/2016",
                    "closed_at": "01/27/2017",
                    "handling_employee": "Marvin Tetther"
                    }, {
                    "customer_name": "Jaquenette Gladtbach",
                    "customer_email": "tsinclairc@mysql.com",
                    "description": "quam sollicitudin vitae consectetuer eget rutrum at lorem integer tincidunt ante vel ipsum praesent blandit",
                    "status": false,
                    "opened_at": "12/07/2016",
                    "closed_at": "10/30/2016",
                    "handling_employee": "Tallulah Sinclair"
                    }, {
                    "customer_name": "Lexie Lambdon",
                    "customer_email": "kmehargd@histats.com",
                    "description": "et ultrices posuere cubilia curae mauris viverra diam vitae quam suspendisse potenti",
                    "status": false,
                    "opened_at": "09/02/2016",
                    "closed_at": "11/07/2016",
                    "handling_employee": "Kenon Meharg"
                    }, {
                    "customer_name": "Cal Blaker",
                    "customer_email": "jalexise@usa.gov",
                    "description": "blandit non interdum in ante vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia",
                    "status": true,
                    "opened_at": "05/08/2016",
                    "closed_at": "09/30/2016",
                    "handling_employee": "Jourdan Alexis"
                    }, {
                    "customer_name": "Reinwald Senner",
                    "customer_email": "lantoniottiif@princeton.edu",
                    "description": "in quis justo maecenas rhoncus aliquam lacus morbi quis tortor id nulla ultrices aliquet maecenas leo odio condimentum id",
                    "status": false,
                    "opened_at": "04/15/2017",
                    "closed_at": "04/06/2017",
                    "handling_employee": "Lillis Antoniottii"
                    }, {
                    "customer_name": "Almeda Simkovich",
                    "customer_email": "eornellsg@360.cn",
                    "description": "aenean fermentum donec ut mauris eget massa tempor convallis nulla neque libero convallis eget",
                    "status": false,
                    "opened_at": "08/03/2016",
                    "closed_at": "12/18/2016",
                    "handling_employee": "Euphemia Ornells"
                    }, {
                    "customer_name": "Giralda Linn",
                    "customer_email": "aleathleyh@hao123.com",
                    "description": "nisl ut volutpat sapien arcu sed augue aliquam erat volutpat in congue etiam justo etiam pretium iaculis",
                    "status": false,
                    "opened_at": "08/16/2016",
                    "closed_at": "04/30/2017",
                    "handling_employee": "Adrienne Leathley"
                    }, {
                    "customer_name": "Candy Spurdle",
                    "customer_email": "rmullanei@jalbum.net",
                    "description": "metus sapien ut nunc vestibulum ante ipsum primis in faucibus orci luctus et",
                    "status": false,
                    "opened_at": "11/20/2016",
                    "closed_at": "02/18/2017",
                    "handling_employee": "Ricky Mullane"
                    }, {
                    "customer_name": "Georgia Snoxill",
                    "customer_email": "acowdenj@unicef.org",
                    "description": "nulla tempus vivamus in felis eu sapien cursus vestibulum proin",
                    "status": false,
                    "opened_at": "02/22/2017",
                    "closed_at": "11/29/2016",
                    "handling_employee": "Ainslee Cowden"
                }
            ]
        };

    }
});
