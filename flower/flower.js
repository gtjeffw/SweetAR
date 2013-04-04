var flower = {
	intervalID: null,
	container: null,
	header: null,
	elementsContainer: null,
	footer: null,
	init: function() {
		console.log("initializing flower");
		this.createTestFlower();

		var flower = this;

		$(document).ready(function () {
			$('.flower-header').click(function(e) {
				console.log('header clicked');
				var target = $(e.target);
				if(target.height() == 500) {

					flower.elementsContainer.scrollTop = 0;

					target.animate({
						height: "100px"
					}, 500);
				}
				else {
					target.animate({
						height: "500px"
					}, 500);
				}

				
			});

			$('.flower-element-title').click(function(e) {
				console.log('element clicked');
				var content = $(e.target).next();
				
			});

		});
		

	},
	createTestFlower: function() {
		this.container = this._createContainer();
		this.header = this._createFlowerHeader();
		this.elementsContainer = this._createElementsContainer();
		this.footer = this._createFlowerFooter();

		for(var i = 0, l = 3, step = 255/3; i < l; i++) {
			this._appendTimelineElement(this.elementsContainer, i, i*step);
		}

		this.container.appendChild(this.header);
		this.container.appendChild(this.elementsContainer);
		this.elementsContainer.appendChild(this.footer);

		return this.container;
	},
	createFlower: function(data) {

	},
	_createContainer: function() {
		var div = document.createElement('div');
		div.className = 'flower-container';
		return div;
	},
	_createFlowerHeader: function() {
		var div = document.createElement('div');
		div.className = 'flower-header';
		return div;
	},
	_createElementsContainer: function() {
		var div = document.createElement('div');
		div.className = 'flower-elements-container';
		return div;
	},
	_appendTimelineElement: function(elementsContainer, index, elementData) {
		var title = document.createElement('div');
		title.className = 'flower-element-title';

		var content = document.createElement('div');
		content.className = 'flower-element-content';

		elementsContainer.appendChild(title)
		elementsContainer.appendChild(content);
	},
	_createFlowerFooter: function() {
		var div = document.createElement('div');
		div.className = 'flower-footer';
		return div;
	}
}

flower.init();
document.body.appendChild(flower.container);