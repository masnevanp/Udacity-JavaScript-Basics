
var bio = {
    "name": "John Doe",
    "role": "Coder by law",
    "contact_info": [
        ["mobile", "555-12345"],
        ["email", "john@doe.it"],
        ["github", "johndoe"],
        ["twitter", "@johndoe"],
        ["location", "dillon"]
    ],
    "picture_url": "https://avatars3.githubusercontent.com/u/21120407?v=3&s=460",
    "skills": ["python", "html", "css"],
    "welcome_message": "Hi there!"
};
/*
$("#header").prepend(HTMLheaderRole.replace("%data%", bio.role));
$("#header").prepend(HTMLheaderName.replace("%data%", bio.name));

for (var index = 0; index < bio.contact_info.length; index++) {
    var contact_type = bio.contact_info[index][0];
    var contact_info = bio.contact_info[index][1];
    var formattedContact = HTMLcontactGeneric.replace("%contact%", contact_type);
    formattedContact = formattedContact.replace("%data%", contact_info);
    $("#topContacts").append(formattedContact);
}



var work = {};
work.employer = "Code Inc";
work.title = "Programmer";
work.location = "Las Palmas";
work.description = "Maintenance of this and that.";

$("#workExperience").append(HTMLworkStart);

$("#work-entry").append(HTMLworkEmployer.replace("%data%", work.employer));
$("#work-entry").append(HTMLworkTitle.replace("%data%", work.title));

var school = {};
*/

var work = {
    "jobs": [
        {
            "employer": "Code Inc",
            "title": "Programmer",
            "city": "Las Palmas",
            "dates": "from here to eternity",
            "description": "Maintenance of this and that."
        }
    ],
    "projects": [
        {
            "title": "Programmer",
            "dates": "from here to eternity",
            "description": "Maintenance of this and that.",
            "image": ""
        }
    ]
};

var education = {
    "schools": [
        {
            "name": "School of RoCk!",
            "city": "London",
            "degree": "Guitar Hero",
            "major": "No majors, or minors... Only power chords!"
        },
        {
            "name": "House of Blues",
            "city": "Chicago",
            "degree": "Slowhand",
            "major": "all"
        }
    ]
};
