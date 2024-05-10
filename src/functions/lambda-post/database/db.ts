import { DynamoDB } from 'aws-sdk';
import { v4 as uuidv4 } from 'uuid';

const dynamoDb = new DynamoDB.DocumentClient();
const tableName = process.env.DYNAMODB_TABLE;

export const createDocument = async (document: any): Promise<string> => {
    const id = uuidv4();

    const params: DynamoDB.DocumentClient.PutItemInput = {
        TableName: tableName,
        Item: {
            id: id,
            ...document
        }
    }

    await dynamoDb.put(params).promise();
    return id;
}
