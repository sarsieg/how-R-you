const express = require("express");
const path = require("path");
const { authMiddleware } = require("./utils/auth");

const { ApollowServer } = require('apollo-server-express');

