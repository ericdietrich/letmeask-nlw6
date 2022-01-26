import { BrowserRouter , Route, Switch } from 'react-router-dom';

import { Home } from "./pages/Home";
import { NewRoom } from "./pages/NewRoom";

import { AuthContextProvider } from './context/AuthContext';
import { Room } from './pages/Room';

function App() {


  return (
    <BrowserRouter>
      <AuthContextProvider>
        {/* Switch permite que apenas uma única rota seja acessada ao mesmo tempo */}
        <Switch>
          <Route path="/" exact component={Home}  />
          <Route path="/rooms/new" component={NewRoom}  />
          <Route path="/rooms/:id" component={Room}  />
        </Switch>
      </AuthContextProvider>
      
    </BrowserRouter>
  );
}

export default App;
