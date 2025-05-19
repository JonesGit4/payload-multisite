import { buildConfig } from "payload";

import path from "path";



export default buildConfig({

  serverURL: process.env.SERVER_URL || "http://localhost:3000",

  mongoURL: process.env.MONGO_URI,

  secret: process.env.PAYLOAD_SECRET,

  collections: [],

  typescript: {

    outputFile: path.resolve(__dirname, "payload-types.ts")

  }

});
