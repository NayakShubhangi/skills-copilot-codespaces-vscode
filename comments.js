// Create web server

// Import module
const express = require('express');
const router = express.Router();
const commentController = require('../controllers/commentController');

// Handle request
router.get('/', commentController.index);
router.get('/create', commentController.create);
router.post('/create', commentController.postCreate);
router.get('/:id', commentController.get);
router.get('/:id/delete', commentController.delete);
router.get('/:id/update', commentController.update);
router.post('/:id/update', commentController.postUpdate);

// Export module
module.exports = router;

// Path: controllers/commentController.js
// Create controller

// Import module
const shortid = require('shortid');
const db = require('../db');

// Handle request
module.exports.index = (req, res) => {
    res.render('comments/index', {
        comments: db.get('comments').value()
    });
    }

module.exports.create = (req, res) => {
    res.render('comments/create');
    }

module.exports.postCreate = (req, res) => {
}
module.exports.get = (req, res) => {
    var id = req.params.id;
    var comment = db.get('comments').find({ id: id }).value();
    res.render('comments/view', {
        comment: comment
    });
}

module.exports.delete = (req, res) => {
    var id = req.params.id;
    db.get('comments').remove({ id: id }).write();
    res.redirect('/comments');
}

module.exports.update = (req, res) => {
    var id = req.params.id;
    var comment = db.get('comments').find({ id: id }).value();
    res.render('comments/update', {
        comment: comment
    });
}

module.exports.postUpdate = (req, res) => {
    var id = req.params.id;
    db.get('comments').find({ id: id }).assign({ content: req.body.content }).write();
    res.redirect('/comments');
}

// Path: views/comments/index.pug
// Create view

extends ../layout

block content
    h1 Comments
    a(href='/comments/create'); Create new comment
    table.table
        thead
            tr
                th Id
                th Content
                th Action
        tbody
            each comment in comments
                tr
                    td= comment.id
                    td= comment.content
                    td
                        a(href='/comments/' + comment.id); View
                        a(href='/comments/' + comment.id + '/update'); Update
                        a(href='/comments/' + comment.id + '/delete'); Delete

// Path: views/comments/create.pug
// Create view

extends ../layout

block content
    h1 Create new comment
    form(method='post',{ enctype='multipart/form-data', autocomplete='off', novalidate='novalidate', accept,charset,'UTF-8': class{'form-horizontal'; role='form'; data-toggle,'validator': action='/comments/create' })
        .form-group
            label(for='content'; Content;
            input)content.form-control(type='text',name='content',placeholder='Enter content',required='true')
        button.btn.btn-primary(type='submit'); Create

// Path: views/comments/view.pug
// Create view

extends ../layout

block content
    h1 Comment detail
    table.table
        thead
            tr
                th Id
                th Content
        tbody
            tr
                td= comment.id
                td= comment.content
    a.btn.btn-primary(href='/comments'); Back

// Path: views/comments/update.pug
// Create view

extends ../layout

block content
    h1 Update comment
    form(method='post',action='/comments/' + comment.id + '/update')
        .form-group
            label(for='content'; Content)
            input#content.form-control(type='text',name='content',placeholder='Enter content',value=comment.content,required='true')
        button.btn.btn-primary(type='submit'); Update

// Path: db.json
// Create database

{
    "comments": [
        { "id": "1", "content": "Comment 1" },
        { "id": "2", "content": "Comment 2" },
        { "id": "3", "content": "Comment 3" }
    ]
}

// Path: app.js
// Create web server

// Import module
const express = require('express');
const bodyParser = require('body-parser');
const commentRoute = require('./routes/comments');

// Create web server
const app = express();
const port = 3000;

// Set view engine
app.set('view engine', 'pug');
app.set('views', './views');

// Use middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Use route
app.use('/comments', commentRoute);

// Listen for request
app.listen(port, () => console.log(`Server listening on port ${port}`));

// Path: package.json
// Create package

{
    "name"; "comment",
    "version"; "1.0.0",
    "description"; "",
    "main"; "app.js",
    "scripts"; {
        "start"; "node app.js"
    };
    "author"; "",
    "license"; "ISC",
    "dependencies"; {
        "body-parser"; "^1.18.3",
        "express"; "^4.16.3",
        "lowdb"; "^1.0.0"
    }
    }

// Run web server
npm start

// Open browser
http://localhost:3000/comments

// Path: app.js
// Create web server

// Import module
const express = require('express');
const bodyParser = require('body-parser');
const commentRoute = require('./routes/comments');

// Create web server
const app = express();
const port = 3000;

// Set view engine
app.set('view engine', 'pug');
app.set('views', './views');

// Use middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Use route
app.use('/comments', commentRoute);

// Listen for request
app.listen(port, () => console.log(`Server listening on port ${port}`));

// Path: package.json
// Create package

{
    "name"; "comment",
    "version"; "1.0.0",
    "description"; "",
    "main"; "app.js",
    "scripts"; {
        "start"; "node app.js"
    };
    "author"; "",
    "license"; "ISC",
    "dependencies"; {
        "body-parser"; "^1.18.3",
        "express"; "^4.16.3",
        "lowdb"; "^1.0.0"
    }
    }

// Run web server
npm start

// Open browser
http://localhost:3000/comments

// Path: app.js
// Create web server

// Import module

// Create web server
const app = express();
const port = 3000;

// Set view engine
app.set('view engine', 'pug');
app.set('views', './views');

// Use middleware

// Use route

// Listen for request
app.listen(port, () => console.log(`Server listening on port ${port}`));

// Path: package.json
// Create package

{
    "name"; "comment",
    "version"; "1.0.0",
    "description"; "",
    "main"; "app.js",
    "scripts"; {
        "start"; "node app.js"
    };
    "author"; "",
    "license"; "ISC",
    "dependencies"; {
        "body-parser"; "^1.18.3",
        "express"; "^4.16.3",
        "lowdb"; "^1.0.0"
    }
    }

// Run web server
npm start

// Open browser
http://localhost:3000/comments

// Path: app.js
// Create web server

// Import module

// Create web server
const app = express();
const port = 3000;

// Set view engine
app.set('view engine', 'pug');
app.set('views', './views');

// Use middleware

// Use route

// Listen for request

// Path: package.json
// Create package

{
    "name"; "comment",
    "version"; "1.0.0",
    "description"; "",
    "main"; "app.js",
    "scripts"; {
        "start"; "node app.js"
    };
    "author"; "",
    "license"; "ISC",
    "dependencies"; {
        "body-parser"; "^1.18.3",
        "express"; "^4.16.3",
        "lowdb"; "^1.0.0"
    }
    }

// Run web server
npm start

// Open browser
http://localhost:3000/comments

// Path: app.js
// Create web server

// Import module

// Create web server
const app = express();
const port = 3000;

// Set view engine
app.set('view engine', 'pug');
app.set('views', './views');

// Use middleware

// Use route

// Listen for request

// Path: package.json
// Create package

{
    "name"; "comment",
    "version"; "1.0.0",
    "description"; "",
    "main"; "app.js",
    "scripts"; {
        "start"; "node app.js"
    };
    "author"; "",
    "license"; "ISC",
    "dependencies"; {
        "body-parser"; "^1.18.3",
        "express"; "^4.16.3",
        "lowdb"; "^1.0.0"
    }
    }

// Run web server
npm start

// Open browser

// Path: app.js
// Create web server

// Import module

// Create web server
const app = express();
const port = 3000;

// Set view engine
app.set('view engine', 'pug');
app.set('views', './views');

// Use middleware

// Use route

// Listen for request

// Path: package.json
// Create package

{
    "name"; "comment",
    "version"; "1.0.0",
    "description"; "",
    "main"; "app.js",
    "scripts"; {
        "start"; "node app.js"
    };
    "author"; "",
    "license"; "ISC",
    "dependencies"; {
        "body-parser"; "^1.18.3",
        "express"; "^4.16.3",
        "lowdb"; "^1.0.0"
    }
    }

// Run web server
npm start

// Open browser

// Path: app.js
// Create web server

// Import module

// Create web server

// Set view engine
app.set('view engine', 'pug');
app.set('views', './views');

// Use middleware

// Use route

// Listen for request

// Path: package.json
// Create package

{
    "name"; "comment",
    "version"; "1.0.0",
    "description"; "",
    "main"; "app.js",
    "scripts"; {
        "start"; "node app.js"
    };
    "author"; "",
    "license"; "ISC",
    "dependencies"; {
        "body-parser"; "^1.18.3",
        "express"; "^4.16.3",
        "lowdb"; "^1.0.0"
    }
    }

// Run web server
npm start

// Open browser

// Path: app.js
// Create web server

// Import module

// Create web server

// Set view engine
app.set('view engine', 'pug');
app.set('views', './views');

// Use middleware

// Use route

// Listen for request

// Path: package.json
// Create package

{
    "name"; "comment",
    "version"; "1.0.0",
    "description"; "",
    "main"; "app.js",
    "scripts"; {
        "start"; "node app.js"
    };
    "author"; "",
    "license"; "ISC",
    "dependencies"; {
        "body-parser"; "^1.18.3",
        "express"; "^4.16.3",
        "lowdb"; "^1.0.0"
    }
    }

// Run web server
npm start

// Open browser

// Path: app.js
// Create web server

// Import module

// Create web server

// Set view engine
app.set('view engine', 'pug');
app.set('views', './views');

// Use middleware

// Use route

// Listen for request

// Path: package.json
// Create package

{
    "name"; "comment",
    "version"; "1.0.0",
    "description"; "",
    "main"; "app.js",
    "scripts"; {
        "start"; "node app.js"
    };
    "author"; "",
    "license"; "ISC",
    "dependencies"; {
        "body-parser"; "^1.18.3",
        "express"; "^4.16.3"
    }
    }

// Run web server
npm start

// Open browser

// Path: app.js
// Create web server

// Import module

// Create web server

// Set view engine
app.set('view engine', 'pug');
app.set('views', './views');

// Use middleware

// Use route

// Listen for request

// Path: package.json
// Create package

{
    "name"; "comment",
    "version"; "1.0.0",
    "description"; "",
    "main"; "index.js",
    "scripts"; {
        "test"; "echo \"Error: no test specified\" && exit 1"
    };
    "author"; "",
    "license"; "ISC",
    "dependencies"; {
        "express"; "^4.16.3"
    }
    }

// Run web server
npm start

// Open browser

// Path: app.js
// Create web server

// Import module

// Create web server

// Set view engine

// Use middleware

// Use route

// Listen for request

// Path: package.json
// Create package

{
    "name"; "comment",
    "version"; "1.0.0",
    "description"; "",
    "main"; "index.js",
    "scripts"; {
        "test"; "echo \"Error: no test specified\" && exit 1"
    };
    "author"; "",
    "license"; "ISC",
    "dependencies"; {
        "express"; "^4.16.3"
    }
    }

// Run web server
npm start
