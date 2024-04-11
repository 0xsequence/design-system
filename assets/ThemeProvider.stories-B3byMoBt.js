import{j as e}from"./jsx-runtime-DoxjgJx5.js";import{B as v}from"./Button-BDD_YqEs.js";import{B as m}from"./Box-C40y65kp.js";import{C as t}from"./Card-Dn2WB1Vm.js";import{C as s}from"./Collapsible-CW2NTrcM.js";import{T as o}from"./Text-nzizsmdP.js";import{T as r,u as T}from"./ThemeProvider-ClVTRGQR.js";import"./index-Cu9bd8lq.js";/* empty css                              *//* empty css                            */import"./atoms-BbXxmxZh.js";import"./createRuntimeFn-62c9670f.esm-UsP-ae2O.js";import"./index-BUipU-ak.js";import"./index-Ckls47V4.js";import"./index-BdmuMSao.js";import"./index-DMoNf_Sx.js";import"./index-Dg3K3zqj.js";import"./WarningIcon-4jShke2N.js";import"./motion-DWzcalHj.js";import"./index-BEAc4zX4.js";import"./typography-BClcJN8w.js";import"./vars.css-vIjhzn4K.js";import"./color-qnkbROzP.js";const G={title:"Components/ThemeProvider",component:r},n=()=>{const{theme:i,setTheme:l}=T(),u=()=>{l(i==="light"?"dark":"light")};return e.jsx(v,{label:"Toggle theme",onClick:u})},a=()=>e.jsxs(t,{children:[e.jsx(o,{variant:"normal",color:"text100",fontWeight:"bold",children:"Root Application"}),e.jsx("div",{id:"app1",children:e.jsx(r,{root:"#app1",scope:"application1",theme:"light",children:e.jsx(t,{background:"backgroundPrimary",marginTop:"4",children:e.jsxs(s,{label:"Nested Application 1",children:[e.jsx(o,{variant:"normal",color:"text100",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}),e.jsx(m,{marginTop:"4",children:e.jsx(d,{})}),e.jsx("div",{id:"app2",children:e.jsx(r,{root:"#app2",scope:"application2",theme:"dark",children:e.jsx(t,{background:"backgroundPrimary",marginTop:"4",children:e.jsxs(s,{label:"Nested Application 2",children:[e.jsx(o,{variant:"normal",color:"text100",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}),e.jsx(m,{marginTop:"4",children:e.jsx(d,{})})]})})})}),e.jsx("div",{id:"app3",children:e.jsx(r,{root:"#app3",scope:"application3",theme:{text100:"rgba(255, 255, 255, 1)",text80:"rgba(200, 200, 255, 1)",text50:"rgba(150, 150, 200, 1)",backgroundPrimary:"pink",backgroundSecondary:"navy"},children:e.jsx(t,{background:"backgroundPrimary",marginTop:"4",children:e.jsx(s,{label:"Nested Application 3",children:e.jsx(o,{variant:"normal",color:"text100",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."})})})})})]})})})})]}),d=()=>{const{theme:i,setTheme:l}=T(),u=i==="light"?"Dark":"Light",f=()=>{l(i==="light"?"dark":"light")};return e.jsx(v,{label:`Set ${u} Mode`,onClick:f})};var c,p,g;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`() => {
  const {
    theme,
    setTheme
  } = useTheme();
  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };
  return <Button label="Toggle theme" onClick={toggleTheme} />;
}`,...(g=(p=n.parameters)==null?void 0:p.docs)==null?void 0:g.source}}};var x,h,b;a.parameters={...a.parameters,docs:{...(x=a.parameters)==null?void 0:x.docs,source:{originalSource:`() => {
  return <Card>
      <Text variant="normal" color="text100" fontWeight="bold">
        Root Application
      </Text>

      <div id="app1">
        <ThemeProvider root="#app1" scope="application1" theme="light">
          <Card background="backgroundPrimary" marginTop="4">
            <Collapsible label="Nested Application 1">
              <Text variant="normal" color="text100">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Text>

              <Box marginTop="4">
                <SetThemeButton />
              </Box>

              <div id="app2">
                <ThemeProvider root="#app2" scope="application2" theme="dark">
                  <Card background="backgroundPrimary" marginTop="4">
                    <Collapsible label="Nested Application 2">
                      <Text variant="normal" color="text100">
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

                      <Box marginTop="4">
                        <SetThemeButton />
                      </Box>
                    </Collapsible>
                  </Card>
                </ThemeProvider>
              </div>

              <div id="app3">
                <ThemeProvider root="#app3" scope="application3" theme={{
                text100: 'rgba(255, 255, 255, 1)',
                text80: 'rgba(200, 200, 255, 1)',
                text50: 'rgba(150, 150, 200, 1)',
                backgroundPrimary: 'pink',
                backgroundSecondary: 'navy'
              }}>
                  <Card background="backgroundPrimary" marginTop="4">
                    <Collapsible label="Nested Application 3">
                      <Text variant="normal" color="text100">
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
}`,...(b=(h=a.parameters)==null?void 0:h.docs)==null?void 0:b.source}}};const H=["Default","Nested"];export{n as Default,a as Nested,H as __namedExportsOrder,G as default};
