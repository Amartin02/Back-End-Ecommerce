const router = require("express").Router(); //returns a router object
const { Category, Product } = require("../../models");

// The `/api/categories` endpoint

router.get("/", async (req, res) => {
  try {
    const categoriesData = await Category.findAll({
      include: [{ model: Product }],
    });
    res.status(200).json(categoriesData);
  } catch (err) {
    res.status(500).json(err);
  }
  // find all categories
  // be sure to include its associated Products
});

router.get("/:id", async (req, res) => {
  try {
    const categoriesData = await Category.findByPk(req.params.id, {
      include: [{ model: Product }],
    });
    res.status(200).json(categoriesData);
  } catch (err) {
    res.status(500).json(err);
  }
  // find one category by its `id` value
  // be sure to include its associated Products
});

router.post("/", async (req, res) => {
  try {
    const categoriesData = await Category.create({
      category_name: req.body.category_name,
    });
    res.status(200).json(categoriesData);
  } catch (err) {
    res.status(500).json(err);
  }
  // create a new category
});

router.put("/:id", async (req, res) => {
  try {
    const categoriesData = await Category.update(
      { category_name: req.body.category_name },
      {
        where: { id: req.params.id },
      }
    );
    res.status(200).json(categoriesData);
  } catch (err) {
    res.status(500).json(err);
  }
  // update a category by its `id` value
});

router.delete("/:id", async (req, res) => {
  try {
    const categoriesData = await Category.destroy({
      where: { id: req.params.id },
    });
    res.status(200).json(categoriesData);
  } catch (err) {
    res.status(500).json(err);
  }
  // delete a category by its `id` value
});

module.exports = router;
