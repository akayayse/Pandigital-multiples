function isPandigital(str){
	if(str.length != 9){return false;}
	var digits = [0,0,0,0,0,0,0,0,0];

	var i;
	for(i = 0; i < 9; i++){
		digits[parseInt(str[i])-1] = 1;
	}
	return digits[0]&&digits[1]&&digits[2]&&digits[3]&&digits[4]&&digits[5]&&digits[6]&&digits[7]&&digits[8];
}

// Max pandigital number is 987654321
var max = 0;
for(var i = 1; i < 100000; i++){
	iStr = String(i);
	var n = 2;
	while(iStr.length < 9){
		iStr += n*i;
		n++
	}

	if(isPandigital(iStr)){
		if(parseInt(iStr) > max){max = parseInt(iStr);}
		console.log(i,iStr);
	}
}

console.log(max);