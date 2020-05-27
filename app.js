const Ratings = {
    office: 4.0,
    html: 3.0,
    bootstrap: 3.0,
    javascript: 2.5,
    react: 0,

}

// Total Ratings
const totalRatings = 5;

    // Run getRatings with DOM load
 document.addEventListener('DOMContentLoaded', getRatings);
 
function getRatings () {
    for (let rating in Ratings) {
        // Output the object of ratings
         // console.log(rating);

            // Output the properties of ratings
          // console.log(Ratings[rating]);
   
        // Get Percentage 
        const starPercentage = (Ratings[rating] / totalRatings) * 100;
     
        // Output rating percentage
         // console.log(starPercentage);

        // Round-up to nearest 10.
        const starPercentageRounded = `${Math.round(starPercentage / 10) * 10}%`;
        // console.log(starPercentageRounded);

        // set width of the stars inner to %
        document.querySelector(`.${rating} .stars-inner`).style.width = starPercentageRounded;

        // Add number rating
        document.querySelector(`.${rating} .number-rating`).innerHTML = Ratings[rating];
    
    }
}

// form elements
const applicationSelect = document.querySelector('#application-select'),
        ratingControl = document.querySelector('#rating-control');

        let application;

        applicationSelect.addEventListener('change', (e) => {
            application = e.target.value;
           // console.log(application);

           // Enable Ratings
           ratingControl.disabled = false;

         //  applicationSelect.disabled = true;
         ratingControl.value = Ratings[application];

            // rating control change

            ratingControl.addEventListener('blur', (e) => {
                const rating = e.target.value;
           
            // If statement to check rating is under 5.
            if (rating > 5) {
                alert('Please rate Between 1 - 5');
                return;
            } 
            //change ratings
            Ratings[application] = rating;
            getRatings ();

        })

        })
        