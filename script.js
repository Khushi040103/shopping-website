var a=angular.module('ngApp', []);
a.filter('src',function(){
		return function(key){
			 var data=key.split(" ");
			 return data[0];
		};
	});
a.filter('price',function(){
		return function(key){
			 var data=key.split(" ");
			 return data[1];
		};
	});

var totalPrice=0;
a.filter('total',function(){
		return function(key){
			 var data=key.split(" ");
			 var price=data[1].split("₹");
			 totalPrice+=parseInt(price[1]);
			 
			 return price[1]*data[2];
		};
	});

a.controller('control',function($scope){
	$scope.dict={};
	$scope.txt="";
	// $scope.totalAmount=0;


	$scope.changeLayout=()=>{
		document.getElementById("main_container").style.display='none';
		// document.getElementById("main_container").style.height="0px";
		document.getElementById("cart").style.display='block';
	};

	$scope.reverseLayout=()=>{
		document.getElementById("main_container").style.display='block';
		document.getElementById("cart").style.display='none';
	};

	$scope.fun=(val)=>{
		$scope.txt="";
		var parent=document.getElementById(val);

		$scope.txt+=parent.children[0].src+" ";
		$scope.txt+=parent.children[1].innerHTML;
		
		if($scope.dict[$scope.txt]){
			$scope.dict[$scope.txt]+=1;
		}
		else{
			$scope.dict[$scope.txt]=1;
		}

	};

	$scope.call=()=>{	
		return $scope.dict;
	};

	// $scope.bill=()=>{	
	// 	alert(totalPrice);
	// 	return totalPrice;
	// 	// return $scope.dict;
	// };

});
