import { useState } from 'react';
import './App.css';
import TodoList from './TodoList';
import CategorySelector from './CategorySelector';
import CategoryList from './CategoryList';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  const [categoryId, setCategoryId] = useState(0);
  const router = (<Router>
    <Routes>
      <Route
        path="/"
        element={
          <>
            <CategorySelector value={categoryId} handleChange={(id) => setCategoryId(id)} />
            <TodoList categoryId={categoryId} />
          </>
        } />
      <Route path="/categorias" element={<CategoryList />} />
    </Routes>
  </Router>);

  return (
    <div className="app">
      <header className="app-header">
        <h1 className="app-logo">todos</h1>
      </header>
      <section>
        {router}
      </section>
    </div>
  );
}

export default App;
