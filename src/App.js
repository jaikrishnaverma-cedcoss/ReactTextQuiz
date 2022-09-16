import './BaseUI.css';
import './App.css';
import Main from './components/Main';

function App() {

  const quiz=[
    {
      question:"Why the color of blood is RED?",
    options:["Himnoglobin","Clorofil","Acid Property","None of these","Base property"],
    answer:0
  },
  {
    question:"Who is the Founder of Nucleus?",
  options:["Robert Hook","Chandwik","Einstine","None of these","Thomson"],
  answer:1
 },
 {
  question:"Who is the Founder of Proton?",
options:["Robert Hook","Chandwik","Rutherford","None of these","Thomson"],
answer:2
},
{
  question:"Who is the Founder of Electron?",
options:["Robert Hook","Chandwik","Einstine","None of these","Thomson"],
answer:4
},
{
  question:"Who is the Founder of Cells?",
options:["Robert Hook","Chandwik","Einstine","None of these","Thomson"],
answer:0
},
{
  question:"Who Descoverd Electric Bulb?",
options:["Robert Hook","T. A. Adission","Einstine","None of these","Thomson"],
answer:1
}
  ]
  return (

    <div className="App" style={{backgroundColor:"#dbdbdb"}}>
     <Main paper={quiz}/>
    </div>
  );
}

export default App;
