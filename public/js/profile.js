// Nicole will get back to this later - 2:19 am 

const { application } = require("express");

// Set new event, if user does not input, will not let them move forward.
const newFormHandler = async (event) => {
    event.preventDefault();

// Connecting js with profile.handlebars
// Missing fetch routes/paths below 
// TODO: determine where we will be fetching data from! 
const name = document.querySelector('#gameTitle').value.trim();
const userReview = document.querySelector('#userReview').value.trim();

if (name && userReview) {
    const response = await fetch(``, {
        method: 'POST',
        body: JSON.stringify({ name, userReview}),
        headers: {
            'Content-Type': 'application/json',
        },
    });

if (response.ok) {
    document.location.replaace('');
} else {
    alert('User Cannot Write Review')
        }
    }
};

// ToDo: Delete function of a project will go here.


