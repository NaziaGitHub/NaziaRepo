let br=require('../pages/Locators.js');


describe('Scenario',function()
{
    it('Test',function()
    {
        //browser.get('https://juliemr.github.io/protractor-demo/');
        br.get('https://juliemr.github.io/protractor-demo/');
        browser.sleep(5000);

        //element(by.model('first')).sendKeys('23');
        br.sendkeys1('25');
        //element(by.model('second')).sendKeys('23');
        br.sendkeys2('90');
        //element(by.css('[ng-click="doAddition()"]')).click();
        br.click();
        //let a=element(by.cssContainingText('.ng-binding','46'));
        //expect(a.getText()).toEqual('46')
        br.verifyresult('115');
        browser.sleep(5000);
    })
});