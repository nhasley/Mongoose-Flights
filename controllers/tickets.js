var Ticket = require("../models/ticket");

module.exports = {
  create
};

function create(req, res) {
  var ticket = new Ticket({
    seat: req.body.seat,
    price: req.body.price,
    flight: req.params.id
  });
  ticket.save(function(err) {
    // one way to handle errors
    if (err) {
      console.log(err.message);
    } else {
      res.redirect("/flights/" + req.params.id);
    }
  });
}
