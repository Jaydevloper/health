import { useState } from 'react';
import './add-info.scss';
function Add(){
const[state,setState] = useState(null)
const data = [
    {
      "city": "Tashkent", 
      "lat": "41.3000", 
      "lng": "69.2667", 
      "country": "Uzbekistan", 
      "iso2": "UZ", 
      "admin_name": "Toshkent", 
      "capital": "primary", 
      "population": "2424100", 
      "population_proper": "2424100"
    }, 
    {
      "city": "Samarkand", 
      "lat": "39.6542", 
      "lng": "66.9597", 
      "country": "Uzbekistan", 
      "iso2": "UZ", 
      "admin_name": "Samarqand", 
      "capital": "admin", 
      "population": "504423", 
      "population_proper": "504423"
    }, 
    {
      "city": "Andijon", 
      "lat": "40.7000", 
      "lng": "72.3500", 
      "country": "Uzbekistan", 
      "iso2": "UZ", 
      "admin_name": "Andijon", 
      "capital": "admin", 
      "population": "441700", 
      "population_proper": "441700"
    }, 
    {
      "city": "Namangan", 
      "lat": "40.9953", 
      "lng": "71.6725", 
      "country": "Uzbekistan", 
      "iso2": "UZ", 
      "admin_name": "Namangan", 
      "capital": "admin", 
      "population": "408500", 
      "population_proper": "408500"
    }, 
    {
      "city": "Qoqon", 
      "lat": "40.5404", 
      "lng": "70.9400", 
      "country": "Uzbekistan", 
      "iso2": "UZ", 
      "admin_name": "Farg‘ona", 
      "capital": "", 
      "population": "350000", 
      "population_proper": "192500"
    }, 
    {
      "city": "Farg‘ona", 
      "lat": "40.3864", 
      "lng": "71.7864", 
      "country": "Uzbekistan", 
      "iso2": "UZ", 
      "admin_name": "Farg‘ona", 
      "capital": "admin", 
      "population": "340600", 
      "population_proper": "340600"
    }, 
    {
      "city": "Bukhara", 
      "lat": "39.7747", 
      "lng": "64.4286", 
      "country": "Uzbekistan", 
      "iso2": "UZ", 
      "admin_name": "Buxoro", 
      "capital": "admin", 
      "population": "272500", 
      "population_proper": "272500"
    }, 
    {
      "city": "Qarshi", 
      "lat": "38.8667", 
      "lng": "65.8000", 
      "country": "Uzbekistan", 
      "iso2": "UZ", 
      "admin_name": "Qashqadaryo", 
      "capital": "admin", 
      "population": "254600", 
      "population_proper": "254600"
    }, 
    {
      "city": "Denov", 
      "lat": "38.2772", 
      "lng": "67.8872", 
      "country": "Uzbekistan", 
      "iso2": "UZ", 
      "admin_name": "Surxondaryo", 
      "capital": "", 
      "population": "217274", 
      "population_proper": "68994"
    }, 
    {
      "city": "Nukus", 
      "lat": "42.4647", 
      "lng": "59.6022", 
      "country": "Uzbekistan", 
      "iso2": "UZ", 
      "admin_name": "Qoraqalpog‘iston", 
      "capital": "admin", 
      "population": "170362", 
      "population_proper": "170362"
    }, 
    {
      "city": "Jizzax", 
      "lat": "40.1167", 
      "lng": "67.8500", 
      "country": "Uzbekistan", 
      "iso2": "UZ", 
      "admin_name": "Jizzax", 
      "capital": "admin", 
      "population": "163200", 
      "population_proper": "163200"
    }, 
    {
      "city": "Termiz", 
      "lat": "37.2242", 
      "lng": "67.2783", 
      "country": "Uzbekistan", 
      "iso2": "UZ", 
      "admin_name": "Surxondaryo", 
      "capital": "admin", 
      "population": "136200", 
      "population_proper": "136200"
    }, 
    {
      "city": "Urganch", 
      "lat": "41.5345", 
      "lng": "60.6249", 
      "country": "Uzbekistan", 
      "iso2": "UZ", 
      "admin_name": "Xorazm", 
      "capital": "admin", 
      "population": "135100", 
      "population_proper": "135100"
    }, 
    {
      "city": "Navoiy", 
      "lat": "40.0833", 
      "lng": "65.3833", 
      "country": "Uzbekistan", 
      "iso2": "UZ", 
      "admin_name": "Navoiy", 
      "capital": "admin", 
      "population": "134100", 
      "population_proper": "134100"
    }, 
    {
      "city": "Kogon Shahri", 
      "lat": "39.7211", 
      "lng": "64.5458", 
      "country": "Uzbekistan", 
      "iso2": "UZ", 
      "admin_name": "Buxoro", 
      "capital": "minor", 
      "population": "107566", 
      "population_proper": "62620"
    }, 
    {
      "city": "Urgut Shahri", 
      "lat": "39.4007", 
      "lng": "67.2607", 
      "country": "Uzbekistan", 
      "iso2": "UZ", 
      "admin_name": "Samarqand", 
      "capital": "minor", 
      "population": "99675", 
      "population_proper": "47373"
    }, 
    {
      "city": "Qo‘ng‘irot Shahri", 
      "lat": "43.0758", 
      "lng": "58.9067", 
      "country": "Uzbekistan", 
      "iso2": "UZ", 
      "admin_name": "Qoraqalpog‘iston", 
      "capital": "minor", 
      "population": "70100", 
      "population_proper": "70100"
    }, 
    {
      "city": "Xo‘jayli Shahri", 
      "lat": "42.4047", 
      "lng": "59.4517", 
      "country": "Uzbekistan", 
      "iso2": "UZ", 
      "admin_name": "Qoraqalpog‘iston", 
      "capital": "minor", 
      "population": "60401", 
      "population_proper": "50000"
    }, 
    {
      "city": "Kattaqo’rg’on Shahri", 
      "lat": "39.8958", 
      "lng": "66.2656", 
      "country": "Uzbekistan", 
      "iso2": "UZ", 
      "admin_name": "Samarqand", 
      "capital": "minor", 
      "population": "58950", 
      "population_proper": "58950"
    }, 
    {
      "city": "Guliston", 
      "lat": "40.4833", 
      "lng": "68.7833", 
      "country": "Uzbekistan", 
      "iso2": "UZ", 
      "admin_name": "Sirdaryo", 
      "capital": "admin", 
      "population": "55600", 
      "population_proper": "55600"
    }, 
    {
      "city": "Xiva", 
      "lat": "41.3783", 
      "lng": "60.3639", 
      "country": "Uzbekistan", 
      "iso2": "UZ", 
      "admin_name": "Xorazm", 
      "capital": "minor", 
      "population": "55568", 
      "population_proper": "55568"
    }, 
    {
      "city": "Chimboy Shahri", 
      "lat": "42.9311", 
      "lng": "59.7708", 
      "country": "Uzbekistan", 
      "iso2": "UZ", 
      "admin_name": "Qoraqalpog‘iston", 
      "capital": "minor", 
      "population": "36917", 
      "population_proper": "31638"
    }, 
    {
      "city": "Chortoq", 
      "lat": "41.0689", 
      "lng": "71.8153", 
      "country": "Uzbekistan", 
      "iso2": "UZ", 
      "admin_name": "Namangan", 
      "capital": "minor", 
      "population": "35615", 
      "population_proper": "35615"
    }, 
    {
      "city": "Payshamba Shahri", 
      "lat": "40.0078", 
      "lng": "66.2372", 
      "country": "Uzbekistan", 
      "iso2": "UZ", 
      "admin_name": "Samarqand", 
      "capital": "minor", 
      "population": "32568", 
      "population_proper": "32568"
    }, 
    {
      "city": "Kosonsoy", 
      "lat": "41.2492", 
      "lng": "71.5458", 
      "country": "Uzbekistan", 
      "iso2": "UZ", 
      "admin_name": "Namangan", 
      "capital": "minor", 
      "population": "31217", 
      "population_proper": "31217"
    }, 
    {
      "city": "G’ijduvon Shahri", 
      "lat": "40.1000", 
      "lng": "64.6667", 
      "country": "Uzbekistan", 
      "iso2": "UZ", 
      "admin_name": "Buxoro", 
      "capital": "minor", 
      "population": "30486", 
      "population_proper": "30486"
    }, 
    {
      "city": "Uchquduq Shahri", 
      "lat": "42.1567", 
      "lng": "63.5556", 
      "country": "Uzbekistan", 
      "iso2": "UZ", 
      "admin_name": "Navoiy", 
      "capital": "minor", 
      "population": "24200", 
      "population_proper": "24200"
    }, 
    {
      "city": "Rishton", 
      "lat": "40.3567", 
      "lng": "71.2847", 
      "country": "Uzbekistan", 
      "iso2": "UZ", 
      "admin_name": "Farg‘ona", 
      "capital": "minor", 
      "population": "23706", 
      "population_proper": "23706"
    }, 
    {
      "city": "Yaypan", 
      "lat": "40.3758", 
      "lng": "70.8156", 
      "country": "Uzbekistan", 
      "iso2": "UZ", 
      "admin_name": "Farg‘ona", 
      "capital": "minor", 
      "population": "15984", 
      "population_proper": "15984"
    }, 
    {
      "city": "Juma Shahri", 
      "lat": "39.7094", 
      "lng": "66.6614", 
      "country": "Uzbekistan", 
      "iso2": "UZ", 
      "admin_name": "Samarqand", 
      "capital": "minor", 
      "population": "15571", 
      "population_proper": "15571"
    }, 
    {
      "city": "Vobkent Shahri", 
      "lat": "40.0233", 
      "lng": "64.5139", 
      "country": "Uzbekistan", 
      "iso2": "UZ", 
      "admin_name": "Buxoro", 
      "capital": "minor", 
      "population": "12351", 
      "population_proper": "12351"
    }, 
    {
      "city": "Yangirabot", 
      "lat": "40.0333", 
      "lng": "65.9667", 
      "country": "Uzbekistan", 
      "iso2": "UZ", 
      "admin_name": "Navoiy", 
      "capital": "minor", 
      "population": "11364", 
      "population_proper": "11364"
    }, 
    {
      "city": "Qo‘rg‘ontepa", 
      "lat": "40.7319", 
      "lng": "72.7618", 
      "country": "Uzbekistan", 
      "iso2": "UZ", 
      "admin_name": "Andijon", 
      "capital": "minor", 
      "population": "", 
      "population_proper": ""
    }, 
    {
      "city": "Oqoltin", 
      "lat": "40.7465", 
      "lng": "71.7003", 
      "country": "Uzbekistan", 
      "iso2": "UZ", 
      "admin_name": "Andijon", 
      "capital": "minor", 
      "population": "", 
      "population_proper": ""
    }, 
    {
      "city": "Buloqboshi", 
      "lat": "40.6291", 
      "lng": "72.5021", 
      "country": "Uzbekistan", 
      "iso2": "UZ", 
      "admin_name": "Andijon", 
      "capital": "minor", 
      "population": "", 
      "population_proper": ""
    }, 
    {
      "city": "Oxunboboyev", 
      "lat": "40.7198", 
      "lng": "72.6428", 
      "country": "Uzbekistan", 
      "iso2": "UZ", 
      "admin_name": "Andijon", 
      "capital": "minor", 
      "population": "", 
      "population_proper": ""
    }, 
    {
      "city": "Paxtaobod", 
      "lat": "40.9294", 
      "lng": "72.4969", 
      "country": "Uzbekistan", 
      "iso2": "UZ", 
      "admin_name": "Andijon", 
      "capital": "minor", 
      "population": "", 
      "population_proper": ""
    }, 
    {
      "city": "Shahrixon", 
      "lat": "40.7133", 
      "lng": "72.0571", 
      "country": "Uzbekistan", 
      "iso2": "UZ", 
      "admin_name": "Andijon", 
      "capital": "minor", 
      "population": "", 
      "population_proper": ""
    }, 
    {
      "city": "Baliqchi", 
      "lat": "40.9050", 
      "lng": "71.8474", 
      "country": "Uzbekistan", 
      "iso2": "UZ", 
      "admin_name": "Andijon", 
      "capital": "minor", 
      "population": "", 
      "population_proper": ""
    }, 
    {
      "city": "Marhamat", 
      "lat": "40.5024", 
      "lng": "72.3265", 
      "country": "Uzbekistan", 
      "iso2": "UZ", 
      "admin_name": "Andijon", 
      "capital": "minor", 
      "population": "", 
      "population_proper": ""
    }, 
    {
      "city": "Poytug‘", 
      "lat": "40.8977", 
      "lng": "72.2449", 
      "country": "Uzbekistan", 
      "iso2": "UZ", 
      "admin_name": "Andijon", 
      "capital": "minor", 
      "population": "", 
      "population_proper": ""
    }, 
    {
      "city": "Kuyganyor", 
      "lat": "40.8544", 
      "lng": "72.3073", 
      "country": "Uzbekistan", 
      "iso2": "UZ", 
      "admin_name": "Andijon", 
      "capital": "minor", 
      "population": "", 
      "population_proper": ""
    }, 
    {
      "city": "Oltinko‘l", 
      "lat": "40.8010", 
      "lng": "72.1731", 
      "country": "Uzbekistan", 
      "iso2": "UZ", 
      "admin_name": "Andijon", 
      "capital": "minor", 
      "population": "", 
      "population_proper": ""
    }, 
    {
      "city": "Asaka", 
      "lat": "40.6415", 
      "lng": "72.2387", 
      "country": "Uzbekistan", 
      "iso2": "UZ", 
      "admin_name": "Andijon", 
      "capital": "minor", 
      "population": "", 
      "population_proper": ""
    }, 
    {
      "city": "Xo‘jaobod", 
      "lat": "40.6689", 
      "lng": "72.5600", 
      "country": "Uzbekistan", 
      "iso2": "UZ", 
      "admin_name": "Andijon", 
      "capital": "minor", 
      "population": "", 
      "population_proper": ""
    }, 
    {
      "city": "Oltiariq", 
      "lat": "40.3919", 
      "lng": "71.4742", 
      "country": "Uzbekistan", 
      "iso2": "UZ", 
      "admin_name": "Farg‘ona", 
      "capital": "minor", 
      "population": "", 
      "population_proper": ""
    }, 
    {
      "city": "Beshariq", 
      "lat": "40.4358", 
      "lng": "70.6103", 
      "country": "Uzbekistan", 
      "iso2": "UZ", 
      "admin_name": "Farg‘ona", 
      "capital": "minor", 
      "population": "", 
      "population_proper": ""
    }, 
    {
      "city": "Vodil", 
      "lat": "40.1742", 
      "lng": "71.7301", 
      "country": "Uzbekistan", 
      "iso2": "UZ", 
      "admin_name": "Farg‘ona", 
      "capital": "minor", 
      "population": "", 
      "population_proper": ""
    }, 
    {
      "city": "Dang‘ara", 
      "lat": "40.5839", 
      "lng": "70.9144", 
      "country": "Uzbekistan", 
      "iso2": "UZ", 
      "admin_name": "Farg‘ona", 
      "capital": "minor", 
      "population": "", 
      "population_proper": ""
    }, 
    {
      "city": "Quva", 
      "lat": "40.5220", 
      "lng": "72.0729", 
      "country": "Uzbekistan", 
      "iso2": "UZ", 
      "admin_name": "Farg‘ona", 
      "capital": "minor", 
      "population": "", 
      "population_proper": ""
    }, 
    {
      "city": "Toshloq", 
      "lat": "40.4772", 
      "lng": "71.7678", 
      "country": "Uzbekistan", 
      "iso2": "UZ", 
      "admin_name": "Farg‘ona", 
      "capital": "minor", 
      "population": "", 
      "population_proper": ""
    }, 
    {
      "city": "Langar", 
      "lat": "40.5205", 
      "lng": "71.6601", 
      "country": "Uzbekistan", 
      "iso2": "UZ", 
      "admin_name": "Farg‘ona", 
      "capital": "minor", 
      "population": "", 
      "population_proper": ""
    }, 
    {
      "city": "Yangiqo‘rg‘on", 
      "lat": "40.5539", 
      "lng": "71.1467", 
      "country": "Uzbekistan", 
      "iso2": "UZ", 
      "admin_name": "Farg‘ona", 
      "capital": "minor", 
      "population": "", 
      "population_proper": ""
    }, 
    {
      "city": "Navbahor", 
      "lat": "40.4810", 
      "lng": "70.7709", 
      "country": "Uzbekistan", 
      "iso2": "UZ", 
      "admin_name": "Farg‘ona", 
      "capital": "minor", 
      "population": "", 
      "population_proper": ""
    }, 
    {
      "city": "Yozyovon", 
      "lat": "40.6614", 
      "lng": "71.7436", 
      "country": "Uzbekistan", 
      "iso2": "UZ", 
      "admin_name": "Farg‘ona", 
      "capital": "minor", 
      "population": "", 
      "population_proper": ""
    }, 
    {
      "city": "Uchko‘prik", 
      "lat": "40.5422", 
      "lng": "71.0608", 
      "country": "Uzbekistan", 
      "iso2": "UZ", 
      "admin_name": "Farg‘ona", 
      "capital": "minor", 
      "population": "", 
      "population_proper": ""
    }, 
    {
      "city": "Tŭragŭrghon Shahri", 
      "lat": "41.0033", 
      "lng": "71.5106", 
      "country": "Uzbekistan", 
      "iso2": "UZ", 
      "admin_name": "Namangan", 
      "capital": "minor", 
      "population": "", 
      "population_proper": ""
    }, 
    {
      "city": "Uchqŭrghon Shahri", 
      "lat": "41.1137", 
      "lng": "72.0792", 
      "country": "Uzbekistan", 
      "iso2": "UZ", 
      "admin_name": "Namangan", 
      "capital": "minor", 
      "population": "", 
      "population_proper": ""
    }, 
    {
      "city": "Haqqulobod", 
      "lat": "40.9163", 
      "lng": "72.1206", 
      "country": "Uzbekistan", 
      "iso2": "UZ", 
      "admin_name": "Namangan", 
      "capital": "minor", 
      "population": "", 
      "population_proper": ""
    }, 
    {
      "city": "Pop Shahri", 
      "lat": "40.8764", 
      "lng": "71.1022", 
      "country": "Uzbekistan", 
      "iso2": "UZ", 
      "admin_name": "Namangan", 
      "capital": "minor", 
      "population": "", 
      "population_proper": ""
    }, 
    {
      "city": "Xonqa", 
      "lat": "41.4667", 
      "lng": "60.7833", 
      "country": "Uzbekistan", 
      "iso2": "UZ", 
      "admin_name": "Xorazm", 
      "capital": "minor", 
      "population": "", 
      "population_proper": ""
    }, 
    {
      "city": "Qo’shko’pir", 
      "lat": "41.5333", 
      "lng": "60.3500", 
      "country": "Uzbekistan", 
      "iso2": "UZ", 
      "admin_name": "Xorazm", 
      "capital": "minor", 
      "population": "", 
      "population_proper": ""
    }, 
    {
      "city": "Yangibozor", 
      "lat": "41.7108", 
      "lng": "60.5392", 
      "country": "Uzbekistan", 
      "iso2": "UZ", 
      "admin_name": "Xorazm", 
      "capital": "minor", 
      "population": "", 
      "population_proper": ""
    }, 
    {
      "city": "Hazorasp", 
      "lat": "41.3000", 
      "lng": "61.0833", 
      "country": "Uzbekistan", 
      "iso2": "UZ", 
      "admin_name": "Xorazm", 
      "capital": "minor", 
      "population": "", 
      "population_proper": ""
    }, 
    {
      "city": "Gurlan", 
      "lat": "41.8447", 
      "lng": "60.3919", 
      "country": "Uzbekistan", 
      "iso2": "UZ", 
      "admin_name": "Xorazm", 
      "capital": "minor", 
      "population": "", 
      "population_proper": ""
    }, 
    {
      "city": "Shovot", 
      "lat": "41.6500", 
      "lng": "60.3000", 
      "country": "Uzbekistan", 
      "iso2": "UZ", 
      "admin_name": "Xorazm", 
      "capital": "minor", 
      "population": "", 
      "population_proper": ""
    }, 
    {
      "city": "Bog’ot", 
      "lat": "41.3500", 
      "lng": "60.8167", 
      "country": "Uzbekistan", 
      "iso2": "UZ", 
      "admin_name": "Xorazm", 
      "capital": "minor", 
      "population": "", 
      "population_proper": ""
    }, 
    {
      "city": "Qorovul", 
      "lat": "41.5538", 
      "lng": "60.5823", 
      "country": "Uzbekistan", 
      "iso2": "UZ", 
      "admin_name": "Xorazm", 
      "capital": "minor", 
      "population": "", 
      "population_proper": ""
    }, 
    {
      "city": "Yangiariq", 
      "lat": "41.3628", 
      "lng": "60.6075", 
      "country": "Uzbekistan", 
      "iso2": "UZ", 
      "admin_name": "Xorazm", 
      "capital": "minor", 
      "population": "", 
      "population_proper": ""
    }, 
    {
      "city": "Ziyodin Shaharchasi", 
      "lat": "40.0311", 
      "lng": "65.6662", 
      "country": "Uzbekistan", 
      "iso2": "UZ", 
      "admin_name": "Samarqand", 
      "capital": "minor", 
      "population": "", 
      "population_proper": ""
    }, 
    {
      "city": "Qo’shrabod", 
      "lat": "40.2536", 
      "lng": "66.6885", 
      "country": "Uzbekistan", 
      "iso2": "UZ", 
      "admin_name": "Samarqand", 
      "capital": "minor", 
      "population": "", 
      "population_proper": ""
    }, 
    {
      "city": "Bulung’ur Shahri", 
      "lat": "39.7600", 
      "lng": "67.2744", 
      "country": "Uzbekistan", 
      "iso2": "UZ", 
      "admin_name": "Samarqand", 
      "capital": "minor", 
      "population": "", 
      "population_proper": ""
    }, 
    {
      "city": "Nurobod Shahri", 
      "lat": "39.6086", 
      "lng": "66.2867", 
      "country": "Uzbekistan", 
      "iso2": "UZ", 
      "admin_name": "Samarqand", 
      "capital": "minor", 
      "population": "", 
      "population_proper": ""
    }, 
    {
      "city": "Toyloq Qishlog’i", 
      "lat": "39.6014", 
      "lng": "67.0908", 
      "country": "Uzbekistan", 
      "iso2": "UZ", 
      "admin_name": "Samarqand", 
      "capital": "minor", 
      "population": "", 
      "population_proper": ""
    }, 
    {
      "city": "Jomboy Shahri", 
      "lat": "39.6989", 
      "lng": "67.0933", 
      "country": "Uzbekistan", 
      "iso2": "UZ", 
      "admin_name": "Samarqand", 
      "capital": "minor", 
      "population": "", 
      "population_proper": ""
    }, 
    {
      "city": "Samarqand Shahri", 
      "lat": "39.6542", 
      "lng": "66.9597", 
      "country": "Uzbekistan", 
      "iso2": "UZ", 
      "admin_name": "Samarqand", 
      "capital": "minor", 
      "population": "", 
      "population_proper": ""
    }, 
    {
      "city": "Loyish Shaharchasi", 
      "lat": "39.8790", 
      "lng": "66.7505", 
      "country": "Uzbekistan", 
      "iso2": "UZ", 
      "admin_name": "Samarqand", 
      "capital": "minor", 
      "population": "", 
      "population_proper": ""
    }, 
    {
      "city": "Ishtixon Shahri", 
      "lat": "39.9664", 
      "lng": "66.4861", 
      "country": "Uzbekistan", 
      "iso2": "UZ", 
      "admin_name": "Samarqand", 
      "capital": "minor", 
      "population": "", 
      "population_proper": ""
    }, 
    {
      "city": "Oqtosh Shahri", 
      "lat": "39.9268", 
      "lng": "65.9295", 
      "country": "Uzbekistan", 
      "iso2": "UZ", 
      "admin_name": "Samarqand", 
      "capital": "minor", 
      "population": "", 
      "population_proper": ""
    }, 
    {
      "city": "Payariq Shahri", 
      "lat": "39.9925", 
      "lng": "66.8501", 
      "country": "Uzbekistan", 
      "iso2": "UZ", 
      "admin_name": "Samarqand", 
      "capital": "minor", 
      "population": "", 
      "population_proper": ""
    }, 
    {
      "city": "Shahrisabz Shahri", 
      "lat": "39.0521", 
      "lng": "66.8208", 
      "country": "Uzbekistan", 
      "iso2": "UZ", 
      "admin_name": "Qashqadaryo", 
      "capital": "minor", 
      "population": "", 
      "population_proper": ""
    }, 
    {
      "city": "Qamashi Shahri", 
      "lat": "38.8200", 
      "lng": "66.4644", 
      "country": "Uzbekistan", 
      "iso2": "UZ", 
      "admin_name": "Qashqadaryo", 
      "capital": "minor", 
      "population": "", 
      "population_proper": ""
    }, 
    {
      "city": "Mug‘lon Shahar", 
      "lat": "38.9188", 
      "lng": "65.4122", 
      "country": "Uzbekistan", 
      "iso2": "UZ", 
      "admin_name": "Qashqadaryo", 
      "capital": "minor", 
      "population": "", 
      "population_proper": ""
    }, 
    {
      "city": "Koson Shahri", 
      "lat": "39.0447", 
      "lng": "65.5908", 
      "country": "Uzbekistan", 
      "iso2": "UZ", 
      "admin_name": "Qashqadaryo", 
      "capital": "minor", 
      "population": "", 
      "population_proper": ""
    }, 
    {
      "city": "Kitob Shahri", 
      "lat": "39.1225", 
      "lng": "66.8757", 
      "country": "Uzbekistan", 
      "iso2": "UZ", 
      "admin_name": "Qashqadaryo", 
      "capital": "minor", 
      "population": "", 
      "population_proper": ""
    }, 
    {
      "city": "Qorashina", 
      "lat": "38.3419", 
      "lng": "66.5634", 
      "country": "Uzbekistan", 
      "iso2": "UZ", 
      "admin_name": "Qashqadaryo", 
      "capital": "minor", 
      "population": "", 
      "population_proper": ""
    }, 
    {
      "city": "Chiroqchi Shahri", 
      "lat": "39.0273", 
      "lng": "66.5808", 
      "country": "Uzbekistan", 
      "iso2": "UZ", 
      "admin_name": "Qashqadaryo", 
      "capital": "minor", 
      "population": "", 
      "population_proper": ""
    }, 
    {
      "city": "Beshkent Shahri", 
      "lat": "38.8111", 
      "lng": "65.6425", 
      "country": "Uzbekistan", 
      "iso2": "UZ", 
      "admin_name": "Qashqadaryo", 
      "capital": "minor", 
      "population": "", 
      "population_proper": ""
    }, 
    {
      "city": "Yakkabog‘ Shahri", 
      "lat": "38.9766", 
      "lng": "66.6887", 
      "country": "Uzbekistan", 
      "iso2": "UZ", 
      "admin_name": "Qashqadaryo", 
      "capital": "minor", 
      "population": "", 
      "population_proper": ""
    }, 
    {
      "city": "Muborak Shahri", 
      "lat": "39.2578", 
      "lng": "65.1567", 
      "country": "Uzbekistan", 
      "iso2": "UZ", 
      "admin_name": "Qashqadaryo", 
      "capital": "minor", 
      "population": "", 
      "population_proper": ""
    }, 
    {
      "city": "Yangi Mirishkor", 
      "lat": "38.8514", 
      "lng": "65.2779", 
      "country": "Uzbekistan", 
      "iso2": "UZ", 
      "admin_name": "Qashqadaryo", 
      "capital": "minor", 
      "population": "", 
      "population_proper": ""
    }, 
    {
      "city": "Yangi-Nishon Shahri", 
      "lat": "38.6450", 
      "lng": "65.6895", 
      "country": "Uzbekistan", 
      "iso2": "UZ", 
      "admin_name": "Qashqadaryo", 
      "capital": "minor", 
      "population": "", 
      "population_proper": ""
    }, 
    {
      "city": "G‘uzor Shahri", 
      "lat": "38.6260", 
      "lng": "66.2452", 
      "country": "Uzbekistan", 
      "iso2": "UZ", 
      "admin_name": "Qashqadaryo", 
      "capital": "minor", 
      "population": "", 
      "population_proper": ""
    }, 
    {
      "city": "Gagarin Shahri", 
      "lat": "40.6647", 
      "lng": "68.1677", 
      "country": "Uzbekistan", 
      "iso2": "UZ", 
      "admin_name": "Jizzax", 
      "capital": "minor", 
      "population": "", 
      "population_proper": ""
    }, 
    {
      "city": "Uchtepa Qishlog’i", 
      "lat": "40.2045", 
      "lng": "67.9040", 
      "country": "Uzbekistan", 
      "iso2": "UZ", 
      "admin_name": "Jizzax", 
      "capital": "minor", 
      "population": "", 
      "population_proper": ""
    }, 
    {
      "city": "Zomin Shaharchasi", 
      "lat": "39.9606", 
      "lng": "68.3958", 
      "country": "Uzbekistan", 
      "iso2": "UZ", 
      "admin_name": "Jizzax", 
      "capital": "minor", 
      "population": "", 
      "population_proper": ""
    }, 
    {
      "city": "G’allaorol Shahri", 
      "lat": "40.0270", 
      "lng": "67.5878", 
      "country": "Uzbekistan", 
      "iso2": "UZ", 
      "admin_name": "Jizzax", 
      "capital": "minor", 
      "population": "", 
      "population_proper": ""
    }, 
    {
      "city": "Paxtakor Shahri", 
      "lat": "40.3118", 
      "lng": "67.9567", 
      "country": "Uzbekistan", 
      "iso2": "UZ", 
      "admin_name": "Jizzax", 
      "capital": "minor", 
      "population": "", 
      "population_proper": ""
    }, 
    {
      "city": "Usmat Shaharchasi", 
      "lat": "39.7398", 
      "lng": "67.6479", 
      "country": "Uzbekistan", 
      "iso2": "UZ", 
      "admin_name": "Jizzax", 
      "capital": "minor", 
      "population": "", 
      "population_proper": ""
    }, 
    {
      "city": "Zarbdor Shaharchasi", 
      "lat": "40.0808", 
      "lng": "68.1645", 
      "country": "Uzbekistan", 
      "iso2": "UZ", 
      "admin_name": "Jizzax", 
      "capital": "minor", 
      "population": "", 
      "population_proper": ""
    }, 
    {
      "city": "G’oliblar Qishlog’i", 
      "lat": "40.4953", 
      "lng": "67.8759", 
      "country": "Uzbekistan", 
      "iso2": "UZ", 
      "admin_name": "Jizzax", 
      "capital": "minor", 
      "population": "", 
      "population_proper": ""
    }, 
    {
      "city": "Yangiqishloq Shaharchasi", 
      "lat": "40.4152", 
      "lng": "67.1795", 
      "country": "Uzbekistan", 
      "iso2": "UZ", 
      "admin_name": "Jizzax", 
      "capital": "minor", 
      "population": "", 
      "population_proper": ""
    }, 
    {
      "city": "Zafarobod Shaharchasi", 
      "lat": "40.3890", 
      "lng": "67.8217", 
      "country": "Uzbekistan", 
      "iso2": "UZ", 
      "admin_name": "Jizzax", 
      "capital": "minor", 
      "population": "", 
      "population_proper": ""
    }, 
    {
      "city": "Do’stlik Shahri", 
      "lat": "40.5288", 
      "lng": "68.0315", 
      "country": "Uzbekistan", 
      "iso2": "UZ", 
      "admin_name": "Jizzax", 
      "capital": "minor", 
      "population": "", 
      "population_proper": ""
    }, 
    {
      "city": "Yangibozor Qishlog’i", 
      "lat": "40.0059", 
      "lng": "64.3736", 
      "country": "Uzbekistan", 
      "iso2": "UZ", 
      "admin_name": "Buxoro", 
      "capital": "minor", 
      "population": "", 
      "population_proper": ""
    }, 
    {
      "city": "Olot Shahri", 
      "lat": "39.4150", 
      "lng": "63.8033", 
      "country": "Uzbekistan", 
      "iso2": "UZ", 
      "admin_name": "Buxoro", 
      "capital": "minor", 
      "population": "", 
      "population_proper": ""
    }, 
    {
      "city": "Romitan Shahri", 
      "lat": "39.9294", 
      "lng": "64.3794", 
      "country": "Uzbekistan", 
      "iso2": "UZ", 
      "admin_name": "Buxoro", 
      "capital": "minor", 
      "population": "", 
      "population_proper": ""
    }, 
    {
      "city": "Qorovulbozor Shahri", 
      "lat": "39.5031", 
      "lng": "64.8114", 
      "country": "Uzbekistan", 
      "iso2": "UZ", 
      "admin_name": "Buxoro", 
      "capital": "minor", 
      "population": "", 
      "population_proper": ""
    }, 
    {
      "city": "Qorako‘l Shahri", 
      "lat": "39.5070", 
      "lng": "63.8488", 
      "country": "Uzbekistan", 
      "iso2": "UZ", 
      "admin_name": "Buxoro", 
      "capital": "minor", 
      "population": "", 
      "population_proper": ""
    }, 
    {
      "city": "Shofirkon Shahri", 
      "lat": "40.1200", 
      "lng": "64.5014", 
      "country": "Uzbekistan", 
      "iso2": "UZ", 
      "admin_name": "Buxoro", 
      "capital": "minor", 
      "population": "", 
      "population_proper": ""
    }, 
    {
      "city": "Jondor Shaharchasi", 
      "lat": "39.7417", 
      "lng": "64.1796", 
      "country": "Uzbekistan", 
      "iso2": "UZ", 
      "admin_name": "Buxoro", 
      "capital": "minor", 
      "population": "", 
      "population_proper": ""
    }, 
    {
      "city": "Galaosiyo Shahri", 
      "lat": "39.8572", 
      "lng": "64.4464", 
      "country": "Uzbekistan", 
      "iso2": "UZ", 
      "admin_name": "Buxoro", 
      "capital": "minor", 
      "population": "", 
      "population_proper": ""
    }, 
    {
      "city": "Quvasoy", 
      "lat": "40.2972", 
      "lng": "71.9803", 
      "country": "Uzbekistan", 
      "iso2": "UZ", 
      "admin_name": "Farg‘ona", 
      "capital": "minor", 
      "population": "", 
      "population_proper": ""
    }, 
    {
      "city": "Ravon", 
      "lat": "39.9772", 
      "lng": "71.1347", 
      "country": "Uzbekistan", 
      "iso2": "UZ", 
      "admin_name": "Farg‘ona", 
      "capital": "minor", 
      "population": "", 
      "population_proper": ""
    }, 
    {
      "city": "Qorao‘zak", 
      "lat": "43.0275", 
      "lng": "60.0125", 
      "country": "Uzbekistan", 
      "iso2": "UZ", 
      "admin_name": "Qoraqalpog‘iston", 
      "capital": "minor", 
      "population": "", 
      "population_proper": ""
    }, 
    {
      "city": "To‘rtko‘l Shahri", 
      "lat": "41.5606", 
      "lng": "61.0018", 
      "country": "Uzbekistan", 
      "iso2": "UZ", 
      "admin_name": "Qoraqalpog‘iston", 
      "capital": "minor", 
      "population": "", 
      "population_proper": ""
    }, 
    {
      "city": "Mo‘ynoq Shahri", 
      "lat": "43.7788", 
      "lng": "59.0304", 
      "country": "Uzbekistan", 
      "iso2": "UZ", 
      "admin_name": "Qoraqalpog‘iston", 
      "capital": "minor", 
      "population": "", 
      "population_proper": ""
    }, 
    {
      "city": "Qanliko‘l", 
      "lat": "42.8333", 
      "lng": "59.0000", 
      "country": "Uzbekistan", 
      "iso2": "UZ", 
      "admin_name": "Qoraqalpog‘iston", 
      "capital": "minor", 
      "population": "", 
      "population_proper": ""
    }, 
    {
      "city": "Taxtako‘pir", 
      "lat": "43.0225", 
      "lng": "60.2886", 
      "country": "Uzbekistan", 
      "iso2": "UZ", 
      "admin_name": "Qoraqalpog‘iston", 
      "capital": "minor", 
      "population": "", 
      "population_proper": ""
    }, 
    {
      "city": "Shumanay Shahri", 
      "lat": "42.6343", 
      "lng": "58.9306", 
      "country": "Uzbekistan", 
      "iso2": "UZ", 
      "admin_name": "Qoraqalpog‘iston", 
      "capital": "minor", 
      "population": "", 
      "population_proper": ""
    }, 
    {
      "city": "Kegeyli Shahar", 
      "lat": "42.7767", 
      "lng": "59.6078", 
      "country": "Uzbekistan", 
      "iso2": "UZ", 
      "admin_name": "Qoraqalpog‘iston", 
      "capital": "minor", 
      "population": "", 
      "population_proper": ""
    }, 
    {
      "city": "Mang‘it Shahri", 
      "lat": "42.1221", 
      "lng": "60.0628", 
      "country": "Uzbekistan", 
      "iso2": "UZ", 
      "admin_name": "Qoraqalpog‘iston", 
      "capital": "minor", 
      "population": "", 
      "population_proper": ""
    }, 
    {
      "city": "Beruniy Shahri", 
      "lat": "41.6990", 
      "lng": "60.7550", 
      "country": "Uzbekistan", 
      "iso2": "UZ", 
      "admin_name": "Qoraqalpog‘iston", 
      "capital": "minor", 
      "population": "", 
      "population_proper": ""
    }, 
    {
      "city": "Bo‘ston Shahri", 
      "lat": "41.8461", 
      "lng": "60.9474", 
      "country": "Uzbekistan", 
      "iso2": "UZ", 
      "admin_name": "Qoraqalpog‘iston", 
      "capital": "minor", 
      "population": "", 
      "population_proper": ""
    }, 
    {
      "city": "Qozonketkan", 
      "lat": "43.0191", 
      "lng": "59.3642", 
      "country": "Uzbekistan", 
      "iso2": "UZ", 
      "admin_name": "Qoraqalpog‘iston", 
      "capital": "minor", 
      "population": "", 
      "population_proper": ""
    }, 
    {
      "city": "Oqmang‘it", 
      "lat": "42.6000", 
      "lng": "59.5333", 
      "country": "Uzbekistan", 
      "iso2": "UZ", 
      "admin_name": "Qoraqalpog‘iston", 
      "capital": "minor", 
      "population": "", 
      "population_proper": ""
    }, 
    {
      "city": "Nurota Shahri", 
      "lat": "40.5676", 
      "lng": "65.6795", 
      "country": "Uzbekistan", 
      "iso2": "UZ", 
      "admin_name": "Navoiy", 
      "capital": "minor", 
      "population": "", 
      "population_proper": ""
    }, 
    {
      "city": "Konimex", 
      "lat": "40.2756", 
      "lng": "65.1381", 
      "country": "Uzbekistan", 
      "iso2": "UZ", 
      "admin_name": "Navoiy", 
      "capital": "minor", 
      "population": "", 
      "population_proper": ""
    }, 
    {
      "city": "Tomdibuloq", 
      "lat": "41.7531", 
      "lng": "64.6206", 
      "country": "Uzbekistan", 
      "iso2": "UZ", 
      "admin_name": "Navoiy", 
      "capital": "minor", 
      "population": "", 
      "population_proper": ""
    }, 
    {
      "city": "Qiziltepa Shahri", 
      "lat": "40.0254", 
      "lng": "64.8288", 
      "country": "Uzbekistan", 
      "iso2": "UZ", 
      "admin_name": "Navoiy", 
      "capital": "minor", 
      "population": "", 
      "population_proper": ""
    }, 
    {
      "city": "Karmana Shahri", 
      "lat": "40.1378", 
      "lng": "65.3754", 
      "country": "Uzbekistan", 
      "iso2": "UZ", 
      "admin_name": "Navoiy", 
      "capital": "minor", 
      "population": "", 
      "population_proper": ""
    }, 
    {
      "city": "Beshrabot", 
      "lat": "40.2167", 
      "lng": "65.3000", 
      "country": "Uzbekistan", 
      "iso2": "UZ", 
      "admin_name": "Navoiy", 
      "capital": "minor", 
      "population": "", 
      "population_proper": ""
    }
  ]
  const regionArr = [
        {   id:1,
            "admin_name": "Toshkent shahri", 
        },
        {
            id:2,
            "admin_name": "Buxoro",
        },
        {
            id:3,
            "admin_name": "Andijon",
        },
        {
            id:4,
            "admin_name": "Samarqand", 
        },
        {
            id:5,
            "admin_name": "Namangan",
        },
        {
            id:6,
            "admin_name": "Farg‘ona", 
        },
        {
            id:7,
            "admin_name": "Surxondaryo", 
        },
        {
            id:8,
            "admin_name": "Qoraqalpog‘iston Respublikasi",
        },
        {
            id:9,
            "admin_name": "Xorazm",
        },
        {
            id:10,
            "admin_name": "Navoiy",
        },
        {
            id:11,
            "admin_name": "Sirdaryo",
        },
        {   id:12,
            "admin_name": "Toshkent", 
        },
  ]
  function select(e){
    setState(e.target.value)
  }
    return(
        <>
            <div className="add-info container">
                    <h1 className="add-info__head">Заявитель</h1>
                    <form className="add-info__form" method='POST' action='#'>
                        <div className="add-info__info-wrraper">
                            <div>
                                <p className='add-info__page'>Фамилия, имя и отчество</p>
                                <input className='add-info__input' type={'text'} placeholder="Ф.И.О" required/>
                            </div>
                            <div>
                                <p className='add-info__page'>ПНФЛ</p>
                                <input className='add-info__input' type={'text'} placeholder="ПНФЛ" required/>
                            </div>
                        </div>
                        <div className="add-info__info-wrraper">
                            <div>
                                <p className='add-info__page'>Область</p>
                                <select className='add-info__select add-info__input' defaultValue={"Выберите свой область"} onChange={select}>
                                    <option disabled >Выберите свой область</option>
                                {
                                    regionArr?.map(el =>{
                                        return(
                                                <option key={el.id}>{el.admin_name}</option>
                                            )
                                        })
                                }
                                        </select>
                            </div>
                            <div>
                                <p className='add-info__page'>Район</p>
                                <select className='add-info__select add-info__input' defaultValue={"Выберите свой район"}>
                                    <option disabled >Выберите свой район</option>
                                    {
                                    // eslint-disable-next-line
                                        data?.map((el,index) =>{
                                            if (el.admin_name.includes(state)){
                                                return(
                                                        <option key={index} id={index}>{el.city}</option>
                                                    )
                                            }
                                            })
                                    }
                                </select>
                            </div>
                        </div>
                        <div className="add-info__info-wrraper">
                                <div>
                                    <p className='add-info__page'>Адрес</p>
                                    <input className='add-info__input' type={'text'} placeholder="Адрес"/>
                                </div>
                                <div>
                                    <p className='add-info__page'>Ваш номер телефон</p>
                                    <input className='add-info__input' type={'tel'} placeholder="Ваш номер телефон" required/>
                                </div>
                        </div>
                        <button className='add-info__btn'>Отправить</button>
                    </form>
            </div>
        </>
    )
}
export default Add;