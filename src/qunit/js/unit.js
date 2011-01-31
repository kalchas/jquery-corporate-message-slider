jQuery(function ($) {
	
	var
	
		slider = $('#qunit-fixture').children('div:first'),
		
		init_test = function () {
			
			ok(slider.corpmsgslider(), 'Slider element init-ed');
			
		},
		
		wireframe_test = function () {
			
			init_test();
			
			ok(slider.corpmsgslider('wireframe'), 'Slider element wireframed');
			
		},
		
		get_slides_test = function () {
			
			wireframe_test();
			
			ok(slider.corpmsgslider('get_slides', 'json/slides.json'), 'Got slides');
			
		},
		
		play_slides_test = function () {
			
			get_slides_test();
			
			ok(slider.corpmsgslider('play_slides'), 'Play slides');
			
		}
	
	;
	
	module('Corporate Message Slider Init');
	
	test('Init Corporate Message Slider', function () {
		
		expect(1);
		
		init_test();
		
	});
	
	module('Corporate Message Slider Wireframe');
	
	test('Init Corporate Message Slider', function () {
		
		expect(2);
		
		wireframe_test();
		
	});
	
	module('Corporate Message Slider Get Slides');
	
	test('Init Corporate Message Get Slides', function () {
		
		expect(3);
		
		get_slides_test();
		
	});
	
	module('Corporate Message Slider Play Slides');
	
	test('Corporate Message Slider Play Slides', function () {
		
		expect(4);
		
		play_slides_test();
		
	});
	
});