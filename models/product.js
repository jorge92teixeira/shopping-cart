const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
  imagePath: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
}, { timestamps: true });

ProductSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    delete returnedObject.__v;
  },
});

module.exports = mongoose.model('Product', ProductSchema);