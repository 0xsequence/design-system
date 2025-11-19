import{T as a,u,j as e}from"./iframe-DlOUrP8l.js";import{B as c}from"./Button-Drck8z78.js";import{C as i}from"./Card-CDEQ2O6i.js";import{C as o}from"./Collapsible-BrIrKIj5.js";import{T as t}from"./Text-BCx2DO6S.js";import"./preload-helper-PPVm8Dsz.js";import"./index-D36sFTb8.js";import"./index-DuxFgRlM.js";import"./index-jbG8BFt3.js";import"./styles-S7yBqErU.js";import"./classnames-CSMdFpzl.js";import"./index-CgyWq9kU.js";import"./index-Z2BiXKWI.js";import"./index-B2DFWZOk.js";import"./index-CSrApXLw.js";import"./index-CB9KsSEa.js";import"./YoutubeIcon-DJkQXzh2.js";import"./SearchIcon-A8qse8Wn.js";import"./proxy-oEExtb95.js";import"./index-JPTUTQgE.js";const U={title:"Providers/ThemeProvider",component:a},n=()=>{const{theme:r,setTheme:s}=u(),m=()=>{s(r==="light"?"dark":"light")};return e.jsx(c,{onClick:m,children:"Toggle theme"})},h={light:{primary:"black",secondary:"#006",muted:"#009",backgroundPrimary:"white",backgroundSecondary:"#EEF",gradientPrimary:"linear-gradient(45deg, darkblue 0%, blue 100%)"},dark:{primary:"white",secondary:"#CCC",muted:"#888",backgroundPrimary:"black",backgroundSecondary:"#004",gradientPrimary:"linear-gradient(45deg, darkblue 0%, blue 100%)"}},l=()=>e.jsxs(i,{children:[e.jsx(t,{variant:"normal",color:"primary",fontWeight:"bold",children:"Root Application"}),e.jsx("div",{id:"app1",children:e.jsx(a,{root:"#app1",scope:"application1",theme:"light",children:e.jsx(i,{className:"bg-background-primary mt-4",children:e.jsxs(o,{label:"Nested Application 1",defaultOpen:!0,children:[e.jsx(t,{variant:"normal",color:"primary",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}),e.jsx("div",{className:"mt-4",children:e.jsx(d,{})}),e.jsx("div",{id:"app2",children:e.jsx(a,{root:"#app2",scope:"application2",theme:"dark",children:e.jsx(i,{className:"bg-background-primary mt-4",children:e.jsxs(o,{label:"Nested Application 2 (Dark)",defaultOpen:!0,children:[e.jsx(t,{variant:"normal",color:"primary",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}),e.jsx("div",{className:"mt-4",children:e.jsx(d,{})})]})})})}),e.jsx("div",{id:"app3",children:e.jsx(a,{root:"#app3",scope:"application3",theme:"dark",customThemes:h,children:e.jsx(i,{className:"bg-background-primary mt-4",children:e.jsxs(o,{label:"Nested Application 3 (Custom Theme)",defaultOpen:!0,children:[e.jsx(t,{variant:"normal",color:"primary",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}),e.jsx("div",{className:"mt-4",children:e.jsx(d,{})})]})})})}),e.jsx("div",{id:"app4",children:e.jsx(a,{root:"#app4",scope:"application4",prefersColorScheme:!0,children:e.jsx(i,{className:"bg-background-primary mt-4",children:e.jsx(o,{label:"Nested Application 4 (Prefers Color Scheme)",defaultOpen:!0,children:e.jsx(t,{variant:"normal",color:"primary",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."})})})})})]})})})})]}),d=()=>{const{theme:r,setTheme:s}=u(),m=r==="light"?"Dark":"Light",p=()=>{s(r==="light"?"dark":"light")};return e.jsxs(c,{variant:"primary",onClick:p,children:["Set ",m," Mode"]})};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`() => {
  const {
    theme,
    setTheme
  } = useTheme();
  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };
  return <Button onClick={toggleTheme}>Toggle theme</Button>;
}`,...n.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`() => {
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
}`,...l.parameters?.docs?.source}}};const R=["Default","Nested"];export{n as Default,l as Nested,R as __namedExportsOrder,U as default};
