import React from 'react'
import HousePrice from "../assets/videos/HousePricePrediction.jpg"
import Retail from "../assets/videos/RetailSales.jpg"
import Titanic from "../assets/videos/TitanicClasification.jpg"
import WebScrapping from "../assets/videos/WebScrapping.jpg"
import Breast from "../assets/videos/BreastCancerPrediction.jpg"
import energy from "../assets/videos/Energy2.jpg"
import bellabeat from "../assets/videos/Bellabeat.jpg"
import sales from "../assets/videos/Sales.jpg"
import { FiChevronsDown } from "react-icons/fi";
function Prueba() {
  function scrollToSection(event, sectionId) {
    event.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop -100,
        behavior: 'smooth'
      });
    }
  }
  return (
    <div class='w-full  '>
            <h3 className='text-center bg-custom pb-10 text-4xl font-bold	text-white'>My Projects</h3>
            <div class="bg-custom w-full text-center flex flex-wrap justify-center gap-4 pb-1 0  ">
           



            <div className='   flex flex-col   '>
            <div className='min-h-[560px]  flex flex-col  border md:px-16 h-auto w-[400px] border-gray-500 rounded-lg items-center'>
    <h3 className='text-center pb-6 py-4  text-2xl font-bold	text-zinc-200	'>Sales Prediction</h3>
    <div id="pepe" className='  w-3/4 flex justify-center rounded-lg hover:scale-150 transition-all duration-200 cursor-pointer ease-in-out shadow-xl shadow-slate-700'>
   <img className="opacity-100 rounded-md" src={Retail} />
    </div>
      <h3 className='py-8 text-white text-xs'>This project analyzes sales data using Python and Pandas, exploring numeric and categorical variables, visualizing distributions, handling missing values, and preparing the data for predictive modeling. </h3>

      
      <div className="flex pt-20">
        <h4 className='text-xs border border-grey-400 mx-auto my-4 bg-slate-100 rounded-lg p-2'>Pandas</h4>
    
        <h4 className='text-xs border border-grey-400 mx-auto my-4 bg-slate-100 rounded-lg p-2'>EDA</h4>
        <h4 className='text-xs border border-grey-400 mx-auto my-4 bg-slate-100 rounded-lg p-2'>Transformations</h4>
        <h4 className='text-xs border border-grey-400 mx-auto my-4 bg-slate-100 rounded-lg p-2'> Cleansing</h4>
        <h4 className='text-xs border border-grey-400 mx-auto my-4 bg-slate-100 rounded-lg p-2'>ML</h4>

    
  
      </div>
      
      <div  className="flex">
        <a href="https://colab.research.google.com/drive/1OvPYa4Ei6nDa6jD1Ok18EEV-mIg97hjh#scrollTo=2m6sSD53VXmr">
        <h4  className='hover:animate-wiggle hover:bg-pink-500 transition-colors duration-300 ease-in-out border-orange-400 mx-auto my-4 bg-slate-900 rounded-lg p-2 text-white border '>Code</h4></a>
        
      </div>
  </div>
</div>








<div className='flex flex-col '>
  <div className='min-h-[560px]  flex flex-col  border md:px-16 h-auto w-[400px] border-gray-500 rounded-lg items-center'>
    <h3 className='text-center pb-6 py-4  text-2xl font-bold	text-zinc-200	'>Breast Cancer Pred</h3>
    <div id="pepe" className='  w-3/4 flex justify-center rounded-lg hover:scale-150 transition-all duration-200 cursor-pointer ease-in-out shadow-xl shadow-slate-700'>
    <img className="opacity-100 rounded-md" src={Breast} />
    </div>
      <h3 className='py-8 text-white text-xs'>
      This analysis utilizes the Breast Cancer dataset to predict cancer presence using a neural network. The data is preprocessed and split into training and testing sets, followed by standardization. A neural network model is built and trained. </h3>
      
      <div className="flex pt-20">
        
        <h4 className='text-xs  border border-grey-400 mx-auto my-4 bg-slate-100 rounded-lg p-2'>TensorFlow</h4>
        <h4 className='text-xs border border-grey-400 mx-auto my-4 bg-slate-100 rounded-lg p-2'>Sklearn</h4>
     
        <h4 className='text-xs border border-grey-400 mx-auto my-4 bg-slate-100 rounded-lg p-2'>MatplotLibr</h4>
        <h4 className='text-xs border border-grey-400 mx-auto my-4 bg-slate-100 rounded-lg p-2'>ML</h4>

      </div>
      <div className="flex
      ">
     <a href="https://colab.research.google.com/drive/1JUg6npRYMWjQr5aiX8ECr8utu_tNmZuA">
        <h4  className='hover:animate-wiggle hover:bg-pink-500 transition-colors duration-300 ease-in-out border-orange-400 mx-auto my-4 bg-slate-900 rounded-lg p-2 text-white border '>Code</h4></a>
       
      </div>
  </div>
</div>

<div className=' flex flex-col '>
  <div className='min-h-[560px] flex flex-col  border md:px-16 h-auto w-[400px] border-gray-500 rounded-lg items-center'>
    <h3 className='text-center pb-6 py-4 text-2xl   font-bold	text-zinc-200	'>House Price Prediction</h3>
    <div id="pepe" className='  w-3/4 flex justify-center rounded-lg hover:scale-150 transition-all duration-200 cursor-pointer ease-in-out shadow-xl shadow-slate-700'>
    <img className="opacity-100 rounded-md" src={HousePrice} />
    </div>
      <h3 className='py-8 text-white text-xs'>Regression model to predict Argentina houses sales prices using Python and Pandas, exploring numeric and categorical variables, visualizing distributions, handling missing values, and preparing the data for predictive modeling.</h3>
     
      <h3 className='italic'></h3>
      <div className="flex pt-20">
        <h4 className='text-xs border border-grey-400 mx-auto my-4 bg-slate-100 rounded-lg p-2'>Pandas</h4>
        <h4 className='text-xs border border-grey-400 mx-auto my-4 bg-slate-100 rounded-lg p-2'>Numpy</h4>
        <h4 className='text-xs border border-grey-400 mx-auto my-4 bg-slate-100 rounded-lg p-2'>SciKitLearn</h4>
        <h4 className='text-xs border border-grey-400 mx-auto my-4 bg-slate-100 rounded-lg p-2'>EDA</h4>
        <h4 className='text-xs border border-grey-400 mx-auto my-4 bg-slate-100 rounded-lg p-2'>ML</h4>

      </div>
      <div className="flex 
      ">
       <a href="https://colab.research.google.com/drive/1B_oFYNfDhaiSw-uxQg72ZvKfMivAtUJF#scrollTo=z0R6J2sC56ZCy">
        <h4  className='hover:animate-wiggle hover:bg-pink-500 transition-colors duration-300 ease-in-out border-orange-400 mx-auto my-4 bg-slate-900 rounded-lg p-2 text-white border '>Code</h4></a>
       
    
       
      </div>
  </div>
</div>

<div className=' flex flex-col '>
  <div className='min-h-[560px] flex flex-col  border md:px-16 h-auto w-[400px] border-gray-500 rounded-lg items-center'>
    <h3 className='text-center pb-6 py-4 text-2xl   font-bold	text-zinc-200	'>Energy use Pred</h3>
    <div id="pepe" className='  w-3/4 flex justify-center rounded-lg hover:scale-150 transition-all duration-200 cursor-pointer ease-in-out shadow-xl shadow-slate-700'>
    <img className="opacity-100 rounded-md" src={energy} />
    </div>
      <h3 className='py-8 text-white text-xs'>
      Time serie energy consumption prediction. It preprocesses the data, splits it into training and testing sets, and creates features like day of the week and hour. An XGBoost regression model is used to train and predict energy consumption, with performance evaluated using mean squared error. Visualizations are used to explore and present the data and results.</h3>
      <h3 className='italic'></h3>

  

      <div className="flex pt-20
      ">
        <h4 className='text-xs border border-grey-400 mx-auto my-4 bg-slate-100 rounded-lg p-2'>Time Series</h4>
        <h4 className='text-xs border border-grey-400 mx-auto my-4 bg-slate-100 rounded-lg p-2'>XgBoost</h4>
        <h4 className='text-xs border border-grey-400 mx-auto my-4 bg-slate-100 rounded-lg p-2'>numpy</h4>
        <h4 className='text-xs border border-grey-400 mx-auto my-4 bg-slate-100 rounded-lg p-2'>ML</h4>
        
      </div>
      <div className="flex 
      ">
       <a href="https://colab.research.google.com/drive/1CB_S6RDKWf4i5kozWYWaUWRil4xKgGDY">
        <h4  className='hover:animate-wiggle hover:bg-pink-500 transition-colors duration-300 ease-in-out border-orange-400 mx-auto my-4 bg-slate-900 rounded-lg p-2 text-white border '>Code</h4></a>
       
    
      
      </div>
  </div>
</div>
<div className='flex flex-col '>
  <div className='min-h-[560px]  flex flex-col  border md:px-16 h-auto w-[400px] border-gray-500 rounded-lg items-center'>
    <h3 className='text-center pb-6 py-4  text-2xl font-bold	text-zinc-200	'>WebScrapping</h3>
    <div id="pepe" className='  w-3/4 flex justify-center rounded-lg hover:scale-150 transition-all duration-200 cursor-pointer ease-in-out shadow-xl shadow-slate-700'>
    <img className="opacity-100 rounded-md" src={WebScrapping} />
    </div>
      <h3 className='py-8 text-white text-xs'>This project uses Selenium and BeautifulSoup to scrape product data from the Carrefour Argentina website. It initializes a web driver, determines the number of pages to scrape, and collects product names and prices from each page. The scraped data is stored in a pandas DataFrame and saved to a CSV file.                                                                                                                                 
                                        
                                         
      </h3>
      
      <div className="flex pt-24
      ">
        <h4 className='text-xs  border border-grey-400 mx-auto my-4 bg-slate-100 rounded-lg p-2'>B Soup</h4>
        <h4 className='text-xs border border-grey-400 mx-auto my-4 bg-slate-100 rounded-lg p-2'>Selenium</h4>
        
        <h4 className='text-xs border border-grey-400 mx-auto my-4 bg-slate-100 rounded-lg p-2'>Scrapping</h4>
     
        <h4 className='text-xs border border-grey-400 mx-auto my-4 bg-slate-100 rounded-lg p-2'>Pandas</h4>
      </div>
      <div className="flex
      ">
     <a href="https://github.com/elopezfilippini/RetailScrapper">
        <h4  className='hover:animate-wiggle hover:bg-pink-500 transition-colors duration-300 ease-in-out border-orange-400 mx-auto my-4 bg-slate-900 rounded-lg p-2 text-white border '>Code</h4></a>
       
      </div>
  </div>
</div>


<div className='h-min-[700px] flex flex-col '>
  <div className='min-h-[560px]  h-min-[700px] flex flex-col  border md:px-16 h-auto w-[400px] border-gray-500 rounded-lg items-center justify-center'>
    <h3 className='text-center pb-6 py-4 text-2xl font-bold	text-zinc-200	'>Titanic Surviving Pred</h3>
    <div id="pepe" className='  w-3/4 flex justify-center rounded-lg hover:scale-150 transition-all duration-200 cursor-pointer ease-in-out shadow-xl shadow-slate-700'>
    <img className="opacity-100 rounded-md" src={Titanic} />
    </div>
      <h3 className='py-8 text-white text-xs'>This analysis examines the Titanic dataset, focusing on passenger demographics and survival rates. The data reveals correlations between factors such as age, gender, and class with survival outcomes. Visualizations and statistical methods are employed to highlight key patterns and insights.                                  
 
      </h3>
      <br></br>
      <br></br>
      <br></br>
     
      <h3 className='italic'></h3>
      <div className="flex pt-6
      ">
        <h4 className='text-xs border border-grey-400 mx-auto my-4 bg-slate-100 rounded-lg p-2'>EDA</h4>
        <h4 className='text-xs border border-grey-400 mx-auto my-4 bg-slate-100 rounded-lg p-2'>ML</h4>
        <h4 className='text-xs border border-grey-400 mx-auto my-4 bg-slate-100 rounded-lg p-2'>Classification</h4>
        <h4 className='text-xs border border-grey-400 mx-auto my-4 bg-slate-100 rounded-lg p-2'>Knn Imputer</h4>
      </div>
      <div className="flex
      ">
         <a href="https://colab.research.google.com/drive/1911xRE-JRn0cAvYZg6guwPrOiS7vT4Qk">
        <h4  className='hover:animate-wiggle hover:bg-pink-500 transition-colors duration-300 ease-in-out border-orange-400 mx-auto my-4 bg-slate-900 rounded-lg p-2 text-white border '>Code</h4></a>
     
      </div>
      
  </div>
  
</div>

<div className='h-min-[700px] flex flex-col '>
  <div className='min-h-[560px]  h-min-[700px] flex flex-col  border md:px-16 h-auto w-[400px] border-gray-500 rounded-lg items-center justify-center'>
    <h3 className='text-center pb-6 py-4 text-2xl font-bold	text-zinc-200	'>Bellabeat</h3>
    <div id="pepe" className='  w-3/4 flex justify-center rounded-lg hover:scale-150 transition-all duration-200 cursor-pointer ease-in-out shadow-xl shadow-slate-700'>
    <img className="opacity-100 rounded-md" src={bellabeat} />
    </div>
      <h3 className='py-8 text-white text-xs'>Data Analysis project made with Tableau . Analyses the uses of the smartwatches in the daily life.                                  
 
      </h3>
      <br></br>
      <br></br>
      <br></br>
     
      <h3 className='italic'></h3>
      <div className="flex pt-6
      ">
        <h4 className='text-xs border border-grey-400 mx-auto my-4 bg-slate-100 rounded-lg p-2'>Tableau</h4>
        <h4 className='text-xs border border-grey-400 mx-auto my-4 bg-slate-100 rounded-lg p-2'>Statistics</h4>
        <h4 className='text-xs border border-grey-400 mx-auto my-4 bg-slate-100 rounded-lg p-2'>Data Analysis</h4>
        
        
      </div>
      <div className="flex
      ">
         <a href="https://public.tableau.com/app/profile/emiliano.filippini/viz/BellabeatCase-GoogleDataAnalyticsCapstone/Presentacion">
        <h4  className='hover:animate-wiggle hover:bg-pink-500 transition-colors duration-300 ease-in-out border-orange-400 mx-auto my-4 bg-slate-900 rounded-lg p-2 text-white border '>Code</h4></a>
     
      </div>
      
  </div>
  
</div>


<div className='h-min-[700px] flex flex-col '>
  <div className='min-h-[560px]  h-min-[700px] flex flex-col  border md:px-16 h-auto w-[400px] border-gray-500 rounded-lg items-center justify-center'>
    <h3 className='text-center pb-6 py-4 text-2xl font-bold	text-zinc-200	'>Sales Analysis</h3>
    <div id="pepe" className='  w-3/4 flex justify-center rounded-lg hover:scale-150 transition-all duration-200 cursor-pointer ease-in-out shadow-xl shadow-slate-700'>
    <img className="opacity-100 rounded-md" src={sales} />
    </div>
      <h3 className='py-8 text-white text-xs'>Data Analysis project made with Tableau. Analyses the uses of sales through different periods.
 
      </h3>
      <br></br>
      <br></br>
      <br></br>
     
      <h3 className='italic'></h3>
      <div className="flex pt-6
      ">
        <h4 className='text-xs border border-grey-400 mx-auto my-4 bg-slate-100 rounded-lg p-2'>Tableau</h4>
        <h4 className='text-xs border border-grey-400 mx-auto my-4 bg-slate-100 rounded-lg p-2'>Statistics</h4>
        <h4 className='text-xs border border-grey-400 mx-auto my-4 bg-slate-100 rounded-lg p-2'>Data Analysis</h4>
        
        
      </div>
      <div className="flex
      ">
         <a href="https://public.tableau.com/app/profile/emiliano.filippini/viz/Sales_17144293251900/Cliente">
        <h4  className='hover:animate-wiggle hover:bg-pink-500 transition-colors duration-300 ease-in-out border-orange-400 mx-auto my-4 bg-slate-900 rounded-lg p-2 text-white border '>Code</h4></a>
     
      </div>
      
  </div>
  
</div>









</div>
        </div>


  )
}

export default Prueba


// Energy consumption https://colab.research.google.com/drive/1CB_S6RDKWf4i5kozWYWaUWRil4xKgGDY
// House Pricing https://colab.research.google.com/drive/1B_oFYNfDhaiSw-uxQg72ZvKfMivAtUJF
// Breast Cancer https://colab.research.google.com/drive/1JUg6npRYMWjQr5aiX8ECr8utu_tNmZuA
// Titanic https://colab.research.google.com/drive/1911xRE-JRn0cAvYZg6guwPrOiS7vT4Qk
// Sales Prediction https://colab.research.google.com/drive/1OvPYa4Ei6nDa6jD1Ok18EEV-mIg97hjh