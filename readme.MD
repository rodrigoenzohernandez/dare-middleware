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

##### Example

POST /login

Body:

```JSON
{
  "client_id": "dare",
  "client_secret": "s3cr3t"
}
```

Response:

```JSON
{
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjbGllbnRJZCI6ImRhcmUiLCJpYXQiOjE2NDEyNDA4OTcsImV4cCI6MTY0MTI0MTQ5N30.shjTUoy-_zibXs__yqdmC86rBU3jxfHMr1s4z6_WWvk",
    "type": "Bearer",
    "expires_in": 600
}
```


### POLICIES

#### (GET) /policies

Get the list of policies' client paginated and limited to 10 elements by default.

##### Example

GET /policies

```JSON
[
    {
        "id": "64cceef9-3a01-49ae-a23b-3761b604800b",
        "amountInsured": "1825.89",
        "email": "inesblankenship@quotezart.com",
        "inceptionDate": "2016-06-01T03:33:32Z",
        "installmentPayment": true,
        "clientId": "e8fd159b-57c4-4d36-9bd7-a59ca13057bb"
    },
    .
    .
    .
    {
        "id": "7b624ed3-00d5-4c1b-9ab8-c265067ef58b",
        "amountInsured": "399.89",
        "email": "inesblankenship@quotezart.com",
        "inceptionDate": "2015-07-06T06:55:49Z",
        "installmentPayment": true,
        "clientId": "a0ece5db-cd14-4f21-812f-966633e7be86"
    },
]
```


#### (GET) /policies/:id

Get the details of a policy's client

##### Example

GET /policies/64cceef9-3a01-49ae-a23b-3761b604800b

```JSON
{
    "id": "64cceef9-3a01-49ae-a23b-3761b604800b",
    "amountInsured": "1825.89",
    "email": "inesblankenship@quotezart.com",
    "inceptionDate": "2016-06-01T03:33:32Z",
    "installmentPayment": true,
    "clientId": "e8fd159b-57c4-4d36-9bd7-a59ca13057bb"
}
```

### CLIENTS

#### (GET) /clients

Get the list of clients details limited to 10 elements by default. This API endpoint access also an optional filter query to filter by client name.

##### Example

GET /clients

```JSON
[
    {
        "id": "a0ece5db-cd14-4f21-812f-966633e7be86",
        "name": "Britney",
        "email": "britneyblankenship@quotezart.com",
        "role": "admin"
    },
    {
        "id": "e8fd159b-57c4-4d36-9bd7-a59ca13057bb",
        "name": "Manning",
        "email": "manningblankenship@quotezart.com",
        "role": "admin"
    },
]
```


#### (GET) /clients/:id

Get the client details.

##### Example

GET /clients/a0ece5db-cd14-4f21-812f-966633e7be86

```JSON
{
    "id": "a0ece5db-cd14-4f21-812f-966633e7be86",
    "name": "Britney",
    "email": "britneyblankenship@quotezart.com",
    "role": "admin",
    "policies": [
        {
            "id": "7b624ed3-00d5-4c1b-9ab8-c265067ef58b",
            "amountInsured": "399.89",
            "email": "inesblankenship@quotezart.com",
            "inceptionDate": "2015-07-06T06:55:49Z",
            "installmentPayment": true,
            "clientId": "a0ece5db-cd14-4f21-812f-966633e7be86"
        },
        .
        .
        .
        {
            "id": "6f514ec4-1726-4628-974d-20afe4da130c",
            "amountInsured": "697.04",
            "email": "inesblankenship@quotezart.com",
            "inceptionDate": "2014-09-12T12:10:23Z",
            "installmentPayment": false,
            "clientId": "a0ece5db-cd14-4f21-812f-966633e7be86"
        }
    ]
}
```

#### (GET) /clients/:id/policies

Get the client policies

##### Example

GET /clients/a0ece5db-cd14-4f21-812f-966633e7be86/policies

```JSON
[
    {
        "id": "7b624ed3-00d5-4c1b-9ab8-c265067ef58b",
        "amountInsured": "399.89",
        "email": "inesblankenship@quotezart.com",
        "inceptionDate": "2015-07-06T06:55:49Z",
        "installmentPayment": true,
        "clientId": "a0ece5db-cd14-4f21-812f-966633e7be86"
    },
    .
    .
    .
    {
        "id": "0df3bcef-7a14-4dd7-a42d-fa209d0d5804",
        "amountInsured": "705.14",
        "email": "inesblankenship@quotezart.com",
        "inceptionDate": "2014-05-11T12:28:41Z",
        "installmentPayment": false,
        "clientId": "a0ece5db-cd14-4f21-812f-966633e7be86"
    }
]
```

