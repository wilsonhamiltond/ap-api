import { AuthorService } from 'src/services/author.service';
import { IAuthor } from 'src/models/author.model';

export class AutorRouter {
    private authorService: AuthorService;
    constructor() {
        this.authorService = new AuthorService();
    }

    list(event: any, context: any, callback: any) {
        this.authorService.list(event, (error:any, result: IAuthor[]) => {
            const response = {
                statusCode: 200,
                headers: {
                    "Access-Control-Allow-Origin": "*"
                },
                body: JSON.stringify(result),
            };

            context.succeed(response);
        });
    }
}