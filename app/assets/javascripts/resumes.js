/*
	By Osvaldas Valutis, www.osvaldas.info
	Available for use under the MIT License
*/

'use strict';

$(document).ready(function () {
	$( '#resume_attachment' ).each( function(){
		var input	 = $(this);
		var label	 = input.next( 'label' );
		var	initLabelVal = label.text();
		var fileInputName = $('#resume_name');


		input.on( 'change', function( e )
		{
			var fileName = '';
			var	inputVal = fileInputName.val();
			var currLabelVal = label.text();

			// Set file name var
			if( this.files && this.files.length > 1 )
				fileName = ( this.getAttribute( 'data-multiple-caption' ) || '' ).replace( '{count}', this.files.length );
			else if( e.target.value )
				fileName = e.target.value.split( '\\' ).pop();

			// Change button text			
			if( fileName )
				label.text( fileName );
			else
				label.text( initLabelVal );

			// Change input text
			if( !inputVal ||  ( inputVal.toString() == currLabelVal.toString() ))
				fileInputName.val( fileName );
			else
				fileInputName.val( inputVal );

			console.log(inputVal);
			console.log(currLabelVal);
		});

		// Firefox bug fix
		input
		.on( 'focus', function(){ input.addClass( 'has-focus' ); })
		.on( 'blur', function(){ input.removeClass( 'has-focus' ); });
	});
})