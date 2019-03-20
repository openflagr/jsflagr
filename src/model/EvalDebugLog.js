/**
 * Flagr
 * Flagr is a feature flagging, A/B testing and dynamic configuration microservice. The base path for all the APIs is \"/api/v1\". 
 *
 * OpenAPI spec version: 1.1.0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.0-SNAPSHOT
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/SegmentDebugLog'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./SegmentDebugLog'));
  } else {
    // Browser globals (root is window)
    if (!root.Jsflagr) {
      root.Jsflagr = {};
    }
    root.Jsflagr.EvalDebugLog = factory(root.Jsflagr.ApiClient, root.Jsflagr.SegmentDebugLog);
  }
}(this, function(ApiClient, SegmentDebugLog) {
  'use strict';




  /**
   * The EvalDebugLog model module.
   * @module model/EvalDebugLog
   * @version 1.1.0
   */

  /**
   * Constructs a new <code>EvalDebugLog</code>.
   * @alias module:model/EvalDebugLog
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>EvalDebugLog</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/EvalDebugLog} obj Optional instance to populate.
   * @return {module:model/EvalDebugLog} The populated <code>EvalDebugLog</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('segmentDebugLogs')) {
        obj['segmentDebugLogs'] = ApiClient.convertToType(data['segmentDebugLogs'], [SegmentDebugLog]);
      }
      if (data.hasOwnProperty('msg')) {
        obj['msg'] = ApiClient.convertToType(data['msg'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {Array.<module:model/SegmentDebugLog>} segmentDebugLogs
   */
  exports.prototype['segmentDebugLogs'] = undefined;
  /**
   * @member {String} msg
   */
  exports.prototype['msg'] = undefined;



  return exports;
}));


