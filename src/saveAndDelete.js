var SaveAndDelete = {

    addNewDiv: function(text) {
		 var item =$('<li class="inputinfo"></li>').text(text);
		 item.append('<img src = "delete.jpg"/>');
	     $("#itemList").append(item);

	    $("img").on("click",function(event){
			$(event.target).closest("li").remove();
		});	     
	 },

     addPredefinedDiv: function(array) {
     	var that = this;
     	$.each(array, function(key, val){
			var inputinfo = val;
			that.addNewDiv(inputinfo);
		});
     }
};

$(document).ready(function(){
	var items = ['Qiu Juntao', 'Shen Tong', 'Jia Wei'];

	SaveAndDelete.addPredefinedDiv(items);
	$("#addItem").click(function(){
		 var inputinfo = $('#item').val();
		 SaveAndDelete.addNewDiv(inputinfo);
		 $('#item').val("");
	});
});
	



