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
    define(['ApiClient', 'model/Constraint', 'model/CreateConstraintRequest', 'model/Error'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/Constraint'), require('../model/CreateConstraintRequest'), require('../model/Error'));
  } else {
    // Browser globals (root is window)
    if (!root.Jsflagr) {
      root.Jsflagr = {};
    }
    root.Jsflagr.ConstraintApi = factory(root.Jsflagr.ApiClient, root.Jsflagr.Constraint, root.Jsflagr.CreateConstraintRequest, root.Jsflagr.Error);
  }
}(this, function(ApiClient, Constraint, CreateConstraintRequest, Error) {
  'use strict';

  /**
   * Constraint service.
   * @module api/ConstraintApi
   * @version 1.1.10
   */

  /**
   * Constructs a new ConstraintApi. 
   * @alias module:api/ConstraintApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the createConstraint operation.
     * @callback module:api/ConstraintApi~createConstraintCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Constraint} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Number} flagID numeric ID of the flag
     * @param {Number} segmentID numeric ID of the segment
     * @param {module:model/CreateConstraintRequest} body create a constraint
     * @param {module:api/ConstraintApi~createConstraintCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Constraint}
     */
    this.createConstraint = function(flagID, segmentID, body, callback) {
      var postBody = body;

      // verify the required parameter 'flagID' is set
      if (flagID === undefined || flagID === null) {
        throw new Error("Missing the required parameter 'flagID' when calling createConstraint");
      }

      // verify the required parameter 'segmentID' is set
      if (segmentID === undefined || segmentID === null) {
        throw new Error("Missing the required parameter 'segmentID' when calling createConstraint");
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling createConstraint");
      }


      var pathParams = {
        'flagID': flagID,
        'segmentID': segmentID
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = Constraint;

      return this.apiClient.callApi(
        '/flags/{flagID}/segments/{segmentID}/constraints', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteConstraint operation.
     * @callback module:api/ConstraintApi~deleteConstraintCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Number} flagID numeric ID of the flag
     * @param {Number} segmentID numeric ID of the segment
     * @param {Number} constraintID numeric ID of the constraint
     * @param {module:api/ConstraintApi~deleteConstraintCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteConstraint = function(flagID, segmentID, constraintID, callback) {
      var postBody = null;

      // verify the required parameter 'flagID' is set
      if (flagID === undefined || flagID === null) {
        throw new Error("Missing the required parameter 'flagID' when calling deleteConstraint");
      }

      // verify the required parameter 'segmentID' is set
      if (segmentID === undefined || segmentID === null) {
        throw new Error("Missing the required parameter 'segmentID' when calling deleteConstraint");
      }

      // verify the required parameter 'constraintID' is set
      if (constraintID === undefined || constraintID === null) {
        throw new Error("Missing the required parameter 'constraintID' when calling deleteConstraint");
      }


      var pathParams = {
        'flagID': flagID,
        'segmentID': segmentID,
        'constraintID': constraintID
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/flags/{flagID}/segments/{segmentID}/constraints/{constraintID}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the findConstraints operation.
     * @callback module:api/ConstraintApi~findConstraintsCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Constraint>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Number} flagID numeric ID of the flag
     * @param {Number} segmentID numeric ID of the segment
     * @param {module:api/ConstraintApi~findConstraintsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/Constraint>}
     */
    this.findConstraints = function(flagID, segmentID, callback) {
      var postBody = null;

      // verify the required parameter 'flagID' is set
      if (flagID === undefined || flagID === null) {
        throw new Error("Missing the required parameter 'flagID' when calling findConstraints");
      }

      // verify the required parameter 'segmentID' is set
      if (segmentID === undefined || segmentID === null) {
        throw new Error("Missing the required parameter 'segmentID' when calling findConstraints");
      }


      var pathParams = {
        'flagID': flagID,
        'segmentID': segmentID
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = [Constraint];

      return this.apiClient.callApi(
        '/flags/{flagID}/segments/{segmentID}/constraints', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the putConstraint operation.
     * @callback module:api/ConstraintApi~putConstraintCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Constraint} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Number} flagID numeric ID of the flag
     * @param {Number} segmentID numeric ID of the segment
     * @param {Number} constraintID numeric ID of the constraint
     * @param {module:model/CreateConstraintRequest} body create a constraint
     * @param {module:api/ConstraintApi~putConstraintCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Constraint}
     */
    this.putConstraint = function(flagID, segmentID, constraintID, body, callback) {
      var postBody = body;

      // verify the required parameter 'flagID' is set
      if (flagID === undefined || flagID === null) {
        throw new Error("Missing the required parameter 'flagID' when calling putConstraint");
      }

      // verify the required parameter 'segmentID' is set
      if (segmentID === undefined || segmentID === null) {
        throw new Error("Missing the required parameter 'segmentID' when calling putConstraint");
      }

      // verify the required parameter 'constraintID' is set
      if (constraintID === undefined || constraintID === null) {
        throw new Error("Missing the required parameter 'constraintID' when calling putConstraint");
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling putConstraint");
      }


      var pathParams = {
        'flagID': flagID,
        'segmentID': segmentID,
        'constraintID': constraintID
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = Constraint;

      return this.apiClient.callApi(
        '/flags/{flagID}/segments/{segmentID}/constraints/{constraintID}', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
