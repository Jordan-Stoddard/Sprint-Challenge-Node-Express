# Review Questions

## What is Node.js?
Node.js is a runtime environment, specifically a platform in which you can executive javascript outside of the browser.
This allows Javascript developers to do things they never could have before including writing command line utilities, native programs that run on different operating systems, networking software, web servers, web applications and lots more.

## What is Express?
Express is a minimalist web framework for Node.js. It basically makes it easier to create an API. 

## Mention two parts of Express that you learned about this week.
We learned how to use express.Router() to organize our API. We learned how to use express.json() to parse incoming requests with JSON payloads. 

## What is Middleware?
A piece of middleware is a function that gets called prior to the response coming back from the database.

## What is a Resource?
A resource can be any concern in your back end, this includes middleware, data from the database, etc.

## What can the API return to help clients know if a request was successful?
HTTP status updates. 

## How can we partition our application into sub-applications?
Using express.Router()

## What is express.json() and why do we need it?
Express.json() is a built-in middleware in express, it parses incoming requests that have JSON on the request body. This makes our life easier so we don't have to worry about how to interact with the body parser.
