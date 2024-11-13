import * as S from "./style";

import { useState, useEffect, useRef } from "react";
import InputMask from 'react-input-mask';
import Swal from 'sweetalert2';
import 'jquery-mask-plugin';
import $ from 'jquery';

import Logo from "../assets/MeuBlue.png";

import Linkedin from "../assets/icon-awesome-linkedin.svg";
import Tel from "../assets/icon-awesome-phone-square.svg";
import TopBack from "../assets/back-bellow-fold.svg";

import { GoShieldCheck } from "react-icons/go";
import { FaAngleDown } from "react-icons/fa6";

import { IoShieldCheckmarkOutline,  IoPhonePortraitOutline } from "react-icons/io5";
import { MdOutlineMessage } from "react-icons/md";
import { IoMdCloudOutline } from "react-icons/io";
import { TbTruckDelivery } from "react-icons/tb";
import { RiWifiOffLine } from "react-icons/ri";

import I1 from "../assets/icon-estoque-meu-sige.svg";
import I2 from "../assets/icon-financas-meu-sige.svg";
import I3 from "../assets/icon-fiscal-meu-sige.svg";
import I4 from "../assets/icon-vendas-meu-sige.svg";

import t1 from "../assets/rh.svg";
import t2 from "../assets/catalogo-virtual.svg";
import t3 from "../assets/producao.svg";
import t4 from "../assets/gestao-de-frota.svg";
import t5 from "../assets/pdv.svg";
import t6 from "../assets/contratos.svg";
import t7 from "../assets/estoque.svg";
import t8 from "../assets/expedicao.svg";
import t9 from "../assets/compras.svg";
import t10 from "../assets/relatorios.svg";
import t11 from "../assets/gestao-de-servicos.svg";
import t12 from "../assets/emissao-de-notas.svg";

import b1 from "../assets/erp-para-comercio.png";
import b2 from "../assets/erp-para-distribuicao.png";
import b3 from "../assets/erp-para-industria.png";
import b4 from "../assets/erp-para-produtos-alimenticios.png";
import b5 from "../assets/erp-para-produtos-medicos.png";
import b6 from "../assets/erp-para-servico.png";

import Hexagon from "../assets/ecossistema-de-gestao-exagono.svg";
import Woman from "../assets/agendar-apresentacao-meu-sige.png";
import Back from "../assets/o-software-da-sua-empresa.png";
import Hand from "../assets/hand.png";

export function MyBlue(){
    const [disabled, setDisabled] = useState(false);
    const [position, setPosition] = useState('');
    const section1Ref = useRef(null);
    const section2Ref = useRef(null);
    const section3Ref = useRef(null);
    
    const [type, setType] = useState('Industria');
    const [telefone, setTelefone] = useState('');
    const [name2, setName2] = useState('');
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [cnpj, setCnpj] = useState('');
 
    const Toast = Swal.mixin({
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.onmouseenter = Swal.stopTimer;
        toast.onmouseleave = Swal.resumeTimer;
      }
    });

    const handleScrollToSection = (sectionRef) => {
      sectionRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    };

    useEffect(() => {
      $('#cnpj').mask('00.000.000/0000-00');
      $('#telefone').mask('(00) 00000-0000');
    }, []);

    async function HandleSend() {
      if (!telefone.trim() || !name2.trim() || !name.trim() || !email.trim() || !type.trim() || !cnpj.trim()) {
        return Toast.fire({
          icon: "warning",
          title: "Preencha todos os campos!"
        });
      }
    
      const regexEmail = /^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/;
      const cnpjRegex = /^\d{2}\.\d{3}\.\d{3}\/\d{4}-\d{2}$/;
      const telefoneRegex = /^\(\d{2}\) \d{4,5}-\d{4}$/;
    
      if (!regexEmail.test(email)) {
        return Toast.fire({
          icon: "warning",
          title: "Digite um email válido"
        });
      }
    
      if (!cnpjRegex.test(cnpj)) {
        return Toast.fire({
          icon: "warning",
          title: "Digite um cnpj válido"
        });
      }
    
      if (!telefoneRegex.test(telefone)) {
        return Toast.fire({
          icon: "warning",
          title: "Digite um número de telefone válido"
        });
      }
    
      try {
        setDisabled(true);
        console.log(telefone, email, name, name2, type, cnpj);
    
        Toast.fire({
          icon: "success",
          title: "Agendamento feito!"
        });
      } catch (error) {
        Toast.fire({
          icon: "error",
          title: "Ocorreu um erro, tente novamente!"
        });
      } finally {
        setDisabled(false);
      }
    };

    return(
     <S.Container>
      <S.Header>
       <div className="top">
        <span>
            Um produto da <strong>Blue Innovation Group</strong>
        </span>
       </div>

       <img src={Logo} alt="" />

       <div className="right">
        <span onClick={() => handleScrollToSection(section1Ref)}><strong>Ecossistema </strong> de Gestão <FaAngleDown/></span>
        <span onClick={() => handleScrollToSection(section2Ref)}>ERP sob medida <FaAngleDown/></span>

        <button onClick={() => handleScrollToSection(section3Ref)}>Agendar apresentação</button>
       </div>
      </S.Header>

      <S.Main>
        <div className="texts">
         <h2>
Com o <strong> Meu Blue </strong>, você  <br /> tem  mais do que um sistema de <br /> gestão como qualquer outro.
         </h2>

         <span>    
Tenha um <strong> software exclusivo, </strong> desenvolvido <br /> para atender às necessidades específicas do <br /> <strong> seu negócio!</strong>
         </span>

         <button onClick={() => handleScrollToSection(section3Ref)}>Agendar apresentação</button>
        </div>

        <div className="image">
          <div className="text">
            <p>
Com o <strong> Meu Blue </strong> você descobrirá todos os benefícios de um <strong>sistema especializado para o seu negócio!</strong> 
            </p>
          </div>
        </div>
      </S.Main>

      <S.Range>
        <div className="text">
          <h3>Consultoria</h3>
          <p>Compreendemos as particularidades da sua empresa e suas necessidades.</p>
        </div>

        <div className="text">
          <h3>Projeto de Personalização</h3>
          <p>Desenvolvemos soluções exclusivas para atender aos processos do seu negócio.</p>
        </div>

        <div className="text">
          <h3>Implantação</h3>
          <p>Apoiamos você em cada etapa de implementação e no uso eficaz do sistema.</p>
        </div>

        <div className="text">
          <h3>Treinamento</h3>
          <p>Capacitamos toda a sua equipe, criando uma jornada para garantir a aderência ao sistema.</p>
        </div>
      </S.Range>

      <S.Plataform data-position={position}>
        <div className="Top">
         <img src={TopBack} alt="" className="Background"/>
         <h3><strong>Gerencie cada setor do seu negócio </strong> em uma só plataforma.</h3>

         <div className="gestoes">
          <div className="gestao">
           <div className="title">
            <img src={I1} alt="" />

            <h4>
            Gestão <br />
            <strong>Logística</strong>
            </h4>
           </div>

           <ul>

<li>
<GoShieldCheck /><p><strong>Endereçamento </strong> de Estoque;</p>
</li>

<li>
<GoShieldCheck /><p>Multiplos <strong> Depósitos;</strong></p>
</li>

<li>
<GoShieldCheck /><p>Gestão de <strong> Frota.</strong></p>
</li>

           </ul>
          </div>

          <div className="gestao">
           <div className="title">
            <img src={I2} alt="" />

            <h4>
            Gestão <br />
            <strong>Financeira</strong>
            </h4>
           </div>

           <ul>

<li>
<GoShieldCheck /><p><strong>Fluxo de Caixa;</strong></p>
</li>

<li>
<GoShieldCheck /><p>Grupos de  <strong> DRE;</strong></p>
</li>

<li>
<GoShieldCheck /><p>Muitos  <strong> Relatórios.</strong></p>
</li>

           </ul>
          </div>

          <div className="gestao">
           <div className="title">
            <img src={I3} alt="" />

            <h4>
            Gestão <br />
            <strong>Fiscal</strong>
            </h4>
           </div>

           <ul>

<li>
<GoShieldCheck /><p><strong>SPED </strong> Fiscal;</p>
</li>

<li>
<GoShieldCheck /><p><strong> NF-e, NS-e, NFC-e </strong> e <strong> CF-e SAT</strong></p>
</li>

<li>
<GoShieldCheck /><p><strong>CT-e </strong> e <strong> MDF-e.</strong></p>
</li>

           </ul>
          </div>

          <div className="gestao">
           <div className="title">
            <img src={I4} alt="" />

            <h4>
            Gestão de<br />
            <strong>Vendas</strong>
            </h4>
           </div>

           <ul>

<li>
<GoShieldCheck /><p>Sistema <strong> PDV;</strong></p>
</li>

<li>
<GoShieldCheck /><p><strong>Faturamento </strong> em Lote;</p>
</li>

<li>
<GoShieldCheck /><p>Sistema <strong> CRM.</strong></p>
</li>





           </ul>
          </div>
         </div>
        </div>

        <div className="Bottom" ref={section1Ref}>
         <div className="left"  >
          <h2>
          Um ERP completo com <strong> aplicativos integrados </strong> para 
          aumentar a produtividade e unificar todos 
          os setores da sua empresa.
          </h2>

          <div className="apps">
            <div 
             className="app loja" 
             onMouseEnter={()=> setPosition('loja')}
             onMouseLeave={()=> setPosition('')} 
            >
              <strong>Loja</strong>
              <p>Virtual</p>
            </div>

            <div
             className="app lite"
             onMouseEnter={()=> setPosition('lite')}
             onMouseLeave={()=> setPosition('')} 
            >
              <strong>APP</strong>
              <p>Offline</p>
            </div>

            <div 
             className="app mobi"
             onMouseEnter={()=> setPosition('mobi')}
             onMouseLeave={()=> setPosition('')}
            >
              <strong>APP</strong>
              <p>de Vendas</p>
            </div>
          </div>
         </div>

         <div className="right">
          
          <img src={Hexagon} alt="" className="Hexagon"/>
          <img src={Hand} alt="" className="Hand"/>
         </div>
        </div>
      </S.Plataform>

      <S.Software ref={section2Ref}>
       <div className="left">
        <h2>
         Oferecemos <strong> o melhor <br /> custo-benefício </strong> em software de gestão personalizado no mercado!
        </h2>

        <div className="texts">
          <p>
          Aproveitamos as ferramentas já disponíveis na BLUE ERP, para que você pague somente pelas customizações e recursos que realmente deseja adicionar.
          </p>

          <p>
O desenvolvimento é realizado por especialistas da BLUE, que possuem total conhecimento do funcionamento e dos códigos do sistema.
          </p>
        </div>

        <button onClick={() => handleScrollToSection(section3Ref)}>Agendar apresentação</button>
       </div>

       <div className="right">
        <img src={Back} alt="" />
       </div>
      </S.Software>

      <S.Tools>
        <h3>Algumas das muitas <strong> ferramentas nativas </strong> do Meu Blue</h3>
        
        <div className="grid">
          <div className="card">
            <img src={t1} alt="" />
            <span>RH</span>
          </div>

          <div className="card">
            <img src={t2} alt="" />
            <span>Catálogo Virtual</span>
          </div>

          <div className="card">
            <img src={t3} alt="" />
            <span>Produção</span>
          </div>

          <div className="card">
            <img src={t4} alt="" />
            <span>Gestão de Frota</span>
          </div>

          <div className="card">
            <img src={t5} alt="" />
            <span>Frente de Caixa <br /> (PDV)</span>
          </div>

          <div className="card">
            <img src={t6} alt="" />
            <span>Contratos</span>
          </div>

          <div className="card">
            <img src={t7} alt="" />
            <span>Estoque</span>
          </div>

          <div className="card">
            <img src={t8} alt="" />
            <span>Expedição</span>
          </div>

          <div className="card">
            <img src={t9} alt="" />
            <span>Compras</span>
          </div>

          <div className="card">
            <img src={t10} alt="" />
            <span>Relatórios</span>
          </div>

          <div className="card">
            <img src={t11} alt="" />
            <span>Ordens de Serviço</span>
          </div>

          <div className="card">
            <img src={t12} alt="" />
            <span>Emissão de Notas</span>
          </div>
        </div>

        <button onClick={() => handleScrollToSection(section3Ref)}>Agendar apresentação</button>
      </S.Tools>

      <S.Ads>
        <div className="text">
          <h2>
          Agende agora mesmo uma <br />
          <strong> apresentação sem <br />
          compromisso </strong>
          </h2>
          <button onClick={() => handleScrollToSection(section3Ref)}>Agendar apresentação</button>
        </div>

        <div className="right">
         <ul>
<li>
<GoShieldCheck/>
<p>
  <strong>Entenderemos os processos </strong> da sua empresa;
</p>
</li>

<li>
<GoShieldCheck/>
<p>
  Apresentaremos as funcionalidades nativas do ERP;
</p>
</li>

<li>
<GoShieldCheck/>
<p>
  Pensaremos juntos as possíveis <strong> customizações.</strong>
</p>
</li>

         </ul>
         <img src={Woman} alt=""/>
        </div>
      </S.Ads>

      <S.Branches>
        <h3>o Meu Blue é perfeito para os seguintes <strong> ramos de atuação</strong></h3>

        <div className="images">
          <div className="image">
            <img src={b1} alt="" />
            <span>Comércio</span>
          </div>

          <div className="image">
            <img src={b2} alt="" />
            <span>Distribuidoras</span>
          </div>

          <div className="image">
            <img src={b3} alt="" />
            <span>Indústria</span>
          </div>

          <div className="image">
            <img src={b4} alt="" />
            <span>Produtos Alimentícios</span>
          </div>

          <div className="image">
            <img src={b5} alt="" />
            <span>Produtos Médicos</span>
          </div>

          <div className="image">
            <img src={b6} alt="" />
            <span>Serviços</span>
          </div>

        </div>
      </S.Branches>

      <S.Form ref={section3Ref}>
       <div className="form">
        <h3>
         <strong>Preencha os dados </strong> abaixo e
         <strong> agende </strong> <br /> uma apresentação comercial!
        </h3>

        <div className="inputs">
          <input 
           type="text" 
           name="name" 
           value={name}
           placeholder="Nome*" 
           onChange={(e)=> setName(e.target.value)}
           onInput={(e)=> setName(e.target.value)}/>

          <InputMask 
           value={telefone} 
           mask="(99) 99999-9999" 
           placeholder="Telefone*" 
           onInput={(e)=> setTelefone(e.target.value)}
           onChange={e => setTelefone(e.target.value)} />

          <input 
           type="email" 
           name="email" 
           value={email}
           placeholder="Email corporativo*" 
           onChange={(e)=> setEmail(e.target.value)}
           onInput={(e)=> setEmail(e.target.value)}/>

          <input 
           type="text" 
           name="name2" 
           value={name2}
           placeholder="Nome da empresa*" 
           onChange={(e)=> setName2(e.target.value)}
           onInput={(e)=> setName2(e.target.value)}/>

          <InputMask 
           value={cnpj} 
           placeholder="CNPJ"
           mask="99.999.999/9999-99" 
           onChange={e => setCnpj(e.target.value)}
           onInput={(e) => setCnpj(e.target.value)}
           />


          <select defaultValue={type} name="type" id="" onChange={(e)=> setType(e.target.value)}>
            <option value="Industria">Industria</option>
            <option value="Comércio">Comércio</option>
            <option value="Prestação de Serviços">Prestação de Serviços</option>
            <option value="Distribuição">Distribuição</option>
            <option value="Produtos Médicos">Produtos Médicos</option>
            <option value="Produtos Alimentícios">Produtos Alimentícios</option>
          </select>
        </div>

        <button onClick={HandleSend} disabled={disabled}>{ disabled ? 'Agendando...' : 'Agendar'}</button>
       </div>
      </S.Form>

      <S.Footer>
        <div className="top">
         <div className="icons">
          <div className="icon">
           <img src={Tel} alt="" onClick={()=>  {
            window.open("https://wa.me/message/KL5UXTDEMTXIK1", '_blank');
           }}/>
           <a href="https://wa.me/message/KL5UXTDEMTXIK1" target="blank">+55 11 2110-6090</a>
          </div>

          <div className="icon">
           <img src={Linkedin} alt="" onClick={()=>  {
             window.open("https://www.linkedin.com/company/105473549/", '_blank');
           }}/>
          </div>
         </div>

         <div className="eco">
         <div className="ecosystem">
          <div className="cloud circle">
           <IoMdCloudOutline />
          </div>

          <div className="truck circle" >
           <TbTruckDelivery />
          </div>

          <div className="check circle">
           <IoShieldCheckmarkOutline />
          </div>

          <div className="phone circle" >
           <IoPhonePortraitOutline />
          </div>

          <div className="nowifi circle">
           <RiWifiOffLine />
          </div>

          <div className="message circle">
           <MdOutlineMessage />
          </div>
         </div>

         <span>
         <strong>Ecossistema </strong> de <br />
         gestão e vendas
         </span>
         </div>
        </div>

        <p>
        Todos os direitos reservados | <strong> Blue Innovation Group - 2024</strong>
        </p>
      </S.Footer>
     </S.Container>
    )
}