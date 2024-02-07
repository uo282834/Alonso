import React from 'react'
import {Routes, Route, BrowserRouter} from 'react-router-dom';
import { Welcome } from './Welcome';
import { Curriculum } from './Curriculum';
import { Projects } from './Projects';
import { Contact } from './Contact';
import { Header } from './LayoutsComponents/Header';
import { Footer } from './LayoutsComponents/Footer';
export const RoutesApp = () => {
  return (
    <div className='layout'>
        <BrowserRouter>
          <Header />

          <section className='content'>
            <Routes>
                <Route path="/" element={<Welcome/>} />
                <Route path="/curriculum" element={<Curriculum/>} />
                <Route path="/projects" element={<Projects/>} />
                <Route path="/contact" element={<Contact/>} />
            </Routes>
          </section>
          <Footer />
        </BrowserRouter>
    </div>
  )
}
