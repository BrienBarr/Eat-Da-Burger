// Declare dependencies
var express = require("express");
var burger = require("../models/burger.js");

// Set router to use the express Router method
var router = express.Router();

// Set the GET route
router.get("/", function(req, res) {
  // Use the burger model to select all entries from database
    burger.selectAll(function(data) {
      var hbsObject = {
        burgers: data
      };
      console.log(hbsObject);
      // Render all the returned records from the database using the index.handlebars view
      res.render("index", hbsObject);
    });
  });
  
  // Set the POST route
  router.post("/api/burgers", function(req, res) {
    // Use the burger model to insert a record for a new burger posted from the Add a Burger form
    burger.insertOne("burger_name", [req.body.burger_name], function(result) {
      // Return the id of the new burger record
      res.json({ id: result.insertId });
    });
  });
  
  // Set the PUT route
  router.put("/api/burgers/:id", function(req, res) {
    // Get the id of the burger record to update from the request parameters 
    // and add it to the condition used for the query
    var condition = "id = " + req.params.id;
  
    // Use the burger model to update the burger record for the id of the burger 
    burger.updateOne(
      {
        devoured: req.body.devoured
      },
      condition,
      function(result) {
        // If no rows were changed, there were no records with that id. Send a 404 status code for not found.
        if (result.changedRows === 0) {
          return res.status(404).end();
        }
        // Otherwise send a 200 status code for a sucessful record update.
        res.status(200).end();
      }
    );
  });
  
// Export router
  module.exports = router;