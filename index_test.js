const assert = require('assert')
const Rooster = require('../index');

describe('Rooter',()=>{
  describe('.announceDawn',()=>{
    describe('.timeAtDawn',()=>{
      it('returns its argument as a string',()=>{
       
      //exercise
const actual = Rooster.timeAtDawn(5);
      //verify
assert.strictEqual('5',actual)
    })
    it('returns a rooster call',()=>{
      //setup
       const expected = 'cock-a-doodle-doo!';
      //exercise
const actual = Rooster.announceDawn();
      //verify
assert.strictEqual(expected,actual)
    })
    it('throws an error if passed a number less than 0',()=>{
       
       //setup
     const actual = -1 
      //exercise
const experted = RangeError;
      //verify
assert.throws(
  () => {
     Rooster.timeAtDawn(actual);
  },
  experted
);
    })
    it('throws an error if passed a number greater than 23',()=>{
       
       //setup
     const actual = 24 
      //exercise
const experted = RangeError;
      //verify
assert.throws(
  () => {
     Rooster.timeAtDawn(actual);
  },
  experted
);
    })
    })
  })
})