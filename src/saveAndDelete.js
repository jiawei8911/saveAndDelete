var SaveAndDelete = {

    addNewDiv: function(text) {
		 var item =$('<li class="inputinfo"></li>').text(text);
		 item.append('<img src = "/src/delete.jpg" />');
	     $("#itemList").append(item);
	 },

     addPredefinedDiv: function(array) {
     	var that = this;
     	$.each(array,function(key, val){
			var inputinfo = val;
			that.addNewDiv(inputinfo);
		});
     },

	 deleteDiv: function(){
	 	$("img").on('click',function(){
			$(this).parent().remove();
		})
	 }
};

	// $.each(array,function(key, val){
	// 	var inputinfo = val;
	// 	SaveAndDelete.addNewDiv(inputinfo);
	// 	});


	$("#addItem").click(function(){
		 SaveAndDelete.addNewDiv(inputinfo);
	});
