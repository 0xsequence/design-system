import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{B as d}from"./Button-BafyUhnU.js";import{C as a}from"./Card-2IUFHffM.js";import{C as n}from"./Collapsible-Unuh2_Iw.js";import{T as o}from"./Text-Vf0bTgHv.js";import{T as r,u as c}from"./ThemeProvider-Bf-MMZPN.js";import"./index-AemB5ySP.js";import"./index-CFahbR6w.js";import"./index-Dp3B9jqt.js";import"./clsx-B-dksMZM.js";import"./classnames-Dx2cly0x.js";import"./index-By4xKCrq.js";import"./index-uKUYdOYu.js";import"./index-BHL8jL0s.js";import"./index-chp1rBSu.js";import"./index-DYKS6Wkw.js";import"./index-C-MTDzn3.js";import"./YoutubeIcon-DIH2dKHH.js";import"./proxy-BNSlCH7V.js";import"./index-VpsClNuv.js";import"./color-DbP-jgcz.js";const z={title:"Components/ThemeProvider",component:r},l=()=>{const{theme:i,setTheme:t}=c(),m=()=>{t(i==="light"?"dark":"light")};return e.jsx(d,{label:"Toggle theme",onClick:m})},f={primary:"#002C54",secondary:"#396E97",muted:"#71A6B2",backgroundPrimary:"#F1F1F2",backgroundSecondary:"#A1D6E2",gradientPrimary:"linear-gradient(45deg, #1995AD 0%, #002C54 100%)"},s=()=>e.jsxs(a,{children:[e.jsx(o,{variant:"normal",color:"primary",fontWeight:"bold",children:"Root Application"}),e.jsx("div",{id:"app1",children:e.jsx(r,{root:"#app1",scope:"application1",theme:"light",children:e.jsx(a,{className:"bg-background-primary mt-4",children:e.jsxs(n,{label:"Nested Application 1",defaultOpen:!0,children:[e.jsx(o,{variant:"normal",color:"primary",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}),e.jsx("div",{className:"mt-4",children:e.jsx(u,{})}),e.jsx("div",{id:"app2",children:e.jsx(r,{root:"#app2",scope:"application2",theme:"dark",children:e.jsx(a,{className:"bg-background-primary mt-4",children:e.jsxs(n,{label:"Nested Application 2 (Dark)",defaultOpen:!0,children:[e.jsx(o,{variant:"normal",color:"primary",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}),e.jsx("div",{className:"mt-4",children:e.jsx(u,{})})]})})})}),e.jsx("div",{id:"app3",children:e.jsx(r,{root:"#app3",scope:"application3",theme:f,children:e.jsx(a,{className:"bg-background-primary mt-4",children:e.jsxs(n,{label:"Nested Application 3 (Custom Theme)",defaultOpen:!0,children:[e.jsx(o,{variant:"normal",color:"primary",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}),e.jsxs("div",{className:"mt-4 flex gap-2",children:[e.jsx(u,{}),e.jsx(q,{})]})]})})})}),e.jsx("div",{id:"app4",children:e.jsx(r,{root:"#app4",scope:"application4",prefersColorScheme:!0,children:e.jsx(a,{className:"bg-background-primary mt-4",children:e.jsx(n,{label:"Nested Application 4 (Prefers Color Scheme)",defaultOpen:!0,children:e.jsx(o,{variant:"normal",color:"primary",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."})})})})})]})})})})]}),u=()=>{const{theme:i,setTheme:t}=c(),m=i==="light"?"Dark":"Light",T=()=>{t(i==="light"?"dark":"light")};return e.jsx(d,{variant:"primary",label:`Set ${m} Mode`,onClick:T})},q=()=>{const{setTheme:i}=c(),t=()=>{i(f)};return e.jsx(d,{label:"Set Custom Mode",onClick:t})};var p,h,g;l.parameters={...l.parameters,docs:{...(p=l.parameters)==null?void 0:p.docs,source:{originalSource:`() => {
  const {
    theme,
    setTheme
  } = useTheme();
  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };
  return <Button label="Toggle theme" onClick={toggleTheme} />;
}`,...(g=(h=l.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};var x,v,b;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`() => {
  return <Card>
      <Text variant="normal" color="primary" fontWeight="bold">
        Root Application
      </Text>

      <div id="app1">
        <ThemeProvider root="#app1" scope="application1" theme="light">
          <Card className="bg-background-primary mt-4">
            <Collapsible label="Nested Application 1" defaultOpen>
              <Text variant="normal" color="primary">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Text>

              <div className="mt-4">
                <SetThemeButton />
              </div>

              <div id="app2">
                <ThemeProvider root="#app2" scope="application2" theme="dark">
                  <Card className="bg-background-primary mt-4">
                    <Collapsible label="Nested Application 2 (Dark)" defaultOpen>
                      <Text variant="normal" color="primary">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit
                        anim id est laborum.
                      </Text>

                      <div className="mt-4">
                        <SetThemeButton />
                      </div>
                    </Collapsible>
                  </Card>
                </ThemeProvider>
              </div>

              <div id="app3">
                <ThemeProvider root="#app3" scope="application3" theme={customTheme}>
                  <Card className="bg-background-primary mt-4">
                    <Collapsible label="Nested Application 3 (Custom Theme)" defaultOpen>
                      <Text variant="normal" color="primary">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit
                        anim id est laborum.
                      </Text>

                      <div className="mt-4 flex gap-2">
                        <SetThemeButton />
                        <SetCustomThemeButton />
                      </div>
                    </Collapsible>
                  </Card>
                </ThemeProvider>
              </div>

              <div id="app4">
                <ThemeProvider root="#app4" scope="application4" prefersColorScheme>
                  <Card className="bg-background-primary mt-4">
                    <Collapsible label="Nested Application 4 (Prefers Color Scheme)" defaultOpen>
                      <Text variant="normal" color="primary">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit
                        anim id est laborum.
                      </Text>
                    </Collapsible>
                  </Card>
                </ThemeProvider>
              </div>
            </Collapsible>
          </Card>
        </ThemeProvider>
      </div>
    </Card>;
}`,...(b=(v=s.parameters)==null?void 0:v.docs)==null?void 0:b.source}}};const G=["Default","Nested"];export{l as Default,s as Nested,G as __namedExportsOrder,z as default};
