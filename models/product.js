const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "product name must be provided"],
  },
  price: {
    type: Number,
    required: [true, "product price must be provided"],
  },
  category: {
    type: String,
    required: [true, "product category must be provided"],
  },

  featured: {
    type: Boolean,
    required: [false],
  },
  rating: {
    type: Number,
    default: 4.5,
  },

  createdAt: {
    type: Date,
    default: Date.now(),
  },

  company: {
    type: String,
    enum: {
      values: [
        "Nike",
        "Armani",
        "RayBan",
        "Oakley",
        "Fossil",
        "HugoBoss",
        "GildaPearl",
        "Gucci",
        "Fossil",
        "Puma",
        "RSVP",
        "DKNY",
        "Vans",
        "TiffanyCo",
        "DolceGabbana",
        "Ralph",
      ],
      message: "{VALUE} is not supported",
    },
  },
});

module.exports = mongoose.model("Product", productSchema);
