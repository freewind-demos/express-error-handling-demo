Start Server
------------

```
npm install
```

Some important concepts
-----------------------

### About route handler:

A function has 2 or 3 parameters:

```
app.use(function(req, res) {})

app.use(function(req, res, next) {})
```

### About error handler

```
app.use(function(err, req, res, next) {
    // do something
})
```

It must have 4 parameters(the first one is an error some previous handlers)

### About `next`:

1. `next()` means to go into next route handler (not error handler)
1. `next('route')` means to skip all the later route handlers, and it's not an error
1. `next(otherValue)` means go to error handlers

1. The normal way to handle errors in express
---------------------------------------------

```
node index.js
```

```
curl http://localhost:3000
```

2. Manually handle errors
-------------------------

```
node not-using-error-handler.js
```

Visit: 

```
curl http://localhost:3000/
```

3. Use the default error handler
--------------------------------

```
node default-error-handler.js
```

Errors will be logged on server side and also be sent to client.

### Custom string error

```
curl http://localhost:3000/custom-error
```

### File error

```
curl http://localhost:3000/file-error
```

### `throw err` will kill the server

```
curl http://localhost:3000/throw-error
```

4. Custom error handler
-----------------------

```
node custom-error-handler.js
```

5. Log error stack
------------------

```
node error-stack.js
```

6. Multiple error handlers
--------------------------

```
node multi-error-handlers.js
```

```
curl http://localhost:3000/normal-error
curl http://localhost:3000/very-bad-error
```

7. headersSent
--------------

```
node headers-sent.js
```

```
curl http://localhost:3000/error1
curl http://localhost:3000/error2
```

8. `next('route')`
------------------

If we pass value to `next()`, there are two cases:
1. if it's the string `route`, means you want to skip next route handlers
2. otherwise, you are passing an error, and the request will be in an error state, and be handled by some error handlers

```
node next-route.js
```

```
curl http://localhost:3000/
```