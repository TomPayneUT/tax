import { useEffect, useState } from "react";
import ListGroup from "./components/ListGroup";
import TaxRate from "./components/TaxRate";

interface data {
  metro: string[],
  rate: Number[]
}

function App() {
  const [data, setData] = useState<data>()
  const [metros, setMetros] = useState<string[]>([]);
  const [rates, setRates] = useState<Number[]>([]);
  useEffect(()=>{
    //fetch("https://randomuser.me/api").
    fetch("https://services1.arcgis.com/99lidPhWCzftIe9K/arcgis/rest/services/SalesTaxAreas/FeatureServer/0/query?where=1%3D1&outFields=CURRRATE,METRONAME&outSR=4326&f=json").
    then(res => {
      let resObj = res.json();
      
      return resObj;
    }).then((r) => {
      let items: string[] = [];
      let rates: Number[] = []
      for (let i = 0; i < r.features.length; i++){
        items.push(r.features[i].attributes.METRONAME);
        rates.push(r.features[i].attributes.CURRRATE);
        
      }
      setMetros(items);
      setRates(rates);
    });
  }, []);
//  let items = [
//    'New York',
//   'SLC',
//    'Tokyo',
//   'Paris',
//    'London'
//]

const handleSelectItem = (item: string) => {
  
}
  
  return <div>

    <TaxRate metro="version" rate={0.1}/>
    <ListGroup items={metros} heading="Metro:Rate" rates={rates} onSelectItem={handleSelectItem}/>
    
    </div>

}

export default App;