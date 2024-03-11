{
  "name": "@openpanel/api",
  "version": "0.0.1",
  "scripts": {
    "dev": "dotenv -e ../../.env -c -v WATCH=1 tsup",
    "testing": "API_PORT=3333 pnpm dev",
    "start": "node dist/index.js",
    "build": "rm -rf dist && tsup",
    "lint": "eslint .",
    "format": "prettier --check \"**/*.{mjs,ts,md,json}\"",
    "typecheck": "tsc --noEmit"
  },
  "dependencies": {
    "@fastify/cors": "^9.0.0",
    "@fastify/websocket": "^8.3.1",
    "@logtail/pino": "^0.4.19",
    "@openpanel/common": "workspace:*",
    "@openpanel/db": "workspace:*",
    "@openpanel/queue": "workspace:*",
    "@openpanel/redis": "workspace:*",
    "fastify": "^4.25.2",
    "ico-to-png": "^0.2.1",
    "pino": "^8.17.2",
    "pino-pretty": "^10.3.1",
    "ramda": "^0.29.1",
    "sharp": "^0.33.2",
    "ua-parser-js": "^1.0.37",
    "uuid": "^9.0.1"
  },
  "devDependencies": {
    "@openpanel/eslint-config": "workspace:*",
    "@openpanel/prettier-config": "workspace:*",
    "@openpanel/sdk": "workspace:*",
    "@openpanel/tsconfig": "workspace:*",
    "@types/ramda": "^0.29.6",
    "@types/ua-parser-js": "^0.7.39",
    "@types/uuid": "^9.0.8",
    "@types/ws": "^8.5.10",
    "eslint": "^8.48.0",
    "prettier": "^3.0.3",
    "tsup": "^7.2.0",
    "typescript": "^5.2.2"
  },
  "eslintConfig": {
    "root": true,
    "extends": [
      "@openpanel/eslint-config/base"
    ]
  },
  "prettier": "@openpanel/prettier-config"
}
