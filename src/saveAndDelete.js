var SaveAndDelete = {

    addNewDiv: function(text) {
		 var item =$('<li class="inputinfo"></li>').text(text);
		 item.append('<img src = "/src/delete.jpg" />');
	     $("#itemList").append(item);

	    $("img").on("click",function(event){
			$(event.target).closest("li").remove();
		});	     
	 },

     addPredefinedDiv: function(array) {
     	var that = this;
     	$.each(array,function(key, val){
			var inputinfo = val;
			that.addNewDiv(inputinfo);
		});
     }
};


	$("#addItem").click(function(){
		 SaveAndDelete.addNewDiv(inputinfo);
	});



