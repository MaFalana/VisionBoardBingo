/**************************************
TITLE: index.js							
AUTHOR: Malik Falana (MF)			
CREATE DATE: 01/14/2025	
PURPOSE: To use jquery and functions for Vison Board page
LAST MODIFIED ON: 01/14/2025	
LAST MODIFIED BY: Malik Falana (MF)
MODIFICATION HISTORY:
01/14/2025: Original Build
***************************************/


$(document).ready(function() 
{

    const theme = Null;
    const primaryColor = Null;
    const secondaryColor = Null;
    const tertiaryColor = Null;
    
    function makeBingo() // Make Bingo
    {
        alert("BINGO!");
    }

    function shuffle() // Shuffle Bingo Sheet
    {

    }

    function makeBoard() // Make Board
    {
        var html = `<div class="card" style="width: 18.75rem;">`;
        html += `<div class="card-body">`;
        html += `<h5 class="card-title">Card title</h5>`;
        html += `<p class="card-text">${}</p>`;
        html += `<a href="#" class="btn btn-primary">Go somewhere</a>`;
        html += `</div>`;
        html += `</div>`;
    }

    $("input").change(convertToDecimalDegrees)


});  // end of $(document).ready()