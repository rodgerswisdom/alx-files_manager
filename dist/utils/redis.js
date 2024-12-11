import express from 'express';
import { creatClient } from 'redis';
mport { promisify } from 'util';

class RedisClient {
  constructor() {
      //  this.client = redis.createClient();

       this.client = createClient();

       client.on('error', err => console.log('Redis Client Error', err.message));

       await client.connect();
  }
    
  isAlive(){
      /**
       * Checks if redis is connected
       * @return: True if connected, False if otherwise
       */
      return client.connected
  }

    
    async set(key, value, expiration){
        const asyncSet = promisify(this.client.set).bind(client);
        const value =  await asyncSet(key, value, 'EX', expiration);
  }

  // Get a value from Redis
  get(key) {
      const asyncGet = promisify(this.redisClient.get).bind(this.redisClient);
      const value = await asyncGet(key);
      return value;
}

// Instantiate Redis client
const redisClient = new RedisClient();
}
