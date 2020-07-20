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
    describe('SegmentDebugLog', function() {
      beforeEach(function() {
        instance = new Jsflagr.SegmentDebugLog();
      });

      it('should create an instance of SegmentDebugLog', function() {
        // TODO: update the code to test SegmentDebugLog
        expect(instance).to.be.a(Jsflagr.SegmentDebugLog);
      });

      it('should have the property segmentID (base name: "segmentID")', function() {
        // TODO: update the code to test the property segmentID
        expect(instance).to.have.property('segmentID');
        // expect(instance.segmentID).to.be(expectedValueLiteral);
      });

      it('should have the property msg (base name: "msg")', function() {
        // TODO: update the code to test the property msg
        expect(instance).to.have.property('msg');
        // expect(instance.msg).to.be(expectedValueLiteral);
      });

    });
  });

}));
