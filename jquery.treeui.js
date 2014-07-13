( function( $)
{ 
    $( document).ready( function()
    {
        $( ".body").css( { "display":"none"});
        $( ".branch-break").css( { "display":"none"});
        $( ".title").click( function()
        {
            if( !$( this).parent().parent().is( ".tree"))
            {
                $( this).parent().parent().siblings().slideToggle( "slow");
            }
            $( this).parent().siblings().slideToggle( "slow");
              
            $( this).siblings().slideToggle( "slow", function()
            {
                $('body').animate({scrollTop: $(".tree").offset().top}); 
            });
            $( this).children(".branch-break").slideToggle( "slow");
        });
    });
}
( jQuery));
