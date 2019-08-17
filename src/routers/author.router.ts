import { AuthorService } from '../services/author.service';

export class AuthorRouter {
    constructor() {
    }
    static create(event, context, callback) {
        new AuthorService().create(event, (error, result) => {
            const response = {
                statusCode: 200,
                headers: {
                    "Access-Control-Allow-Origin": "*"
                },
                body: JSON.stringify({
                    result: true,
                    data: result
                })
            };

            context.succeed(response);
        });
    }

    static list(event, context, callback) {
        new AuthorService().list(event, (error, result) => {
            const response = {
                statusCode: 200,
                headers: {
                    "Access-Control-Allow-Origin": "*"
                },
                body: JSON.stringify({
                    result: true,
                    data: result
                })
            };

            context.succeed(response);
        });
    }

    static get(event, context, callback) {
        new AuthorService().get(event, (error, result) => {
            const response = {
                statusCode: 200,
                headers: {
                    "Access-Control-Allow-Origin": "*"
                },
                body: JSON.stringify({
                    result: true,
                    data: result
                })
            };

            context.succeed(response);
        });
    }

    static update (event, context, callback){
        new AuthorService().update(event, (error, result) => {
            const response = {
                statusCode: 200,
                headers: {
                    "Access-Control-Allow-Origin": "*"
                },
                body: JSON.stringify({
                    result: true,
                    data: result
                })
            };

            context.succeed(response);
        });
    }

    static delete (event, context, callback) {
        new AuthorService().delete(event, (error, result) => {
            const response = {
                statusCode: 200,
                headers: {
                    "Access-Control-Allow-Origin": "*"
                },
                body: JSON.stringify({
                    result: true,
                    data: result
                })
            };

            context.succeed(response);
        });
    }
    
    static filter (event, context, callback) {
        new AuthorService().filter(event, (error, result) => {
            const response = {
                statusCode: 200,
                headers: {
                    "Access-Control-Allow-Origin": "*"
                },
                body: JSON.stringify({
                    result: !error,
                    data: result,
                    message: error
                })
            };

            context.succeed(response);
       });
    }
}