describe("saveAndDelete",function(){

	beforeEach(function(){ 
		jasmine.getFixtures().fixturesPath ='/spec/fixtures';
		loadFixtures('test.html');
	});

	it("should add items", function(){
		console.log(SaveAndDelete);
		SaveAndDelete.addNewDiv("hello");
		expect($('.inputinfo')).toHaveText("hello");		
	});

	it("should add predefined item", function(){
        var items = ['Qun Juntao' , 'Shen Tong', 'Jia Wei'];
        SaveAndDelete.addPredefinedDiv(items);
        expect($('.inputinfo').length).toBe(3);
	});
});