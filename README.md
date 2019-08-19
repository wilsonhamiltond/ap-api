# Author and publications back-end
This is a api for adding and show author and her publications, using serverless and amazon dynamodb.

## Requirements
- Serverless
- Mocha( for test )
- Typescript

```bash
npm install serverless mocha typescript -g
```
## Quick Start
After downloading, run the following at the command line to run the repository:
```bash
npm install
```

### Build project
```
npm run build
```

### Deploy in Amazon serverless
```
npm run deploy
```

## Plugins
- aws-sdk
- uuid


## For DDT
Config the end-pont url in
test/author.test.ts

this.server_url = '{{SERVER_URL}}';

this.enviroment = '{{ENVIROMENT}}';

this.api_url = 'API_URL';

### Build project and test
```
npm run build
```
```
npm run test
```
