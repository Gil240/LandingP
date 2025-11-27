import svgPaths from "./svg-n7e7p1qnpy";
import imgRectangle from "figma:asset/621bffb82fd52906562afbbcb44e3800fb5d28ff.png";
import img from "../assets/Principal.jpg"
import imgIA from "../assets/IA.jpg"



function Logo() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <div className="[grid-area:1_/_1] h-[24px] ml-[59px] mt-[15px] relative w-[89px]">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[588.51%] left-[-92.87%] max-w-none top-[-405.75%] w-[282. 73%]" src={imgRectangle} />
        </div>
      </div>
      <div className="[grid-area:1_/_1] h-[54px] ml-0 mt-0 relative w-[53px]">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[179. 65%] left-[-117.14%] max-w-none top-[-25.26%] w-[332.86%]" src={imgRectangle} />
        </div>
      </div>
    </div>
  );
}

// ...  resto del código igual

function PageLink() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 cursor-pointer transition-all duration-300 hover:scale-105" data-name="pageLink1">
      <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[15px] text-[rgba(255,255,255,0.8)] text-nowrap whitespace-pre transition-colors duration-300 hover:text-white">Inicio</p>
    </div>
  );
}

function PageLink1() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 cursor-pointer transition-all duration-300 hover:scale-105" data-name="pageLink2">
      <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[15px] text-[rgba(255,255,255,0.8)] text-nowrap whitespace-pre transition-colors duration-300 hover:text-white">Sobre nosotros</p>
    </div>
  );
}

function PageLink2() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 cursor-pointer transition-all duration-300 hover:scale-105" data-name="pageLink3">
      <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[15px] text-[rgba(255,255,255,0.8)] text-nowrap whitespace-pre transition-colors duration-300 hover:text-white">Paquetes</p>
    </div>
  );
}

function PageLink3() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 cursor-pointer transition-all duration-300 hover:scale-105" data-name="pageLink4">
      <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[15px] text-[rgba(255,255,255,0.8)] text-nowrap whitespace-pre transition-colors duration-300 hover:text-white">Contacto</p>
    </div>
  );
}

function PageLinks() {
  return (
    <div className="content-stretch flex gap-[32px] items-start relative shrink-0" data-name="pageLinks">
      <PageLink />
      <PageLink1 />
      <PageLink2 />
      <PageLink3 />
    </div>
  );
}

function Div() {
  return (
    <div className="content-stretch flex gap-[23px] items-center relative shrink-0" data-name="Div">
      <Logo />
      <PageLinks />
    </div>
  );
}

function ButtonFilledStandard() {
  return (
    <div className="bg-gradient-to-r box-border content-stretch flex from-[#6b4cff] items-center justify-center px-[16px] py-[8px] relative rounded-[8px] shrink-0 to-[rgba(107,76,255,0.8)] cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/50" data-name="buttonFilledStandard">
      <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[15px] text-nowrap text-white whitespace-pre">Unete gratis</p>
    </div>
  );
}

function ButtonGroup() {
  return (
    <div className="content-stretch flex gap-[32px] items-center relative shrink-0" data-name="buttonGroup">
      <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[15px] text-[rgba(255,255,255,0.8)] text-nowrap whitespace-pre">Log in</p>
      <ButtonFilledStandard />
    </div>
  );
}

function SoftwareCompanyHeader() {
  return (
    <div className="relative box-border content-stretch flex items-center justify-between mx-auto px-[48px] py-[16px] w-full max-w-[1344px] h-full" data-name="Software Company Header">
      <Div />
      <ButtonGroup />
    </div>
  );
}

function Header() {
  return (
    <div 
      className="fixed bg-gradient-to-b from-[#0f3d3c] to-[#0a2928] h-[97px] left-0 top-0 w-full"
      style={{ zIndex: 9999 }}
      data-name="Header"
    >
      <SoftwareCompanyHeader />
      {/* Divider aquí, fuera del SoftwareCompanyHeader */}
      <div className="absolute bottom-0 left-0 right-0 h-[2px]">
        <svg className="block w-full h-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1536 2">
          <path d="M0 1H1536" stroke="url(#paint0_linear_header)" strokeWidth="2" />
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_header" x1="0" x2="1536" y1="1" y2="1">
              <stop stopColor="#1BC8C0" />
              <stop offset="0. 5" stopColor="#6B4CFF" />
              <stop offset="1" stopColor="#1BC8C0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Headline() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-center relative shrink-0" data-name="Headline">
      <div className="[grid-area:1_/_1] bg-[rgba(27,200,192,0.6)] border border-[#1bc8c0] border-solid h-[56px] ml-0 mt-0 rounded-[10px] w-[663px]" data-name="Headline Background" />
      <p className="[grid-area:1_/_1] font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[32px] relative text-[24px] text-center text-white px-[20px]">Plataforma colaborativa B2B2C

</p>
    </div>
  );
}

function ButtonMarketing() {
  return (
    <div className="bg-gradient-to-r box-border content-stretch flex from-[#6b4cff] items-center justify-center px-[24px] py-[12px] relative rounded-[8px] shrink-0 to-[rgba(107,76,255,0.8)] cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/50" data-name="buttonMarketing?">
      <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[24px] relative shrink-0 text-[20px] text-nowrap text-white whitespace-pre">Unete Gratis</p>
    </div>
  );
}

function Content() {
  return (
    <div className="content-stretch flex flex-col gap-[30px] items-center relative shrink-0 w-full" data-name="content">
        <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-center relative shrink-0" data-name="Headline">
          <div className="[grid-area:1_/_1] bg-[rgba(27,200,192,0.6)] border border-[#1bc8c0] border-solid h-[56px] ml-0 mt-0 rounded-[10px] w-[663px]" data-name="Headline Background" />
          <p className="[grid-area:1_/_1] font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[32px] relative text-[24px] text-center text-white px-[20px]">Inteligencia que une, conecta y transforma.</p>
        </div>
      <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[120px] min-w-full shrink-0 text-[120px] text-[rgba(0,0,0,0.8)] text-center w-[min-content]">Comercio local, tradición viva</p>
      <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal min-h-[32px] leading-[32px] shrink-0 text-[24px] text-black text-center w-[624px] mb-[40px]">impulsa la economía local conectando clientes, microempresas y repartidores en un solo lugar. Pide lo que necesitas y deja que la comunidad se mueva por ti.</p>
      <div className="bg-gradient-to-r box-border content-stretch flex from-[#6b4cff] items-center justify-center px-[24px] py-[12px] rounded-[8px] shrink-0 to-[rgba(107,76,255,0.8)] cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/50" data-name="buttonMarketing? ">
        <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[24px] shrink-0 text-[20px] text-nowrap text-white whitespace-pre">Unete Gratis</p>
      </div>
      <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[32px] shrink-0 text-[16px] text-[rgba(0,0,0,0. 6)] text-center w-full max-w-[624px]">No se necesita información de pago</p>
    </div>
  );
}

function ButtonContainer() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0.8)] box-border content-stretch flex gap-[8px] items-center justify-center left-[40px] px-[32px] py-[16px] rounded-[8px] top-[843px] w-[429px] cursor-pointer transition-all duration-300 hover:bg-black hover:scale-105 hover:shadow-xl" data-name="Button Container">
      <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[24px] relative shrink-0 text-[20px] text-nowrap text-white whitespace-pre">Explore IKNAL</p>
    </div>
  );
}

function Logomark() {
  return (
    <div className="relative shrink-0 size-[63px]" data-name="logomark">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 63 63">
        <g id="logomark">
          <path d={svgPaths.p35f54000} id="Icon" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.8" strokeWidth="5.625" />
        </g>
      </svg>
    </div>
  );
}

function Logo1() {
  return (
    <div className="absolute content-stretch flex gap-[9px] h-[72px] items-center left-1/2 top-[229px] translate-x-[-50%]" data-name="logo">
      <Logomark />
      <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-none relative shrink-0 text-[63px] text-[rgba(0,0,0,0.8)] text-nowrap whitespace-pre">IKNAL</p>
    </div>
  );
}

function HeroMobileUi() {
  return (
    <div className="absolute bg-white h-[971px] left-[calc(50%-0.5px)] rounded-[44px] top-[22px] translate-x-[-50%] w-[509px]" data-name="hero mobile UI">
      <div className="h-[971px] overflow-clip relative rounded-[inherit] w-[509px]">
        {/* Imagen centrada que cubre todo el contenedor */}
        <img 
          src={img} 
          alt="Descripción de la imagen"
          className="absolute inset-0 w-full h-full object-cover object-center rounded-[inherit]"
        />
      </div>
    </div>
  );
}

function Ui() {
  return (
    <div className="h-[923px] overflow-clip relative shrink-0 w-full" data-name="ui">
      <HeroMobileUi />
    </div>
  );
}

function Container() {
  return (
    <div className="absolute box-border content-stretch flex flex-col gap-[162px] h-[1601px] items-center left-[-96px] pb-0 pt-[96px] px-[96px] right-[-96px] top-[calc(50%-40px)] translate-y-[-50%]" data-name="container" style={{ backgroundImage: "linear-gradient(171.16deg, rgb(255, 255, 255) 25.884%, rgb(15, 61, 60) 88.341%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)" }}>
      <Content />
      <Ui />
    </div>
  );
}

function LandingPageHeroWithTaglineAndMobileAppMockup() {
  return (
    <div className="bg-white h-[1521px] overflow-clip relative shrink-0 w-full z-[6]" data-name="Landing Page Hero With Tagline and Mobile App Mockup">
      <Container />
    </div>
  );
}

function ImgPlaceholder() {
  return (
    <div className="relative h-[557px] w-[659px] rounded-[8px] overflow-hidden bg-gradient-to-r from-[#6b4cff]/60 to-[#6b4cff]/20 shadow-md">

      {/* Contenido escrito */}
      <div className="absolute top-0 left-0 p-12 z-20">
        <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[52px] text-[48px] text-white">
          Busca rapida y sencilla
        </p>

        <p className="font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[20px] text-[16px] text-white mt-4">
          Encuentra lo que necesitas sin complicarte.
        </p>

        <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[22px] text-[16px] text-white text-justify mt-4 w-[90%]">
          Explora productos disponibles en negocios locales y socios
          revendedores con solo unos clics. Nuestra plataforma identifica
          rápidamente quién lo tiene y te muestra opciones inmediatas
          cerca de ti.
        </p>
      </div>

      {/* Imagen al fondo */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[85%] h-[320px] z-10">
        <img 
          src={imgIA}
          alt="preview"
          className="w-full h-full object-contain object-bottom pointer-events-none"
        />
      </div>

      {/* Borde */}
      <div className="absolute inset-0 border-2 border-[#1bc8c0] rounded-[8px] pointer-events-none" />
    </div>
  );
}


function AltImgPlaceholder() {
  return (
    <div className="bg-gradient-to-r from-[#6b4cff] h-[557px] relative rounded-[8px] shrink-0 to-[rgba(107,76,255,0.8)] w-[659px] cursor-pointer transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-purple-500/30" data-name="img placeholder">
      <div className="h-[557px] overflow-clip relative rounded-[inherit] w-[659px]">
        <p className="absolute font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[52px] left-[51px] text-[48px] text-nowrap text-white top-[62px] whitespace-pre">Impacto social</p>
        <p className="absolute font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[22px] left-[51px] text-[16px] text-justify text-white top-[156px] w-[536px]">Cada pedido activa un ciclo económico positivo: genera ingresos para microempresas locales, crea oportunidades para repartidores y fomenta el crecimiento del comercio de barrio.</p>
        <p className="absolute font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[20px] left-[53px] text-[16px] text-justify text-white top-[125px] w-[556px]">Tu compra fortalece la economía de tu comunidad.</p>
        <div className="absolute bg-[#d9d9d9] h-[315px] left-[53px] top-[315px] w-[554px]" data-name="Image Background" />
        <div className="absolute h-[316px] left-[-45px] top-[315px] w-[751px]" data-name="Image">
          <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full"  />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-2 border-[#1bc8c0] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}


function SimpleCategoryCardFixed() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] h-[557px] items-start relative shrink-0 w-[674px]" data-name="Simple Category Card[fixed]">
      <ImgPlaceholder />
    </div>
  );
}

function AltSimpleCategoryCardFixed() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] h-[557px] items-start relative shrink-0 w-[674px]" data-name="Simple Category Card[fixed]">
      <AltImgPlaceholder />
    </div>
  );
}

function ImgPlaceholder1() {
  return (
    
    <div className="bg-gradient-to-b from-[#16938e] h-[557px] relative rounded-[8px] shrink-0 to-[#125e5c] w-[659px] cursor-pointer transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-teal-500/30" data-name="img placeholder">
      <div className="h-[557px] overflow-clip relative rounded-[inherit] w-[659px]">
        <p className="absolute font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[52px] left-[59px] text-[48px] text-nowrap text-white top-[62px] whitespace-pre">Entrega confiable</p>
        <div className="absolute bg-[#d9d9d9] h-[315px] left-[53px] top-[314px] w-[554px]" data-name="Image Background" />
        <p className="absolute font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[22px] left-[59px] text-[16px] text-justify text-white top-[155px] w-[536px]">Repartidores verificados recolectan tu compra directamente del socio local y la llevan a tu puerta. Cada entrega es rastreable y supervisada para garantizar seguridad y puntualidad.</p>
        <p className="absolute font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[20px] left-[61px] text-[16px] text-justify text-white top-[124px] w-[556px]">Tu pedido, siempre en buenas manos.</p>
        <div className="absolute h-[316px] left-[-57px] top-[313px] w-[751px]" data-name="Image">
          <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full"  />
        </div>
        <div className="absolute h-[316px] left-[-57px] top-[313px] w-[751px]" data-name="Image">
          <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-2 border-[#1bc8c0] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function AltImgPlaceholder1() {
  return (
    
    <div className="bg-gradient-to-b from-[#16938e] h-[557px] relative rounded-[8px] shrink-0 to-[#125e5c] w-[659px] cursor-pointer transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-teal-500/30" data-name="img placeholder">
      <div className="h-[557px] overflow-clip relative rounded-[inherit] w-[659px]">
        <p className="absolute font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[52px] left-[59px] text-[48px] text-nowrap text-white top-[62px] whitespace-pre">Precios accesibles</p>
        <div className="absolute bg-[#d9d9d9] h-[315px] left-[53px] top-[314px] w-[554px]" data-name="Image Background" />
        <p className="absolute font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[22px] left-[59px] text-[16px] text-justify text-white top-[155px] w-[536px]">Al eliminar intermediarios tradicionales, conectamos directamente a clientes con socios locales, permitiendo obtener mejores precios y opciones más cercanas sin costos ocultos.</p>
        <p className="absolute font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[20px] left-[61px] text-[16px] text-justify text-white top-[124px] w-[556px]">Calidad local sin pagar de más.</p>
        <div className="absolute h-[316px] left-[-57px] top-[313px] w-[751px]" data-name="Image">
          <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full"  />
        </div>
        <div className="absolute h-[316px] left-[-57px] top-[313px] w-[751px]" data-name="Image">
          <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-2 border-[#1bc8c0] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function SimpleCategoryCard() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] h-[557px] items-start relative shrink-0 w-[670px]" data-name="Simple Category Card">
      <ImgPlaceholder1 />
    </div>
  );
}

function AltSimpleCategoryCard() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] h-[557px] items-start relative shrink-0 w-[670px]" data-name="Simple Category Card">
      <AltImgPlaceholder1 />
    </div>
  );
}


function Row() {
  return (
    <div className="content-stretch flex gap-[9px] items-center relative shrink-0" data-name="Row">
      <SimpleCategoryCardFixed />
      <SimpleCategoryCard />
    </div>
  );
}

function Row22(){
  return (
    <div className="content-stretch flex gap-[9px] items-center relative shrink-0" data-name="Row">
      <AltSimpleCategoryCard />
      <AltSimpleCategoryCardFixed />
    </div>
  );
}

export function WhyChooseUs() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
      
      <WhyCard
        title="Busca rápida y sencilla"
        subtitle="Encuentra lo que necesitas sin complicarte."
        description="Explora productos disponibles en negocios locales y socios revendedores con solo unos clics. Nuestra plataforma identifica rápidamente quién lo tiene y te muestra opciones inmediatas cerca de ti."
        img={imgIA}
      />

      <WhyCard
        title="Entrega confiable"
        subtitle="Tu pedido, siempre en buenas manos."
        description="Repartidores verificados recolectan tu compra directamente del socio local y la llevan a tu puerta. Cada entrega es rastreable y supervisada para garantizar puntualidad."
        img={imgIA}
      />

      <WhyCard
        title="Precios accesibles"
        subtitle="Calidad local sin pagar de más."
        description="Conectamos directamente a clientes con socios locales, permitiendo obtener mejores precios y opciones cercanas sin intermediarios."
        img={imgIA}
      />

      <WhyCard
        title="Impacto social"
        subtitle="Tu compra fortalece la economía local."
        description="Cada pedido genera ingresos para microempresas, activa un ciclo económico positivo y apoya el crecimiento del comercio de barrio."
        img={imgIA}
      />

    </div>
  );
}

function WhyCard({ title, subtitle, description, img }) {
  return (
    <div className="relative bg-gradient-to-br from-[#0f615f] to-[#6b4cff] text-white rounded-2xl p-8 overflow-hidden min-h-[320px] flex items-center shadow-lg">

      {/* Texto */}
      <div className="z-20 w-[55%]">
        <h3 className="text-3xl font-semibold mb-2">{title}</h3>
        <p className="text-lg font-medium mb-3">{subtitle}</p>
        <p className="opacity-90 leading-relaxed">{description}</p>
      </div>

      {/* Imagen */}
      <div className="absolute right-4 bottom-0 w-[45%] h-full flex justify-center items-end z-10">
        <img
          src={img}
          alt=""
          className="w-[90%] object-contain drop-shadow-2xl"
        />
      </div>

      {/* Brillo decorativo */}
      <div className="absolute right-0 bottom-0 w-[60%] h-[60%] bg-white/10 blur-2xl rounded-full" />
    </div>
  );
}


/*
function Component6CategoryOverview() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col gap-[22px] items-start px-0 py-[48px] relative shrink-0 z-[5]" data-name="6 Category Overview">
      <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[52px] relative shrink-0 text-[48px] text-[rgba(0,0,0,0.8)] w-[1344px]">¿Por qué los clientes nos eligen?

</p>
      <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[32px] relative shrink-0 text-[24px] text-black text-nowrap whitespace-pre">Mira cómo transformamos tu forma de comprar.

</p>
      <Row />
      <Row22></Row22>
    </div>
  );
}*/

function TextContent() {
  return (
    <div className="content-stretch flex flex-col font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium gap-[16px] items-start relative shrink-0 w-full" data-name="textContent">
      <p className="leading-[52px] relative shrink-0 text-[48px] text-[rgba(0,0,0,0.8)] w-full">Así funciona nuestra red colaborativa</p>
      <p className="leading-[32px] relative shrink-0 text-[24px] text-[rgba(0,0,0,0.4)] w-full">Un sistema donde clientes, socios locales y repartidores trabajan juntos para mover cualquier producto hasta tu puerta.</p>
    </div>
  );
}

function ButtonLarge() {
  return (
    <div className="bg-gradient-to-b box-border content-stretch flex from-[#0f3d3c] items-center justify-center px-[24px] py-[12px] relative rounded-[8px] shrink-0 to-[#0a2928] cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-teal-500/50" data-name="buttonLarge">
      <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[24px] relative shrink-0 text-[20px] text-nowrap text-white whitespace-pre">Descubre Cómo</p>
    </div>
  );
}

function Div1() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[32px] grow items-start min-h-px min-w-px relative shrink-0" data-name="div">
      <TextContent />
      <ButtonLarge />
    </div>
  );
}

function ImgPlaceholder2() {
  return (
    <div className="basis-0 bg-[#e7e2ff] grow h-[485px] min-h-px min-w-px relative rounded-[12px] shrink-0" data-name="img placeholder">
      <div className="h-[485px] overflow-clip relative rounded-[inherit] w-full">
        <div className="absolute h-[415px] left-[93px] top-[34.5px] w-[986px]" data-name="Image">
          <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full"  />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-2 border-[#1bc8c0] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function InfoBlockSizeLayout() {
  return (
    <div className="bg-white box-border content-stretch flex gap-[96px] h-[720px] items-center px-0 py-[48px] relative shrink-0 w-full z-[2]" data-name="infoBlock{-size,layout}">
      <Div1 />
      <ImgPlaceholder2 />
    </div>
  );
}

function ImgPlaceholder3() {
  return (
    <div className="basis-0 bg-[#bae8e7] grow h-[485px] min-h-px min-w-px relative rounded-[12px] shrink-0" data-name="img placeholder">
      <div className="h-[485px] overflow-clip relative rounded-[inherit] w-full">
        <div className="absolute h-[415px] left-[-454px] top-[34.5px] w-[986px]" data-name="Image">
          <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-2 border-[#1bc8c0] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function TextContent1() {
  return (
    <div className="content-stretch flex flex-col font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium gap-[16px] items-start relative shrink-0 w-full" data-name="textContent">
      <p className="leading-[52px] relative shrink-0 text-[48px] text-[rgba(0,0,0,0.8)] w-full">Únete al ecosistema que impulsa la economía local</p>
      <p className="leading-[32px] relative shrink-0 text-[24px] text-[rgba(0,0,0,0.4)] w-full">Ayuda a mover productos, apoyar negocios y generar ingresos mientras haces lo que te gusta.</p>
    </div>
  );
}

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useState } from 'react';

function FAQ() {
  const [expanded, setExpanded] = useState<string | false>('panel0');

  const handleChange = (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false);
  };

  const faqs = [
    {
      question: "¿Qué es IKNAL y cómo funciona?",
      answer: "IKNAL es una plataforma que conecta a clientes con socios locales que consiguen los productos que buscas y repartidores que los llevan hasta tu puerta. Los revendedores publican sus productos, los clientes hacen pedidos, y los repartidores se encargan de la entrega rápida y segura."
    },
    {
      question: "¿Cómo puedo registrarme como revendedor?",
      answer: "Regístrate en nuestra plataforma con tus datos básicos, sube la documentación requerida (identificación y comprobante de domicilio), y espera la verificación de tu cuenta. Una vez aprobado, podrás crear tu catálogo de productos y comenzar a vender en minutos."
    },
    {
      question: "¿Cuáles son los requisitos para ser repartidor?",
      answer: "Necesitas ser mayor de 18 años, contar con un vehículo propio (bicicleta, moto o auto), tener smartphone con datos móviles, y presentar identificación oficial vigente. También realizamos una verificación de antecedentes para garantizar la seguridad de todos."
    },
    {
      question: "¿Cómo se calculan las ganancias de los repartidores?",
      answer: "Las ganancias se calculan por cada entrega realizada, considerando la distancia recorrida y el tiempo estimado.  Además, los repartidores conservan el 100% de las propinas.  Los pagos se realizan semanalmente directamente a tu cuenta bancaria."
    },
    {
      question: "¿Qué comisión cobra IKNAL a los revendedores?",
      answer: "Cobramos una comisión competitiva por cada venta realizada a través de la plataforma. El porcentaje varía según el volumen de ventas mensual, con descuentos para vendedores frecuentes.  Consulta nuestros planes en la sección de precios."
    },
    {
      question: "¿Cómo se garantiza la seguridad de los productos?",
      answer: "Todos los pedidos están protegidos con nuestro sistema de seguimiento en tiempo real. Los repartidores verifican el estado del producto al recogerlo y los clientes confirman la entrega. En caso de cualquier incidencia, nuestro equipo de soporte está disponible 24/7."
    },
    {
      question: "¿Puedo elegir mis horarios como repartidor?",
      answer: "¡Sí!  Tú decides cuándo y cuánto trabajar.  Puedes activarte en la app cuando quieras recibir pedidos y desconectarte cuando necesites.  No hay horarios fijos ni mínimo de horas requeridas."
    },
    {
      question: "¿Qué tipo de productos puedo vender en IKNAL?",
      answer: "Puedes vender una amplia variedad de productos: alimentos, ropa, electrónicos, artículos del hogar, productos de belleza, y más. Solo asegúrate de cumplir con las regulaciones locales y nuestras políticas de productos permitidos."
    }
  ];

  return (
    <section className="flex flex-col items-center w-full py-16">
      <div className="flex flex-col items-center w-full max-w-[540px] px-6">
        {/* Título */}
        <h2 className="font-['Plus_Jakarta_Sans',sans-serif] font-normal text-[42px] text-[#1a3a3a] text-center tracking-tight">
          Preguntas Frecuentes (FAQ)
        </h2>
        
        {/* Subtítulo */}
        <p className="font-['Plus_Jakarta_Sans',sans-serif] font-normal text-[14px] text-[#6b7280] text-center mt-3 mb-10">
          Find answers to your questions
        </p>

        {/* Accordions */}
        <div className="w-full">
          {faqs.map((faq, index) => (
            <Accordion
              key={index}
              expanded={expanded === `panel${index}`}
              onChange={handleChange(`panel${index}`)}
              disableGutters
              elevation={0}
              sx={{
                '&:before': { display: 'none' },
                borderTop: '1px solid #e5e7eb',
                '&:last-of-type': { borderBottom: '1px solid #e5e7eb' },
                backgroundColor: 'transparent',
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon sx={{ color: expanded === `panel${index}` ? '#0d9488' : '#9ca3af' }} />}
                sx={{
                  padding: '8px 0',
                  '& .MuiAccordionSummary-content': { margin: 0 },
                }}
              >
                <span
                  className="font-['Plus_Jakarta_Sans',sans-serif] text-[15px] tracking-tight"
                  style={{
                    fontWeight: expanded === `panel${index}` ? 600 : 500,
                    color: expanded === `panel${index}` ? '#0d9488' : '#374151',
                  }}
                >
                  {faq.question}
                </span>
              </AccordionSummary>
              <AccordionDetails sx={{ padding: '0 0 20px 0' }}>
                <p className="font-['Plus_Jakarta_Sans',sans-serif] font-normal text-[14px] text-[#4b5563] leading-[1.6] pr-8">
                  {faq. answer}
                </p>
              </AccordionDetails>
            </Accordion>
          ))}
        </div>
      </div>
    </section>
  );
}


function ButtonLarge1() {
  return (
    <div className="bg-gradient-to-b box-border content-stretch flex from-[#0f3d3c] items-center justify-center px-[24px] py-[12px] relative rounded-[8px] shrink-0 to-[#0a2928] cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-teal-500/50" data-name="buttonLarge">
      <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[24px] relative shrink-0 text-[20px] text-nowrap text-white whitespace-pre">Descubre Más</p>
    </div>
  );
}

function Div2() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[32px] grow items-start min-h-px min-w-px relative shrink-0" data-name="div">
      <TextContent1 />
      <ButtonLarge1 />
    </div>
  );
}

function InfoBlockSizeLayout1() {
  return (
    <div className="bg-white box-border content-stretch flex gap-[96px] h-[720px] items-center px-0 py-[48px] relative shrink-0 w-full z-[1]" data-name="infoBlock{-size,layout}">
      <ImgPlaceholder3 />
      <Div2 />
    </div>
  );
}

function LandingPageTwoFeatureDescriptionsWithImages() {
  return (
    <div className="content-stretch flex flex-col isolate items-start relative shrink-0 w-full z-[4]" data-name="Landing Page Two Feature Descriptions with Images">
      <InfoBlockSizeLayout />
      <InfoBlockSizeLayout1 />
    </div>
  );
}

function RivetIconsSync() {
  return (
    <div className="relative shrink-0 size-[64px]" data-name="rivet-icons:sync">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 64 64">
        <g clipPath="url(#clip0_1_404)" id="rivet-icons:sync">
          <path d={svgPaths.p1f2bd00} fill="var(--fill-0, white)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_1_404">
            <rect fill="white" height="64" width="64" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function ValuePropositionCard() {
  return (
    <div className="basis-0 bg-gradient-to-b from-[#0f3d3c] grow h-[256px] min-h-px min-w-px relative rounded-[12px] shrink-0 to-[#0a2928] cursor-pointer transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-teal-500/40" data-name="Value proposition card">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col gap-[24px] h-[256px] items-start p-[32px] relative w-full">
          <RivetIconsSync />
          <p className="-webkit-box font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[32px] max-w-[400px] min-w-full overflow-ellipsis overflow-hidden relative shrink-0 text-[24px] text-white w-[min-content]">Operación y relaciones totalmente sincronizadas</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-2 border-[#1bc8c0] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function RiBrainAi3Line() {
  return (
    <div className="relative shrink-0 size-[64px]" data-name="ri:brain-ai-3-line">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 64 64">
        <g id="ri:brain-ai-3-line">
          <path d={svgPaths.p3b3db280} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function ValuePropositionCard1() {
  return (
    <div className="basis-0 bg-gradient-to-b from-[#0f3d3c] grow h-[256px] min-h-px min-w-px relative rounded-[12px] shrink-0 to-[#0a2928] cursor-pointer transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-teal-500/40" data-name="Value proposition card">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col gap-[24px] h-[256px] items-start p-[32px] relative w-full">
          <RiBrainAi3Line />
          <p className="-webkit-box font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[32px] max-w-[400px] min-w-full overflow-ellipsis overflow-hidden relative shrink-0 text-[24px] text-white w-[min-content]">Toma de decisiones más inteligente y en tiempo real</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-2 border-[#1bc8c0] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Fa7SolidRoute() {
  return (
    <div className="relative shrink-0 size-[64px]" data-name="fa7-solid:route">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 64 64">
        <g clipPath="url(#clip0_1_398)" id="fa7-solid:route">
          <path d={svgPaths.p38639800} fill="var(--fill-0, white)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_1_398">
            <rect fill="white" height="64" width="64" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function ValuePropositionCard2() {
  return (
    <div className="basis-0 bg-gradient-to-b from-[#0f3d3c] grow h-[256px] min-h-px min-w-px relative rounded-[12px] shrink-0 to-[#0a2928] cursor-pointer transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-teal-500/40" data-name="Value proposition card">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col gap-[24px] h-[256px] items-start p-[32px] relative w-full">
          <Fa7SolidRoute />
          <p className="-webkit-box font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[32px] max-w-[400px] min-w-full overflow-ellipsis overflow-hidden relative shrink-0 text-[24px] text-white w-[min-content]">Optimización de compras y abastecimiento</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-2 border-[#1bc8c0] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Row1() {
  return (
    <div className="content-stretch flex gap-[24px] items-start relative shrink-0 w-full" data-name="Row">
      <ValuePropositionCard />
      <ValuePropositionCard1 />
      <ValuePropositionCard2 />
    </div>
  );
}

function OcticonWorkflow() {
  return (
    <div className="relative shrink-0 size-[64px]" data-name="octicon:workflow-16">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 64 64">
        <g clipPath="url(#clip0_1_395)" id="octicon:workflow-16">
          <path d={svgPaths.p4dd3e80} fill="var(--fill-0, white)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_1_395">
            <rect fill="white" height="64" width="64" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function ValuePropositionCard3() {
  return (
    <div className="basis-0 bg-gradient-to-b from-[#0f3d3c] grow h-[256px] min-h-px min-w-px relative rounded-[12px] shrink-0 to-[#0a2928] cursor-pointer transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-teal-500/40" data-name="Value proposition card">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col gap-[24px] h-[256px] items-start p-[32px] relative w-full">
          <OcticonWorkflow />
          <p className="-webkit-box font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[32px] max-w-[400px] min-w-full overflow-ellipsis overflow-hidden relative shrink-0 text-[24px] text-white w-[min-content]">Flujo comercial conectado con la operación interna</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-2 border-[#1bc8c0] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function IcOutlineSavings() {
  return (
    <div className="relative shrink-0 size-[64px]" data-name="ic:outline-savings">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 64 64">
        <g id="ic:outline-savings">
          <path d={svgPaths.p3a0b6780} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function ValuePropositionCard4() {
  return (
    <div className="basis-0 bg-gradient-to-b from-[#0f3d3c] grow h-[256px] min-h-px min-w-px relative rounded-[12px] shrink-0 to-[#0a2928] cursor-pointer transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-teal-500/40" data-name="Value proposition card">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col gap-[24px] h-[256px] items-start p-[32px] relative w-full">
          <IcOutlineSavings />
          <p className="-webkit-box font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[32px] max-w-[400px] min-w-full overflow-ellipsis overflow-hidden relative shrink-0 text-[24px] text-white w-[min-content]">Reducción de costos por eficiencia y predicción</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-2 border-[#1bc8c0] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function EosIconsNetwork() {
  return (
    <div className="relative shrink-0 size-[64px]" data-name="eos-icons:network">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 64 64">
        <g clipPath="url(#clip0_1_409)" id="eos-icons:network">
          <path d={svgPaths.p3921ec00} fill="var(--fill-0, white)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_1_409">
            <rect fill="white" height="64" width="64" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function ValuePropositionCard5() {
  return (
    <div className="basis-0 bg-gradient-to-b from-[#0f3d3c] grow h-[256px] min-h-px min-w-px relative rounded-[12px] shrink-0 to-[#0a2928] cursor-pointer transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-teal-500/40" data-name="Value proposition card">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col gap-[24px] h-[256px] items-start p-[32px] relative w-full">
          <EosIconsNetwork />
          <p className="-webkit-box font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[32px] max-w-[400px] min-w-full overflow-ellipsis overflow-hidden relative shrink-0 text-[24px] text-white w-[min-content]">Un ecosistema colaborativo que escala contigo</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-2 border-[#1bc8c0] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Row2() {
  return (
    <div className="content-stretch flex gap-[24px] items-start relative shrink-0 w-full" data-name="Row">
      <ValuePropositionCard3 />
      <ValuePropositionCard4 />
      <ValuePropositionCard5 />
    </div>
  );
}

function ValuePropositionCardsSection() {
  return (
    <div>
    </div>
  );
}

function PricingCardPrice() {
  return (
    <div className="absolute contents leading-[normal] left-[665px] not-italic top-[298px]" data-name="Pricing Card Price">
      <p className="absolute font-['Poppins:SemiBold',sans-serif] left-[665px] text-[24px] text-black top-[298px] w-[73px]">$700</p>
      <p className="absolute font-['Poppins:Light',sans-serif] left-[731px] text-[#6b6b6b] text-[16px] text-nowrap top-[304px] whitespace-pre">/mensual</p>
    </div>
  );
}

function PricingButton() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0 cursor-pointer transition-all duration-300 hover:scale-105" data-name="Pricing Button">
      <div className="[grid-area:1_/_1] bg-gradient-to-r from-[#6b4cff] h-[36px] ml-0 mt-0 rounded-[10px] to-[rgba(107,76,255,0.8)] w-[142px] transition-shadow duration-300 hover:shadow-lg hover:shadow-purple-500/50" data-name="Pricing Button Background" />
      <p className="[grid-area:1_/_1] font-['Inter:Bold',sans-serif] font-bold leading-[normal] ml-[71.25px] mt-[9px] not-italic relative text-[16px] text-center text-white translate-x-[-50%] w-[112.502px]">Inicia ahora</p>
    </div>
  );
}

function PricingCard() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start overflow-clip relative shrink-0 w-full" data-name="Pricing Card">
      <p className="font-['Poppins:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#6d6d6d] text-[16px] text-justify w-full">Perfecto para empresas en crecimiento que necesitan eficiencia e inteligencia.</p>
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 210 1">
            <line id="Line 21" stroke="var(--stroke-0, #AFAFAF)" x2="209.419" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function SolarCheckCircleBoldDuotone() {
  return (
    <div className="[grid-area:1_/_1] ml-0 mt-0 relative size-[24px]" data-name="solar:check-circle-bold-duotone">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="solar:check-circle-bold-duotone">
          <path d={svgPaths.p3caba900} fill="var(--fill-0, #6B4CFF)" id="Vector" opacity="0.5" />
          <path d={svgPaths.p115c2f00} fill="var(--fill-0, black)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function PricingCardFeature() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0" data-name="Pricing Card Feature">
      <p className="[grid-area:1_/_1] font-['Poppins:Regular',sans-serif] leading-[normal] ml-[27px] mt-0 not-italic relative text-[16px] text-black text-justify text-nowrap whitespace-pre">IA operativa</p>
      <SolarCheckCircleBoldDuotone />
    </div>
  );
}

function SolarCheckCircleBoldDuotone1() {
  return (
    <div className="[grid-area:1_/_1] ml-0 mt-0 relative size-[24px]" data-name="solar:check-circle-bold-duotone">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="solar:check-circle-bold-duotone">
          <path d={svgPaths.p3caba900} fill="var(--fill-0, #6B4CFF)" id="Vector" opacity="0.5" />
          <path d={svgPaths.p115c2f00} fill="var(--fill-0, black)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function PricingCardFeature1() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0" data-name="Pricing Card Feature">
      <p className="[grid-area:1_/_1] font-['Poppins:Regular',sans-serif] leading-[normal] ml-[27px] mt-0 not-italic relative text-[16px] text-black text-justify text-nowrap whitespace-pre">Análisis comercial</p>
      <SolarCheckCircleBoldDuotone1 />
    </div>
  );
}

function SolarCheckCircleBoldDuotone2() {
  return (
    <div className="[grid-area:1_/_1] ml-0 mt-0 relative size-[24px]" data-name="solar:check-circle-bold-duotone">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="solar:check-circle-bold-duotone">
          <path d={svgPaths.p3caba900} fill="var(--fill-0, #6B4CFF)" id="Vector" opacity="0.5" />
          <path d={svgPaths.p115c2f00} fill="var(--fill-0, black)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function PricingCardFeature2() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0" data-name="Pricing Card Feature">
      <p className="[grid-area:1_/_1] font-['Poppins:Regular',sans-serif] leading-[normal] ml-[27px] mt-0 not-italic relative text-[16px] text-black text-justify text-nowrap whitespace-pre">Procesos optimizados</p>
      <SolarCheckCircleBoldDuotone2 />
    </div>
  );
}

function PricingCard1() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start leading-[0] overflow-clip relative shrink-0 w-full" data-name="Pricing Card">
      <PricingCardFeature />
      <PricingCardFeature1 />
      <PricingCardFeature2 />
    </div>
  );
}

function PricingCard2() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start overflow-clip relative shrink-0 w-full" data-name="Pricing Card">
      <p className="font-['Poppins:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[16px] text-black w-full">Pro includes:</p>
      <PricingCard1 />
    </div>
  );
}

function PricingCard3() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-name="Pricing Card">
      <PricingCard />
      <PricingCard2 />
    </div>
  );
}

function PricingCard4() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[32px] items-start left-[665px] overflow-clip top-[369px] w-[209.419px]" data-name="Pricing Card">
      <PricingButton />
      <PricingCard3 />
    </div>
  );
}

function PricingCard5() {
  return (
    <div className="absolute contents left-[665px] top-[298px]" data-name="Pricing Card">
      <PricingCardPrice />
      <PricingCard4 />
    </div>
  );
}

function PricingCardTitle() {
  return (
    <div className="absolute contents left-[666.46px] top-[244px]" data-name="Pricing Card Title">
      <p className="absolute font-['Poppins:Bold',sans-serif] leading-[normal] left-[666.46px] not-italic text-[36px] text-black top-[244px] w-[222.852px]">Momentum</p>
    </div>
  );
}

function PricingCard6() {
  return (
    <div className="absolute contents left-[665px] top-[244px]" data-name="Pricing Card">
      <PricingCard5 />
      <PricingCardTitle />
    </div>
  );
}

function Pro() {
  return (
    <div className="absolute contents left-[647.06px] top-[205.5px]" data-name="Pro">
      <div className="absolute bg-white border border-[#1bc8c0] border-solid h-[556px] left-[647.06px] rounded-[10px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] top-[205.5px] w-[259.944px]" data-name="Pricing Card Background" />
      <PricingCard6 />
    </div>
  );
}

function PricingCardPrice1() {
  return (
    <div className="absolute contents leading-[normal] left-[382px] not-italic top-[298px]" data-name="Pricing Card Price">
      <p className="absolute font-['Poppins:SemiBold',sans-serif] left-[382px] text-[24px] text-black top-[298px] w-[67px]">$300</p>
      <p className="absolute font-['Poppins:Light',sans-serif] left-[447px] text-[#6b6b6b] text-[16px] top-[304px] w-[87px]">/mensual</p>
    </div>
  );
}

function PricingButton1() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0 cursor-pointer transition-all duration-300 hover:scale-105" data-name="Pricing Button">
      <div className="[grid-area:1_/_1] bg-gradient-to-r from-[#6b4cff] h-[36px] ml-0 mt-0 rounded-[10px] to-[rgba(107,76,255,0.8)] w-[142px] transition-shadow duration-300 hover:shadow-lg hover:shadow-purple-500/50" data-name="Pricing Button Background" />
      <p className="[grid-area:1_/_1] font-['Inter:Bold',sans-serif] font-bold leading-[normal] ml-[71.25px] mt-[9px] not-italic relative text-[16px] text-center text-white translate-x-[-50%] w-[112.502px]">Inicia ahora</p>
    </div>
  );
}

function PricingCard7() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start overflow-clip relative shrink-0 w-full" data-name="Pricing Card">
      <p className="font-['Poppins:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#6d6d6d] text-[16px] text-justify w-full">Ideal para negocios que buscan organización y control operativo sólido y sostenible cada día.</p>
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 210 1">
            <line id="Line 21" stroke="var(--stroke-0, #AFAFAF)" x2="209.419" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function SolarCheckCircleBoldDuotone3() {
  return (
    <div className="[grid-area:1_/_1] ml-0 mt-0 relative size-[24px]" data-name="solar:check-circle-bold-duotone">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="solar:check-circle-bold-duotone">
          <path d={svgPaths.p3caba900} fill="var(--fill-0, #6B4CFF)" id="Vector" opacity="0.5" />
          <path d={svgPaths.p115c2f00} fill="var(--fill-0, black)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function PricingCardFeature3() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0" data-name="Pricing Card Feature">
      <p className="[grid-area:1_/_1] font-['Poppins:Regular',sans-serif] leading-[normal] ml-[27px] mt-0 not-italic relative text-[16px] text-black text-justify text-nowrap whitespace-pre">Operación completa</p>
      <SolarCheckCircleBoldDuotone3 />
    </div>
  );
}

function SolarCheckCircleBoldDuotone4() {
  return (
    <div className="[grid-area:1_/_1] ml-0 mt-0 relative size-[24px]" data-name="solar:check-circle-bold-duotone">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="solar:check-circle-bold-duotone">
          <path d={svgPaths.p3caba900} fill="var(--fill-0, #6B4CFF)" id="Vector" opacity="0.5" />
          <path d={svgPaths.p115c2f00} fill="var(--fill-0, black)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function PricingCardFeature4() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0" data-name="Pricing Card Feature">
      <p className="[grid-area:1_/_1] font-['Poppins:Regular',sans-serif] leading-[normal] ml-[27px] mt-0 not-italic relative text-[16px] text-black text-justify text-nowrap whitespace-pre">Inventario avanzado</p>
      <SolarCheckCircleBoldDuotone4 />
    </div>
  );
}

function SolarCheckCircleBoldDuotone5() {
  return (
    <div className="[grid-area:1_/_1] ml-0 mt-0 relative size-[24px]" data-name="solar:check-circle-bold-duotone">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="solar:check-circle-bold-duotone">
          <path d={svgPaths.p3caba900} fill="var(--fill-0, #6B4CFF)" id="Vector" opacity="0.5" />
          <path d={svgPaths.p115c2f00} fill="var(--fill-0, black)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function PricingCardFeature5() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0" data-name="Pricing Card Feature">
      <p className="[grid-area:1_/_1] font-['Poppins:Regular',sans-serif] leading-[normal] ml-[27px] mt-0 not-italic relative text-[16px] text-black text-justify text-nowrap whitespace-pre">Relaciones activas</p>
      <SolarCheckCircleBoldDuotone5 />
    </div>
  );
}

function PricingCard8() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start leading-[0] overflow-clip relative shrink-0 w-[286px]" data-name="Pricing Card">
      <PricingCardFeature3 />
      <PricingCardFeature4 />
      <PricingCardFeature5 />
    </div>
  );
}

function PricingCard9() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start overflow-clip relative shrink-0 w-full" data-name="Pricing Card">
      <p className="font-['Poppins:SemiBold',sans-serif] leading-[normal] min-w-full not-italic relative shrink-0 text-[16px] text-black w-[min-content]">Standard includes:</p>
      <PricingCard8 />
    </div>
  );
}

function PricingCard10() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-name="Pricing Card">
      <PricingCard7 />
      <PricingCard9 />
    </div>
  );
}

function PricingCard11() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[32px] items-start left-[382px] overflow-clip top-[369px] w-[209.419px]" data-name="Pricing Card">
      <PricingButton1 />
      <PricingCard10 />
    </div>
  );
}

function PricingCardTitle1() {
  return (
    <div className="absolute contents left-[381.99px] top-[243.5px]" data-name="Pricing Card Title">
      <p className="absolute font-['Poppins:Bold',sans-serif] leading-[normal] left-[381.99px] not-italic text-[36px] text-black top-[243.5px] w-[179.013px]">Esencial</p>
    </div>
  );
}

function PricingCard12() {
  return (
    <div className="absolute contents left-[381.99px] top-[243.5px]" data-name="Pricing Card">
      <PricingCardPrice1 />
      <PricingCard11 />
      <PricingCardTitle1 />
    </div>
  );
}

function PricingCard13() {
  return (
    <div className="absolute contents left-[354.89px] top-[183.5px]" data-name="Pricing Card">
      <div className="absolute bg-gradient-to-b from-[#0f3d3c] h-[39px] left-[354.89px] rounded-tl-[10px] rounded-tr-[10px] to-[#0a2928] top-[183.5px] w-[259.944px]" data-name="Pricing Card Badge Background" />
      <p className="absolute font-['Poppins:Bold',sans-serif] leading-[normal] left-[417px] not-italic text-[20px] text-white top-[188px] w-[136px]">Más popular</p>
    </div>
  );
}

function PricingCard14() {
  return (
    <div className="absolute contents left-[354.89px] top-[183.5px]" data-name="Pricing Card">
      <div className="absolute bg-white h-[556px] left-[354.89px] rounded-[10px] top-[205.5px] w-[259.944px]" data-name="Pricing Card Background" />
      <PricingCard12 />
      <PricingCard13 />
    </div>
  );
}

function Standard() {
  return (
    <div className="absolute contents left-[354.89px] top-[183.5px]" data-name="standard">
      <div className="absolute h-[578px] left-[354.89px] top-[183.5px] w-[259.943px]" data-name="Union">
        <div className="absolute inset-[-2.94%_-8.08%_-4.33%_-8.08%]" style={{ "--fill-0": "rgba(255, 255, 255, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 302 620">
            <g filter="url(#filter0_d_1_375)" id="Union">
              <mask fill="black" height="580" id="path-1-outside-1_1_375" maskUnits="userSpaceOnUse" width="262" x="20" y="16">
                <rect fill="white" height="580" width="262" x="20" y="16" />
                <path d={svgPaths.p2ceab400} />
              </mask>
              <path d={svgPaths.p2ceab400} fill="var(--fill-0, white)" />
              <path d={svgPaths.p3aa8a380} fill="url(#paint0_linear_1_375)" mask="url(#path-1-outside-1_1_375)" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="620" id="filter0_d_1_375" width="301.943" x="0" y="0">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feOffset dy="4" />
                <feGaussianBlur stdDeviation="10" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix type="matrix" values="0 0 0 0 0.105882 0 0 0 0 0.784314 0 0 0 0 0.752941 0 0 0 0.67 0" />
                <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_1_375" />
                <feBlend in="SourceGraphic" in2="effect1_dropShadow_1_375" mode="normal" result="shape" />
              </filter>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_375" x1="150.972" x2="150.972" y1="17" y2="595">
                <stop stopColor="#1BC8C0" />
                <stop offset="0.5" stopColor="#6B4CFF" />
                <stop offset="1" stopColor="#1BC8C0" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
      <PricingCard14 />
    </div>
  );
}

function PricingCardPrice2() {
  return (
    <div className="absolute contents left-[89px] top-[292px]" data-name="Pricing Card Price">
      <p className="absolute font-['Poppins:SemiBold',sans-serif] leading-[normal] left-[89px] not-italic text-[24px] text-black top-[292px] w-[50.847px]">$0</p>
    </div>
  );
}

function PricingCardTitle2() {
  return (
    <div className="absolute contents left-[88.84px] top-[247.5px]" data-name="Pricing Card Title">
      <p className="absolute font-['Poppins:Bold',sans-serif] leading-[normal] left-[88.84px] not-italic text-[36px] text-black top-[247.5px] w-[169.161px]">Gratuito</p>
    </div>
  );
}

function PricingButton2() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0 cursor-pointer transition-all duration-300 hover:scale-105" data-name="Pricing Button">
      <div className="[grid-area:1_/_1] bg-gradient-to-r from-[#6b4cff] h-[36px] ml-0 mt-0 rounded-[10px] to-[rgba(107,76,255,0.8)] w-[142px] transition-shadow duration-300 hover:shadow-lg hover:shadow-purple-500/50" data-name="Pricing Button Background" />
      <p className="[grid-area:1_/_1] font-['Inter:Bold',sans-serif] font-bold leading-[normal] ml-[71.25px] mt-[9px] not-italic relative text-[16px] text-center text-white translate-x-[-50%] w-[112.502px]">Inicia ahora</p>
    </div>
  );
}

function PricingCard15() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start overflow-clip relative shrink-0 w-full" data-name="Pricing Card">
      <p className="font-['Poppins:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#6d6d6d] text-[16px] text-justify w-full">Perfecto para pequeñas empresas que quieren iniciar con herramientas esenciales de gestión.</p>
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 210 1">
            <line id="Line 21" stroke="var(--stroke-0, #AFAFAF)" x2="209.419" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function SolarCheckCircleBoldDuotone6() {
  return (
    <div className="[grid-area:1_/_1] ml-0 mt-0 relative size-[24px]" data-name="solar:check-circle-bold-duotone">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="solar:check-circle-bold-duotone">
          <path d={svgPaths.p3caba900} fill="var(--fill-0, #6B4CFF)" id="Vector" opacity="0.5" />
          <path d={svgPaths.p115c2f00} fill="var(--fill-0, black)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function PricingCardFeature6() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0" data-name="Pricing Card Feature">
      <p className="[grid-area:1_/_1] font-['Poppins:Regular',sans-serif] leading-[normal] ml-[27px] mt-0 not-italic relative text-[16px] text-black text-justify text-nowrap whitespace-pre">Gestión esencial</p>
      <SolarCheckCircleBoldDuotone6 />
    </div>
  );
}

function SolarCheckCircleBoldDuotone7() {
  return (
    <div className="[grid-area:1_/_1] ml-0 mt-0 relative size-[24px]" data-name="solar:check-circle-bold-duotone">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="solar:check-circle-bold-duotone">
          <path d={svgPaths.p3caba900} fill="var(--fill-0, #6B4CFF)" id="Vector" opacity="0.5" />
          <path d={svgPaths.p115c2f00} fill="var(--fill-0, black)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function PricingCardFeature7() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0" data-name="Pricing Card Feature">
      <p className="[grid-area:1_/_1] font-['Poppins:Regular',sans-serif] leading-[normal] ml-[27px] mt-0 not-italic relative text-[16px] text-black text-justify text-nowrap whitespace-pre">Inventario básico</p>
      <SolarCheckCircleBoldDuotone7 />
    </div>
  );
}

function SolarCheckCircleBoldDuotone8() {
  return (
    <div className="[grid-area:1_/_1] ml-0 mt-0 relative size-[24px]" data-name="solar:check-circle-bold-duotone">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="solar:check-circle-bold-duotone">
          <path d={svgPaths.p3caba900} fill="var(--fill-0, #6B4CFF)" id="Vector" opacity="0.5" />
          <path d={svgPaths.p115c2f00} fill="var(--fill-0, black)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function PricingCardFeature8() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0" data-name="Pricing Card Feature">
      <p className="[grid-area:1_/_1] font-['Poppins:Regular',sans-serif] leading-[normal] ml-[27px] mt-0 not-italic relative text-[16px] text-black text-justify text-nowrap whitespace-pre">Contactos simples</p>
      <SolarCheckCircleBoldDuotone8 />
    </div>
  );
}

function PricingCard16() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start leading-[0] overflow-clip relative shrink-0 w-full" data-name="Pricing Card">
      <PricingCardFeature6 />
      <PricingCardFeature7 />
      <PricingCardFeature8 />
    </div>
  );
}

function PricingCard17() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start overflow-clip relative shrink-0 w-[195px]" data-name="Pricing Card">
      <p className="font-['Poppins:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[16px] text-black w-full">El gratuito incluye:</p>
      <PricingCard16 />
    </div>
  );
}

function PricingCard18() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-name="Pricing Card">
      <PricingCard15 />
      <PricingCard17 />
    </div>
  );
}

function PricingCard19() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[32px] items-start left-[89px] overflow-clip top-[369px] w-[209.419px]" data-name="Pricing Card">
      <PricingButton2 />
      <PricingCard18 />
    </div>
  );
}

function PricingCard20() {
  return (
    <div className="absolute contents left-[88.84px] top-[247.5px]" data-name="Pricing Card">
      <PricingCardPrice2 />
      <PricingCardTitle2 />
      <PricingCard19 />
    </div>
  );
}

function Basic() {
  return (
    <div className="absolute contents left-[62px] top-[205.5px]" data-name="Basic">
      <div className="absolute bg-white border border-[#1bc8c0] border-solid h-[556px] left-[62px] rounded-[10px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] top-[205.5px] w-[259.944px]" data-name="Pricing Card Background" />
      <PricingCard20 />
    </div>
  );
}

function PricingCardPrice3() {
  return (
    <div className="absolute contents leading-[normal] left-[966px] not-italic top-[292px]" data-name="Pricing Card Price">
      <p className="absolute font-['Poppins:SemiBold',sans-serif] left-[966px] text-[24px] text-black top-[292px] w-[73px]">$1250</p>
      <p className="absolute font-['Poppins:Light',sans-serif] left-[1039px] text-[#6b6b6b] text-[16px] text-nowrap top-[302px] whitespace-pre">/mensual</p>
    </div>
  );
}

function PricingCardTitle3() {
  return (
    <div className="absolute contents left-[966px] top-[241px]" data-name="Pricing Card Title">
      <p className="absolute font-['Poppins:Bold',sans-serif] leading-[normal] left-[966px] not-italic text-[36px] text-black top-[241px] w-[169.161px]">Élite</p>
    </div>
  );
}

function PricingButton3() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0 cursor-pointer transition-all duration-300 hover:scale-105" data-name="Pricing Button">
      <div className="[grid-area:1_/_1] bg-gradient-to-r from-[#6b4cff] h-[36px] ml-0 mt-0 rounded-[10px] to-[rgba(107,76,255,0.8)] w-[142px] transition-shadow duration-300 hover:shadow-lg hover:shadow-purple-500/50" data-name="Pricing Button Background" />
      <p className="[grid-area:1_/_1] font-['Inter:Bold',sans-serif] font-bold leading-[normal] ml-[71.25px] mt-[9px] not-italic relative text-[16px] text-center text-white translate-x-[-50%] w-[112.502px]">Inicia ahora</p>
    </div>
  );
}

function PricingCard21() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start overflow-clip relative shrink-0 w-full" data-name="Pricing Card">
      <p className="font-['Poppins:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#6d6d6d] text-[16px] text-justify w-full">Diseñado para empresas que requieren máxima automatización y escalabilidad.</p>
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 210 1">
            <line id="Line 21" stroke="var(--stroke-0, #AFAFAF)" x2="209.419" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function SolarCheckCircleBoldDuotone9() {
  return (
    <div className="[grid-area:1_/_1] ml-0 mt-0 relative size-[24px]" data-name="solar:check-circle-bold-duotone">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="solar:check-circle-bold-duotone">
          <path d={svgPaths.p3caba900} fill="var(--fill-0, #6B4CFF)" id="Vector" opacity="0.5" />
          <path d={svgPaths.p115c2f00} fill="var(--fill-0, black)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function PricingCard22() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0" data-name="Pricing Card">
      <p className="[grid-area:1_/_1] font-['Poppins:Regular',sans-serif] leading-[normal] ml-[27px] mt-0 not-italic relative text-[16px] text-black text-justify text-nowrap whitespace-pre">Inteligencia total</p>
      <SolarCheckCircleBoldDuotone9 />
    </div>
  );
}

function SolarCheckCircleBoldDuotone10() {
  return (
    <div className="[grid-area:1_/_1] ml-0 mt-0 relative size-[24px]" data-name="solar:check-circle-bold-duotone">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="solar:check-circle-bold-duotone">
          <path d={svgPaths.p3caba900} fill="var(--fill-0, #6B4CFF)" id="Vector" opacity="0.5" />
          <path d={svgPaths.p115c2f00} fill="var(--fill-0, black)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function PricingCardFeature9() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0" data-name="Pricing Card Feature">
      <p className="[grid-area:1_/_1] font-['Poppins:Regular',sans-serif] leading-[normal] ml-[27px] mt-0 not-italic relative text-[16px] text-black text-justify text-nowrap whitespace-pre">Optimización integral</p>
      <SolarCheckCircleBoldDuotone10 />
    </div>
  );
}

function SolarCheckCircleBoldDuotone11() {
  return (
    <div className="[grid-area:1_/_1] ml-0 mt-0 relative size-[24px]" data-name="solar:check-circle-bold-duotone">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="solar:check-circle-bold-duotone">
          <path d={svgPaths.p3caba900} fill="var(--fill-0, #6B4CFF)" id="Vector" opacity="0.5" />
          <path d={svgPaths.p115c2f00} fill="var(--fill-0, black)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function PricingCardFeature10() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0" data-name="Pricing Card Feature">
      <p className="[grid-area:1_/_1] font-['Poppins:Regular',sans-serif] leading-[normal] ml-[27px] mt-0 not-italic relative text-[16px] text-black text-justify text-nowrap whitespace-pre">Red avanzada</p>
      <SolarCheckCircleBoldDuotone11 />
    </div>
  );
}

function PricingCard23() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start leading-[0] overflow-clip relative shrink-0 w-full" data-name="Pricing Card">
      <PricingCard22 />
      <PricingCardFeature9 />
      <PricingCardFeature10 />
    </div>
  );
}

function PricingCard24() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start overflow-clip relative shrink-0 w-[195px]" data-name="Pricing Card">
      <p className="font-['Poppins:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[16px] text-black w-full">Basic includes:</p>
      <PricingCard23 />
    </div>
  );
}

function PricingCard25() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-name="Pricing Card">
      <PricingCard21 />
      <PricingCard24 />
    </div>
  );
}

function PricingCard26() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[32px] items-start left-[966.09px] overflow-clip top-[368px] w-[209.419px]" data-name="Pricing Card">
      <PricingButton3 />
      <PricingCard25 />
    </div>
  );
}

function PricingCard27() {
  return (
    <div className="absolute contents left-[966px] top-[241px]" data-name="Pricing Card">
      <PricingCardPrice3 />
      <PricingCardTitle3 />
      <PricingCard26 />
    </div>
  );
}

function Basic1() {
  return (
    <div className="absolute contents left-[939px] top-[203px]" data-name="Basic">
      <div className="absolute bg-white border border-[#1bc8c0] border-solid h-[556px] left-[939px] rounded-[10px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] top-[203px] w-[259.944px]" data-name="Pricing Card Background" />
      <PricingCard27 />
    </div>
  );
}

function PricingSection() {
  return (
    <div></div>
  );
}

function ButtonMarketing1() {
  return (
    <div className="bg-gradient-to-r box-border content-stretch flex from-[#6b4cff] items-center justify-center px-[24px] py-[12px] relative rounded-[8px] shrink-0 to-[rgba(107,76,255,0.8)] cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/50" data-name="buttonMarketing?">
      <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[24px] relative shrink-0 text-[20px] text-nowrap text-white whitespace-pre">Empieza ahora</p>
    </div>
  );
}

function Content1() {
  return (
    <div className="content-stretch flex flex-col gap-[96px] items-center relative shrink-0 w-full" data-name="content">
      <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[120px] min-w-full relative shrink-0 text-[120px] text-[rgba(0,0,0,0.8)] text-center w-[min-content]">Haz que tu ciudad se mueva contigo.</p>
      <ButtonMarketing1 />
    </div>
  );
}

function Logomark1() {
  return (
    <div className="relative shrink-0 size-[42px]" data-name="logomark">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 42 42">
        <g id="logomark">
          <path d={svgPaths.p10201d50} id="Icon" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.8" strokeWidth="3.75" />
        </g>
      </svg>
    </div>
  );
}

function Logo2() {
  return (
    <div className="absolute content-stretch flex gap-[6px] h-[48px] items-center left-[40px] top-[37px]" data-name="logo">
      <Logomark1 />
      <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-none relative shrink-0 text-[42px] text-[rgba(0,0,0,0.8)] text-nowrap whitespace-pre">IKNAL</p>
    </div>
  );
}

function ButtonContainer1() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0.8)] box-border content-stretch flex gap-[8px] items-center justify-center px-[16px] py-[12px] right-[40px] rounded-[8px] top-[37px] cursor-pointer transition-all duration-300 hover:bg-black hover:scale-105 hover:shadow-xl" data-name="Button Container">
      <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[24px] relative shrink-0 text-[20px] text-nowrap text-white whitespace-pre">Inicia hoy</p>
    </div>
  );
}

function HeroDesktopUi() {
  return (
    <div className="absolute bg-white h-[720px] left-1/2 rounded-[12px] top-[22px] translate-x-[-50%] w-[1024px]" data-name="hero desktop UI">
      <div className="h-[720px] overflow-clip relative rounded-[inherit] w-[1024px]">
        <div className="absolute bg-[rgba(0,0,0,0.2)] h-[271px] left-[40px] opacity-30 rounded-[8px] top-[106px] w-[729px]" data-name="Container" />
        <div className="absolute bg-[rgba(0,0,0,0.2)] h-[271px] left-[40px] opacity-30 rounded-[8px] top-[409px] w-[729px]" data-name="Container" />
        <div className="absolute bg-[rgba(0,0,0,0.2)] h-[574px] left-[801px] opacity-30 rounded-[8px] top-[106px] w-[183px]" data-name="Container" />
        <Logo2 />
        <ButtonContainer1 />
      </div>
      <div aria-hidden="true" className="absolute border-2 border-[rgba(0,0,0,0.8)] border-solid inset-[-2px] pointer-events-none rounded-[14px]" />
    </div>
  );
}

function Ui1() {
  return (
    <div className="h-[500px] relative shrink-0 w-full" data-name="ui">
      <HeroDesktopUi />
    </div>
  );
}

function Container1() {
  return (
    <div className="absolute bg-gradient-to-r bottom-[290px] box-border content-stretch flex flex-col from-[#ffffff] gap-[128px] items-center left-0 pb-0 pt-[96px] px-[96px] right-0 rounded-[4px] to-[#ffffff] top-0" data-name="container" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\\'0 0 1344 1108\\\' xmlns=\\\'http://www.w3.org/2000/svg\\\' preserveAspectRatio=\\\'none\\\'><rect x=\\\'0\\\' y=\\\'0\\\' height=\\\'100%\\\' width=\\\'100%\\\' fill=\\\'url(%23grad)\\\' opacity=\\\'0.699999988079071\\\'/><defs><radialGradient id=\\\'grad\\\' gradientUnits=\\\'userSpaceOnUse\\\' cx=\\\'0\\\' cy=\\\'0\\\' r=\\\'10\\\' gradientTransform=\\\'matrix(0.0000089812 172.7 -259.85 0.000014392 672 -17.157)\\\'><stop stop-color=\\\'rgba(255,255,255,1)\\\' offset=\\\'0.31174\\\'/><stop stop-color=\\\'rgba(218,210,255,1)\\\' offset=\\\'0.48381\\\'/><stop stop-color=\\\'rgba(181,166,255,1)\\\' offset=\\\'0.65587\\\'/><stop stop-color=\\\'rgba(144,121,255,1)\\\' offset=\\\'0.82794\\\'/><stop stop-color=\\\'rgba(107,76,255,1)\\\' offset=\\\'1\\\'/></radialGradient></defs></svg>')" }}>
      <Content1 />
      <Ui1 />
    </div>
  );
}

function LandingPageHeroWithTaglineAndDesktopAppMockup() {
  return (
    <div className="bg-white h-[1398px] relative shrink-0 w-full z-[1]" data-name="Landing Page Hero With Tagline and Desktop App Mockup">
      <Container1 />
    </div>
  );
}

function MainContent() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow isolate items-center min-h-px min-w-px relative shrink-0 z-[1]" data-name="Main Content">
      <LandingPageHeroWithTaglineAndMobileAppMockup />
      <LandingPageTwoFeatureDescriptionsWithImages />
      <ValuePropositionCardsSection />
      <PricingSection />
      <FAQ></FAQ>
      <LandingPageHeroWithTaglineAndDesktopAppMockup />
    </div>
  );
}

function Container2() {
  return (
    <div className="box-border content-stretch flex items-start px-0 py-[48px] shrink-0 w-full" data-name="Container">
      <MainContent />
    </div>
  );
}

function Frame() {
  return (
    <div className="h-0 relative shrink-0 w-full" data-name="Frame">
      <div className="absolute inset-[-1px_-7.14%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1536 2">
          <g id="Frame">
            <path d="M0 1H1536" id="divider" stroke="url(#paint0_linear_1_385)" strokeWidth="2" />
          </g>
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_385" x1="768" x2="768" y1="1" y2="2">
              <stop stopColor="#1BC8C0" />
              <stop offset="0.5" stopColor="#6B4CFF" />
              <stop offset="1" stopColor="#1BC8C0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Logo3() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Logo">
      <div className="[grid-area:1_/_1] h-[24px] ml-[59px] mt-[15px] relative w-[89px]" data-name="Rectangle">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[588.51%] left-[-92.87%] max-w-none top-[-405.75%] w-[282.73%]" />
        </div>
      </div>
      <div className="[grid-area:1_/_1] h-[54px] ml-0 mt-0 relative w-[53px]" data-name="Rectangle">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[179.65%] left-[-117.14%] max-w-none top-[-25.26%] w-[332.86%]" />
        </div>
      </div>
    </div>
  );
}

function Facebook() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="facebook">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="facebook">
          <path d={svgPaths.p6a67100} fill="var(--fill-0, black)" fillOpacity="0.4" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Instagram() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="instagram">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="instagram">
          <path d={svgPaths.p39559c70} fill="var(--fill-0, black)" fillOpacity="0.4" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Twitter() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="twitter">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="twitter">
          <path d={svgPaths.p20e7b7c0} fill="var(--fill-0, black)" fillOpacity="0.4" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0" data-name="Container">
      <Facebook />
      <Instagram />
      <Twitter />
    </div>
  );
}

function Logos() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start justify-between min-h-px min-w-px relative self-stretch shrink-0" data-name="logos">
      <Logo3 />
      <Container3 />
    </div>
  );
}

function FooterLinkColumn() {
  return (
    <div className="content-stretch flex flex-col font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium gap-[8px] items-start justify-center leading-[20px] relative shrink-0 text-[15px] w-[200px]" data-name="footerLinkColumn">
      <p className="relative shrink-0 text-[rgba(0,0,0,0.8)] w-full">Title</p>
      <p className="relative shrink-0 text-[rgba(0,0,0,0.4)] w-full">Page link</p>
      <p className="relative shrink-0 text-[rgba(0,0,0,0.4)] w-full">Page link</p>
      <p className="relative shrink-0 text-[rgba(0,0,0,0.4)] w-full">Page link</p>
      <p className="relative shrink-0 text-[rgba(0,0,0,0.4)] w-full">Page link</p>
      <p className="relative shrink-0 text-[rgba(0,0,0,0.4)] w-full">Page link</p>
    </div>
  );
}

function FooterLinkColumn1() {
  return (
    <div className="content-stretch flex flex-col font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium gap-[8px] items-start justify-center leading-[20px] relative shrink-0 text-[15px] w-[200px]" data-name="footerLinkColumn">
      <p className="relative shrink-0 text-[rgba(0,0,0,0.8)] w-full">Resources</p>
      <p className="relative shrink-0 text-[rgba(0,0,0,0.4)] w-full">Blog</p>
      <p className="relative shrink-0 text-[rgba(0,0,0,0.4)] w-full">Help Center</p>
      <p className="relative shrink-0 text-[rgba(0,0,0,0.4)] w-full">Contact</p>
    </div>
  );
}

function FooterLinkColumn2() {
  return (
    <div className="content-stretch flex flex-col font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium gap-[8px] items-start justify-center leading-[20px] relative shrink-0 text-[15px] w-[200px]" data-name="footerLinkColumn">
      <p className="relative shrink-0 text-[rgba(0,0,0,0.8)] w-full">Legal</p>
      <p className="relative shrink-0 text-[rgba(0,0,0,0.4)] w-full">Privacy Policy</p>
      <p className="relative shrink-0 text-[rgba(0,0,0,0.4)] w-full">Terms of Service</p>
    </div>
  );
}

function FooterLinkColumn3() {
  return (
    <div className="content-stretch flex flex-col font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium gap-[8px] items-start justify-center leading-[20px] relative shrink-0 text-[15px] w-[200px]" data-name="footerLinkColumn">
      <p className="relative shrink-0 text-[rgba(0,0,0,0.8)] w-full">Follow Us</p>
      <p className="relative shrink-0 text-[rgba(0,0,0,0.4)] w-full">LinkedIn</p>
      <p className="relative shrink-0 text-[rgba(0,0,0,0.4)] w-full">Twitter</p>
      <p className="relative shrink-0 text-[rgba(0,0,0,0.4)] w-full">Facebook</p>
    </div>
  );
}

function PageLinks1() {
  return (
    <div className="content-stretch flex gap-[48px] items-start relative shrink-0 w-full" data-name="pageLinks">
      <Logos />
      <FooterLinkColumn />
      <FooterLinkColumn1 />
      <FooterLinkColumn2 />
      <FooterLinkColumn3 />
    </div>
  );
}

function SoftwareCompanyFooter() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col gap-[24px] items-start pb-[48px] pt-[96px] px-0 relative shrink-0 w-full z-[1]" data-name="Software Company Footer">
      <Frame />
      <PageLinks1 />
    </div>
  );
}

export default function PaginaLand() {
  return (
    <div className="bg-white relative size-full">
      {/* Header fijo */}
      <Header />
      
      {/* Espaciador invisible para empujar el contenido */}
      <div className="h-[97px] w-full shrink-0" />
      
      {/* Contenido */}
      <div className="flex flex-col items-center size-full">
        <div className="box-border content-stretch flex flex-col items-center px-[48px] py-0 size-full">
          <Container2 />
          <SoftwareCompanyFooter />
        </div>
      </div>
    </div>
  );
}



