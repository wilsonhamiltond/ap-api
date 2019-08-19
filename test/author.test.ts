import { agent } from 'supertest';
import { IAuthor } from '../src/models/author.model';
var should = require("should");
declare var describe: any;
declare var it: any;

class AuthorTest {
    private server_url:string;
    private api_url:string;
    private enviroment:string;
    constructor() {
        this.server_url = 'https://w7wkho5yah.execute-api.us-east-1.amazonaws.com';
        this.enviroment = '/dev';
        this.api_url = '/api/v1/author';
    }

    async run() {
        let author: IAuthor = await this.create();
        await this.list();
        await this.update(author);
        await this.get(author.id)
        await this.delete(author.id);
        await this.filter();
    }

    async create(): Promise<IAuthor> {
        return new Promise((resolve: any, reject: any) => {
            let author: IAuthor = {
                posts: [],
                date_birth: new Date(1987, 10, 15),
                id: '',
                email: 'test@gmail.com',
                name: 'Test Create'
            };
            try {
                describe(`POST ${this.api_url}`, () => {
                    it('Author create', (done) => {
                        agent(this.server_url)
                            .post(this.enviroment + this.api_url)
                            .send(author)
                            .set('Accept', 'application/json')
                            .expect('Content-Type', /json/)
                            .expect(200)
                            .end((err: any, res: any) => {
                                should(res.status).equal(200);
                                should(res.body.result).equal(true);
                                should.exist(res.body.data);
                                done()
                                resolve(res.body.data);
                            })
                    });
                });
            } catch (e) {
                reject(e)
            }
        })
    }

    async update(author: IAuthor): Promise<void> {
        return new Promise((resolve: any, reject: any) => {
            try {
                describe(`PUT ${this.api_url}`, () => {
                    author.name = 'Test Update';
                    it('Author update', (done) => {
                        agent(this.server_url)
                            .put(`${this.enviroment}${this.api_url}/${author.id}`)
                            .send(author)
                            .set('Accept', 'application/json')
                            .expect('Content-Type', /json/)
                            .expect(200)
                            .end((err: any, res: any) => {
                                should(res.status).equal(200);
                                should(res.body.result).equal(true);
                                should.exist(res.body.data);
                                done()
                                resolve();
                            })
                    });
                });
            } catch (e) {
                reject(e)
            }
        })
    }

    async get(id: string): Promise<IAuthor> {
        return new Promise((resolve: any, reject: any) => {
            try {
                describe(`GET ${this.api_url}`, () => {
                    it('Author get', (done) => {
                        agent(this.server_url)
                            .get(`${this.enviroment}${this.api_url}/${id}`)
                            .set('Accept', 'application/json')
                            .expect('Content-Type', /json/)
                            .expect(200)
                            .end((err: any, res: any) => {
                                should(res.status).equal(200);
                                should(res.body.result).equal(true);
                                should(res.body.data.name).equal('Test Update');
                                done()
                                resolve();
                            })
                    });
                });
            } catch (e) {
                reject(e)
            }
        })
    }

    async delete(id: string): Promise<IAuthor> {
        return new Promise((resolve: any, reject: any) => {
            try {
                describe(`DELETE ${this.api_url}`, () => {
                    it('Author delete', (done) => {
                        agent( this.server_url )
                            .delete(`${this.enviroment}${this.api_url}/${id}`)
                            .set('Accept', 'application/json')
                            .expect('Content-Type', /json/)
                            .expect(200)
                            .end((err: any, res: any) => {
                                should(res.status).equal(200);
                                should(res.body.result).equal(true);
                                done()
                                resolve();
                            })
                    });
                });
            } catch (e) {
                reject(e)
            }
        })
    }

    async list() {
        return new Promise((resolve: any, reject: any) => {
            try {
                describe(`GET ${this.api_url}`, () => {
                    it('Author list', (done) => {
                        agent(this.server_url)
                            .get(`${this.enviroment}${this.api_url}`)
                            .set('Accept', 'application/json')
                            .expect('Content-Type', /json/)
                            .expect(200)
                            .end((err: any, res: any) => {
                                should(res.status).equal(200);
                                should(res.body.result).equal(true);
                                should(res.body.data.length).be.greaterThan(0)
                                done()
                                resolve();
                            })
                    });
                });
            } catch (e) {
                reject(e)
            }
        })
    }

    async filter(): Promise<IAuthor> {
        return new Promise((resolve: any, reject: any) => {
            let filter: any = {
                params: {
                    name: 'Test'
                },
                sort: { name: -1 }
            };
            try {
                describe(`POST ${this.api_url}/filter`, () => {
                    it('Author filter', (done) => {
                        agent(this.server_url)
                            .post(`${this.enviroment}${this.api_url}/filter`)
                            .send(filter)
                            .set('Accept', 'application/json')
                            .expect('Content-Type', /json/)
                            .expect(200)
                            .end((err: any, res: any) => {
                                should(res.status).equal(200);
                                should(res.body.result).equal(true);
                                should(res.body.data.Items.length).be.greaterThan(0)
                                done()
                            })
                    });
                });
            } catch (e) {
                reject(e)
            }
        })
    }
}

new AuthorTest().run();