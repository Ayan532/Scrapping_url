import axios from "axios";
import { ScrapingBeeClient } from "scrapingbee";

const handleSearchApi=async(query)=>{

const customSearchApiKey = 'GOOGLE_CUSTOM_SEARCH_API';
const cx='GOOGLE ENGINE'
const customSearchApiUrl = `https://www.googleapis.com/customsearch/v1?cx=${cx}&q=${query}&num=5&key=${customSearchApiKey}`;
const customSearchResponse = await axios.get(customSearchApiUrl);
const top5Urls = customSearchResponse.data.items.map((item) => item.link);
console.log(top5Urls)
const scrapingbeeApiKey = 'SCRAPPING_API_KEY';

var client = new ScrapingBeeClient(scrapingbeeApiKey);
async function get(url) {
    var response = await client.get({
      url: url,
      params: {
        'wait': '1000',
        render_js: false,
        'extract_rules':{"text":{"selector": "p","type": "item"}}
      },
    })
    
    return response
}

const textsPromises = top5Urls.map(async (url) => {
    
    const respone=await get(url);
    var decoder = new TextDecoder(); 
 
    var text = decoder.decode(respone.data);
 
    return JSON.parse(text)
    
       

  });
  let texts = await Promise.all(textsPromises);
  
  texts=texts.map((item)=>{

    return item.text
  })

 
   

 

   return texts

  


 
}

export default handleSearchApi