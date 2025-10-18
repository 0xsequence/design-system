import{T as a,u as x,j as e}from"./iframe-4jdeRta1.js";import{B as v}from"./Button-DFSpQNYd.js";import{C as i}from"./Card-C7X5Cvay.js";import{C as o}from"./Collapsible-DPIpfHIV.js";import{T as t}from"./Text-DZp5baOb.js";import"./preload-helper-Dp1pzeXC.js";import"./index-DPmhm0QD.js";import"./index-Dp3B9jqt.js";import"./clsx-B-dksMZM.js";import"./styles-Dnb-ama7.js";import"./classnames-CzI9s_aO.js";import"./index-Du8aI101.js";import"./index-CKEn7-ll.js";import"./index-BGtbfsCd.js";import"./index-CbmC5du2.js";import"./index-BuGF1HL0.js";import"./index-BSVC6t3j.js";import"./YoutubeIcon-CzVHBqrL.js";import"./SearchIcon-C82-TMiw.js";import"./proxy-aPoHd49G.js";import"./index-Dz_-w2jF.js";const z={title:"Components/ThemeProvider",component:a},n=()=>{const{theme:r,setTheme:s}=x(),m=()=>{s(r==="light"?"dark":"light")};return e.jsx(v,{onClick:m,children:"Toggle theme"})},T={light:{primary:"black",secondary:"#006",muted:"#009",backgroundPrimary:"white",backgroundSecondary:"#EEF",gradientPrimary:"linear-gradient(45deg, darkblue 0%, blue 100%)"},dark:{primary:"white",secondary:"#CCC",muted:"#888",backgroundPrimary:"black",backgroundSecondary:"#004",gradientPrimary:"linear-gradient(45deg, darkblue 0%, blue 100%)"}},l=()=>e.jsxs(i,{children:[e.jsx(t,{variant:"normal",color:"primary",fontWeight:"bold",children:"Root Application"}),e.jsx("div",{id:"app1",children:e.jsx(a,{root:"#app1",scope:"application1",theme:"light",children:e.jsx(i,{className:"bg-background-primary mt-4",children:e.jsxs(o,{label:"Nested Application 1",defaultOpen:!0,children:[e.jsx(t,{variant:"normal",color:"primary",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}),e.jsx("div",{className:"mt-4",children:e.jsx(d,{})}),e.jsx("div",{id:"app2",children:e.jsx(a,{root:"#app2",scope:"application2",theme:"dark",children:e.jsx(i,{className:"bg-background-primary mt-4",children:e.jsxs(o,{label:"Nested Application 2 (Dark)",defaultOpen:!0,children:[e.jsx(t,{variant:"normal",color:"primary",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}),e.jsx("div",{className:"mt-4",children:e.jsx(d,{})})]})})})}),e.jsx("div",{id:"app3",children:e.jsx(a,{root:"#app3",scope:"application3",theme:"dark",customThemes:T,children:e.jsx(i,{className:"bg-background-primary mt-4",children:e.jsxs(o,{label:"Nested Application 3 (Custom Theme)",defaultOpen:!0,children:[e.jsx(t,{variant:"normal",color:"primary",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}),e.jsx("div",{className:"mt-4",children:e.jsx(d,{})})]})})})}),e.jsx("div",{id:"app4",children:e.jsx(a,{root:"#app4",scope:"application4",prefersColorScheme:!0,children:e.jsx(i,{className:"bg-background-primary mt-4",children:e.jsx(o,{label:"Nested Application 4 (Prefers Color Scheme)",defaultOpen:!0,children:e.jsx(t,{variant:"normal",color:"primary",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."})})})})})]})})})})]}),d=()=>{const{theme:r,setTheme:s}=x(),m=r==="light"?"Dark":"Light",f=()=>{s(r==="light"?"dark":"light")};return e.jsxs(v,{variant:"primary",onClick:f,children:["Set ",m," Mode"]})};var u,c,p;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`() => {
  const {
    theme,
    setTheme
  } = useTheme();
  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };
  return <Button onClick={toggleTheme}>Toggle theme</Button>;
}`,...(p=(c=n.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};var h,g,b;l.parameters={...l.parameters,docs:{...(h=l.parameters)==null?void 0:h.docs,source:{originalSource:`() => {
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
                <ThemeProvider root="#app3" scope="application3" theme="dark" customThemes={customThemes}>
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

                      <div className="mt-4">
                        <SetThemeButton />
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
}`,...(b=(g=l.parameters)==null?void 0:g.docs)==null?void 0:b.source}}};const G=["Default","Nested"];export{n as Default,l as Nested,G as __namedExportsOrder,z as default};
