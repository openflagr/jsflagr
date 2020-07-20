/*
 * Flagr
 * Flagr is a feature flagging, A/B testing and dynamic configuration microservice. The base path for all the APIs is \"/api/v1\". 
 *
 * OpenAPI spec version: 1.1.10
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.14
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.Jsflagr) {
      root.Jsflagr = {};
    }
    root.Jsflagr.Constraint = factory(root.Jsflagr.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The Constraint model module.
   * @module model/Constraint
   * @version 1.1.10
   */

  /**
   * Constructs a new <code>Constraint</code>.
   * @alias module:model/Constraint
   * @class
   * @param property {String} 
   * @param operator {module:model/Constraint.OperatorEnum} 
   * @param value {String} 
   */
  var exports = function(property, operator, value) {
    this.property = property;
    this.operator = operator;
    this.value = value;
  };

  /**
   * Constructs a <code>Constraint</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Constraint} obj Optional instance to populate.
   * @return {module:model/Constraint} The populated <code>Constraint</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'Number');
      if (data.hasOwnProperty('property'))
        obj.property = ApiClient.convertToType(data['property'], 'String');
      if (data.hasOwnProperty('operator'))
        obj.operator = ApiClient.convertToType(data['operator'], 'String');
      if (data.hasOwnProperty('value'))
        obj.value = ApiClient.convertToType(data['value'], 'String');
    }
    return obj;
  }

  /**
   * @member {Number} id
   */
  exports.prototype.id = undefined;

  /**
   * @member {String} property
   */
  exports.prototype.property = undefined;

  /**
   * @member {module:model/Constraint.OperatorEnum} operator
   */
  exports.prototype.operator = undefined;

  /**
   * @member {String} value
   */
  exports.prototype.value = undefined;


  /**
   * Allowed values for the <code>operator</code> property.
   * @enum {String}
   * @readonly
   */
  exports.OperatorEnum = {
    /**
     * value: "EQ"
     * @const
     */
    EQ: "EQ",

    /**
     * value: "NEQ"
     * @const
     */
    NEQ: "NEQ",

    /**
     * value: "LT"
     * @const
     */
    LT: "LT",

    /**
     * value: "LTE"
     * @const
     */
    LTE: "LTE",

    /**
     * value: "GT"
     * @const
     */
    GT: "GT",

    /**
     * value: "GTE"
     * @const
     */
    GTE: "GTE",

    /**
     * value: "EREG"
     * @const
     */
    EREG: "EREG",

    /**
     * value: "NEREG"
     * @const
     */
    NEREG: "NEREG",

    /**
     * value: "IN"
     * @const
     */
    IN: "IN",

    /**
     * value: "NOTIN"
     * @const
     */
    NOTIN: "NOTIN",

    /**
     * value: "CONTAINS"
     * @const
     */
    CONTAINS: "CONTAINS",

    /**
     * value: "NOTCONTAINS"
     * @const
     */
    NOTCONTAINS: "NOTCONTAINS"
  };

  return exports;

}));
