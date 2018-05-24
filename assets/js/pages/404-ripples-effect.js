// Ripples Plugin
$('#ripples-effect').ripples({
	// The width and height of the WebGL texture to render to. 
	// The larger this value, the smoother the rendering and the slower the ripples will propagate.
	resolution: 256,
	// The size (in pixels) of the drop that results by clicking or moving the mouse over the canvas.
	dropRadius: 20,
	// Basically the amount of refraction caused by a ripple. 
	// 0 means there is no refraction.
	perturbance: 0.03,
	// Whether mouse clicks and mouse movement triggers the effect.
	interactive: true,
	// The crossOrigin attribute to use for the affected image. 
	crossOrigin: ''

})(jQuery);