# API Documentation

## Overview

This document describes the API endpoints available in the application.

## Endpoints

### GET /api/data
Returns all data items.

**Response:**
```json
{
  "status": "success",
  "data": []
}
```

### POST /api/data
Creates a new data item.

**Request Body:**
```json
{
  "name": "string",
  "value": "string"
}
```

**Response:**
```json
{
  "status": "success",
  "id": "string"
}
```

