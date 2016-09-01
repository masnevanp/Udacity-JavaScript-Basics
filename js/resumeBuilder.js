
var bio = {
    "name": "John Doe",
    "role": "Obsolete @ 40 ?",
    "contact_info": [
        ["mobile", "555-12345"],
        ["email", "john@doe.it"],
        ["github", "johndoe"],
        ["twitter", "@johndoe"],
        ["location", "dillon"]
    ],
    "picture_url": "http://placekitten.com/200/300",
    "skills": ["python", "java", "c++", "many many more..."],
    "welcome_message": "Ol'skuel & rokin!",
    
    "display": function () {
        $("#header").prepend(HTMLheaderRole.replace("%data%", bio.role));
        $("#header").prepend(HTMLheaderName.replace("%data%", bio.name));

        for (var index = 0; index < bio.contact_info.length; index++) {
            var contact_type = bio.contact_info[index][0];
            var contact_info = bio.contact_info[index][1];
            var formattedContact = HTMLcontactGeneric.replace("%contact%", contact_type);
            formattedContact = formattedContact.replace("%data%", contact_info);
            $("#topContacts").append(formattedContact);
        }

        $("#header").append(HTMLbioPic.replace("%data%", bio.picture_url));
        $("#header").append(HTMLwelcomeMsg.replace("%data%", bio.welcome_message));

        if (bio.skills.length > 0) {
            $("#header").append(HTMLskillsStart);    
            for (var i = 0; i < bio.skills.length; ++i) {
                $("#skills").append(HTMLskills.replace('%data%', bio.skills[i]))
            }
        }
    }
};

var work = {
    "jobs": [
        {
            "employer": "Code Inc",
            "title": "Programmer",
            "location": "Las Palmas",
            "dates": "from here to eternity",
            "description": "Maintenance of this and that."
        },
        {
            "employer": "Edoc Inc",
            "title": "Tester",
            "location": "Detroit",
            "dates": "yes",
            "description": "Testing of this and that."
        }
    ],
    "projects": [
        {
            "title": "Net ham",
            "dates": "from here to eternity",
            "description": "Maintenance of this and that.",
            "images": [
                "http://placekitten.com/200/200",
                "http://placekitten.com/150/200"
            ]
        },
        {
            "title": "Online thingy",
            "dates": "from here to eternity",
            "description": "Maintenance of this and that.",
            "images": [
                "http://placekitten.com/100/100",
                "http://placekitten.com/300/100"
            ]
        }
    ],
    
    "display": function () {
        for (job in work.jobs) {
            $("#workExperience").append(HTMLworkStart);
            
            empl = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
            title = HTMLworkTitle.replace("%data%", work.jobs[job].title);
            dates =  HTMLworkDates.replace("%data%", work.jobs[job].dates);
            loc =  HTMLworkLocation.replace("%data%", work.jobs[job].location);
            desc =  HTMLworkDescription.replace("%data%", work.jobs[job].description);
            
            $(".work-entry:last").append(empl + " " + title);
            $(".work-entry:last").append(dates);
            $(".work-entry:last").append(loc);
            $(".work-entry:last").append(desc);
        }
        
        for (var proj = 0; proj < work.projects.length; ++proj) {
            $("#projects").append(HTMLprojectStart);
            
            title = HTMLprojectTitle.replace("%data%", work.projects[proj].title);
            dates = HTMLprojectDates.replace("%data%", work.projects[proj].dates);
            desc = HTMLprojectDescription.replace("%data%", work.projects[proj].description);
                    
            $(".project-entry:last").append(title);
            $(".project-entry:last").append(dates);
            $(".project-entry:last").append(desc);
            
            for (img in work.projects[proj].images) {
                img = HTMLprojectImage.replace("%data%", work.projects[proj].images[img]);
                $(".project-entry:last").append(img);
            }
        }
    }
};

var education = {
    "schools": [
        {
            "name": "School of RoCk!",
            "location": "London",
            "dates": "forever",
            "degree": "Guitar Hero",
            "major": "No majors, or minors... Only power chords!"
        },
        {
            "name": "House of Blues",
            "location": "Chicago",
            "dates": "every night",
            "degree": "Audience",
            "major": "u bet!"
        }
    ],
    
    "display": function () {
        for (var school = 0; school < education.schools.length; ++school) {
            $("#education").append(HTMLschoolStart);
            
            name = HTMLschoolName.replace("%data%", education.schools[school].name);
            degree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
            dates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
            loc = HTMLschoolLocation.replace("%data%", education.schools[school].location);
            major = HTMLschoolMajor.replace("%data%", education.schools[school].major);
                    
            $(".education-entry:last").append(name + degree);
            $(".education-entry:last").append(dates);
            $(".education-entry:last").append(loc);
            $(".education-entry:last").append(major);
        }
    }
};



bio.display();
work.display();
education.display();

$("#mapDiv").append(googleMap);
$("#map").append("map");



/*
$("#main").append(internationalizeButton);

function capitalize(str) {
    if (str.length > 0) {
        return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    }
    else {
        return "";
    }
}

function internationalize(oldName) {
    var finalName = oldName;
    var names = oldName.split(" ");
    finalName = capitalize(names[0]) + " " + names[1].toUpperCase();
    // Don't delete this line!
    return finalName;
}

function inName() {
    return internationalize(bio.name);
}
*/