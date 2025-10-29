import React from 'react';
import { Search, Star, Users, Camera, Hammer, LogIn, Instagram, Youtube, Linkedin, Apple, Play, ShieldCheck } from 'lucide-react';

import Rectangle1 from './assets/Rectangle1.png';
import Rectangle2 from './assets/Rectangle2.png';
import Rectangle3 from './assets/Rectangle3.png';
import image1 from './assets/image1.svg';
import image2 from './assets/image2.svg';
import image3 from './assets/image3.svg';
import image4 from './assets/image4.svg';
import mockCelular from  './assets/mockCelular.png'

export default function Landing() {
  return (
    <div className="min-h-screen bg-white text-neutral-900 ">
      <Header />
      <Hero />
      <PopularGrid />
      <HowItWorks />
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
