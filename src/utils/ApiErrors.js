class ApiErrors extends Error {
    constructor(message, statusCode) {
        super(message);
        this.statusCode = statusCode;
        this.data = null;
        this.message = message;
        this.success = false;
    }
}

export default ApiErrors;