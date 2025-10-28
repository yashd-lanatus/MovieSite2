import { Route, Routes } from 'react-router-dom'
import Layout from './Layout/Layout'
import HomePage from './components/Home'
import EditPage from './components/Edit'

function App() { 
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path='/home' element={<HomePage />} />
          <Route path='/edit' element={<EditPage />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
