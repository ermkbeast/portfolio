import './App.css';
import img1 from './assets/food.JPG'
import img2 from './assets/portfolio.JPG'
import imgtest1 from './assets/avatar1.jpg'
import imgtest2 from './assets/avatar2.jpg'
import imgtest3 from './assets/avatar3.jpg'
import imgtest4 from './assets/avatar4.jpg'
import About from './components/about/About'; 
import Contecejss from './components/contectss/Contecejss';
import Exprience from './components/exprience/Exprience';
import Footerjs from './components/footer/Footerjs';
import Header from './components/header/Header';
import Nav from './components/nav/Nav';
import Portfoliojs from './components/portfolio/Portfoliojs';
import Servicesjs from './components/services/Servicesjs';
import Testmonial from './components/testmonial/Testmonial';
const portfolio_data = [
  {
    id:1,
    image:img1,
    title:"food-app",
    gitln:"https://github.com/ermkbeast/ecom-laravel",
    live_link:"https://mkrect2.000webhostapp.com/"
  },
  {
    id:2,
    image:img2,
    title:"portfolio",
    gitln:"chidhgiu",
    live_link:"https://mkrect2.000webhostapp.com/"
  },
  {
    id:3,
    image:img2,
    title:"cart website",
    gitln:"https://github.com/ermkbeast/ecom-laravel",
    live_link:"https://mkrect2.000webhostapp.com/"
  },
  {
    id:4,
    image:img1,
    title:"cart website",
    gitln:"https://github.com/ermkbeast/ecom-laravel",
    live_link:"https://mkrect2.000webhostapp.com/"
  },
  {
    id:5,
    image:img1,
    title:"cart website",
    gitln:"https://github.com/ermkbeast/ecom-laravel",
    live_link:"https://mkrect2.000webhostapp.com/"
  },
  {
    id:6,
    image:img1,
    title:"cart website",
    gitln:"https://github.com/ermkbeast/ecom-laravel",
    live_link:"https://mkrect2.000webhostapp.com/"
  },

]
const testmonial_data =[
  {
    id:1,
    image:imgtest1,
    name:"mayank",
    para:"is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book"
  },
  {
    id:2,
    image:imgtest2,
    name:"anushks",
    para:"is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book"
  },
  {
    id:3,
    image:imgtest3,
    name:"kajal",
    para:"is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book"
  },
  {
    id:4,
    image:imgtest4,
    name:"vardhan",
    para:"is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book"
  },
  {
    id:5,
    image:imgtest4,
    name:"vardhan",
    para:"is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book"
  }
]
function App() {
  return (
    <div className="App">
      {
        console.log(portfolio_data)
      }
      <Header></Header>
      <Nav></Nav>
      <About></About>
      <Exprience></Exprience>
      <Servicesjs></Servicesjs>
      <Portfoliojs data ={portfolio_data}></Portfoliojs>
      {/* <Testmonial data={testmonial_data}></Testmonial> */}
      <Contecejss></Contecejss>
      <Footerjs></Footerjs>
    </div>
  );
}

export default App;
