import { CodegenConfig } from "@graphql-codegen/cli";

import dotenv from "dotenv";
dotenv.config({
  path: ".env.local",
});

console.log(process.env.CONTENTFUL_GRAPHQL_ENDPOINT);

const config: CodegenConfig = {
  schema: {
    [process.env.CONTENTFUL_GRAPHQL_ENDPOINT!]: {
      headers: {
        authorization: `Bearer ${process.env.CONTENTFUL_ACCESS_TOKEN}`,
      },
    },
  },
  documents: ["./app/page.tsx"],
  ignoreNoDocuments: true, // for better experience with the watcher
  generates: {
    "./gql/": {
      preset: "client",
      plugins: [],
    },
  },
};

export default config;
