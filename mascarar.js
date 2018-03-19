/*(function( $ ){
   $.fn.maskara = function(e) {
      var keynum = e.keyCode;
		if ((keynum >= 48 && keynum < 58) || (keynum >= 96 && keynum < 106)) {
			var array = document.getElementById(e.target.id).value.replace("R$ ", "").replace("´", "").replace("~", "").replace("^", "").replace("`", "").split('');
			var res = "R$ ";
			if (array.length >= 2) {
				for (var i = 0; i < array.length; i++) {
					if (array[i] === ",") {
						array.splice(i, 1);
					}
					if (array[i] === ".") {
						array.splice(i, 1);
					}
				}
				array.splice(array.length - 2, 0, ",");
				//Definir o limite da máscara nesse loop
				for (var i = 6; i <= 1000; i += 4) {
					if (array.length >= i) {
						array.splice(array.length - i, 0, ".");
					}
				}
			}
			if (array[0] === '.' || array[0] === ',') {
				array.splice(0, 1);
			}
			for (var i = 0; i < array.length; i++) {
				res += array[i];
			}
			document.getElementById(e.target.id).value = res;
		} else {
			document.getElementById(e.target.id).value = document.getElementById(e.target.id).value.replace(e.key, '');
		}
   }; 
})( jQuery );*/

(function( $ ){
   $.fn.maskara = function() {
	$("#currency").keyup(function(e){
		var keynum = e.keyCode;
		if ((keynum >= 48 && keynum < 58) || (keynum >= 96 && keynum < 106)) {
			var array = document.getElementById(e.target.id).value.replace("R$ ", "").replace("´", "").replace("~", "").replace("^", "").replace("`", "").split('');
			var res = "R$ ";
			if (array.length >= 2) {
				for (var i = 0; i < array.length; i++) {
					if (array[i] === ",") {
						array.splice(i, 1);
					}
					if (array[i] === ".") {
						array.splice(i, 1);
					}
				}
				array.splice(array.length - 2, 0, ",");
				//Definir o limite da máscara nesse loop
				for (var i = 6; i <= 1000; i += 4) {
					if (array.length >= i) {
						array.splice(array.length - i, 0, ".");
					}
				}
			}
			if (array[0] === '.' || array[0] === ',') {
				array.splice(0, 1);
			}
			for (var i = 0; i < array.length; i++) {
				res += array[i];
			}
			document.getElementById(e.target.id).value = res;
		} else {
			document.getElementById(e.target.id).value = document.getElementById(e.target.id).value.replace(e.key, '');
		}
	})
   }; 
})( jQuery );