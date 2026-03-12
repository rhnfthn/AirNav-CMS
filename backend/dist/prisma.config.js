"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const config_1 = require("prisma/config");
const database_url_1 = require("./src/config/database-url");
exports.default = (0, config_1.defineConfig)({
    schema: 'prisma/schema.prisma',
    migrations: {
        path: 'prisma/migrations',
    },
    datasource: {
        url: (0, database_url_1.getDatabaseUrl)(),
    },
});
//# sourceMappingURL=prisma.config.js.map