import { Routes, Route } from 'react-router-dom';
import NavBar from './components/Navbar';
import Add from './routes/Add';
import Home from './routes/Home';
import Login from './routes/Login';
import './App.css';
import { fetchEntries, fetchTerms, fetchUsers } from './utils/fetchData';

function App() {
  const entries = fetchEntries();
  const terms = fetchTerms();
  const users = fetchUsers();
  console.log('entries: ', entries, '\nterms: ', terms, '\nusers: ', users);

  const onAddEntry = async (communityId, selected) => {
    console.log(selected);
  };

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<NavBar />}>
          <Route index path="/" element={<Home />} />
          <Route path="/add" element={<Add />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<div>Error</div>} />
        </Route>
      </Routes>
      <>
        {entries && terms && users ? (
          entries.map((entry, index) => (
            <div key={index}>
              <h2>{terms[entry.termid]}</h2>
              <h3>Definition</h3>
              <p>{entry.definition}</p>
              <h3>Example</h3>
              <p>{entry.example}</p>
            </div>
          ))
        ) : (
          <div>loading...</div>
        )}
        {/* This will be an admin only section once we add authorization */}
        <section className="add-entry">
          <h2>Add New Entry</h2>
          <div className="text-box">
            <div className="text-box-item">
              <select id="term-select">
                {terms &&
                  Object.keys(terms).map((key) => (
                    <option key={key} value={terms[key]}>
                      {terms[key]}
                    </option>
                  ))}
              </select>
            </div>
            <div className="text-box-item">
              <input className="definition-text-box" placeholder="Example" />
            </div>
            <div className="text-box-item">
              <textarea className="example-text-box" placeholder="Definition goes here..." />
            </div>
            <button onClick={onAddEntry}>Add Entry</button>
          </div>
        </section>
      </>
    </div>
  );
}

export default App;
