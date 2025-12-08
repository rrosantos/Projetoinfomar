import svgPaths from "./svg-tagjnu5zrp";
import imgDavidCourbit9XzyEzPahmiUnsplash1 from "figma:asset/b2a408822b18a7d0b9b7db347db859d884a20b65.png";
import imgTurtle11 from "figma:asset/493be1938fe001c2554d7d9c3a1604e9c1ba290f.png";
import imgMantaRay11 from "figma:asset/36389848d02c2ac45e834c7556903f7ad18fe237.png";
import imgWhale1 from "figma:asset/f5bc07e0a3c338b67c395928782196e74264b87f.png";
import imgEllipse1 from "figma:asset/efec8c94ad291116e35eb32ac63e415aab72ec78.png";
import imgEllipse2 from "figma:asset/8fb0e34bae3a153e7467024562495c1f93523426.png";
import imgEllipse3 from "figma:asset/9211102ff02a6aab11fa3551310050c75ebca7b4.png";
import imgEllipse4 from "figma:asset/3b68ff48f951de7d5e54f20f70e676f04b09cd70.png";
import imgEllipse5 from "figma:asset/8e86a32d288efae59c7794609dc21fabcb82e14f.png";
import imgEllipse6 from "figma:asset/5339631e1d1d20b750c7505705ae611f3eb9091e.png";
import imgEllipse7 from "figma:asset/7960ff8078ddaf2a8df2d581b16a3d6cf36b2059.png";

function Decoracao() {
  return (
    <div className="absolute h-[697.377px] left-0 top-[646.62px] w-[1561px]" data-name="decoração">
      <div className="absolute bottom-0 left-0 right-0 top-[-0.86%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1561 704">
          <g id="decoraÃ§Ã£o">
            <path d={svgPaths.p6d51700} fill="var(--fill-0, #184E77)" id="Vector 2" />
            <path d={svgPaths.p1740f400} fill="var(--fill-0, #E2E2E2)" id="Vector 1" />
            <path d={svgPaths.p2702db80} id="Vector 3" stroke="var(--stroke-0, #D9ED92)" strokeWidth="12" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Frame5() {
  return (
    <div className="absolute bg-[#083b61] content-stretch flex items-center justify-center left-0 px-[40px] py-[15px] rounded-[30px] top-0">
      <div className="flex flex-col font-['Roboto:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#d9ed92] text-[36px] text-nowrap tracking-[0.54px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] whitespace-pre">CONTRIBUIR</p>
      </div>
    </div>
  );
}

function JunteSeANos() {
  return (
    <div className="absolute h-[168px] left-[222px] top-[361px] w-[318px]" data-name="junte-se a nos">
      <Frame5 />
      <div className="absolute flex flex-col font-['Roboto:Bold',sans-serif] font-bold justify-center leading-[0] left-[147.5px] text-[28px] text-center text-white top-[149.5px] tracking-[0.42px] translate-x-[-50%] translate-y-[-50%] w-[295px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal]">Contribua diretamente na luta da preservação dos animais marinhos</p>
      </div>
    </div>
  );
}

function Sobre() {
  return (
    <div className="absolute h-[1344px] left-[-32px] top-0 w-[1561px]" data-name="sobre">
      <div className="absolute h-[1038px] left-[32px] top-0 w-[1440px]" data-name="david-courbit-9XzyEzPAHMI-unsplash 1">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[252.91%] left-[-3.82%] max-w-none top-[-118.89%] w-[121.6%]" src={imgDavidCourbit9XzyEzPahmiUnsplash1} />
        </div>
      </div>
      <Decoracao />
      <JunteSeANos />
    </div>
  );
}

function Logo() {
  return (
    <div className="absolute h-[64px] left-0 top-0 w-[269px]" data-name="Logo">
      <div className="absolute left-0 size-[64px] top-0" data-name="turtle (1) 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgTurtle11} />
      </div>
      <div className="absolute flex flex-col font-['Roboto:SemiBold',sans-serif] font-semibold justify-center leading-[0] left-[83px] text-[36px] text-nowrap text-white top-[32px] tracking-[4.32px] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] whitespace-pre">INFOMAR</p>
      </div>
    </div>
  );
}

function Menu() {
  return (
    <div className="absolute font-['Roboto:Medium',sans-serif] font-medium h-[28px] leading-[0] left-1/2 text-[24px] text-white top-[15px] tracking-[0.36px] translate-x-[-50%] w-[362px]" data-name="Menu">
      <button className="absolute cursor-pointer flex flex-col justify-center left-0 top-[14px] translate-y-[-50%] w-[61px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal]">Início</p>
      </button>
      <div className="absolute flex flex-col justify-center left-[131px] top-[14px] translate-y-[-50%] w-[131px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal]">Campanhas</p>
      </div>
      <div className="absolute flex flex-col justify-center left-[332px] top-[14px] translate-y-[-50%] w-[92px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal]">{`Notícias `}</p>
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="absolute bg-[#083b61] content-stretch flex items-center justify-center left-[1185px] px-[30px] py-[15px] rounded-[30px] top-[3px]">
      <div className="flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#d9ed92] text-[24px] text-nowrap tracking-[-0.72px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] whitespace-pre">DOE JÁ!</p>
      </div>
    </div>
  );
}

function OqueEInfomar() {
  return (
    <div className="absolute h-[709px] left-1/2 top-[1038px] translate-x-[-50%] w-[1150px]" data-name="oque é infomar">
      <div className="absolute capitalize flex flex-col font-['Roboto:Bold',sans-serif] font-bold justify-center leading-[0] left-[299px] text-[#184e77] text-[64px] text-nowrap top-[37.5px] tracking-[0.96px] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] whitespace-pre">OQUE é INFOMAR?</p>
      </div>
      <div className="absolute flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] left-[581px] text-[#636363] text-[32px] text-center top-[179px] tracking-[0.48px] translate-x-[-50%] translate-y-[-50%] w-[1008px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[99.825%]">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. `}</p>
      </div>
      <div className="absolute flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] left-[299.5px] text-[#636363] text-[28px] text-center top-[581px] tracking-[0.42px] translate-x-[-50%] translate-y-[-50%] w-[445px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.17]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </div>
      <div className="absolute flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] left-[862.5px] text-[#636363] text-[28px] text-center top-[581px] tracking-[0.42px] translate-x-[-50%] translate-y-[-50%] w-[445px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.17]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </div>
      <div className="absolute left-[259px] size-[80px] top-[352px]" data-name="manta-ray (1) 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgMantaRay11} />
      </div>
      <div className="absolute left-[834px] size-[80px] top-[350px]" data-name="whale 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgWhale1} />
      </div>
      <div className="absolute flex flex-col font-['Roboto:Bold',sans-serif] font-bold justify-center leading-[0] left-[222px] text-[#184e77] text-[40px] text-nowrap top-[473.5px] tracking-[0.6px] translate-y-[-50%] uppercase" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] whitespace-pre">Missão</p>
      </div>
      <div className="absolute flex flex-col font-['Roboto:Bold',sans-serif] font-bold justify-center leading-[0] left-[786px] text-[#184e77] text-[40px] text-nowrap top-[473.5px] tracking-[0.6px] translate-y-[-50%] uppercase" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] whitespace-pre">valores</p>
      </div>
    </div>
  );
}

function Decoracao1() {
  return (
    <div className="h-[697px] relative w-[1561px]" data-name="decoração">
      <div className="absolute bottom-[-0.05%] left-0 right-0 top-[-0.86%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1561 704">
          <g id="decoraÃ§Ã£o">
            <path d={svgPaths.p6d51700} fill="var(--fill-0, #184E77)" id="Vector 2" />
            <path d={svgPaths.p1740f400} fill="var(--fill-0, #252525)" id="Vector 1" />
            <path d={svgPaths.p2702db80} id="Vector 3" stroke="var(--stroke-0, #D9ED92)" strokeWidth="12" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute border border-[#d9ed92] border-solid h-[207px] left-[72px] rounded-[100px] top-[1226px] w-[784px]" data-name="Frame">
      <div className="absolute bg-gradient-to-r from-[#168aad] h-[207px] left-[-1px] opacity-50 rounded-[100px] to-[#52b69a] top-[-1px] w-[784px]" />
      <div className="absolute left-[24px] size-[176px] top-[15px]">
        <img alt="" className="block max-w-none size-full" height="176" src={imgEllipse1} width="176" />
      </div>
      <div className="absolute flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] left-[217px] text-[40px] text-nowrap text-white top-[79.5px] tracking-[0.6px] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] whitespace-pre">tartaruga-de-kemp</p>
      </div>
      <div className="absolute flex flex-col font-['Roboto:Condensed_ExtraLight_Italic',sans-serif] font-extralight italic justify-center leading-[0] left-[217px] text-[40px] text-nowrap text-white top-[132.5px] tracking-[0.6px] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 75" }}>
        <p className="leading-[normal] whitespace-pre">{`Lepidochelys kempii `}</p>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="absolute border border-[#d9ed92] border-solid h-[207px] left-[588px] rounded-[100px] top-[1064px] w-[784px]" data-name="Frame">
      <div className="absolute bg-gradient-to-r from-[#52b69a] h-[207px] left-[-1px] opacity-50 rounded-[100px] to-[#168aad] top-[-1px] w-[784px]" />
      <div className="absolute left-[582px] size-[176px] top-[15px]">
        <img alt="" className="block max-w-none size-full" height="176" src={imgEllipse2} width="176" />
      </div>
      <div className="absolute flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] left-[293px] text-[40px] text-nowrap text-white top-[76.5px] tracking-[0.6px] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] whitespace-pre">lontra-marinha</p>
      </div>
      <div className="absolute flex flex-col font-['Roboto:Condensed_ExtraLight_Italic',sans-serif] font-extralight italic justify-center leading-[0] left-[352px] text-[40px] text-nowrap text-white top-[129.5px] tracking-[0.6px] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 75" }}>
        <p className="leading-[normal] whitespace-pre">Enhydra lutris</p>
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="absolute border border-[#d9ed92] border-solid h-[207px] left-[72px] rounded-[100px] top-[896px] w-[784px]" data-name="Frame">
      <div className="absolute bg-gradient-to-r from-[#168aad] h-[207px] left-[-1px] opacity-50 rounded-[100px] to-[#52b69a] top-[-1px] w-[784px]" />
      <div className="absolute left-[24px] size-[176px] top-[15px]">
        <img alt="" className="block max-w-none size-full" height="176" src={imgEllipse3} width="176" />
      </div>
      <div className="absolute flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] left-[217px] text-[40px] text-nowrap text-white top-[79.5px] tracking-[0.6px] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] whitespace-pre">baleia-azul</p>
      </div>
      <div className="absolute flex flex-col font-['Roboto:Condensed_ExtraLight_Italic',sans-serif] font-extralight italic justify-center leading-[0] left-[217px] text-[40px] text-nowrap text-white top-[132.5px] tracking-[0.6px] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 75" }}>
        <p className="leading-[normal] whitespace-pre">Balaenoptera musculus</p>
      </div>
    </div>
  );
}

function Frame4() {
  return (
    <div className="absolute border border-[#d9ed92] border-solid h-[207px] left-[588px] rounded-[100px] top-[734px] w-[784px]" data-name="Frame">
      <div className="absolute bg-gradient-to-r from-[#52b69a] h-[207px] left-[-1px] opacity-50 rounded-[100px] to-[#168aad] top-[-1px] w-[784px]" />
      <div className="absolute left-[582px] size-[176px] top-[15px]">
        <img alt="" className="block max-w-none size-full" height="176" src={imgEllipse4} width="176" />
      </div>
      <div className="absolute flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] left-[266px] text-[40px] text-nowrap text-white top-[76.5px] tracking-[0.6px] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] whitespace-pre">tubarão-martelo</p>
      </div>
      <div className="absolute flex flex-col font-['Roboto:Condensed_ExtraLight_Italic',sans-serif] font-extralight italic justify-center leading-[0] left-[262px] text-[40px] text-nowrap text-white top-[129.5px] tracking-[0.6px] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 75" }}>
        <p className="leading-[normal] whitespace-pre">{` Sphyrna mokarran `}</p>
      </div>
    </div>
  );
}

function Frame6() {
  return (
    <div className="absolute border border-[#d9ed92] border-solid h-[207px] left-[72px] rounded-[100px] top-[566px] w-[784px]" data-name="Frame">
      <div className="absolute bg-gradient-to-r from-[#168aad] h-[207px] left-[-1px] opacity-50 rounded-[100px] to-[#52b69a] top-[-1px] w-[784px]" />
      <div className="absolute left-[24px] size-[176px] top-[15px]">
        <img alt="" className="block max-w-none size-full" height="176" src={imgEllipse5} width="176" />
      </div>
      <div className="absolute flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] left-[217px] text-[40px] text-nowrap text-white top-[79.5px] tracking-[0.6px] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] whitespace-pre">vaquita</p>
      </div>
      <div className="absolute flex flex-col font-['Roboto:Condensed_ExtraLight_Italic',sans-serif] font-extralight italic justify-center leading-[0] left-[217px] text-[40px] text-nowrap text-white top-[132.5px] tracking-[0.6px] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 75" }}>
        <p className="leading-[normal] whitespace-pre">Phoeocna sinus</p>
      </div>
    </div>
  );
}

function Frame7() {
  return (
    <div className="absolute border border-[#d9ed92] border-solid h-[207px] left-[588px] rounded-[100px] top-[404px] w-[784px]" data-name="Frame">
      <div className="absolute bg-gradient-to-r from-[#52b69a] h-[207px] left-[-1px] opacity-50 rounded-[100px] to-[#168aad] top-[-1px] w-[784px]" />
      <div className="absolute left-[582px] size-[176px] top-[15px]">
        <img alt="" className="block max-w-none size-full" height="176" src={imgEllipse6} width="176" />
      </div>
      <div className="absolute flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] left-[131px] text-[40px] text-nowrap text-white top-[76.5px] tracking-[0.6px] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] whitespace-pre">leão-marinho-de-steller</p>
      </div>
      <div className="absolute flex flex-col font-['Roboto:Condensed_ExtraLight_Italic',sans-serif] font-extralight italic justify-center leading-[0] left-[565px] text-[40px] text-nowrap text-right text-white top-[129.5px] tracking-[0.6px] translate-x-[-100%] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 75" }}>
        <p className="leading-[normal] whitespace-pre">Eumetopias jubatus</p>
      </div>
    </div>
  );
}

function Frame8() {
  return (
    <div className="absolute border border-[#d9ed92] border-solid h-[207px] left-[72px] rounded-[100px] top-[236px] w-[784px]" data-name="Frame">
      <div className="absolute bg-gradient-to-r from-[#168aad] h-[207px] left-[-1px] opacity-50 rounded-[100px] to-[#52b69a] top-[-1px] w-[784px]" />
      <div className="absolute left-[24px] size-[176px] top-[15px]">
        <img alt="" className="block max-w-none size-full" height="176" src={imgEllipse7} width="176" />
      </div>
      <div className="absolute flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] left-[217px] text-[40px] text-nowrap text-white top-[79.5px] tracking-[0.6px] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] whitespace-pre">tartaruga-de-pente</p>
      </div>
      <div className="absolute flex flex-col font-['Roboto:Condensed_ExtraLight_Italic',sans-serif] font-extralight italic justify-center leading-[0] left-[217px] text-[40px] text-nowrap text-white top-[132.5px] tracking-[0.6px] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 75" }}>
        <p className="leading-[normal] whitespace-pre">{`Eretmochelys imbricata `}</p>
      </div>
    </div>
  );
}

function EmPerigoDeExtincao() {
  return (
    <div className="absolute h-[1611px] left-0 top-[2429px] w-[1440px]" data-name="em perigo de extinção">
      <div className="absolute bg-[#252525] h-[1611px] left-0 top-0 w-[1440px]" />
      <Frame />
      <Frame1 />
      <Frame2 />
      <Frame4 />
      <Frame6 />
      <Frame7 />
      <Frame8 />
      <div className="absolute flex flex-col font-['Roboto:ExtraBold',sans-serif] font-extrabold justify-center leading-[0] left-[calc(50%-648px)] opacity-50 text-[64px] text-black text-nowrap top-[128.5px] tracking-[0.96px] translate-y-[-50%] uppercase" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] whitespace-pre">Em perigo de extinção</p>
      </div>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents leading-[0] left-[104px] top-[220px]">
      <div className="absolute flex flex-col font-['Roboto:ExtraBold',sans-serif] font-extrabold justify-center left-[238px] text-[96px] text-nowrap text-white top-[276.5px] tracking-[1.44px] translate-y-[-50%] uppercase" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] whitespace-pre">{`159 `}</p>
      </div>
      <div className="absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center left-[323px] lowercase text-[#e2e2e2] text-[36px] text-center top-[417px] tracking-[0.54px] translate-x-[-50%] translate-y-[-50%] w-[438px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal]">espécies de animais marinhos estão ameaçadas de extinção no Brasil</p>
      </div>
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute contents leading-[0] left-[590px] top-[220px]">
      <div className="absolute flex flex-col font-['Roboto:ExtraBold',sans-serif] font-extrabold justify-center left-[661px] text-[96px] text-nowrap text-white top-[276.5px] tracking-[1.44px] translate-y-[-50%] uppercase" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] whitespace-pre">30 mil</p>
      </div>
      <div className="absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center left-[815px] lowercase text-[#e2e2e2] text-[36px] text-center top-[417px] tracking-[0.54px] translate-x-[-50%] translate-y-[-50%] w-[450px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal]">animais mortos encontrados em praias pelo projeto da Petrobras</p>
      </div>
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute contents leading-[0] left-[1080px] top-[220px]">
      <div className="absolute flex flex-col font-['Roboto:ExtraBold',sans-serif] font-extrabold justify-center left-[1137px] text-[96px] text-nowrap text-white top-[276.5px] tracking-[1.44px] translate-y-[-50%] uppercase" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] whitespace-pre">{`6,6 mil `}</p>
      </div>
      <div className="absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center left-[1304.5px] lowercase text-[#e2e2e2] text-[36px] text-center top-[417px] tracking-[0.54px] translate-x-[-50%] translate-y-[-50%] w-[449px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal]">toneladas de novas redes de pesca são produzidas no brasil por ano</p>
      </div>
    </div>
  );
}

function Estatisticas() {
  return (
    <div className="absolute h-[630px] left-1/2 top-[1817px] translate-x-[-50%] w-[1630px]" data-name="estatisticas">
      <div className="absolute bg-[#1e6091] h-[630px] left-[94px] rounded-[30px] top-0 w-[1446px]" />
      <div className="absolute flex flex-col font-['Roboto:SemiBold',sans-serif] font-semibold justify-center leading-[0] left-[618px] text-[#e2e2e2] text-[64px] text-nowrap top-[112.5px] tracking-[1.28px] translate-y-[-50%] uppercase" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] whitespace-pre">Estatísticas</p>
      </div>
      <Group />
      <Group1 />
      <Group2 />
    </div>
  );
}

function Rodape() {
  return (
    <div className="absolute h-[296px] left-[433px] top-[4465px] w-[508px]" data-name="rodape">
      <div className="absolute left-[223px] size-[128px] top-0" data-name="turtle (1) 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgTurtle11} />
      </div>
      <div className="absolute flex flex-col font-['Roboto:SemiBold',sans-serif] font-semibold justify-center leading-[0] left-[184px] text-[#184e77] text-[40px] text-nowrap top-[170.5px] tracking-[4.8px] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] whitespace-pre">INFOMAR</p>
      </div>
      <div className="absolute flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] left-0 text-[#1e1e1e] text-[24px] text-nowrap top-[282px] tracking-[0.36px] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] whitespace-pre">contato@email.com.br</p>
      </div>
      <div className="absolute flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] left-[322px] text-[#1e1e1e] text-[24px] text-nowrap top-[282px] tracking-[0.36px] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] whitespace-pre">(99) 99999-9999</p>
      </div>
    </div>
  );
}

export default function Inicio() {
  return (
    <div className="bg-[#e2e2e2] relative size-full" data-name="Inicio">
      <Sobre />
      <div className="absolute h-[64px] left-[40px] top-[40px] w-[1328px]">
        <Logo />
        <Menu />
        <Frame3 />
      </div>
      <OqueEInfomar />
      <div className="absolute flex h-[697px] items-center justify-center left-[-29px] top-[3749px] w-[1561px]">
        <div className="flex-none scale-y-[-100%]">
          <Decoracao1 />
        </div>
      </div>
      <EmPerigoDeExtincao />
      <Estatisticas />
      <Rodape />
    </div>
  );
}