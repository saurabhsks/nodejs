// Application div
const appDiv = "app";
// Both set of different routes and template generation functions
let routes = {};//this is an empty collection containing no path in it
let templates = {};//collection with empty template
// Register a template (this is to mimic a template engine)
let template = (name, templateFunction) => {
  return templates[name] = templateFunction;//the templatefunction is passed to the template on the basis of this name 
};
// Define the routes. Each route is described with a route path & a template to render
// when entering that path. A template can be a string (file name), or a function that
// will directly create the D

let route = (path, template) => {
    if (typeof template == "function") {
      return routes[path] = template;// for a particular path in aroute collections there is a defined template
      //these are the values pushed to the routes collection
    }
    else if (typeof template == "string") {
      return routes[path] = templates[template];//for a path comming from routes collection there is a unique collect
    }
    else {
      return;
    }
};