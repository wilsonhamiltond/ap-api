
import { DocumentClient } from 'aws-sdk/clients/dynamodb';
import { v1 } from 'uuid';
import { IAuthor } from '../models/author.model';

export class AuthorService {
  private table: string = 'author';
  private dynamoDb:DocumentClient;

  constructor() {
    this.dynamoDb = new DocumentClient();
   }

  list(event, callback) {
    const params = {
      TableName: this.table
    };

    return this.dynamoDb.scan(params, (error, data) => {
      if (error) {
        callback(error);
      }
      callback(error, data.Items);
    });
  }

  get(event, callback){
    const params = {
      TableName: this.table,
      Key: {
        id: event.pathParameters.id
      }
    };
  
    return this.dynamoDb.get(params, (error, data) => {
      if (error) {
        callback(error);
      }
      callback(error, data.Item);
    });
  }

  create(event, callback){
    const data:IAuthor = <IAuthor>JSON.parse(event.body);
  
    data.id = v1();
  
    const params = {
      TableName: this.table,
      Item: data
    };
  
    return this.dynamoDb.put(params, (error, data) => {
      if (error) {
        callback(error);
      }
      callback(error, params.Item);
    });
  };

  update(event, callback){
    const data:IAuthor = JSON.parse(event.body);
  
    data.id = event.pathParameters.id;
  
    const params = {
      TableName : this.table,
      Item: data
    };
  
    return this.dynamoDb.put(params, (error, data) => {
      if (error) {
        callback(error);
      }
      callback(error, params.Item);
    });
  };

  delete(event, callback){
    const params = {
      TableName : this.table,
      Key: {
        id: event.pathParameters.id
      }
    };
  
    return this.dynamoDb.delete(params, (error, data) => {
      if (error) {
        callback(error);
      }
      callback(error, params.Key);
    });
  };

  filter(event, callback){
    const data:IAuthor = JSON.parse(event.body);
  
    data.id = event.pathParameters.id;
  
    const params = {
      TableName : this.table,
      Item: data
    };
  
    return this.dynamoDb.put(params, (error, data) => {
      if (error) {
        callback(error);
      }
      callback(error, params.Item);
    });
  }

  size(event, callback){
    const data:IAuthor = JSON.parse(event.body);
  
    data.id = event.pathParameters.id;
  
    const params = {
      TableName : this.table,
      Item: data
    };
  
    return this.dynamoDb.put(params, (error, data) => {
      if (error) {
        callback(error);
      }
      callback(error, params.Item);
    });
  }
}