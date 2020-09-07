(function () {
	var Class = function () {
		this.log = function (data) {
			console.log(data);
		};
		this.dir = function (data) {
			console.dir(data);
		};
	};
	Class.extend = function (options) {
		var _super = new this();
		var _Class = function () {
			this.super = function () {
				var caller = this.super.caller['name'];
				var fn = null;
				for (var key in _super) {
					if (key === caller) {
						fn = _super[key];
						break;
					}
				}
				if (fn != null) {
					fn.apply(_super, arguments);
				} else {
					console.log('`' + caller + '` have no super method')
				}
			};
			for (var key in options) {
				this[key] = options[key];
			}
		};
		_Class.prototype = _super;
		_Class.extend = this.extend;
		return _Class;
	};
	window.Class = window.$Class = Class;
})();