function firstWord(s) {
  // your code here
	if(s.length===0)
	{
		return "";
	}
	
	for(let i=0;i<s.length;i++)
		{
if(s[i]==" ")
{
	break;
}}
			if(i===s.length)
			{
				return s.slice(0);
			}
return s.slice(0,i);


}			
// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));
