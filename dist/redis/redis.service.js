"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var RedisService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.RedisService = void 0;
const common_1 = require("@nestjs/common");
const redis_1 = require("redis");
let RedisService = RedisService_1 = class RedisService {
    static async config(config) {
        const client = (0, redis_1.createClient)({
            socket: {
                host: config.host,
                port: config.port,
                noDelay: true,
                keepAlive: 5000
            },
            database: config.db
        });
        client.on('error', (err) => common_1.Logger.error('Redis Client Error', err));
        common_1.Logger.log("Redis client successfully connected!");
        await client.connect();
        RedisService_1.client = client;
        return client;
    }
    onApplicationBootstrap() {
        var _a, _b, _c;
        RedisService_1.config({
            host: (_a = process.env.REDIS_HOST) !== null && _a !== void 0 ? _a : "cache",
            port: (_b = process.env.REDIS_PORT) !== null && _b !== void 0 ? _b : 6379,
            db: (_c = process.env.REDIS_DATABASE) !== null && _c !== void 0 ? _c : 0
        });
    }
};
RedisService = RedisService_1 = __decorate([
    (0, common_1.Injectable)()
], RedisService);
exports.RedisService = RedisService;
//# sourceMappingURL=redis.service.js.map