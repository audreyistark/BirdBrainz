import { Navbar } from "@/components/Navbar";
import { Home } from "@/pages/Home";
import { Journey } from "@/pages/Journey";
import { Profile } from "@/pages/Profile";

function App() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />

      <main>
        <Home/>
        <Profile/>
        <Journey/>
      </main>
   </div>
  );
}

export default App;
