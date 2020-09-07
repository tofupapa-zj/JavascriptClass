# Javascript Class
## Usage
Include class.js in your HTML:
```html
<script src="script/class.js"></script>
```
## Sample
```js
var NewClass = Class.extend({
	test: function (n) {
		this.a = n;
		console.log('Parent class, this.a=' + this.a);
	}
});
var NewClass2 = NewClass.extend({
	test: function (m) {
		this.super(m);
		console.log('Child class, this.a=' + this.a);
	}
});

var c1 = new NewClass();
c1.test(123);

var c2 = new NewClass2();
c2.test(456);
```
console output:
```$xslt
Parent class, this.a=123
Parent class, this.a=456
Child class, this.a=456
```