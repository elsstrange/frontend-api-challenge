const mockGetPeepsResponse = [
    {
        "id": 101,
        "body": "Example Peep 1",
        "created_at": "2020-11-23T18:21:12.442Z",
        "updated_at": "2020-11-23T18:21:12.442Z",
        "user": {
            "id": 162,
            "handle": "User 1"
        },
        "likes": []
    },
    {
        "id": 99,
        "body": "Example Peep 2",
        "created_at": "2020-11-22T23:10:54.034Z",
        "updated_at": "2020-11-22T23:10:54.034Z",
        "user": {
            "id": 163,
            "handle": "User 2"
        },
        "likes": [
            {
                "user": {
                    "id": 162,
                    "handle": "User 1"
                }
            }
        ]
    }
];
