import{j as e}from"./jsx-runtime-baBBSKBE.js";import{B as v}from"./Button-dJBhfHQA.js";import{B as m}from"./Box-3dY9zA3P.js";import{C as t}from"./Card-2zfMlTB6.js";import{C as s}from"./Collapsible-lMBn5S-A.js";import{T as o}from"./Text-evKwfSQG.js";import{T as r,u as T}from"./ThemeProvider-tOYwImXF.js";import"./index-PzSkSLoa.js";/* empty css                            */import"./atoms-wgLQZhMV.js";/* empty css                              */import"./createRuntimeFn-f8e161c6.esm-AdCGDnTf.js";import"./index-DNxOJn_G.js";import"./index-5zxyQtc3.js";import"./index-t2YIoniJ.js";import"./index-tsw9QlKD.js";import"./index-EH8U40v7.js";import"./WarningIcon-iYqz0x3L.js";import"./motion-rIg1yyuu.js";import"./index-xySP2xl9.js";import"./typography-kaheFGw9.js";import"./vars.css-oOWCUg3K.js";import"./color-Cuqwyp04.js";const G={title:"Components/ThemeProvider",component:r},n=()=>{const{theme:i,setTheme:l}=T(),u=()=>{l(i==="light"?"dark":"light")};return e.jsx(v,{label:"Toggle theme",onClick:u})},a=()=>e.jsxs(t,{children:[e.jsx(o,{variant:"normal",color:"text100",fontWeight:"bold",children:"Root Application"}),e.jsx("div",{id:"app1",children:e.jsx(r,{root:"#app1",scope:"application1",theme:"light",children:e.jsx(t,{background:"backgroundPrimary",marginTop:"4",children:e.jsxs(s,{label:"Nested Application 1",children:[e.jsx(o,{variant:"normal",color:"text100",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}),e.jsx(m,{marginTop:"4",children:e.jsx(d,{})}),e.jsx("div",{id:"app2",children:e.jsx(r,{root:"#app2",scope:"application2",theme:"dark",children:e.jsx(t,{background:"backgroundPrimary",marginTop:"4",children:e.jsxs(s,{label:"Nested Application 2",children:[e.jsx(o,{variant:"normal",color:"text100",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}),e.jsx(m,{marginTop:"4",children:e.jsx(d,{})})]})})})}),e.jsx("div",{id:"app3",children:e.jsx(r,{root:"#app3",scope:"application3",theme:{text100:"rgba(255, 255, 255, 1)",text80:"rgba(200, 200, 255, 1)",text50:"rgba(150, 150, 200, 1)",backgroundPrimary:"pink",backgroundSecondary:"navy"},children:e.jsx(t,{background:"backgroundPrimary",marginTop:"4",children:e.jsx(s,{label:"Nested Application 3",children:e.jsx(o,{variant:"normal",color:"text100",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."})})})})})]})})})})]}),d=()=>{const{theme:i,setTheme:l}=T(),u=i==="light"?"Dark":"Light",f=()=>{l(i==="light"?"dark":"light")};return e.jsx(v,{label:`Set ${u} Mode`,onClick:f})};var c,p,g;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`() => {
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
