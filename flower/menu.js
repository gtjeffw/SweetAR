var buttons = [
 {
 	name: "Map",
 },
 {
 	name: "Explore",
 },
 {
 	name: "Settings",
 },
 {
 	name: "Info",
 }
];

var menu = {
	container: null,
	indicator: null,
	itemWidth: 0,
	menuItems: [],
	init: function() {
		console.log("initializing menu");
		this.container = this._createContainer();

		this.itemWidth = 100/buttons.length;
		this.indicator = this._createIndicator(this.container, this.itemWidth);

		for(var i = 0, l = buttons.length; i < l; i++) {
			this.menuItems.push(this._addMenuItem(this.container, i, this.itemWidth, buttons[i]));
		}
	},
	_createContainer: function() {
		var div = document.createElement('div');
		div.className = "menu-container";
		return div;
	},
	_createIndicator: function(container, width) {
		var div = document.createElement('div');
		div.className = "menu-indicator-bg";
		div.style.width = width + "%";

		var top = document.createElement('div');
		top.className = "menu-indicator-top";
		div.appendChild(top);

		container.appendChild(div);

		return div;
	},
	_addMenuItem: function(container, index, width, data) {
		var div = document.createElement('div');
		div.className = "menu-item";
		div.style.width = width + "%";
		div.style.left = width*index + "%";
		div.innerText = data.name;

		var indicator = this.indicator;
/*
		div.addEventListener("click", function() {
			console.log("menu item clicked");
			indicator.style.left = div.style.left;
			//Tween.get(indicator).to({left:div.left}, 1000);
		});
*/
		div.addEventListener("touchstart", function() {
			console.log("menu item touched");
			indicator.style.left = div.style.left;
			//Tween.get(indicator).to({left:div.left}, 1000);
			//div.removeEventListener("click");
		});


		container.appendChild(div);

		return div;
	}
};