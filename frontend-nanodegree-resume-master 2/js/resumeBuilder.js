


var bio = {
	"name" : "Thomas Sunderland",
	"role" : "Product Designer",
	"contacts": {
		"mobile":"44771594126",
		"email":"tomsunderlandx@gmail.com",
		"github": "tomfone",
		"location":"UK"
	},
	"welcomeMessage":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
	"skills": [
	"Concept Design","3D Modelling", "3D Animation", "Technical Drawing"
	],
	"biopic":"http://s1.wallippo.com/thumbs/300x250/blue-abstract-whirlpool-wallpapers-d3676079e5e34510b4c2921063e5d2f4.jpeg" 
};

var education = {
	"schools": [
		{
			"name": "Royal College of Art",
			"location": "London",
			"degree": "MA",
			"majors": ["Design Products", "Foundation"],
			"dates": "2002 - 2005",
			"url": "http://www.rca.ac.uk/"

		},
		{
			"name": "Saint Martins",
			"location": "London",
			"degree": "BA",
			"majors": ["Product Design", "Foundation"],
			"dates": "1999 - 2002",
			"url": "http://www.arts.ac.uk/csm/"
		}],
	
	"onlineCourses": [
		{
			"title": "Intro to Programming Nanodegree",
			"school": "Udacity",
			"date": "Feb 2016 - Jun 2016",
			"url": "https://www.udacity.com"
		}

	]
};

var work = {
	"jobs": [
		{
			"employer": "Freelance",
			"title": "Product Designer",
			"location": "London",
			"dates": "July 2015 - Present",
			"description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

		},

		{
			"employer": "OniPro",
			"title": "Product Designer",
			"location": "London",
			"dates": "2006 - June 2015",
			"description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
		}
	]
};

var projects = {
	"projects": [
		{
			"title": "Fast Boil Kettle",
			"dates": "Nov 2014 - Feb 2015",
			"description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
			"images": [
			"https://www.andrewjamesworldwide.com/Images/ProductPictures/Glass_Kettle/main_glass_kettle.jpg",
			"https://www.andrewjamesworldwide.com/Images/ProductPictures/Glass_Kettle/glass_kettle_1.jpg"		 
			]
		}
	]	
};

bio.display = function() {

	var formattedName = HTMLheaderName.replace("%data%", bio.name); 
	var formattedRole = HTMLheaderRole.replace("%data%", bio.role);

	$("#header").prepend(formattedName, formattedRole);

	var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
	var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
	var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
	var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
	var formattedBiopic = HTMLbioPic.replace("%data%", bio.biopic);
	var formattedwelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);

	$("#topContacts").append(formattedBiopic); 

	$("#footerContacts, #topContacts").append(formattedMobile, formattedEmail, 
		formattedGithub,formattedLocation);

	$("#topContacts").append(formattedwelcomeMsg); 

	if (bio.skills.length > 0) {
     	$("#header").append(HTMLskillsStart);
     	for (var i = 0; i < bio.skills.length; i ++) {   
       		var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
        	$("#skills").append(formattedSkill);
      	}
    }

};

bio.display();

work.display = function() {

	for (job in work.jobs) {

		$("#workExperience").append(HTMLworkStart);

		var formattedEmployer = HTMLworkEmployer.replace
			("%data%", work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace
			("%data%", work.jobs[job].title);
		var formattedEmployerTitle = formattedEmployer + formattedTitle;

		$(".work-entry:last").append(
			formattedEmployerTitle);

		var formattedLocation = HTMLworkLocation.replace
			("%data%", work.jobs[job].location);
		$(".work-entry:last").append(formattedLocation);

		var formattedDates = HTMLworkDates.replace
			("%data%", work.jobs[job].dates);
		$(".work-entry:last").append(formattedDates);

		var formattedDescription = HTMLworkDescription.replace
			("%data%", work.jobs[job].description);
		$(".work-entry:last").append(formattedDescription);

	}
};

work.display();

projects.display = function() {

	for (project in projects.projects) {

		$("#projects").append(HTMLprojectStart);

		var formattedTitle = HTMLprojectTitle.replace
			("%data%", projects.projects[project].title);
		$(".project-entry:last").append(formattedTitle);

		var formattedDates = HTMLprojectDates.replace
			("%data%", projects.projects[project].dates);
		$(".project-entry:last").append(formattedDates);

		var formattedDescription = HTMLprojectDescription.replace
			("%data%", projects.projects[project].description);
		$(".project-entry:last").append(formattedDescription);

		if (projects.projects[project].images.length > 0) {
		for (image in projects.projects[project].images) {
			var formattedImage = HTMLprojectImage.replace
				("%data%", projects.projects[project].images[image]);
			$(".project-entry:last").append(formattedImage);
			}
		}
	}
};

projects.display();

education.display = function() {

	for (school in education.schools) {

		$("#education").append(HTMLschoolStart);

		var formattedName = HTMLschoolName.replace
			("%data%", education.schools[school].name);

		var formattedDegree = HTMLschoolDegree.replace
			("%data%", education.schools[school].degree);

		$(".education-entry:last").append(formattedName + formattedDegree)

		var formattedLocation = HTMLschoolLocation.replace
			("%data%", education.schools[school].location);
		$(".education-entry:last").append(formattedLocation);

		var formattedDates = HTMLschoolDates.replace
			("%data%", education.schools[school].dates);
		$(".education-entry:last").append(formattedDates);

		if (education.schools[school].majors.length > 0) {
		for (major in education.schools[school].majors) {
			var formattedMajors = HTMLschoolMajor.replace
				("%data%", education.schools[school].majors[major]);
			$(".education-entry:last").append(formattedMajors);
			}
		}
	}

	$(".education-entry:last").append(HTMLonlineClasses);

	for (course in education.onlineCourses) {

		var formattedTitle = HTMLonlineTitle.replace
			("%data%", education.onlineCourses[course].title);

		var formattedSchool = HTMLonlineSchool.replace
			("%data%", education.onlineCourses[course].school);

		$(".education-entry:last").append(formattedSchool + formattedTitle);

		var formattedDate = HTMLonlineDates.replace
			("%data%", education.onlineCourses[course].date);
		$(".education-entry:last").append(formattedDate);

		var formattedUrl = HTMLonlineURL.replace
			("%data%", education.onlineCourses[course].url);
		$(".education-entry:last").append(formattedUrl);
	}
};

education.display();

$("#mapDiv").append(googleMap);














