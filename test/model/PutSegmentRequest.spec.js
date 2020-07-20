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

  describe('(package)', function() {
    describe('PutSegmentRequest', function() {
      beforeEach(function() {
        instance = new Jsflagr.PutSegmentRequest();
      });

      it('should create an instance of PutSegmentRequest', function() {
        // TODO: update the code to test PutSegmentRequest
        expect(instance).to.be.a(Jsflagr.PutSegmentRequest);
      });

      it('should have the property description (base name: "description")', function() {
        // TODO: update the code to test the property description
        expect(instance).to.have.property('description');
        // expect(instance.description).to.be(expectedValueLiteral);
      });

      it('should have the property rolloutPercent (base name: "rolloutPercent")', function() {
        // TODO: update the code to test the property rolloutPercent
        expect(instance).to.have.property('rolloutPercent');
        // expect(instance.rolloutPercent).to.be(expectedValueLiteral);
      });

    });
  });

}));
