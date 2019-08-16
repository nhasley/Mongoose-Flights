var Flight = require("../models/flight");

module.exports = {
  new: newFlight,
  create,
  index
};

function newFlight(req, res) {
  res.render("flights/new", { title: "Add Flight" });
}

function create(req, res) {
  //remove empty properties
  for (let key in req.body) {
    if (req.body[key] === "") delete req.body[key];
  }
  var flight = new Flight(req.body);
  flight.save(function(err) {
    // one way to handle errors
    if (err) return res.render("flights/new");
    console.log(flight);
    // for now, redirect right back to new.ejs
    res.redirect("/flights");
  });
}

function index(req, res) {
  Flight.find({}, function(err, flights) {
    res.render("flights/index", { title: "All Flights", flights });
  });
}
