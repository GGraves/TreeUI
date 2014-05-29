( function( $)
{ 
    $( document).ready( function()
    {
        $( ".body").css( { "display":"none"}); 
        $( ".title").click( function()
        {
            $( this).siblings().slideToggle( "slow");
            $( this).parent().siblings().slideToggle( "slow");
            if( !$( this).parent().parent().is( ".tree"))
            {
                $( this).parent().parent().siblings().slideToggle( "slow");
            }
        });
    });
}
( jQuery));
