// const express = require('express');
// const redis = require('redis');
import express from 'express';
// import redis from 'redis';
import { creatClient } from 'redis';


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
