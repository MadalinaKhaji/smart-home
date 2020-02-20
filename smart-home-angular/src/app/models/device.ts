export class Device {
    meta: {
        id: string;
        type: string
    };
    name: string;
    status: [];
    description?: string;
    value: {
        meta: {
            id: string;
            type: string
        };
        name: string;
        type: string;
        permission: string;
        number?: {
            max: number;
            min: number;
            step: number;
            unit: string
        };
        string?: {
            encoding: string;
            max: number
        };
        state: {
            meta: {
                id: string;
            };
            timestamp: string;
            data: string;
            type: string;
            status: string
        }[];
    }[];
}

