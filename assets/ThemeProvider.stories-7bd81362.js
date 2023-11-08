import{j as e}from"./jsx-runtime-69eee039.js";import{B as b}from"./Button-51c8722d.js";import{B as m}from"./Box-7d1c3652.js";import{C as a}from"./Card-7f62a0d1.js";import{C as u}from"./Collapsible-62e6d11a.js";import{T as l}from"./Text-5213eff4.js";import{T as s,u as v}from"./ThemeProvider-08145c87.js";import"./index-7c191284.js";import"./atoms-dc8b8460.js";/* empty css                              */import"./createRuntimeFn-f8e161c6.esm-526ef7c2.js";import"./extends-98964cd2.js";import"./index-006d63ff.js";import"./index-31bfaf9c.js";import"./index-ecbee218.js";import"./index-33bdb38a.js";import"./index-8f163998.js";import"./WarningIcon-353f49eb.js";import"./motion-cc45ae8c.js";import"./index-686b454f.js";import"./typography-f274f330.js";const z={title:"Components/ThemeProvider",component:s},t=()=>{const{theme:i,setTheme:r}=v(),n=()=>{r(i==="light"?"dark":"light")};return e.jsx(b,{label:"Toggle theme",onClick:n})},o=()=>e.jsxs(a,{children:[e.jsx(l,{variant:"normal",color:"text100",fontWeight:"bold",children:"Root Application"}),e.jsx("div",{id:"app1",children:e.jsx(s,{root:"#app1",scope:"application1",theme:"light",children:e.jsx(a,{background:"backgroundPrimary",marginTop:"4",children:e.jsxs(u,{label:"Nested Application 1",children:[e.jsx(l,{variant:"normal",color:"text100",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}),e.jsx(m,{marginTop:"4",children:e.jsx(d,{})}),e.jsx("div",{id:"app2",children:e.jsx(s,{root:"#app2",scope:"application2",theme:"dark",children:e.jsx(a,{background:"backgroundPrimary",marginTop:"4",children:e.jsxs(u,{label:"Nested Application 2",children:[e.jsx(l,{variant:"normal",color:"text100",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}),e.jsx(m,{marginTop:"4",children:e.jsx(d,{})})]})})})})]})})})})]}),d=()=>{const{theme:i,setTheme:r}=v(),n=i==="light"?"Dark":"Light",f=()=>{r(i==="light"?"dark":"light")};return e.jsx(b,{label:`Set ${n} Mode`,onClick:f})};var c,p,h;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`() => {
  const {
    theme,
    setTheme
  } = useTheme();
  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };
  return <Button label="Toggle theme" onClick={toggleTheme} />;
}`,...(h=(p=t.parameters)==null?void 0:p.docs)==null?void 0:h.source}}};var g,x,T;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`() => {
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
            </Collapsible>
          </Card>
        </ThemeProvider>
      </div>
    </Card>;
}`,...(T=(x=o.parameters)==null?void 0:x.docs)==null?void 0:T.source}}};const F=["Default","Nested"];export{t as Default,o as Nested,F as __namedExportsOrder,z as default};
//# sourceMappingURL=ThemeProvider.stories-7bd81362.js.map
