client --- server -> innke bhich ka commmunication hi padhe wale hai

URL - Uniform Resource Locator
URI - Uniform Resource Identifier
URN - Uniform Resource Name

mainly address ki hi baat ho rahi hai

# What are HTTP headers?

metadata ->  key : value  pair send along request and response

caching, authentication , manage state
x - deprecated

- Request headers -> client to server
- Response headers -> server to client
- Representation headers -> encoding / compression
- Payload headers -> data being sent

## Most Common Headers
- `Accept` : application / json
- `User` : Agent
- `Authorigation` : Bearer <token>
- `Content-Type` (image , pdf ,etc)
- `Cookie` (session management)
- `cache-control` (data kab expire , 3600 second baad expire)

## CORS
Access-Control-allow-origin
Access-Control-allow-credentials
Access-control-allow-method

## Security
Cross-origin-embedding-policy
cross-origin-opener-policy
content-security-policy
x-xss-protection

# HTTP Methods
Basic set of operations that can be used to intract with server

`GET` - retrive a resource  
`HEAD`- No message body(response headers only)  
`OPTIONS` - what operations are available  
`TRACE` - loopback test (get same data)  
`DELETE` - delete a resource  
`PUT` - update a resource (complete update)  
`POST` - create a resource (new resource)  
`PATCH` - partial update (specific fields)

## Status Codes
- `1**` - Informational
- `2**` - Success
- `3**` - Redirection
- `4**` - Client Error
- `5**` - Server Error

100 - continue  
102 - processing  
200 - ok  
201 - created  
202 - accepted  
307 - temporary redirect  
308 - permanent redirect  
400 - bad request  
401 - unauthorized  
402 - payment required
404 - not found
500 - internal server error
504 - gateway timeout