const logger = require("../utils/logger");

const fetchproduct = async (req, res) => {
  try {

    const response = await fetch('https://fakestoreapi.com/products');
    const data = await response.json(); 

    res.json({ data });

  } catch (error) {
    logger.error(error);
    res.status(500).json({ msg: "Error fetching products" });
  }
};

module.exports = {
  fetchproduct
};