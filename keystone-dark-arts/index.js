const { Keystone } = require("@keystonejs/keystone");
const { GraphQLApp } = require("@keystonejs/app-graphql");
const { AdminUIApp } = require("@keystonejs/app-admin-ui");
const { KnexAdapter: Adapter } = require("@keystonejs/adapter-knex");
require("dotenv").config();

const BlogPostSchema = require("./schemas/blogPost");

const PROJECT_NAME = process.env.PROJECT_NAME;
const adapterConfig = { knexOptions: { connection: process.env.DATABASE_URI } };

const keystone = new Keystone({
  adapter: new Adapter(adapterConfig),
});

keystone.createList("BlogPost", BlogPostSchema);

module.exports = {
  keystone,
  apps: [
    new GraphQLApp(),
    new AdminUIApp({ name: PROJECT_NAME, enableDefaultRoute: true }),
  ],
};
