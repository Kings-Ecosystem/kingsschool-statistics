import { RedisService } from 'src/redis/redis.service';

export class CacheManager {

    static async set(key: string, data: any) {
        try {
            const cache = RedisService.client;
            return await cache.set(key.toString(), JSON.stringify(data));
        } catch (error) {
            console.log("Error in setting to cache ", error?.message);
            return false;
        }
    }

    static async get(key: string) {
        try {
            const cache = RedisService.client;
            const response = await cache.get(key.toString());
            return JSON.parse(response);
        } catch (error) {
            console.log("Error in getting from cache ", error?.message);
            return false;
        }
    }

}