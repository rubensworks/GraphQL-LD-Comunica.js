# Comunica for GraphQL-LD

[![Build Status](https://travis-ci.org/rubensworks/graphql-ld-comunica.js.svg?branch=master)](https://travis-ci.org/rubensworks/graphql-ld-comunica.js)
[![Coverage Status](https://coveralls.io/repos/github/rubensworks/graphql-ld-comunica.js/badge.svg?branch=master)](https://coveralls.io/github/rubensworks/graphql-ld-comunica.js?branch=master)
[![npm version](https://badge.fury.io/js/graphql-ld-comunica.svg)](https://www.npmjs.com/package/graphql-ld-comunica)

This is a [GraphQL-LD](https://github.com/rubensworks/graphql-ld.js) engine for executing queries using the [Comunica](https://github.com/comunica/comunica) query engine.

If you want to use this for Solid apps, have a look at [graphql-ld-comunica-solid](https://github.com/rubensworks/GraphQL-LD-Comunica-Solid.js) instead.

## Usage

_This requires you to install [graphql-ld-comunica](https://github.com/rubensworks/graphql-ld-comunica.js): `yarn add graphql-ld-comunica`._

```javascript
import {Client} from "graphql-ld";
import {QueryEngineComunica} from "graphql-ld-comunica";

// Define a JSON-LD context
const context = {
  "@context": {
    "label": { "@id": "http://www.w3.org/2000/01/rdf-schema#label" }
  }
};

// Create a GraphQL-LD client based on a client-side Comunica engine over 2 sources
const comunicaConfig = {
  sources: [ "http://dbpedia.org/sparql", "https://ruben.verborgh.org/profile/" ],
};
const client = new Client({ context, queryEngine: new QueryEngineComunica(comunicaConfig) });

// Define a query
const query = `
  query @single {
    label
  }`;

// Execute the query
const { data } = await client.query({ query });
```

## License
This software is written by [Ruben Taelman](http://rubensworks.net/).

This code is released under the [MIT license](http://opensource.org/licenses/MIT).
