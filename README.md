# Tea-Business-Frontend

 ----------------------------- URL'S FOR FRONTEND CREATION ---------------------------------

# ----------- TeaBag --------------- [ RELATED TO TEABAG TABLE ]
```
1. Save - https://puzzled-boa-sunglasses.cyclic.app/api/v1/teabag/save (A POST method request)
   ex. {
        "teaBagType":"BOP",
         "teaBagWeight":20,
        "teaBagQtyOnHand":80,
        "teaBagUnitPrice":500.00,
        "teaBagMake":"TRI"
   } This is the request body that needs to be sent to the backend in row json format 

2. Update - https://puzzled-boa-sunglasses.cyclic.app/api/v1/teabag/update? 
             id=65e9b52a48cb9a5b2a6ce687 (A PUT method request)
   ex. {
        "teaBagType":"BOP",
         "teaBagWeight":20,
        "teaBagQtyOnHand":80,
        "teaBagUnitPrice":500.00,
        "teaBagMake":"TRI"
    }This is the request body that needs to be sent to the backend in row json format

3. Delete - https://puzzled-boa-sunglasses.cyclic.app/api/v1/teabag/delete?      
            id=65e9bb971a96d370701d016d (A DELETE method request)
   For this, providing the id of the teabag is enough.

4. Get One Tea Bag - https://puzzled-boa-sunglasses.cyclic.app/api/v1/teabag/get? 
                     id=65e9bb971a96d370701d016d (A GET method request)
   For this also, providing the id is enough
     ex response.
   {
    "_id": "65eadaacce1e5e3a63d77f9f",
    "teaBagType": "BOP",
    "teaBagWeight": 20,
    "teaBagQtyOnHand": 80,
    "teaBagUnitPrice": 500,
    "teaBagMake": "TRI",
    "__v": 0
}

5. Get all tea bags - https://puzzled-boa-sunglasses.cyclic.app/api/v1/teabag/all?page=0&size=10 ((A GET method request)  The pagination option has been used. So, page and the pagesize need to be sent in query params. Default page is set to 0 and pageSize is set to 10.

 ex response.
         [
            {
                "_id": "65eadaacce1e5e3a63d77f9f",
                "teaBagType": "BOP",
                "teaBagWeight": 20,
                "teaBagQtyOnHand": 80,
                "teaBagUnitPrice": 500,
                "teaBagMake": "TRI",
                "__v": 0
            },
            {
                "_id": "65eae46ece1e5e3a63d77fad",
                "teaBagType": "BOP",
                "teaBagWeight": 20,
                "teaBagQtyOnHand": 80,
                "teaBagUnitPrice": 500,
                "teaBagMake": "TRI",
                "__v": 0
            }
        ]
```
# --------------- Order -------------------- [ RELATED TO ORDER TABLE ]
``` 
 1. Save - https://puzzled-boa-sunglasses.cyclic.app/api/v1/order/save (A POST method request)
   ex. {
    "OrderDate":"2024-07-03",
    "OrderTime":"20:47",
    "OrderPrice":"1000",
    "OrderDeliveryDate":"2024-07-05",
    "OrderState":"Pending Delivery",
    "OrderItems":[
        {
            "itemId":"65e9bb981a96d370701d016f",
            "itemCount":5,
            "unitPrice":100,
            "itemFullPrice":500
        },
        {
            "itemId":"65e9bb981a96d370701d016f",
            "itemCount":5,
            "unitPrice":100,
            "itemFullPrice":500
        },
        {
            "itemId":"65e9bb981a96d370701d016f",
            "itemCount":5,
            "unitPrice":100,
            "itemFullPrice":500
        },
        {
            "itemId":"65e9bb981a96d370701d016f",
            "itemCount":5,
            "unitPrice":100,
            "itemFullPrice":500
        }
    ]
} This is the request body that needs to be sent to the backend in row json format . ItemId in the order table and the id in the teabag table has a  foreign key relationship.

2. Update - https://puzzled-boa-sunglasses.cyclic.app/api/v1/order/update? 
             id=65e9b52a48cb9a5b2a6ce687 (A PUT method request)
   ex. {
    "OrderDate":"2024-07-03",
    "OrderTime":"20:47",
    "OrderPrice":"1000",
    "OrderDeliveryDate":"2024-07-05",
    "OrderState":"Pending Delivery",
    "OrderItems":[
        {
            "itemId":"65e9bb981a96d370701d016f",
            "itemCount":5,
            "unitPrice":100,
            "itemFullPrice":500
        },
        {
            "itemId":"65e9bb981a96d370701d016f",
            "itemCount":5,
            "unitPrice":100,
            "itemFullPrice":500
        },
        {
            "itemId":"65e9bb981a96d370701d016f",
            "itemCount":5,
            "unitPrice":100,
            "itemFullPrice":500
        },
        {
            "itemId":"65e9bb981a96d370701d016f",
            "itemCount":5,
            "unitPrice":100,
            "itemFullPrice":500
        }
    ]
}This is the request body that needs to be sent to the backend in row json format. ItemId in the order table and the id in the teabag table has a  foreign key relationship.

3. Delete - https://puzzled-boa-sunglasses.cyclic.app/api/v1/order/delete?      
            id=65e9bb971a96d370701d016d (A DELETE method request)
   For this, providing the id of the order is enough.

4. Get One Order - https://puzzled-boa-sunglasses.cyclic.app/api/v1/order/get? 
                     id=65e9bb971a96d370701d016d (A GET method request)
   For this also, providing the id is enough
     ex response.
   {
    "_id": "65eae539ce1e5e3a63d77fb0",
    "OrderDate": "2024-07-03T00:00:00.000Z",
    "OrderTime": "2024-07-03",
    "OrderPrice": 1000,
    "OrderDeliveryDate": "2024-07-05T00:00:00.000Z",
    "OrderState": "Pending Delivery",
    "OrderItems": [
        {
            "itemId": "65e9bb981a96d370701d016f",
            "itemCount": 5,
            "unitPrice": 100,
            "itemFullPrice": 500,
            "_id": "65eae539ce1e5e3a63d77fb1"
        },
        {
            "itemId": "65e9bb981a96d370701d016f",
            "itemCount": 5,
            "unitPrice": 100,
            "itemFullPrice": 500,
            "_id": "65eae539ce1e5e3a63d77fb2"
        },
        {
            "itemId": "65e9bb981a96d370701d016f",
            "itemCount": 5,
            "unitPrice": 100,
            "itemFullPrice": 500,
            "_id": "65eae539ce1e5e3a63d77fb3"
        },
        {
            "itemId": "65e9bb981a96d370701d016f",
            "itemCount": 5,
            "unitPrice": 100,
            "itemFullPrice": 500,
            "_id": "65eae539ce1e5e3a63d77fb4"
        }
    ],
    "__v": 0
}
5. Get all Orders - https://puzzled-boa-sunglasses.cyclic.app/api/v1/order/all?page=0&size=10 ((A GET method request)  The pagination option has been used. So, page and the pagesize need to be sent in query params. Default page is set to 0 and pageSize is set to 10.

ex response
[
    {
        "_id": "65eae539ce1e5e3a63d77fb0",
        "OrderDate": "2024-07-03T00:00:00.000Z",
        "OrderTime": "2024-07-03",
        "OrderPrice": 1000,
        "OrderDeliveryDate": "2024-07-05T00:00:00.000Z",
        "OrderState": "Pending Delivery",
        "OrderItems": [
            {
                "itemId": "65e9bb981a96d370701d016f",
                "itemCount": 5,
                "unitPrice": 100,
                "itemFullPrice": 500,
                "_id": "65eae539ce1e5e3a63d77fb1"
            },
            {
                "itemId": "65e9bb981a96d370701d016f",
                "itemCount": 5,
                "unitPrice": 100,
                "itemFullPrice": 500,
                "_id": "65eae539ce1e5e3a63d77fb2"
            },
            {
                "itemId": "65e9bb981a96d370701d016f",
                "itemCount": 5,
                "unitPrice": 100,
                "itemFullPrice": 500,
                "_id": "65eae539ce1e5e3a63d77fb3"
            },
            {
                "itemId": "65e9bb981a96d370701d016f",
                "itemCount": 5,
                "unitPrice": 100,
                "itemFullPrice": 500,
                "_id": "65eae539ce1e5e3a63d77fb4"
            }
        ],
        "__v": 0
    }
]
```
