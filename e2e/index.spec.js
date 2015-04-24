describe('index page', function() {
    
    beforeEach(function() {
        browser.get('/index-e2e.html');
    });

    it('should have a h1', function() {
        expect($('h1').getText()).toBe('Hello');
    });

    it('should not allow submitting the form while invalid', function() {
        expect($('#show-button').getAttribute('disabled')).toBeTruthy();
        $('#login-input').sendKeys('a b');
        expect($('#show-button').getAttribute('disabled')).toBeTruthy();
    });

    it('should not allow submitting the form while invalid', function() {
        expect($('#show-button').getAttribute('disabled')).toBeTruthy();
    });

    it('should display an error message if unexisting organization', function() {
        $('#login-input').sendKeys('notExistingNotExistingNotExisting');
        expect($('#show-button').getAttribute('disabled')).toBeFalsy();
        $('#show-button').click();
        expect($('#error').isDisplayed()).toBe(true);
    });

    it('should display an error message if unexisting organization', function() {
        $('#login-input').sendKeys('Ninja-Squad');
        $('#show-button').click();
        expect($('#org').isDisplayed()).toBe(true);
        expect($('#org').getText()).toContain('Ninja Squad');
        expect($('#org').element(by.linkText('Blog')).getAttribute('href')).toBe('http://ninja-squad.com/');
        expect($$('#members li').count()).toBe(5);
    });
});