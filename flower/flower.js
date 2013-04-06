var flower = {
	intervalID: null,
	container: null,
	header: null,
	//elementsContainer: null,
	footer: null,
	init: function() {
		console.log("initializing flower");
		this.createTestFlower();
	},
	createTestFlower: function() {
		this.container = this._createContainer();
		this.header = this._createFlowerHeader();
		this.footer = this._createFlowerFooter();


		this.container.appendChild(this.header);
		for(var i = 0, l = 10; i < l; i++) {
			this._appendTimelineElement(this.container, i, null);
		}

		this.container.appendChild(this.footer);

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
	_appendTimelineElement: function(elementsContainer, index, elementData) {
		var header = document.createElement('div');
		header.className = 'flower-element-title';

		var content = document.createElement('div');
		content.className = 'flower-element-content';

		var contentText = document.createElement('p');
		contentText.innerText = 'Content...Content...Content...Content...Content...'+
								'Content...Content...Content...Content...Content...'+
								'Content...Content...Content...Content...Content...'+
								'Content...Content...Content...Content...Content...';
		content.appendChild(contentText);

		var footer = document.createElement('div');
		footer.className = 'flower-element-footer';

		elementsContainer.appendChild(header)
		elementsContainer.appendChild(content);
		elementsContainer.appendChild(footer);
	},
	_createFlowerFooter: function() {
		var div = document.createElement('div');
		div.className = 'flower-footer';
		return div;
	}
}