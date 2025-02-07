export class ConfigValidationError extends Error {
    constructor(message) {
        super(message);
        this.name = this.constructor.name;
    }
}
export class ModuleNotFoundError extends Error {
    constructor(message) {
        super(message);
        this.name = this.constructor.name;
    }
}
//# sourceMappingURL=Errors.js.map