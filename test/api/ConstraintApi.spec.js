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
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.Jsflagr);
  }
}(this, function(expect, Jsflagr) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new Jsflagr.ConstraintApi();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('ConstraintApi', function() {
    describe('createConstraint', function() {
      it('should call createConstraint successfully', function(done) {
        //uncomment below and update the code to test createConstraint
        //instance.createConstraint(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteConstraint', function() {
      it('should call deleteConstraint successfully', function(done) {
        //uncomment below and update the code to test deleteConstraint
        //instance.deleteConstraint(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('findConstraints', function() {
      it('should call findConstraints successfully', function(done) {
        //uncomment below and update the code to test findConstraints
        //instance.findConstraints(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('putConstraint', function() {
      it('should call putConstraint successfully', function(done) {
        //uncomment below and update the code to test putConstraint
        //instance.putConstraint(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
