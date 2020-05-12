$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/java/features/RegisterUser.feature");
formatter.feature({
  "name": "To Register in TechFish Bank",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "User Registration",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@register"
    }
  ]
});
formatter.step({
  "name": "User is able to launch the application",
  "keyword": "Given "
});
formatter.match({
  "location": "Steps.user_is_able_to_launch_the_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User provides the neccessary details for SignUp",
  "keyword": "When "
});
formatter.match({
  "location": "Steps.user_provides_the_neccessary_details_for_SignUp()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks SignUp button",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.user_clicks_SignUp_button()"
});
formatter.result({
  "status": "passed"
});
});