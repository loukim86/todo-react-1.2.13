import React from "react";
import Header from "../Header/Header";
import TaskList from "../TaskList/TaskList";
import Footer from "../Footer/Footer";

import './App.css';

const App = () => {
    const tasks = [
        { id: 1, state: 'completed', description: 'Completed task', created: 'created 17 seconds ago' },
        { id: 2, state: 'editing', description: 'Editing task', created: 'created 5 minutes ago' },
        { id: 3, state: '', description: 'Active task', created: 'created 5 minutes ago' }
    ];

return (
  <section className="todoapp">
      <Header />
      <section className="main">
          <TaskList taskData={tasks} />
          <Footer />
      </section>
  </section>
 );
};

export default App;




    

   

    
