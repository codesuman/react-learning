import UserGreeting from "./components/UserGreeting";

function App() {
  return(
    <UserGreeting isLoggedIn={true} userName="Admin"/>
  );
}

export default App
