function MenuItem(itemID: string) {
	return (target: Function) => {
		target.prototype.id = itemID;
	};
}

@MenuItem("newId")
class Pizza {
	id: string;
}

@MenuItem("chessburger")
class Hamburger {
	id: string;
}

console.log(new Pizza().id);
