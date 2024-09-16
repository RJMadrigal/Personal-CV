import './App.css'
import {Helmet} from 'react-helmet'

function App() {
  

  return (
    <>
    <Helmet>
 
      <title>Ronald Josue Madrigal Murillo - CV</title>
        <meta name="description" content="Ronald Josue Madrigal Murillo - Junior Fullstack Developer CV" />
        <meta name="keywords" content="Fullstack Developer, CV, Portfolio, React Developer, C#, .NET" />
        <meta name="author" content="Ronald Josue Madrigal Murillo" />

        <meta property="og:title" content="Ronald Josue Madrigal Murillo - Junior Fullstack Developer" />
        <meta property="og:description" content="Personal CV and Portfolio showcasing my skills and projects" />
        <meta property="og:image" content="/avatar.png" />
        <meta property="og:url" content="https://rjmadrigal.github.io/myportfolio/" />
        <meta property="og:type" content="website" />

        <link rel="icon" href="/avatar.ico" />

    </Helmet>
    <div className='container'>
    <hr />
      <header>
        <h1>Ronald Josue Madrigal Murillo</h1>
        <h2 className="title">Junior Fullstack Developer</h2>
        <p>SJ, Costa Rica</p>
        <p>(506) 8428-8371</p>
        <p>josuemadrigalvevo@gmail.com</p>
      </header>
      
      <section>
        <h2 className="title">Skills</h2>
        <p>HTML, CSS, JavaScript, C#, Python, SQL, React, .NET, JQuery, Networks, CI/CD</p>
      </section>

      <section>
        <h2 className="title">Education</h2>
        <article>
          <h3 className="title-blue">Universidad Autonoma de Centroamerica, Costa Rica</h3>
          <p>Engineering System, April 2022 to April 2025</p>
          <p>During my journey, I gained a lot of skills in Software Development and IT.</p>
        </article>
      </section>

      <section>
        <h2 className="title">Experience</h2>
        <article>
          <h3 className="title-blue">ERP System for Hotel (University Project)</h3>
          <ul>
            <li>Designed system architecture, implemented user roles, and developed the backend using C# ASP.NET Core with a SQL Server database.</li>
          </ul>
        </article>

        <article>
          <h3 className="title-blue">Personal Website Portfolio</h3>
          <ul>
            <li>Designed and developed a modern, fully responsive web portfolio using React and Bootstrap.</li>
          </ul>
        </article>
      </section>

      <footer>

        <h2 className="title">Across the Internet</h2>
        <a className='link' href='https://www.linkedin.com/in/rjosuemadrigal/'>Linkedin</a>
        <a href='https://github.com/RJMadrigal'>GitHub</a>
      </footer>
      <hr />
      </div>
    </>
  )
}

export default App
