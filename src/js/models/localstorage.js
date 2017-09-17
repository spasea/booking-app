export default {
	set(key, value, object = this) {
		if (Array.isArray(value)) {
		    if (object.$ls.get(key, false)) {
				value = JSON.parse(object.$ls.get(key)).concat(value);
		    }
			object.$ls.set(key, JSON.stringify(value));
		    return;
		}
		if (typeof value === "object") {
			if (object.$ls.get(key, false)) {
				value = _.assign(JSON.parse(object.$ls.get(key)), value);
			}
			object.$ls.set(key, JSON.stringify(value));
			return;
		}
		object.$ls.set(key, value);
	},
	get(key, object = this) {
		return JSON.parse(object.$ls.get(key, false));
	}
}