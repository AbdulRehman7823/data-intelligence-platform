# Data Intelligence Platform

A production-style data intelligence platform designed to ingest,
process, analyse and eventually predict insights from large datasets.

## Problem

Modern applications generate large amounts of data, but raw data
must be validated, processed and analysed before it becomes useful.

This project explores how to build a scalable platform capable of:

- Data ingestion
- Data validation
- Asynchronous processing
- Analytics
- Machine learning
- Caching
- Distributed workers
- Cloud deployment

## Architecture

Currently:

Client → Node.js API

Planned:

Client
  ↓
API
  ↓
PostgreSQL
  ↓
RabbitMQ
  ↓
Workers
  ↓
Python Data/ML Services
  ↓
AWS/S3

## Technology

- Node.js
- PostgreSQL
- Python
- Redis
- RabbitMQ
- Docker
- AWS
- Machine Learning