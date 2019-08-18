import { AuthorService } from '../services/author.service';

export class AuthorRouter {
    constructor() {
    }
    static create(event, context, callback) {
        new AuthorService().create(event, (error, result) => {
            AuthorRouter.respose(context, error,result);
        });
    }

    static list(event, context, callback) {
        new AuthorService().list(event, (error, result) => {
            AuthorRouter.respose(context, error,result);
        });
    }

    static get(event, context, callback) {
        new AuthorService().get(event, (error, result) => {
            AuthorRouter.respose(context, error,result);
        });
    }

    static update (event, context, callback){
        new AuthorService().update(event, (error, result) => {
            AuthorRouter.respose(context, error,result);
        });
    }

    static delete (event, context, callback) {
        new AuthorService().delete(event, (error, result) => {
            AuthorRouter.respose(context, error,result);
        });
    }
    
    static filter (event, context, callback) {
        new AuthorService().filter(event, (error, result) => {
            AuthorRouter.respose(context, error,result);
       });
    }
    
    static respose(context:any , error:any, result: any){
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
   }
}