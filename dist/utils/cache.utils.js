"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CacheManager = void 0;
const redis_service_1 = require("../redis/redis.service");
class CacheManager {
    static async set(key, data) {
        try {
            const cache = redis_service_1.RedisService.client;
            return await cache.set(key.toString(), JSON.stringify(data));
        }
        catch (error) {
            console.log("Error in setting to cache ", error === null || error === void 0 ? void 0 : error.message);
            return false;
        }
    }
    static async get(key) {
        try {
            const cache = redis_service_1.RedisService.client;
            const response = await cache.get(key.toString());
            return JSON.parse(response);
        }
        catch (error) {
            console.log("Error in getting from cache ", error === null || error === void 0 ? void 0 : error.message);
            return false;
        }
    }
}
exports.CacheManager = CacheManager;
//# sourceMappingURL=cache.utils.js.map