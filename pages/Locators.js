let a=function()
{
let firstname=element(by.model('first'));
let secondname=element(by.model('second'));
let login=element(by.css('[ng-click="doAddition()"]'));

this.get=function(url)
{
browser.get(url);
};
this.sendkeys1=function(FNO)
{
firstname.sendKeys(FNO);
};

this.sendkeys2=function(SNO)
{
secondname.sendKeys(SNO);
};

this.click=function()
{
login.click();
};


this.verifyresult=function(result)
{

let z=element(by.cssContainingText('.ng-binding',result));
expect(z.getText()).toEqual(result);
};
};
module.exports=new a();