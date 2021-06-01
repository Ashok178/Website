$(document).ready(function () {
			
    $('#myDiv').animate({
                height: '200px',
                width: '200px'
            }, 
            {    // options parameter 
                duration: 5000,
                complete: function () {
                    $(this).animate({
                        height: '100px',
                        width: '100px'
                    }, 5000,
                    function () {
                        $('#msgDiv').text('Animation completed..');
                    });
                }
            });
});