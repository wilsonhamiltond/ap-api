import { DynamoDB, AWSError,  } from 'aws-sdk';
import { DocumentClient, ScanInput, ScanOutput } from 'aws-sdk/clients/dynamodb';

export class AuthorService {
    private dynamoDb:DocumentClient = new DynamoDB.DocumentClient();
    private table:string = 'author';

    constructor() { }

    list(event:any, callback:any) {
        const params: ScanInput = {
            TableName: this.table
        };

        return this.dynamoDb.scan(params, (error:AWSError, data:ScanOutput) => {
            if (error) {
                callback(error);
            }
            callback(error, data.Items);
        });
    }
}