const express = require('express');
const redis = require('redis');

class RedisClient {
  constructor() {
    this.client = redis.createClient();
  }
    
  const isAlive = async () => {
    try{
        await this.client.on(
          'connect',
          ()=>{
            console.log('Resis client conncected')
            return true
          }
        );
    }catch (e){
        console.error(`Resis Error: ${e}`);
    }
  }


  // Set a value in Redis with an expiration time (in seconds)
    async set(key, value, expiration = 60) {
        try{
            await this.client.setex(key, expiration, JSON.stringify(value));
        } catch(err){
        console.error(`Failed to set key: ${key} in Redis: ${err}`);
      }
  }

  // Get a value from Redis
  get(key) {
    return new Promise((resolve, reject) => {
      this.client.get(key, (err, data) => {
        if (err) {
          reject(err);
        } else {
          resolve(data ? JSON.parse(data) : null);
        }
      });
    });
  }
}

// Instantiate Redis client
const redisClient = new RedisClient();
}
