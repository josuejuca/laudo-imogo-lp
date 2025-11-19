import './styles/theme.css';
import './styles/global.css';
import { Header } from './components/Header';
import { SectionForm } from './components/SectionForm';
import { SectionInfo } from './components/SectionInfo';
import { SectionApp } from './components/SectionApp';
import { SectionBeneficios } from './components/SectionBeneficios';
import { Footer } from './components/Footer';

export function App() {
  return (
    <>
      <Header />
      <SectionForm />
      <SectionInfo />
      <SectionApp />
      <SectionBeneficios />
      <Footer />
    </>
  );
}