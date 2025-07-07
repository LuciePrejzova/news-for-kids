import React from "react";
import "./AboutUs.css";

const AboutUs = () => {
  return (
    <div className="about-us-container">
      <h1>O projektu</h1>
      <p>
        Tento projekt vznikl s cílem zpřístupnit důležité zprávy dětem ve věku 8 až 13 let
        v bezpečné, srozumitelné a hravé podobě. Věříme, že i mladší generace by měla mít
        možnost porozumět tomu, co se děje ve světě kolem nich.
      </p>
      <p>
        Děti dnes často získávají informace prostřednictvím sociálních sítí, které jim ukazují
        obsah podle algoritmů – tedy převážně to, co už znají nebo sledují. Tento projekt chce
        nabídnout alternativu: pravidelný přístup k objektivním, různorodým a vzdělávacím zprávám,
        které pomáhají dětem rozvíjet přehled a mediální gramotnost od raného věku.
      </p>
      <p>
        Každý den vybíráme zajímavé události a upravujeme tak,
        aby jim porozuměly i děti. Cílem je nejen informovat, ale také podpořit zvědavost, porozumění
        složitějším pojmům a chuť k dalšímu čtení.
      </p>
    </div>
  );
};

export default AboutUs;
