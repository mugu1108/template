import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { SceneSelection } from './components/SceneSelection';
import { TemplateInput } from './components/TemplateInput';
import { FileFormatSelection } from './components/FileFormatSelection';
import { Preview } from './components/Preview';
import { useStore } from './store';

function App() {
  const selectedScene = useStore((state) => state.selectedScene);
  const formData = useStore((state) => state.formData);
  const selectedFormat = useStore((state) => state.selectedFormat);

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-50">
        <Navigation />
        <main className="container mx-auto py-8">
          <Routes>
            <Route path="/" element={<SceneSelection />} />
            <Route
              path="/template"
              element={
                selectedScene ? (
                  <TemplateInput />
                ) : (
                  <Navigate to="/" replace />
                )
              }
            />
            <Route
              path="/format"
              element={
                Object.keys(formData).length > 0 ? (
                  <FileFormatSelection />
                ) : (
                  <Navigate to="/template" replace />
                )
              }
            />
            <Route
              path="/preview"
              element={
                selectedFormat ? (
                  <Preview />
                ) : (
                  <Navigate to="/format" replace />
                )
              }
            />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;