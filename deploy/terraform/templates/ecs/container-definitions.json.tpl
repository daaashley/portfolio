[
    {
        "name": "api",
        "image": "${app_image}",
        "essential": true,
        "memoryReservation": 1024,
        "environment": [
            {"name": "ALLOWED_HOSTS", "value": "${allowed_hosts}"}
        ],
        "logConfiguration": {
            "logDriver": "awslogs",
            "options": {
                "awslogs-group": "${log_group_name}",
                "awslogs-region": "${log_group_region}",
                "awslogs-stream-prefix": "api"
            }
        },
        "portMappings": [
            {
                "containerPort": 8000,
                "hostPort": 8000
            }
        ],
        "mountPoints": [
            {
                "readOnly": false,
                "containerPath": "/vol/web",
                "sourceVolume": "static"
            }
        ]
    }
]
