describe('hello', function() {
    it('should say Hello World when no argument', function() {
        expect(hello()).toBe('Hello World');
    });

    it('should say Hello JB when JB as argument', function() {
        expect(hello('JB')).toBe('Hello JB');
    })
});