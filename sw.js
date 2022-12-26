self.addEventListener('message', function (event) {
    console.log(event.data);
    if (`${event.data.blockeduri}`.startsWith("https://fonts.gstatic.com")) {

        fetch("/__cspreport__", {

            // Adding method type
            method: "POST",

            // Adding body or contents to send
            body: JSON.stringify(event.data),

        })
    }
});