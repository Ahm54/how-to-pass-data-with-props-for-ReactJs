import './App.css';
import Angular from './images/2524396_40ec_3.jpg';
import bootstrap5 from './images/bootstrap-social.png';
import frontend from './images/front-end-developer-.jpg';
import kompleweb from './images/indir.png';
import 'bulma/css/bulma.css';
import { Course } from './components/course';
import Parent from './Parent';

function App() {
  // Parent komponent App.js dosyasıdır. child komponent ise course.js dosyasıdır. Bu kısımda Parent'tan Child komponente props gönderilmiştir.
  return (
    <div className="App">
      <section className='hero is-link'>
        <div className='hero-body'>
          <p className='title'>Kurslarım</p>
        </div>
      </section>
      <div className='container'>
        <section className='section'> 

        </section>
        <div className='columns'>
          <div className='column'>
            <Course image={Angular} title="Angular" description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum." />
          </div>
          <div className='column'>
            <Course image={bootstrap5} title="Bootstrap-5" description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum." />
          </div>
          <div className='column'>
            <Course image={kompleweb} title="Komple Web" description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum." />
          </div>
          <div className='column'>
            <Course image={frontend} title="Frontend" description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum." />
          </div>
        </div>
      </div>
      <Parent />
    </div>
  );
}

export default App;
