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

    // const theme = Null;
     const primaryColor = "primary";
    // const secondaryColor = Null;
    // const tertiaryColor = Null;

    var text = "Get a new car";
    
    function makeBingo() // Make Bingo
    {
        alert("BINGO!");
    }

    function shuffle() // Shuffle Bingo Sheet
    {

    }

    function makeBoard() // Make Board
    {
        

        // html += `<ul class="work__list">`;
        // for(var i = 0; i < source.tools.length; i++)
        // {
        //     html += `<li>${source.tools[i]}</li>`; //assigns variable from json data
        // }
        // html += `</ul>`;

        var bingoBoard = `<div class="row row-cols-5 row-cols-1 g-2">`;
        
        bingoBoard += `</div>`;

        $("div.BingoBoard").append(bingoBoard); //Append to Projects Section

        for(var i = 0; i < 25; i++)
        {
            makeTile(i);
        }

        
    }

    function makeTile(value)
    {
        var bingoTile = `<div class="col">`;
        bingoTile +=  `<div class="card text-break lh-base text-bg-${primaryColor}" id="bingoTile${value}" style="height: 8rem;width: 8rem;">`;
        bingoTile += `<div class="card-body text-center">`;
        bingoTile += `<p class="card-text">${value}</p>`;
        bingoTile += `</div>`;
        bingoTile += `</div>`;
        bingoTile += `</div>`;
        
        $("div.BingoBoard div.row").append(bingoTile); //Append to Projects Section
    }


    function makeTable()
    {
        var html = `<thead>`;
        html += `<tr>`;
        html += `<th scope="col">#</th>`;
        html += `<th scope="col">Goal/Resolution/Etc</th>`;
        html += `</tr>`;
        html += `</thead>`;
        html += `<tbody class="table-group-divider">`;
        html += `<form>`;

        for(var i = 1; i < 25; i++)
        {
            html += `<tr>`;
            html += `<th scope="row">${i}</th>`;
            html += `<td>`;
            html += `<input type="text" class="form-control form-control-lg" placeholder="Goal #${i}" aria-label="Large input example"></input>`;
            html += `</td>`;
            html += `</tr>`;
        }

        html += `<form/>`;
        html += `<tbody/>`;

        $("table").append(html); //Append to Projects Section
    }


    function goToTop() 
    {
        const $backToTopButton = $(".back-to-top");
        
        const alterStyles = (isRendered) => {
            $backToTopButton.css({
            visibility: isRendered ? "visible" : "hidden",
            opacity: isRendered ? 1 : 0,
            transform: isRendered ? "scale(1)" : "scale(0)"
            });
        };
        
        $(window).on("scroll", function() {
            const isBackToTopRendered = $(this).scrollTop() > 700;
            alterStyles(isBackToTopRendered);
        });
    }

    makeBoard();
    goToTop();

    makeTable()


});  // end of $(document).ready()