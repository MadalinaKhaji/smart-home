export class Network {
    id: String;
    name: String;
    device: {
        meta: {
            id: String;
            type: String;
        };
        name: String;
        status: [];
        description?: String;
        value: {
            meta: {
                id: String,
                type: String
            },
            name: String,
            type: String,
            permission: String,
            number?: {
                max: Number,
                min: Number,
                step: Number,
                unit: String
            },
            string?: {
                encoding: String,
                max: Number
            },
            state: {
                meta: {
                    id: String,
                    type: String
                },
                timestamp: String,
                data: String,
                type: String,
                status: String
            }[];
        }[];
    }[];
}
