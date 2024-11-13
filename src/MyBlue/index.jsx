import * as S from "./style";

import { useState } from "react";

import Logo from "../assets/MeuBlue.png";

import { GoShieldCheck } from "react-icons/go";
import { FaAngleDown } from "react-icons/fa6";

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

import Back from "../assets/o-software-da-sua-empresa.png";

import Hexagon from "../assets/ecossistema-de-gestao-exagono.svg";
import Hand from "../assets/hand.png";

export function MyBlue(){
    const [position, setPosition] = useState('');

    return(
     <S.Container>
      <S.Header>
       <div className="top">
        <span>
            Um produto da <strong>BLUE ERP</strong>
        </span>
       </div>

       <img src={Logo} alt="" />

       <div className="right">
        <span><strong>Ecossistema </strong> de Gestão <FaAngleDown/></span>
        <span>ERP sob medida <FaAngleDown/></span>

        <button>Agendar apresentação</button>
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

         <button>Agendar apresentação</button>
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

        <div className="Bottom">
         <div className="left">
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
              <strong>Loja</strong>
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

      <S.Software>
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

        <button>Agendar apresentação</button>
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

        <button>Agendar apresentação</button>
      </S.Tools>

      <S.Ads>
        <div className="text">
          <h2>
          Agende agora mesmo uma <br />
          <strong> apresentação sem <br />
          compromisso </strong>
          </h2>
          <button>Agendar apresentação</button>
        </div>

        <div className="right">

        </div>
      </S.Ads>
     </S.Container>
    )
}