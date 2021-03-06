const mongoose = require("mongoose");

const orderSchema = mongoose.Schema({
  books: [{bookId: String, bookTitle: String, quantity: Number}],
  creator: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  shipped: { type: Boolean, required: true, default: false },
  name: { type: String, required: true },
  address: { type: String, required: true },
  city: { type: String, required: true },
  state: { type: String, required: true },
  zip: { type: String, required: true },
  country: { type: String, required: true }

});

module.exports = mongoose.model("Order", orderSchema);
