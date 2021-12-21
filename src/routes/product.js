import { Router } from "express";
import models from "../models";

const router = Router();

router.get("/", async (req, res) => {
  const { count = 5, page = 1 } = req.query;
  const products = await models.Product.find()
    .limit(count)
    .skip(count * page);
  const pages = await models.Product.count();
  res.json({ products, page });
});

router.get("/:product_id", async (req, res) => {
  const { product_id } = req.params;
  const product = await models.Product.findById(product_id);
  // const features = await models.Feature.find({ productId: product_id });

  product.features = features;

  res.json(product);
});

router.get("/:product_id/styles", async (req, res) => {
  const { product_id } = req.params;
  const styles = await models.Styles.find({ productId: product_id });
  console.log("🚀 ~ file: product.js ~ line 28 ~ router.get ~ styles", styles);
  const images = await models.Image.findOne({});

  res.json({ styles, images });
});
router.get("/:product_id/related", async (req, res) => {
  const { product_id } = req.params;
});
// router.get('/:userId', (req, res) => {
//   return res.send(req.context.models.users[req.params.userId]);
// });

export default router;
