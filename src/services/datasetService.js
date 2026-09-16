const datasetRepository = require("../repositories/datasetRepository");

async function createDataset(userId, name, filePath) {
  return datasetRepository.createDataset(
    userId,
    name,
    filePath
  );
}

async function getDataset(id) {
  return datasetRepository.findDatasetById(id);
}

async function getDatasets(userId, limit, offset) {
  return datasetRepository.findDatasetsByUserId(
    userId,
    limit,
    offset
  );
}

async function updateDataset(id, name, status) {
  return datasetRepository.updateDataset(
    id,
    name,
    status
  );
}

async function deleteDataset(id) {
  return datasetRepository.deleteDataset(id);
}

module.exports = {
  createDataset,
  getDataset,
  getDatasets,
  updateDataset,
  deleteDataset
};