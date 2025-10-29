import React from 'react';
import { Search, Star, Users, Camera, Hammer, LogIn, Instagram, Youtube, Linkedin, Apple, Play, ShieldCheck, ChevronRightIcon, ChevronLeftIcon } from 'lucide-react';

import Rectangle1 from './assets/Rectangle1.png';
import Rectangle2 from './assets/Rectangle2.png';
import Rectangle3 from './assets/Rectangle3.png';
import image1 from './assets/image1.svg';
import image2 from './assets/image2.svg';
import image3 from './assets/image3.svg';
import image4 from './assets/image4.svg';
import mockCelular from  './assets/mockCelular.png'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';


export default function Landing() {
  return (
    <div className="min-h-screen bg-white text-neutral-900 ">
      <Header />
      <Hero />
      <PopularGrid />
      <HowItWorks />
      <Testimonials/>
      <Footer />
      
    </div>
  );
}

//Header
function Header() {
  return (
    <header className=" bg-[#F5EBD7] border-b border-neutral-200 py-4">
      <div className="max-w-6xl mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center gap-2 font-bold text-lg">
          <Hammer className="h-5 w-5 text-yellow-700 " />
          Ajeitaí
        </div>

        <nav className="hidden md:flex gap-5 text-sm">
          <a href="#" className="font-semibold text-sm hover:text-yellow-800">
            SERVIÇOS
          </a>
          <a href="#" className="font-semibold text-sm hover:text-yellow-800">
            PRESTADORES
          </a>
          <a href="#" className="font-semibold text-sm hover:text-yellow-800">
            AJUDA
          </a>
        </nav>

        <div className=" flex justify-end gap-3 font-medium">
          <button
            className="border border-gray-300 bg-white px-4 py-2 rounded-md text-sm shadow-sm font-semibold 
  hover:bg-gray-50 hover:border-gray-400 
  focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 
  transition duration-50"
          >
            Login
          </button>

          <button className="border border-yellow-500 bg-yellow-400 px-4 py-2 rounded-md text-sm shadow-sm focus:ring-2 focus:ring-yellow-700 hover:bg-yellow-500 hover:border-yellow-600  ">
            Cadastrar-se
          </button>
        </div>
      </div>
    </header>
  );
}

//funcao Hero
function Hero() {
  return (
    <section className="flex flex-col justify-center py-10 ">
      <h1 className="text-3xl font-bold mb-2 align-center flex justify-center">
        Mais de 500 tipos de serviços em um só lugar
      </h1>
      <p className="text-gray-700 mb-6 flex justify-center">
        Encontre profissionais para todo tipo de serviço
      </p>
      <div className="max-w-lg mx-auto relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 h-5 w-5" />
        <input
          type="text"
          placeholder="O que você precisa?"
          className="w-full border border-gray-300 rounded-full py-2 pl-10 pr-4 focus:ring-2 focus:ring-gray-200 outline-none "
        />
      </div>
    </section>
  );
}

const popular = [
  {
    title: 'Diarista',
    img: Rectangle1,
  },
  {
    title: 'Pedreiro',
    img: Rectangle3,
  },
  {
    title: 'Encanador',
    img: Rectangle2,
  },
];

function PopularGrid() {
  return (
    <section className="max-w-6xl mx-auto px-4 mt-10 text-center">
      <div className=" flex justify-center text-2xl font-bold text-center mb-6 border-b-1 border-yellow-700 inline-block">
        Mais buscados
      </div>

      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 mt-6">
        {popular.map((item) => (
          <div
            key={item.title}
            className="bg-white rounded-xl overflow-hidden shadow hover:shadow-lg transition border border-gray-200"
          >
            <img
              src={item.img}
              alt={item.title}
              className="w-auto h-auto object-contain"
            />
            <div className="p-3 text-center font-semibold text-gray-800">
              {item.title}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function HowItWorks() {
  return (
    <section className=" mt-20 py-16 bg-[repeating-linear-gradient(to_right,#F7D57E,#F7D57E_100px,#F5C765_100px,#F5C765_200px)]">
      <div className="text-center font-bold text-3xl mb-14 text-neutral-900">
        Como funciona?
      </div>

      <div className="max-w-6xl mx-auto flex justify-between items-start px-8 flex-wrap gap-10">
        {/* Etapa 1 */}
        <div className="flex flex-col items-center text-center w-56">
          <img src={image1} alt="buscar" className="w-20 h-20 mb-4" />
          <h3 className="text-base font-semibold mb-2">
            Busque o serviço que você precisa
          </h3>
          <p className="text-sm text-gray-800">
            Encanamento, pintura, elétrica? É só procurar no nosso catálogo de
            serviços.
          </p>
        </div>

        {/* Etapa 2 */}
        <div className="flex flex-col items-center text-center w-56">
          <img src={image2} alt="orcamento" className="w-20 h-20 mb-4" />
          <h3 className="text-base font-semibold mb-2">
            Solicite um orçamento, envie fotos e explique sua necessidade
          </h3>
          <p className="text-sm text-gray-800">
            Faça o pedido direto pelo site e acompanhe tudo por lá, com
            transparência e suporte.
          </p>
        </div>

        {/* Etapa 3 */}
        <div className="flex flex-col items-center text-center w-56">
          <img src={image3} alt="profissionais" className="w-20 h-20 mb-4" />
          <h3 className="text-base font-semibold mb-2">
            Veja os profissionais disponíveis
          </h3>
          <p className="text-sm text-gray-800">
            Compare avaliações, preços e disponibilidades para escolher o
            profissional ideal.
          </p>
        </div>

        {/* Etapa 4 */}
        <div className="flex flex-col items-center text-center w-56">
          <img src={image4} alt="avaliar" className="w-20 h-20 mb-4" />
          <h3 className="text-base font-semibold mb-2">Avalie e recomende</h3>
          <p className="text-sm text-gray-800">
            Depois do serviço, deixe sua avaliação para ajudar outros usuários a
            escolherem bem!
          </p>
        </div>
      </div>
    </section>
  );
}

//relatos mockados
const relatos = [
  {
    id: 1,
    nome: "Maria Oliveira",
    texto:
      "Encontrei uma diarista excelente pelo Ajeitaí! O serviço foi rápido, seguro e muito prático de contratar.",
    img: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bXVsaGVyfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=500'
  },
  {
    id: 2,
    nome: "Carlos Souza",
    texto:
      "O encanador chegou no horário e resolveu tudo na hora. Gostei muito da experiência!",
    img:'https://plus.unsplash.com/premium_photo-1689977927774-401b12d137d6?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8aG9tbWV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=500',
  },
  {
    id: 3,
    nome: "Ana Paula",
    texto:
      "Gostei do suporte e da facilidade de comparar profissionais. A plataforma é muito intuitiva!",
    img: 'https://plus.unsplash.com/premium_photo-1705018501151-4045c97658a3?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fG11bGhlcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=500'
  },
  {
    id: 4,
    nome: "Rafael Mendes",
    texto:
      "Usei para contratar um eletricista e o serviço foi impecável. Recomendo totalmente!",
    img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8aG9tZW18ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=500'
  },
];

function Testimonials() {
  return (
    <section className="max-w-5xl mx-auto py-20 px-6 text-center">
      <h2 className="text-3xl font-bold mb-10">O que dizem nossos usuários</h2>

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        slidesPerView={1}
        spaceBetween={30}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        loop={true}
        className="w-full"
      >
        {relatos.map((relato) => (
          <SwiperSlide key={relato.id}>
            <div className="bg-[#FFF9E6] rounded-2xl shadow-md  my-10 py-10 p-10 max-w-2xl mx-auto text-gray-800 relative">
    {/* Imagem de perfil */}
    <img
      src={relato.img}
      alt={relato.nome}
      className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-md absolute -top-8 left-1/2 transform -translate-x-1/2"
    />

    <div className="pt-10">
      <p className="italic mb-4 text-lg">“{relato.texto}”</p>
      <p className="font-semibold text-yellow-700">— {relato.nome}</p>
    </div>
  </div>
          </SwiperSlide>
          
        ))}
      </Swiper>

      
    </section>
  );
}

function Footer() {
  return (
    <footer className="relative bg-[#F5EBD7] py-10 mt-auto text-gray-700 overflow-hidden">
      <div className="max-w-6xl mx-auto flex justify-between items-end px-6 relative">
        
        {/* Coluna esquerda (logo e links) */}
        <div className="flex flex-col space-y-4">
          <div className="font-bold text-lg text-[#F4A300]">Ajeitaí</div>
          <div className="flex space-x-6 text-sm">
            <a href="#" className="hover:underline">Termos de Uso</a>
            <a href="#" className="hover:underline">Política de Privacidade</a>
          </div>
        </div>

        {/* Texto centralizado */}
        <div className="flex-1 text-center text-sm mt-10">
          © 2025 Ajeitaí — Todos os direitos reservados
        </div>

        {/* Coluna direita - Redes sociais / Downloads / Certificação */}
        <div className="flex flex-col text-right space-y-5 mr-44">
          {/* Redes sociais */}
          <div>
            <div className="font-semibold mb-1">Redes sociais</div>
            <div className="flex justify-end space-x-3">
              <a href="#" className="hover:text-[#FF66CC] transition"><Instagram size={20} /></a>
              <a href="#" className="hover:text-[#FF0000] transition"><Youtube size={20} /></a>
              <a href="#" className="hover:text-[#0077B5] transition"><Linkedin size={20} /></a>
            </div>
          </div>

          {/* Downloads */}
          <div>
            <div className="font-semibold mb-1">Downloads</div>
            <div className="flex justify-end space-x-3">
              <a href="#" className="hover:text-gray-900 transition"><Apple size={20} /></a>
              <a href="#" className="hover:text-green-600 transition"><Play size={20} /></a>
            </div>
          </div>

          {/* Certificações */}
          <div>
            <div className="font-semibold mb-1">Certificações</div>
            <div className="flex justify-end items-center space-x-2">
              <ShieldCheck size={20} className="text-green-700" />
              <span className="text-sm font-medium">RA1000</span>
            </div>
          </div>
        </div>

        {/* Imagem do celular no canto inferior direito */}
        <img
          src={mockCelular}
          alt="Celular"
          className="relative bottom-0 right-0 w-40 h-70 pointer-events-none"
        />
      </div>
    </footer>
  );
}
