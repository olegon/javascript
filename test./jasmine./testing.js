describe('testando', function() {
  it('have what I want', function() {
    expect(true).toBe(true);
  });

  it('test if a variable is equal 4', function() {
    var a = 4;

    expect(a).toEqual(4);
  });
});

describe('testing matchers', function() {
  it('test for defined objs', function() {
    var foo = {
      oi: 'hi',
      ola: 'hello'
    }

    expect(foo).toBeDefined();
    expect(bar).not.toBeDefined();
  });

  it('null objs', function() {
    expect(null).toBeNull();
    expect('not null').not.toBeNull();
  });

  it('truthy and falsy', function() {
    var foo = true;
    var bar = false;

    expect(foo).toBeTruthy();
    expect(bar).toBeFalsy();
  });
});

describe('lets use before block', function() {

  var foo;

  beforeAll(function(){
    foo = 5;
  });

  it('expect foo to be equal 5', function() {
    expect(foo).toEqual(5);
  });
});

describe('using before each', function() {

  var bar;

  beforeEach(function() {
    bar = 10;
  });

  it('expect bar to be equal 10', function() {
    expect(bar).toEqual(10);
  });
});

describe('test to be pending for now', function() {
  xit('pending test' function() {
    expect(1)toEqual(1);
  });

  it('defining pending inside of it', function() {
    pending('pending test');
    // expect code..
  });
});
