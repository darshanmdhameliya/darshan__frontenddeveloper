import "./index.css";
import ComA from "./components/ComA"
import Profile from "./Usecontext/components/Profile"
import Login from "./Usecontext/components/Login"
import UserContextProvider from "./Usecontext/context/UserContextProvider"
function App() {

  return (
    <>
    <ComA/>
    <h1 className="heading">T his is App Components</h1>
      {/* <UserContextProvider>
        <Profile />
        <Login />
      </UserContextProvider> */}
    </>
  );
}

export default App;
