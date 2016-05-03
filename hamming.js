var compute;

compute = function (s1,s2) {

var distance = 0;

  // compute the hamming distance.
for (var i = 0; i < s1.length; i++) { 
    if (s1 [i] != s2 [i]) { 
  		distance += 1;
  	}

	if (s1.length != s2.length)
      throw new Error ("Must be same length.")

} 
    return distance;
      
}; 
      
module.exports = { 
    compute: compute
};