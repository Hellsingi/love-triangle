
/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
*/

module.exports=function getLoveTrianglesCount(preferences=[])
{
var counter=0,firstIndex,secondIndex,thirdIndex,firstValue,secondValue,thirdValue;
for (var i = 0; i < preferences.length; i++)
{
    firstValue=preferences[i];
    firstIndex=i+1;
    secondIndex=firstValue-1;
    secondValue=preferences[secondIndex];
    thirdIndex=secondValue-1;
    thirdValue=preferences[thirdIndex];
    if ( thirdValue==firstIndex)   
    {
        counter++;
    }
      
}
return Math.trunc(counter/3) ;
};