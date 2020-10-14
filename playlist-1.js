const playlist = [
  'So What',
  'Respect',
  'What a Wonderful World',
  'At Last',
  'Three Little Birds',
  'The Way You Look Tonight',
  'The Power Of Love'
];

function  createListItems(arr) {
let items =''
  for (let i = 0; i < arr.length; i ++){
   items += `<li>${arr[i]}</li>`;
  }
 return items;      
}
//document.write (createListItems(playlist));
document.querySelector('main').innerHTML=`
<ol>
${createListItems(playlist)}
</ol>
`;