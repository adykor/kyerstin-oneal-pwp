$(document).ready(
    $("#contact").validate({
        debug:true,
        errorClass: "alert alert-danger",
        errorLabelContainer: "#output-area",
        errorElement: "div",
        // rules here define what is good or bad input
        // each rule starts with the form input element's NAME attribute
        rules: {
            name: {
                required: true
            },
            email: {
                email: true,
                required: true
            },
            message: {
                required: true,
                maxlength: 2000
            }
        },
        messages: {
            name: {
                required: "Name is a required field",
            },
            email: {
                email: "Please provide a valid email address",
                required: "Email is a required field"
            },
            message: {
                required: "Message is a required field",
                maxlength: "Message is too long"
            }
        }
    })
)

