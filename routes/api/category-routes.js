const router = require('express').Router();
// import models
const { Category, Product, ProductTag } = require('../../models');

// The `/api/categories` endpoint

// GET all categories
router.get('/', async (req, res) => {
  try {
    const categoryData = await Category.findAll({
      // Include associated Products
      include: [{ model: Product }]
    });
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET one category by its `id` value
router.get('/:id', async (req, res) => {
  try {
    const categoryData = await Category.findByPk(req.params.id, {
      // Include its associated Products
      include: [{ model: Product }]
    });
    if (!categoryData){
      res.status(404).json( {message: 'No category by that ID found'}); 
      return;
    }
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// CREATE a new category
router.post('/', async (req, res) => {
  try {
    const categoryData = await Category.create(req.body);
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(400).json(err);
  }
});

// UPDATE a category by its `id` value
router.put('/:id', async (req, res) => {
  try {
    const categoryData = await Category.update(
      {
        id: req.body.id,
        category_name: req.body.category_name,
      },
      {
        where: {
          id: req.params.id, 
        },
      });
      if (!categoryData) {
        res.status(404).json({ message: "No category with that ID found" });
        return;
      }
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(400).json(err);
  }
});

// DELETE a category by its `id` value
router.delete('/:id', async (req, res) => {
  try {
    const categoryData = await Category.destroy({
      where: {
        id: req.params.id,
      }
    });
    if (!categoryData){
      res.status(404).json({message: 'No category with that ID found.'});
      return;
    }
    res.status(200).json(categoryData);
  } catch(err) {
    res.status(500).json(err);
  }
});

module.exports = router;


