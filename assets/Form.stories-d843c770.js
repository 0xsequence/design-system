import{j as e}from"./jsx-runtime-5c44f2f2.js";import{B as m}from"./Box-28194fa5.js";import{B as g}from"./Button-aaf5029e.js";import"./Checkbox-72f6c4d0.js";import{F as O,C as k,a as S,b as j,c as N,d as V}from"./ControlledSwitch-188cfa30.js";import"./FileInput-53649978.js";import"./RadioGroup-6486b0a9.js";import"./Select-cef1500b.js";import"./Switch-a6e11316.js";import{T as l}from"./Text-693338cf.js";import{C as x}from"./ControlledTextInput-06451862.js";import"./index-32f9f3e1.js";import"./atoms-f7bcb57b.js";/* empty css                              */import"./vanilla-extract-recipes-createRuntimeFn.esm-bf276de8.js";import"./extends-98964cd2.js";import"./index-2790c83a.js";import"./index-81ed4395.js";import"./index-da5321b3.js";import"./index-6a3890d8.js";import"./index-53078d7c.js";import"./index-bfda3ddd.js";import"./Field-26ad30ab.js";import"./WarningIcon-c6b3c3c5.js";import"./IconButton-049d46f1.js";import"./index-03025344.js";import"./index-8bfc7175.js";import"./index-feb9e7f3.js";import"./index-7ba41556.js";import"./index-955fdaf1.js";import"./Combination-2ed00a58.js";import"./index-434676e3.js";import"./index-0d771675.js";import"./typography-f274f330.js";const ne={title:"Forms/Form",component:O},i=[{label:"Option 1",value:"option-1"},{label:"Option 2",value:"option-2"},{label:"Option 3",value:"option-3"}],n={render:({onSubmit:s,...C})=>e.jsx(m,{background:"backgroundSecondary",borderRadius:"md",flexDirection:"column",gap:"4",padding:"4",children:e.jsx(O,{defaultValues:{firstName:""},onSubmit:s,...C,children:({control:a,reset:v,formState:{errors:t},setValue:r})=>{var p,c,u,d;return e.jsxs(m,{background:"backgroundPrimary",flexDirection:"column",gap:"5",padding:"4",borderRadius:"xs",children:[e.jsx(x,{control:a,label:"First Name",labelLocation:"top",name:"firstName",placeholder:"Enter first name",rules:{required:"First name is required"}}),((p=t.firstName)==null?void 0:p.message)&&e.jsx(l,{color:"negative",children:t.firstName.message}),e.jsx(x,{control:a,defaultValue:"",label:"Last Name",labelLocation:"top",name:"lastName",placeholder:"Enter last name",rules:{required:"Last name is required"}}),((c=t.lastName)==null?void 0:c.message)&&e.jsx(l,{color:"negative",children:t.lastName.message}),e.jsx(k,{defaultValue:"",control:a,label:"File Input",labelLocation:"top",name:"fileInput",onValueChange:o=>r("fileInput",o),rules:{required:"A file is required"},validExtensions:["images"]}),((u=t.fileInput)==null?void 0:u.message)&&e.jsx(l,{color:"negative",children:t.fileInput.message}),e.jsx(S,{control:a,defaultValue:i[0].value,label:"Select Option",labelLocation:"top",name:"selectOption",onValueChange:o=>r("selectOption",o),options:i,placeholder:"Select an option",rules:{required:"A selection is required"}}),((d=t.selectOption)==null?void 0:d.message)&&e.jsx(l,{color:"negative",children:t.selectOption.message}),e.jsx(j,{control:a,name:"switchOption",onCheckedChange:o=>r("switchOption",o),defaultChecked:!1}),e.jsx(N,{control:a,label:"Checkbox Option",labelLocation:"right",name:"checkboxOption",onCheckedChange:o=>r("checkboxOption",o),defaultChecked:!1}),e.jsx(V,{control:a,defaultValue:i[0].value,flexDirection:"row",gap:"4",onValueChange:o=>r("radioOption",o),options:i,name:"radioOption"}),e.jsxs(m,{flexDirection:"row-reverse",marginTop:"2",gap:"2",children:[e.jsx(g,{type:"submit",label:"Submit",variant:"primary"}),e.jsx(g,{type:"reset",label:"Reset",onClick:()=>v()})]})]})}})}),args:{onSubmit:s=>console.log(s)}};var b,f,h;n.parameters={...n.parameters,docs:{...(b=n.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: ({
    onSubmit,
    ...args
  }) => <Box background="backgroundSecondary" borderRadius="md" flexDirection="column" gap="4" padding="4">
      <Form defaultValues={{
      firstName: ''
    }} onSubmit={onSubmit} {...args}>
        {({
        control,
        reset,
        formState: {
          errors
        },
        setValue
      }) => <Box background="backgroundPrimary" flexDirection="column" gap="5" padding="4" borderRadius="xs">
            <TextInput control={control} label="First Name" labelLocation="top" name="firstName" placeholder="Enter first name" rules={{
          required: 'First name is required'
        }} />
            {errors.firstName?.message && <Text color="negative">{(errors.firstName.message as string)}</Text>}

            <TextInput control={control} defaultValue="" label="Last Name" labelLocation="top" name="lastName" placeholder="Enter last name" rules={{
          required: 'Last name is required'
        }} />
            {errors.lastName?.message && <Text color="negative">{(errors.lastName.message as string)}</Text>}

            <FileInput defaultValue="" control={control} label="File Input" labelLocation="top" name="fileInput" onValueChange={(file: File | null) => setValue('fileInput', file)} rules={{
          required: 'A file is required'
        }} validExtensions={['images']} />
            {errors.fileInput?.message && <Text color="negative">{(errors.fileInput.message as string)}</Text>}

            <Select control={control} defaultValue={selectOptions[0].value} label="Select Option" labelLocation="top" name="selectOption" onValueChange={(value: string) => setValue('selectOption', value)} options={selectOptions} placeholder="Select an option" rules={{
          required: 'A selection is required'
        }} />
            {errors.selectOption?.message && <Text color="negative">
                {(errors.selectOption.message as string)}
              </Text>}

            <Switch control={control} name="switchOption" onCheckedChange={(value: boolean) => setValue('switchOption', value)} defaultChecked={false} />

            <Checkbox control={control} label="Checkbox Option" labelLocation="right" name="checkboxOption" onCheckedChange={(value: boolean) => setValue('checkboxOption', value)} defaultChecked={false} />

            <RadioGroup control={control} defaultValue={selectOptions[0].value} flexDirection="row" gap="4" onValueChange={(value: string) => setValue('radioOption', value)} options={selectOptions} name="radioOption" />

            <Box flexDirection="row-reverse" marginTop="2" gap="2">
              <Button type="submit" label="Submit" variant="primary" />
              <Button type="reset" label="Reset" onClick={() => reset()} />
            </Box>
          </Box>}
      </Form>
    </Box>,
  args: {
    onSubmit: (data: {}) => console.log(data)
  }
}`,...(h=(f=n.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};const se=["Default"];export{n as Default,se as __namedExportsOrder,ne as default};
//# sourceMappingURL=Form.stories-d843c770.js.map
