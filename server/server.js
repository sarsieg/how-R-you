const express = require("express");
const path = require("path");
const { authMiddleware } = require("./utils/auth");

const { ApollowServer } = require('apollo-server-express');

const { typeDefs, resolvers } = require('./schemas');
const db = require('./config/connection');

const PORT = process.env.PORT || 3001;
const app = express();