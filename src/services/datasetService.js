const datasetRepository = require("../repositories/datasetRepository");

async function createDataset(userId, name, filePath) {
  return datasetRepository.createDataset(
    userId,
    name,
    filePath
  );
}

async function getDataset(id, userId) {
  return datasetRepository.findDatasetById(
    id,
    userId
  );
}
async function getDatasets(userId, limit, offset) {
  return datasetRepository.findDatasetsByUserId(
    userId,
    limit,
    offset
  );
}

async function updateDataset(id, userId, name, status) {
  return datasetRepository.updateDataset(
    id,
    userId,
    name,
    status
  );
}

async function deleteDataset(id,userId) {
  return datasetRepository.deleteDataset(id,userId);
}

module.exports = {
  createDataset,
  getDataset,
  getDatasets,
  updateDataset,
  deleteDataset
};