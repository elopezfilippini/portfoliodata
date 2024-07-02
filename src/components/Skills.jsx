
import agile3 from "../assets/Icons/agile3.png";
import auth0 from "../assets/Icons/Auth0.png";
import css from "../assets/Icons/css.png";
import express from "../assets/Icons/express.png";
import git from "../assets/Icons/git.png";
import html from "../assets/Icons/html5.png";
import javascript from "../assets/Icons/javascript.png";
import mysql from "../assets/Icons/mysql.png";
import node from "../assets/Icons/node.png";
import pg from "../assets/Icons/pg.png";
import python from "../assets/Icons/python.png";
import react from "../assets/Icons/react.png";
import redux from "../assets/Icons/redux.png";
import restfulapi from "../assets/Icons/restfulapi.png";
import sequelize from "../assets/Icons/sequelize.png";
import tailwind from "../assets/Icons/tailwind.png";
import athena from "../assets/Icons/athena.png";
import powerbi from "../assets/Icons/PowerBi.png";
import tableau from "../assets/Icons/tableau.png";
import glue from "../assets/Icons/glue.png";
import redshift from "../assets/Icons/redshift.png";
import scikit from "../assets/Icons/scikitlearn.png";
import selenium from "../assets/Icons/selenium.png";
import pandas from "../assets/Icons/pandas.png";
import tensor from "../assets/Icons/tensorFlow.png";
import numpy from "../assets/Icons/Numpy.png";
import matplot from "../assets/Icons/matplot.png";
import aws from "../assets/Icons/aws.png";




function projects() {




  return (
    <div className={`w-full flex flex-col justify-center items-center`}>
      <h3 className='py-8 text-4xl font-bold'> Tech Skills </h3>
      <div className='sm:w-full md:w-1/2 flex-row justify-center items-center pb-5'>
        <h4 class= "text-2xl">Data Science</h4>
      <div className='py-10 flex gap-4 justify-center'>
        <div className='py-10 flex gap-4 justify-center '>
          <div>
            <img src={python} className='w-[80px] h-[40px]  lg:w-[70px] lg:h-[60px] xl:w-[70px] xl:h-[60px]' alt="Python" />
            <h3 className="hidden sm:block text-blue-400 p-2" >Python for ML</h3>
          </div>
          <div>
            <img src={pandas} className='w-[80px] h-[40px] lg:w-[70px] lg:h-[60px] xl:w-[70px] xl:h-[60px]' alt="Git" />
            <h3  className="hidden sm:block text-blue-400 p-2">Pandas</h3>
          </div>
          <div>
            <img src={numpy} className='w-[80px] h-[40px] lg:w-[70px] lg:h-[60px] xl:w-[70px] xl:h-[60px]' alt="Agile" />
            <h3  className="hidden sm:block text-blue-400 p-2">Numpy</h3>
          </div>
          <div>
            <img src={matplot} className='w-[80px] h-[40px]  lg:w-[70px] lg:h-[60px] xl:w-[70px] xl:h-[60px]' alt="PostgreSQL" />
            <h3  className="hidden sm:block text-blue-400 p-2">MatplotLib</h3>
          </div>
          <div>
            <img src={scikit} className='w-[80px] h-[40px]  lg:w-[70px] lg:h-[60px] xl:w-[70px] xl:h-[60px]' alt="MySQL" />
            <h3  className="hidden sm:block text-blue-400 p-2">Scikit-learn</h3>
          </div>
          <div>
            <img src={tensor} className='w-[80px] h-[40px]  lg:w-[70px] lg:h-[60px] 2xl:w-[70px] 2xl:h-[60px]  ' alt="Auth0" />
            <h3  className="hidden sm:block text-blue-400 p-2">TensorFlow</h3>
          </div>
          <div>
            <img src={selenium} className='w-[80px] h-[40px]  lg:w-[70px] lg:h-[60px] 2xl:w-[70px] 2xl:h-[60px]  ' alt="Auth0" />
            <h3  className="hidden sm:block text-blue-400 p-2">Selenium</h3>
          </div>
          <div>
            <img src={aws} className='w-[80px] h-[40px]  lg:w-[70px] lg:h-[60px] 2xl:w-[70px] 2xl:h-[60px]  ' alt="Auth0" />
            <h3  className="hidden sm:block text-blue-400 p-2">AWS</h3>
            
          </div>
          <div>
            <img src={athena} className='w-[80px] h-[40px]  lg:w-[70px] lg:h-[60px] 2xl:w-[70px] 2xl:h-[60px]  ' alt="Auth0" />
            <h3  className="hidden sm:block text-blue-400 p-2">Athena</h3>
            
          </div>
          <div>
            <img src={redshift} className='w-[80px] h-[40px]  lg:w-[70px] lg:h-[60px] 2xl:w-[70px] 2xl:h-[60px]  ' alt="Auth0" />
            <h3  className="hidden sm:block text-blue-400 p-2">redshift</h3>
            
          </div>
          <div>
            <img src={glue} className='w-[80px] h-[40px]  lg:w-[70px] lg:h-[60px] 2xl:w-[70px] 2xl:h-[60px]  ' alt="Auth0" />
            <h3  className="hidden sm:block text-blue-400 p-2">glue</h3>
            
          </div>
          <div>
            <img src={tableau} className='w-[80px] h-[40px]  lg:w-[70px] lg:h-[60px] 2xl:w-[70px] 2xl:h-[60px]  ' alt="Auth0" />
            <h3  className="hidden sm:block text-blue-400 p-2">Tableua</h3>
            
          </div>
          <div>
            <img src={powerbi} className='w-[80px] h-[40px]  lg:w-[70px] lg:h-[60px] 2xl:w-[70px] 2xl:h-[60px]  ' alt="Auth0" />
            <h3  className="hidden sm:block text-blue-400 p-2">PowerBi</h3>
            
          </div>
        </div>
      </div>
      
        <h4>Dev</h4>
        <div className='py-10 flex gap-4 justify-center'>
          <div>
            <img src={css} className='text-pink-50 w-[80px] h-[40px]  lg:w-[50px] lg:h-[50px] xl:w-[70px] xl:h-[60px]' alt="CSS" />
            <h3 className="hidden sm:block text-pink-400 p-2">CSS</h3>
          </div>
          <div>
            <img src={html} className='text-pink-50 w-[80px] h-[40px]  lg:w-[70px] lg:h-[60px] xl:w-[70px] xl:h-[60px] ' alt="HTML" />
            <h3 className="hidden sm:block text-pink-400 p-2">HTML 5</h3>
          </div>
          <div>
            <img src={tailwind} className='text-pink-50 w-[80px] h-[40px]  lg:w-[70px] lg:h-[60px] xl:w-[70px] xl:h-[60px]' alt="Tailwind CSS" />
            <h3 className="hidden sm:block text-pink-400 p-2">Tailwind </h3>
          </div>
          <div>
            <img src={react} className='text-pink-50 w-[80px] h-[40px]  lg:w-[70px] lg:h-[60px] xl:w-[70px] xl:h-[60px]' alt="React" />
            <h3 className="hidden sm:block text-pink-400 p-2">React</h3>
          </div>
          <div>
            <img src={redux} className='text-pink-50 w-[80px] h-[40px]  lg:w-[70px] lg:h-[60px] xl:w-[70px] xl:h-[60px]' alt="Redux" />
            <h3 className="hidden sm:block text-pink-400 p-2">Redux</h3>
          </div>
          <div>
            <img src={javascript} className='w-[80px] h-[40px]  lg:w-[70px] lg:h-[60px] xl:w-[70px] xl:h-[60px]' alt="JavaScript" />
            <h3 className="hidden sm:block text-pink-400 p-2">JavaScript</h3>
          </div>
        </div>
 
   

        <div className='py-10 flex gap-4 justify-center'>
          <div>
            <img src={node} className='w-[80px] h-[40px]  lg:w-[70px] lg:h-[60px] xl:w-[70px] xl:h-[60px]' alt="Node" />
            <h3 className="hidden sm:block text-orange-400 p-2">Node.js</h3>
          </div>
          <div>
            <img src={express} className='w-[80px] h-[40px]  lg:w-[70px] lg:h-[60px] xl:w-[70px] xl:h-[60px] ' alt="Express.js" />
            <h3 className="hidden sm:block text-orange-400 p-2">Express.js</h3>
          </div>
          <div>
            <img src={restfulapi} className='w-[80px] h-[40px]  lg:w-[70px] lg:h-[60px] xl:w-[70px] xl:h-[60px]' alt="RESTful API" />
            <h3 className="hidden sm:block text-orange-400 p-2">RESTful API</h3>
          </div>
          <div>
            <img src={pg} className='w-[80px] h-[40px]  lg:w-[70px] lg:h-[60px] xl:w-[70px] xl:h-[60px]' alt="PostgreSQL" />
            <h3 className="hidden sm:block text-orange-400 p-2">PostgreSQL</h3>
          </div>
          <div>
            <img src={sequelize} className='w-[80px] h-[40px]  lg:w-[70px] lg:h-[60px] xl:w-[70px] xl:h-[60px]' alt="Sequelize" />
            <h3 className="hidden sm:block text-orange-400 p-2">Sequelize</h3>
          </div>
        </div>
      </div>
    
      <div className={`w-full flex flex-col justify-center items-center`}>
      <h3 className='py-8 text-4xl font-bold'> Tutorials </h3>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/hgr_NajTlp4"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Tutorial Scrapping"
      ></iframe>
    </div>
    </div>
  );
}

export default projects;
