// vanilla JS

function Button(text) {
  this.text = text || 'Hello';
}

Button.prototype = {
  create: function() {
    const self = this;
    this.element = document.createElement('button');
    this.body = document.createTextNode(this.text);
    this.element.appendChild(this.body);
    this.element.onclick = () => {
      alert(self.text);
    }
    document.body.appendChild(this.element);
	}
}

const btn1 = new Button('Hi there!');
const btn2 = new Button('My name is Mr. Button!');
const btn3 = new Button();

btn1.create();
btn2.create();
btn3.create();