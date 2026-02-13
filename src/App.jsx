import AppProvider from "./app/AppProvider";
import Router from "./app/router";

function App() {
  return (
    <AppProvider>
      <Router />
    </AppProvider>
  );
}

export default App;
