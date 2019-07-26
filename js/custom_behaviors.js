$(document).ready(function() {

	// VARIABLES
	var messageBeingSent = false;
	var fullTeam = false;
	var partialTeam = false;
	var totalCost = 0;

	// EVENT HANDLERS
	$('.glider').on('click', function(event) {
			event.preventDefault();
			var destination = $(this).attr('href');
			$('html, body').stop().animate({
					scrollTop: $(destination).offset().top
					}, 1500,'easeInOutExpo');
	});

	var lastScrollTop = 0;
	$(window).scroll(function(event){
	   var st = $(this).scrollTop();
	   if (st > lastScrollTop){
		  $(".bar").addClass("scrolled");
	   } else {
		  $(".bar").removeClass("scrolled");
	   }
	   lastScrollTop = st;
	});

	//FUNCTIONS
// 	$("#signUpForm").on("submit", function(event){
// 		event.preventDefault();
//
// 		if(messageBeingSent == false){
//
// 			clearInvalidClasses();
//
// 			var memberOne = $("input[name='memberOne']").val();
//
// 			var memberTwo = $("input[name='memberTwo']").val();
//
// 			var memberThree = $("input[name='memberThree']").val();
//
// 			var memberFour = $("input[name='memberFour']").val();
//
// 			var teamName = $("input[name='teamName']").val();
//
// 			var goldenBags = $("input[name='goldenBag']").val();
//
// 			var goldenLine = $("input[name='goldenLine']").val();
//
// 			var goldenSpoon = $("input[name='goldenSpoon']").val();
//
// 			var validForm = validateForm(memberOne, memberTwo, memberThree, memberFour, teamName);
//
// 			var totalOwed = totalCost;
//
// 			if(validForm === true){
//
// 			messageBeingSent = true;
// 			showSendingMessage();
//
// 			$.ajax({
// 				url: "sendEmailMessageData.php",
// 				type:'POST',
// 				data:
// 					{
// 						fullTeam: fullTeam,
// 						partialTeam: partialTeam,
// 						teamName: teamName,
// 						memberOne: memberOne,
// 						memberTwo: memberTwo,
// 						memberThree: memberThree,
// 						memberFour: memberFour,
// 						goldenBags: goldenBags,
// 						goldenLine: goldenLine,
// 						goldenSpoon: goldenSpoon,
// 						totalOwed: totalOwed
// 					}
// 				}).done(function(){
// 				showConfirmation();
// 				});
//
// 			}
// 		}
// 	});
//
// 	function validateForm(memberOne, memberTwo, memberThree, memberFour, teamName) {
//
// 		var mOneV = false;
// 		var mTwoV = false;
// 		var mThreeV = false;
// 		var mFourV = false;
// 		var tnV = false;
//
// 		if(memberOne != null && memberOne != ""){
// 			mOneV = true;
// 			totalCost += 5;
// 		} else {}
//
// 		if(memberTwo != null && memberTwo != ""){
// 			mTwoV = true;
// 			totalCost += 5;
// 		} else {}
//
// 		if(memberThree != null && memberThree != ""){
// 			mThreeV = true;
// 			totalCost += 5;
// 		} else {}
//
// 		if(memberFour != null && memberFour != ""){
// 			mFourV = true;
// 			totalCost += 5;
// 		} else {}
//
// 		if(teamName != null && teamName != ""){
// 			tnV = true;
// 		} else {}
//
// 		//if a full roster has been created
// 		if(mOneV == true && mTwoV == true && mThreeV == true && mFourV == true)
// 		{
// 			fullTeam = true;
// 		}
// 		//if a partial roster has been created
// 		else if(mOneV == true || mTwoV == true || mThreeV == true || mFourV == true)
// 		{
// 			partialTeam = true;
// 		}
// 		//if no names have been entered upon submit
// 		else {
// 			$("input[name='memberOne']").addClass("invalid");
// 			$("input[name='memberTwo']").addClass("invalid");
// 			$("input[name='memberThree']").addClass("invalid");
// 			$("input[name='memberFour']").addClass("invalid");
//
// 			$("#noPeople").removeClass("hidden");
// 			totalCost = 0;
//
// 			var destination = $("#mandatory");
// 			$('html, body').stop().animate({
// 					scrollTop: $(destination).offset().top
// 					}, 1500,'easeInOutExpo');
// 		}
//
// 		//if the roster is complete with team name
// 		if(fullTeam == true && tnV == true)
// 		{
// 			$("input[name='memberOne']").val("");
// 			$("input[name='memberTwo']").val("");
// 			$("input[name='memberThree']").val("");
// 			$("input[name='memberFour']").val("");
// 			$("input[name='teamName']").val("");
// 			calculateExtras();
// 			return true;
// 		}
// 		//if there's a full team but no team name
// 		else if(fullTeam == true && tnV == false)
// 		{
// 			$("input[name='teamName']").addClass("invalid");
// 			$("#noName").removeClass("hidden");
// 			totalCost = 0;
//
// 			var destination = $("#mandatory");
// 			$('html, body').stop().animate({
// 					scrollTop: $(destination).offset().top
// 					}, 1500,'easeInOutExpo');
// 			return false;
// 		}
// 		//if there's a partial team
// 		else if(partialTeam == true)
// 		{
// 			$("input[name='memberOne']").val("");
// 			$("input[name='memberTwo']").val("");
// 			$("input[name='memberThree']").val("");
// 			$("input[name='memberFour']").val("");
// 			$("input[name='teamName']").val("");
// 			calculateExtras();
// 			return true;
// 		}
// 		//if there's nothing
// 		else {
// 			totalCost = 0;
// 			return false;
// 		}
// 	}
//
// 	function showSendingMessage(){
// 		console.log("submitting");
// 	}
//
// 	function showConfirmation() {
// 		document.getElementById("successMsg").innerHTML = "THANKS FOR SUBMITTING YOUR TEAM!<br>Please drop $" + totalCost +" in box outside of PPC!";
// 		$("#successMsg").removeClass("hidden");
// 		totalCost = 0;
//
// 		messageBeingSent = false;
// 	}
//
// 	function clearInvalidClasses(){
// 		if($("input[name='memberOne']").hasClass("invalid")==true){
// 			$("input[name='memberOne']").removeClass("invalid");
// 		}
// 		if($("input[name='memberTwo']").hasClass("invalid")==true){
// 			$("input[name='memberTwo']").removeClass("invalid");
// 		}
// 		if($("input[name='memberThree']").hasClass("invalid")==true){
// 			$("input[name='memberThree']").removeClass("invalid");
// 		}
// 		if($("input[name='memberFour']").hasClass("invalid")==true){
// 			$("input[name='memberFour']").removeClass("invalid");
// 		}
// 		if($("input[name='teamName']").hasClass("invalid")==true){
// 			$("input[name='teamName']").removeClass("invalid");
// 		}
//
// 		$(".error").addClass("hidden");
// 		$("#successMsg").addClass("hidden");
//
// 		fullTeam = false;
// 		partialTeam = false;
//
// 	}
//
// 	function calculateExtras(){
// 		var extras = 0;
// 		extras = $("input[name='goldenBag']").val() * 10;
// 		extras += $("input[name='goldenSpoon']").val() * 20;
// 		extras += $("input[name='goldenLine']").val() * 10;
// 		console.log("You purchased " + extras + " in extras!");
// 		totalCost += extras;
// 	}
//
// 	function loadXMLDoc() {
// 	  var xmlhttp = new XMLHttpRequest();
// 	  xmlhttp.onreadystatechange = function() {
// 		if (this.readyState == 4 && this.status == 200) {
// 		  myFunction(this);
// 		}
// 	  };
// 	  xmlhttp.open("GET", "schedule.xml", true);
// 	  console.log("XML load successful");
// 	  xmlhttp.send();
// 	}
//
// 	function myFunction(xml) {
// 	  var i;
// 	  var xmlDoc = xml.responseXML;
// 	  var table="";
// 	  var x = xmlDoc.getElementsByTagName("slot");
// 	  for (i = 0; i <x.length; i++) {
// 		table += "<tr><th colspan='4'>" +
// 		x[i].getElementsByTagName("teamName")[0].childNodes[0].nodeValue +
// 		"</th></tr><tr><td>" +
// 		x[i].getElementsByTagName("firstMember")[0].childNodes[0].nodeValue +
// 		"</td><td>" +
// 		  x[i].getElementsByTagName("secondMember")[0].childNodes[0].nodeValue +
// 		"</td><td>" +
// 		  x[i].getElementsByTagName("thirdMember")[0].childNodes[0].nodeValue +
// 		"</td><td>" +
// 		  x[i].getElementsByTagName("fourthMember")[0].childNodes[0].nodeValue +
// 		"</td></tr><tr><td colspan='4' class='break'></td></tr>";
// 	  }
// 	  document.getElementById("roster").innerHTML = table;
// 	}
//
// 	// INITIALIZATION
// 	loadXMLDoc();
// 	jcf.replaceAll();
// });
