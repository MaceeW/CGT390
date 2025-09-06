import './App.css'
import Card1 from './components/Card1'
import Card2 from './components/Card2'
import Navbar from './components/Header'
import About from './components/Introduction'
import Card from './components/Card'
import Wrapper from './components/CardWrapper'
import img1 from "./assets/ProfileBar.jpg"
import img2 from "./assets/ProfileBar.jpg"

function App() {
  const profiles = [
    {name: "Charlie", title: "Software Engineer", email: "Charlie@example.com", img: img1},
    {name: "Dan", title: "UX Designer", email: "Dan@example.com", img: img2}
  ]
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <Wrapper>
          <h1>Profile App</h1>
        </Wrapper>
        <div className="section">
          <div className="container">
             <About />
          </div>
        </div>
        <div className="section">
          <div className="container">
             <div className="centered-flex-container">
              <h1>Profiles</h1>
              <div className="profile-cards-wrapper">
                {
                  profiles.map((profile) => (
                    <Card key={profile.email} name={profile.name} title={profile.title} email={profile.email} img={profile.img} />
                  ))
                }
              </div>
              </div>
          </div>
        </div>
      </main>
           
    </>
  )
}

export default App;