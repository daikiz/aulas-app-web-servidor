class BasicValidationError extends Error {
    constructor(message) {
      super(message);
      this.name = "BasicValidationError"; 
    }
  }

module.exports = BasicValidationError;