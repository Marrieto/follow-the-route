# follow-the-route
An exercise in the course 1DV023


Follow the route
In this excercise you should train your ability to create routes in express.js and render som simple views.

The assignment
You should set up an application that follow this rules:

+ The web application should listen to port 8000.

+ When the client asks for the root URL a static html file (index.html) should be responded to the client.

+ The application should have a main layout defining a templete for all dynamic views.

+ When the client asks for the "/products" URL a view should be render that output a HTML document with the hardcoded text "This is the page where all products should be shown".

+ When the client asks for the "/products/:id" URL a view should be render that output a HTML document with the hardcoded text "This is the page where the product with the id = :id is shown". If the clienten request /products/231 the text should be: "This is the page where the product with the id = 231 is shown".

When the client asks for the "/products/create" URL a view should be render with a simple HTML formular should be shown. The form should have a button that posts the form to the URL described in point 7.

When the client send a HTTP POST to "/products/create" a function should be called that redirects the client to the URL "/products".

When the client calls a URL that is undefeined a 404-page should be render.

The application should be able to handle errors and respond with a 500 status.