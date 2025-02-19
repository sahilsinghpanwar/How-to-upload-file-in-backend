// jub bhi hum koi response bhejte hain toh hum usko esi class mai bhejte hain

class ApiResponse{
    constructor(statusCode, data, message = "Success"){
        this.statusCode = statusCode;
        this.data = data;
        this.message = message;
        this.success = statusCode  < 400;
    }
    }