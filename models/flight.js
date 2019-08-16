var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var flightSchema = new Schema(
  {
    airline: {
      type: String,
      enum: ["American", "Southwest", "United"],
      required: true
    },
    flightNo: { type: Number, min: 10, max: 9999, required: true },
    departs: {
      type: Date,
      default: function() {
        var redate = new Date();
        redate.setFullYear(redate.getFullYear() + 1);
        return redate.toLocaleDateString();
      },
      required: true
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("Flight", flightSchema);
