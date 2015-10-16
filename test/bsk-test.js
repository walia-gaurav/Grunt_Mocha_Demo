var Frame = require('../src/Frame.js');
var expect = require('expect.js');

suite('Frame Testing', function(){

  test('creating a Frame', function(done){
    var frame = new Frame(6,2);
    done();
  });

  test('identifying a strike', function(done){
    var frame = new Frame(10,0);
    expect(frame.isStrike()).to.be.ok();
    done();
  });

  test('getting total pins down', function(done){
    var frame = new Frame(4,4);
    expect(frame.sum()).to.equal(8);
    done();
  });
});
