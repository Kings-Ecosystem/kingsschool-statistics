import { Injectable, Logger, OnApplicationBootstrap } from '@nestjs/common';
import { createClient } from 'redis';


@Injectable()
export class RedisService implements OnApplicationBootstrap {

    static client: any

    static async config(config?: { host: string, port: number, db: number }) {
        const client = createClient({
            socket: {
                host: config.host,
                port: config.port,
                noDelay: true,
                keepAlive: 5000
            },
            database: config.db
        });

        client.on('error', (err) => Logger.error('Redis Client Error', err));
        Logger.log("Redis client successfully connected!")

        await client.connect();
        RedisService.client = client;
        return client;
    }

    onApplicationBootstrap() {
        RedisService.config({
            host: process.env.REDIS_HOST ?? "cache",
            port: process.env.REDIS_PORT as any ?? 6379,
            db: process.env.REDIS_DATABASE as any ?? 0
        });
    }
}
