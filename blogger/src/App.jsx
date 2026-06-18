import React from "react";
import "./App.css";
import { BrowserRouter, data, Route, Routes, useNavigate } from "react-router-dom";
import Myblogs from "./assets/Components/pages/Myblogs";
import Learnreact from "./assets/Components/pages/Learnreact";
import Frontend from "./assets/Components/pages/Frontend";
import Python from "./assets/Components/pages/Python";
import DM from "./assets/Components/pages/DM";
import Ux from "./assets/Components/pages/Ui/Ux"
import Dataanalyst from "./assets/Components/pages/Ui/Dataanalyst";
import Graphicss from "./assets/Components/pages/Ui/Graphicss";
import Datascience from "./assets/Components/pages/Ui/Datascience";
import Header from "./assets/Components/Header";

function Home() {

  const navigate = useNavigate();

  const blogs = [
    {
      id: 1,
      title: "Mern stack Development",
      description: "MERN stack development is a full-stack JavaScript framework used to build fast, scalable, and dynamic web applications",
      author: "Binshan",
      date: "5/March/2026",
      route: "/blog"
    },
    {
      id: 2,
      title: "Learning React",
      description: "React makes UI React means to act, behave, or respond in a specific way as a direct result of something else happening. It is an action taken in return to a stimulus, event, or force.  easy and fun.",
      author: "Niyas",
      date: "23/February/2026",
      route: "/blog1"
    },
    {
      id: 3,
      title: "Frontend Development",
      description: "HTML, CSS and JavaScript are important for building websites.",
      author: "Ameen",
      date: " 13/January/2026",
      route: "/blog2"
    },
    {
      id: 4,
      title: "Python Development",
      description: "Python is a popular programming language,high-level, interpreted programming language known for its simplicity and readability",
      author: "Jareesha",
      date: " 15/April/2026",
      route: "/blog3"
    },
    {
      id:5,
      title:"Digital marketing",
      description:"Digital marketing is the act of promoting products, services, or brands using online channels like social media, search engines, email, and websites.",
      author:"Sajid",
      date:"30/may/2026",
      route:"/blog4"
    },
    {
      id:6,
      title:"UI/UX",
      description:"UI stands for user UI/UX design improves user satisfaction, increases customer retention, and enhances brand reputation, leading to better conversion rates and lower support costs.",
      author:"althaf",
      date:"18/10/2025",
      route:"/blog5"
    },

    {
      id:7,
      title:"Data analytics",
      description:"Data analytics is the practice of using analytics tools to derive insights from datasets to inform decisions",
      author:"himran",
      date:"22/3/2025",
      route:"/blog6"
    },
    {
      id:8,
      title:"Graphic design",
      description:"The art and practice of using typography, color, shapes, and imagery to visually communicate ideas and solve problems",
      author:"sajad",
      date:"20/1/2025",
      route:"/blog7"
    },
    {
      id:9,
      title:"Data Science",
      description:"Data science is an interdisciplinary field that combines mathematics, statistics, specialized programming (such as Python or SQL)",
      author:"kartik",
      data:"4/3/2026",
      route:"/blog8"
    }


  

      
  ];

  return (
    <div className="app">
      <header className="header">
        <h1>Blog</h1>
        <p>Welcome to my blog website</p>
      </header>

      <div className="blog-container">
        {blogs.map((blog) => (
          <div className="card" key={blog.id}>
            <h2>{blog.title}</h2>
            <p className="date">{blog.date}</p>
            <p>{blog.description}</p>
            <p className="author" style={{color:"black"}}>By {blog.author}</p>
            <button  onClick={() => navigate(`${blog.route}`)}>Read More</button>

            {/* <button onClick={() => navigate("/blog1")} >more</button> */}
          </div>
        ))}
      </div>

      <footer className="footer">
        <p>© 2026 Blog. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Myblogs />} />
        <Route path="/blog1" element={<Learnreact/>}/>
        <Route path="/blog2" element={<Frontend/>}/>
        <Route path="/blog3" element={<Python/>}/>
        <Route path="/blog4" element={<DM/>}/>
        <Route path="/blog5" element={<Ux/>}/>
        <Route path="/blog6" element={<Dataanalyst/>}/>
        <Route path="/blog7" element={<Graphicss/>}/>
        <Route path="/blog8" element={<Datascience/>}/>
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;