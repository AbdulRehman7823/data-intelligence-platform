const express = require("express");

const datasetController = require("../controllers/datasetController");

const router = express.Router();

router.post("/", datasetController.createDataset);

router.get("/", datasetController.getDatasets);

router.get("/:id", datasetController.getDataset);

router.patch("/:id", datasetController.updateDataset);

router.delete("/:id", datasetController.deleteDataset);

module.exports = router;