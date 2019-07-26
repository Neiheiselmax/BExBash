<?php

    $recipient='jennifer.collins@springswindowfashions.com, jenniferlcollins18@gmail.com, neiheiselmax@gmail.com'; /*emails here in a comma-separated list - they will be emailed every time a sign-up occurs*/
    $subject="New Team Signup";

	$fullTeam = $_POST["fullTeam"];
	$teamName = $_POST["teamName"];
	$partialTeam = $_POST["partialTeam"];
	$memberOne = $_POST["memberOne"];
	$memberTwo = $_POST["memberTwo"];
	$memberThree = $_POST["memberThree"];
	$memberFour = $_POST["memberFour"];
	$goldenBags = $_POST["goldenBags"];
	$goldenLine = $_POST["goldenLine"];
	$goldenSpoon = $_POST["goldenSpoon"];
	$totalOwed = $_POST["totalOwed"];

    $mailBody="$memberOne , $memberTwo , $memberThree , $memberFour would like to form a team for the Big Event.\n\n Their team name is $teamName. \n\nThey would like to purchase the following bonuses: \n\n Golden Bag(s): $goldenBags \n\n Golden Line: $goldenLine \n\n Golden Spoon(s): $goldenSpoon \n\n For a total of $$totalOwed.";

    mail($recipient, $subject, $mailBody);

?>
