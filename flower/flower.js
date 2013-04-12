
var timelineData = [];

timelineData.push({
	date: "Basic Info",
	image: "contentImages/daily_frt.jpg",
	text: "Built: 1920's? Original Use: Simple Storefront; in 1928 became offices of the Atlanta Daily World. Re-adaptive Use: Still serving the needs of the Atlanta Daily World."
});

timelineData.push({
	date: "1997",
	image: "contentImages/daily_sign.jpg",
	text: "Scott retired from The Atlanta Daily World and on Aug. 14 his great niece, Alexis Scott Reeves, was named publisher."
});

timelineData.push({
	date: "1954-1965",
	image: "contentImages/daily_pub.jpg",
	text: "During the Civil Rights era The Daily World was criticized for not supporting sit-ins staged at several white-owned restaurants in downtown Atlanta. Scott reasoned that African Americans would more effectively improve their situation by working towards ending segregation in education, obtaining political and voting influence, and improving their economic situations rather than engaging in this form of protest."
});

timelineData.push({
	date: "1944",
	text: "February 8. Reporter Harry S. Alpin became the first person of African American descent to cover the White House"
});

timelineData.push({
	date: "1936",
	text: "Feb. 12. John Wesley Dobbs speaks for 2 hours at Big Bethal to awaken the political conscience of Atlanta's 90,000 blacks. He proposes that night to organize the Atlanta Civic and Political League to register 10,000 voters. Twenty-eight year old C.A. Scott at The Daily World backed him up the next day in his newspaper."
});

timelineData.push({
	date: "1934",
	text: "February 4. Scott was shot and killed while walking from his garage. No one was ever convicted of his murder. His brother, Cornelius Adolphus Scott, subsequently became the head of The Daily World. Under his leadership, the newspaper adopted a more conservative, Republican position, reflecting C.A. Scott's political views."
});

timelineData.push({
	date: "1931",
	image: "contentImages/dailyworld.jpg",
	text: "March 13. Became daily; As a daily paper, it was set apart from other black newspapers, the majority of which were published as weeklies. Its new format allowed for more timely news coverage."
});

timelineData.push({
	date: "1931",
	text: "April. tri-weekly"
});

timelineData.push({
	date: "1930",
	text: "May. semi-weekly"
});

timelineData.push({
	date: "1928",
	image: "contentImages/WAScott.jpg",
	text: "August 5. William Alexander Scott II, age 26, founded The Atlanta Daily World. It was the first successful African American daily newspaper in the United States. When The Daily World was founded there was only one other black paper in the Atlanta area, The Atlanta Independent, which shut down in 1933, consequently leaving The Daily World as the lone voice for the city's growing black community. Scott launched the paper mainly as a business venture, not a political venture. As a result, it was able to secure local and national advertisements from both black and white businesses, including Coca-Cola, Sears, Roebuck & Company, and Rich's, the largest department store in Atlanta. White businesses did not feel unduly threatened by the paper's editorial position, as they might have with a black paper such as The Chicago Defender or The Negro World, which were 'militant' in their attacks against southern white racism."
});

var flower = {
	intervalID: null,
	container: null,
	padding: null,
	header: null,
	elementsContainer: null,
	footer: null,
	init: function() {
		console.log("initializing flower");
		this.createTestFlower();
	},
	createTestFlower: function() {
		this.container = this._createContainer();
		this.padding = this._createFlowerPadding();
		this.header = this._createFlowerHeader();
		this.elementsContainer = this._createElementsContainer();
		this.footer = this._createFlowerFooter();

		this.container.appendChild(this.padding);
		this.container.appendChild(this.header);
		this.container.appendChild(this.elementsContainer);
		for(var i = 0, l = timelineData.length; i < l; i++) {
			this._appendTimelineElement(this.elementsContainer, i, timelineData[i]);
		}

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
	_createFlowerPadding: function() {
		var div = document.createElement('div');
		div.className = 'flower-padding';
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
	_appendTimelineElement: function(elementsContainer, index, eventData) {
		var header = document.createElement('div');
		header.className = 'flower-element-title';

		var content = document.createElement('div');
		content.className = 'flower-element-content';

		var contentDate = document.createElement('h3');
		contentDate.innerText = eventData.date;
		contentDate.style.textAlign = "center";
		content.appendChild(contentDate);

		var contentText = document.createElement('p');
		contentText.style.textAlign = "center";
		contentText.innerText = eventData.text;

		if(eventData.hasOwnProperty('image')) {
			var contentLeft = document.createElement('div');
			//contentLeft.style.position = 'absolute';
			contentLeft.style.float = 'left';
			contentLeft.style.width = '50%';
			contentLeft.style.height = 'auto';
			content.appendChild(contentLeft);
			var contentRight = document.createElement('div');
			//contentRight.style.position = 'absolute';
			contentRight.style.verticalAlign = 'middle';
			contentRight.style.float = 'right';
			contentRight.style.width = '50%';
			contentRight.style.height = 'auto';
			content.appendChild(contentRight);

			var contentImage = document.createElement('img');
			contentImage.src = eventData.image;
			contentImage.style.width = '100%';

			if(index%2) {
				contentLeft.appendChild(contentText);
				contentRight.appendChild(contentImage);
			}
			else {
				contentLeft.appendChild(contentImage);
				contentRight.appendChild(contentText);
			}

			var filler = document.createElement('br');
			filler.style.clear = 'both';
			content.appendChild(filler);
		}
		else {
			content.appendChild(contentText);
		}

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
};