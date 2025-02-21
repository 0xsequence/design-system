import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{B as x}from"./Button-Cb6gMaRx.js";import{C as i}from"./Card-Cphhhkxe.js";import{C as r}from"./Collapsible-BG3c_cky.js";import{T as a}from"./Text-CX0KV9o3.js";import{T as t,u as v}from"./ThemeProvider-CNLDeeOF.js";import"./index-yBjzXJbu.js";import"./index-BkTKsPvT.js";import"./index-DubqEmGm.js";import"./index-Dp3B9jqt.js";import"./clsx-B-dksMZM.js";import"./classnames-D6E8UiG_.js";import"./index-DKEAZgBW.js";import"./index-D9OL-CBG.js";import"./index-DCU19ADU.js";import"./index-IE9ObSwG.js";import"./index-SbpNQzLY.js";import"./index-Cbw-VAaK.js";import"./WarningIcon-D-siRvIc.js";import"./proxy-BbLcDzuY.js";import"./index-jvVsX4YB.js";import"./color-Cn0GlU5F.js";const z={title:"Components/ThemeProvider",component:t},l=()=>{const{theme:o,setTheme:s}=v(),m=()=>{s(o==="light"?"dark":"light")};return e.jsx(x,{label:"Toggle theme",onClick:m})},n=()=>e.jsxs(i,{children:[e.jsx(a,{variant:"normal",color:"primary",fontWeight:"bold",children:"Root Application"}),e.jsx("div",{id:"app1",children:e.jsx(t,{root:"#app1",scope:"application1",theme:"light",children:e.jsx(i,{className:"bg-background-primary mt-4",children:e.jsxs(r,{label:"Nested Application 1",children:[e.jsx(a,{variant:"normal",color:"primary",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}),e.jsx("div",{className:"mt-4",children:e.jsx(u,{})}),e.jsx("div",{id:"app2",children:e.jsx(t,{root:"#app2",scope:"application2",theme:"dark",children:e.jsx(i,{className:"bg-background-primary mt-4",children:e.jsxs(r,{label:"Nested Application 2 (Dark)",children:[e.jsx(a,{variant:"normal",color:"primary",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}),e.jsx("div",{className:"mt-4",children:e.jsx(u,{})})]})})})}),e.jsx("div",{id:"app3",children:e.jsx(t,{root:"#app3",scope:"application3",theme:{primary:"rgba(255, 255, 255, 1)",secondary:"rgba(200, 200, 255, 1)",muted:"rgba(150, 150, 200, 1)",backgroundPrimary:"pink",backgroundSecondary:"navy"},children:e.jsx(i,{className:"bg-background-primary mt-4",children:e.jsx(r,{label:"Nested Application 3 (Custom Theme)",children:e.jsx(a,{variant:"normal",color:"primary",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."})})})})}),e.jsx("div",{id:"app4",children:e.jsx(t,{root:"#app4",scope:"application4",prefersColorScheme:!0,children:e.jsx(i,{className:"bg-background-primary mt-4",children:e.jsx(r,{label:"Nested Application 4 (Prefers Color Scheme)",children:e.jsx(a,{variant:"normal",color:"primary",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."})})})})})]})})})})]}),u=()=>{const{theme:o,setTheme:s}=v(),m=o==="light"?"Dark":"Light",T=()=>{s(o==="light"?"dark":"light")};return e.jsx(x,{label:`Set ${m} Mode`,onClick:T})};var d,c,p;l.parameters={...l.parameters,docs:{...(d=l.parameters)==null?void 0:d.docs,source:{originalSource:`() => {
  const {
    theme,
    setTheme
  } = useTheme();
  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };
  return <Button label="Toggle theme" onClick={toggleTheme} />;
}`,...(p=(c=l.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};var h,g,b;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`() => {
  return <Card>
      <Text variant="normal" color="primary" fontWeight="bold">
        Root Application
      </Text>

      <div id="app1">
        <ThemeProvider root="#app1" scope="application1" theme="light">
          <Card className="bg-background-primary mt-4">
            <Collapsible label="Nested Application 1">
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
                    <Collapsible label="Nested Application 2 (Dark)">
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
                <ThemeProvider root="#app3" scope="application3" theme={{
                primary: 'rgba(255, 255, 255, 1)',
                secondary: 'rgba(200, 200, 255, 1)',
                muted: 'rgba(150, 150, 200, 1)',
                backgroundPrimary: 'pink',
                backgroundSecondary: 'navy'
              }}>
                  <Card className="bg-background-primary mt-4">
                    <Collapsible label="Nested Application 3 (Custom Theme)">
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

              <div id="app4">
                <ThemeProvider root="#app4" scope="application4" prefersColorScheme>
                  <Card className="bg-background-primary mt-4">
                    <Collapsible label="Nested Application 4 (Prefers Color Scheme)">
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
}`,...(b=(g=n.parameters)==null?void 0:g.docs)==null?void 0:b.source}}};const F=["Default","Nested"];export{l as Default,n as Nested,F as __namedExportsOrder,z as default};
