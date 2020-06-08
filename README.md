# JsonServerDemo

Demo project with configuration of JSON-SERVER:
https://www.npmjs.com/package/json-server

### Configuration

package.json:
```
 "server": "./node_modules/.bin/json-server --watch ./json-server/db.json --routes ./json-server/routes.json",
```

proxy.conf.json:
```
{
  "/api/*": {
    "target": "http://localhost:3000",
    "secure": false
  }
}
```

angular.json:
```
"serve": {
          "builder": "@angular-devkit/build-angular:dev-server",
          "options": {
            "browserTarget": "json-server-demo:build",
            "proxyConfig": "src/proxy.conf.json"
          },
          "configurations": {
            "production": {
              "browserTarget": "json-server-demo:build:production"
            }
          }
        },
        
```
