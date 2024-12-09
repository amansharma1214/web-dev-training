
  const url="https://restcountries.com/v3.1/all ";
  const element = document.getElementById("container")


  async function fetchData(){
    try{
      const responce= await fetch (url);
const data= await responce.json();
console.log(data);

for( let i=0;i<data.length;i++){
  const value =data[i];
  const html =`
  <div class='card'>
  <img src="${value?.flags?.png}"/>
  <h3>Country Name:
    ${value?.name?.common}
  </h3>
  <p>Region: ${value?.region}</p>
 <p>Population: ${value?.population}</p>
<p>Capital: ${value?.capital}</p>
  `;
  element.innerHTML += html;
console.log( )
}
    }

  
   catch (error){
    console.log("-----error-----:",error.message);
   }
  }
  