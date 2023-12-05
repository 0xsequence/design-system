import{j as e}from"./jsx-runtime-1caa8f64.js";import{B as v}from"./Button-e8455a66.js";import{B as m}from"./Box-e4a86556.js";import{C as t}from"./Card-34bef967.js";import{C as s}from"./Collapsible-a5207a5f.js";import{T as o}from"./Text-b96ac7e7.js";import{T as n,u as T}from"./ThemeProvider-29c0f089.js";import"./index-1cdf6ce0.js";/* empty css                            */import"./atoms-c7901a03.js";/* empty css                              */import"./createRuntimeFn-f8e161c6.esm-526ef7c2.js";import"./index-bff3e5ca.js";import"./index-a01a9712.js";import"./index-ed6c0076.js";import"./index-5a7be88c.js";import"./index-dad7d30c.js";import"./WarningIcon-c4815a2d.js";import"./motion-bbbff89a.js";import"./index-68ff1be5.js";import"./typography-f274f330.js";import"./vars.css-cd686f74.js";import"./color-dcee1839.js";const G={title:"Components/ThemeProvider",component:n},a=()=>{const{theme:i,setTheme:l}=T(),u=()=>{l(i==="light"?"dark":"light")};return e.jsx(v,{label:"Toggle theme",onClick:u})},r=()=>e.jsxs(t,{children:[e.jsx(o,{variant:"normal",color:"text100",fontWeight:"bold",children:"Root Application"}),e.jsx("div",{id:"app1",children:e.jsx(n,{root:"#app1",scope:"application1",theme:"light",children:e.jsx(t,{background:"backgroundPrimary",marginTop:"4",children:e.jsxs(s,{label:"Nested Application 1",children:[e.jsx(o,{variant:"normal",color:"text100",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}),e.jsx(m,{marginTop:"4",children:e.jsx(d,{})}),e.jsx("div",{id:"app2",children:e.jsx(n,{root:"#app2",scope:"application2",theme:"dark",children:e.jsx(t,{background:"backgroundPrimary",marginTop:"4",children:e.jsxs(s,{label:"Nested Application 2",children:[e.jsx(o,{variant:"normal",color:"text100",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}),e.jsx(m,{marginTop:"4",children:e.jsx(d,{})})]})})})}),e.jsx("div",{id:"app3",children:e.jsx(n,{root:"#app3",scope:"application3",theme:{text100:"rgba(255, 255, 255, 1)",text80:"rgba(200, 200, 255, 1)",text50:"rgba(150, 150, 200, 1)",backgroundPrimary:"pink",backgroundSecondary:"navy"},children:e.jsx(t,{background:"backgroundPrimary",marginTop:"4",children:e.jsx(s,{label:"Nested Application 3",children:e.jsx(o,{variant:"normal",color:"text100",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."})})})})})]})})})})]}),d=()=>{const{theme:i,setTheme:l}=T(),u=i==="light"?"Dark":"Light",f=()=>{l(i==="light"?"dark":"light")};return e.jsx(v,{label:`Set ${u} Mode`,onClick:f})};var c,p,g;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`() => {
  const {
    theme,
    setTheme
  } = useTheme();
  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };
  return <Button label="Toggle theme" onClick={toggleTheme} />;
}`,...(g=(p=a.parameters)==null?void 0:p.docs)==null?void 0:g.source}}};var x,h,b;r.parameters={...r.parameters,docs:{...(x=r.parameters)==null?void 0:x.docs,source:{originalSource:`() => {
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
}`,...(b=(h=r.parameters)==null?void 0:h.docs)==null?void 0:b.source}}};const H=["Default","Nested"];export{a as Default,r as Nested,H as __namedExportsOrder,G as default};