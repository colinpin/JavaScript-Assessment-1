//1. Using dot and bracket notation modify the existing object values to replace the information with your own

var me = {
	'name': 'Jake Overall',
	'age': 29,
	'hair color': 'brown'
};

me.name = "Colin Pinegar",
me.age = 31,
me['hair color'] = "Sandy Blonde"

//2. Iterate over the object to console.log the propery or key names. 

for (var x in me) {
    console.log("me." + x + " = " + me[x]);
}