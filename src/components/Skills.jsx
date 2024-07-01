
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



function projects() {




  return (
    <div className={`w-full flex flex-col justify-center items-center`}>
      <h3 className='py-8 text-4xl font-bold'> Tech Skills </h3>
      <div className='sm:w-full md:w-1/2 flex-row justify-center items-center pb-5  animate-pulse animate-ease-linear'>
        <h4>Front End</h4>
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
      </div>
      <div className='sm:w-full md:w-1/2 flex-row justify-center items-center pb-5  animate-pulse animate-ease-linear'>
        <h4>Back End</h4>
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
      <div className='sm:w-full md:w-1/2 flex-row justify-center items-center pb-5  animate-pulse animate-ease-linear'>
        <h4>Others</h4>
        <div className='py-10 flex gap-4 justify-center  '>
          <div>
            <img src={python} className='w-[80px] h-[40px]  lg:w-[70px] lg:h-[60px] xl:w-[70px] xl:h-[60px]' alt="Python" />
            <h3 className="hidden sm:block text-blue-400 p-2" >Python for ML</h3>
          </div>
          <div>
            <img src={git} className='w-[80px] h-[40px] lg:w-[70px] lg:h-[60px] xl:w-[70px] xl:h-[60px]' alt="Git" />
            <h3  className="hidden sm:block text-blue-400 p-2">Git</h3>
          </div>
          <div>
            <img src={agile3} className='w-[80px] h-[40px] lg:w-[70px] lg:h-[60px] xl:w-[70px] xl:h-[60px]' alt="Agile" />
            <h3  className="hidden sm:block text-blue-400 p-2">Agile</h3>
          </div>
          <div>
            <img src={pg} className='w-[80px] h-[40px]  lg:w-[70px] lg:h-[60px] xl:w-[70px] xl:h-[60px]' alt="PostgreSQL" />
            <h3  className="hidden sm:block text-blue-400 p-2">PostgreSQL</h3>
          </div>
          <div>
            <img src={mysql} className='w-[80px] h-[40px]  lg:w-[70px] lg:h-[60px] xl:w-[70px] xl:h-[60px]' alt="MySQL" />
            <h3  className="hidden sm:block text-blue-400 p-2">MySQL</h3>
          </div>
          <div>
            <img src={auth0} className='w-[80px] h-[40px]  lg:w-[70px] lg:h-[60px] 2xl:w-[70px] 2xl:h-[60px]  ' alt="Auth0" />
            <h3  className="hidden sm:block text-blue-400 p-2">Auth0</h3>
          </div>
        </div>
      </div>
   
    </div>
  );
}

export default projects;
