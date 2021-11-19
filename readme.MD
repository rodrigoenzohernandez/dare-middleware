# DARE MIDDLEWARE

## How to start it?

```bash
cd dare-middleware/
npm i
npm start
```

## Endpoints - General summary

### AUTH

#### (POST) /login 

Retrieve the auth token

### POLICIES

#### (GET) /policies

Get the list of policies' client paginated and limited to 10 elements by default.

#### (GET) /policies/:id

Get the details of a policy's client

### CLIENTS

#### (GET) /clients

Get the list of clients details paginated and limited to 10 elements by default. This API endpoint access also an optional filter query to filter by client name.

#### (GET) /clients/:id

/clients/:id

#### (GET) /clients/:id/policies

/clients/:id/policies

