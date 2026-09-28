const datasetService = require("../services/datasetService");


async function createDataset(req, res, next) {
  try {
    const {  name, filePath } = req.body;

    if (!name) {
      return res.status(400).json({
        error: "name is required"
      });
    }

    const dataset = await datasetService.createDataset(
      req.user.userId,
      name,
      filePath || null
    );

    res.status(201).json(dataset);
  } catch (error) {
    next(error);
  }
}

async function getDataset(req, res, next) {
  try {
   
    const dataset = await datasetService.getDataset(
  req.params.id,
  req.user.userId
);

    if (!dataset) {
      return res.status(404).json({
        error: "Dataset not found"
      });
    }

    res.json(dataset);
  } catch (error) {
    next(error);
  }
}

async function getDatasets(req, res, next) {
  try {
    const userId = Number(req.query.userId);

    const page = Math.max(
      Number(req.query.page) || 1,
      1
    );

    const limit = Math.min(
      Number(req.query.limit) || 20,
      100
    );

    const offset = (page - 1) * limit;

    if (!userId) {
      return res.status(400).json({
        error: "userId is required"
      });
    }

    const datasets = await datasetService.getDatasets(
      userId,
      limit,
      offset
    );

    res.json({
      page,
      limit,
      data: datasets
    });
  } catch (error) {
    next(error);
  }
}

async function updateDataset(req, res, next) {
  try {
    const { name, status } = req.body;

    const dataset = await datasetService.updateDataset(
      req.params.id,
       req.user.userId,
      name,
      status
    );

    if (!dataset) {
      return res.status(404).json({
        error: "Dataset not found"
      });
    }

    res.json(dataset);
  } catch (error) {
    next(error);
  }
}

async function deleteDataset(req, res, next) {
  try {
    const dataset = await datasetService.deleteDataset(
      req.params.id,
       req.user.userId
    );

    if (!dataset) {
      return res.status(404).json({
        error: "Dataset not found"
      });
    }

    res.json({
      message: "Dataset deleted",
      dataset
    });
  } catch (error) {
    next(error);
  }
}

module.exports = {
  createDataset,
  getDataset,
  getDatasets,
  updateDataset,
  deleteDataset
};