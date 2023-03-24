import{j as e,a as g}from"./jsx-runtime-a9c13c85.js";import{B as m}from"./Box-63eb24b2.js";import{B as b}from"./Button-f5fc896c.js";import"./Checkbox-e2345faf.js";import{F as C,C as S,a as N,b as V,c as q,d as F}from"./ControlledSwitch-9e198d73.js";import"./FileInput-d26d3ca2.js";import"./RadioGroup-eebafca1.js";import"./Select-43dc0d8d.js";import"./Switch-606b304e.js";import{T as r}from"./Text-cc9cad53.js";import{a as f}from"./ControlledTextInput-773e8380.js";import"./index-d8ade8ea.js";import"./_commonjsHelpers-042e6b4d.js";import"./atoms-6bc7ac75.js";/* empty css                              */import"./vanilla-extract-recipes-createRuntimeFn.esm-d30eb010.js";import"./extends-98964cd2.js";import"./index.module-008d2b5e.js";import"./index-6cf4ba34.js";import"./index.module-99b258bb.js";import"./index.module-e6a6661a.js";import"./index.module-f6547125.js";import"./index.module-e5ebf90d.js";import"./Field-41807ebd.js";import"./WarningIcon-75993e4b.js";import"./IconButton-7ecadd56.js";import"./index.module-9a2e2f0c.js";import"./index.module-10187b57.js";import"./index.module-cc7c4bf6.js";import"./Combination-278cba89.js";import"./index.module-ed894d3b.js";import"./index-807b81f6.js";import"./typography-f274f330.js";const ne={title:"Forms/Form",component:C},i=[{label:"Option 1",value:"option-1"},{label:"Option 2",value:"option-2"},{label:"Option 3",value:"option-3"}],n={render:({onSubmit:s,...v})=>e(m,{background:"backgroundSecondary",borderRadius:"md",flexDirection:"column",gap:"4",padding:"4",children:e(C,{defaultValues:{firstName:""},onSubmit:s,...v,children:({control:a,reset:k,formState:{errors:t},setValue:l})=>{var p,c,u,d;return g(m,{background:"backgroundPrimary",flexDirection:"column",gap:"5",padding:"4",borderRadius:"xs",children:[e(f,{control:a,label:"First Name",labelLocation:"top",name:"firstName",placeholder:"Enter first name",rules:{required:"First name is required"}}),((p=t.firstName)==null?void 0:p.message)&&e(r,{color:"negative",children:t.firstName.message}),e(f,{control:a,defaultValue:"",label:"Last Name",labelLocation:"top",name:"lastName",placeholder:"Enter last name",rules:{required:"Last name is required"}}),((c=t.lastName)==null?void 0:c.message)&&e(r,{color:"negative",children:t.lastName.message}),e(S,{defaultValue:"",control:a,label:"File Input",labelLocation:"top",name:"fileInput",onValueChange:o=>l("fileInput",o),rules:{required:"A file is required"},validExtensions:["images"]}),((u=t.fileInput)==null?void 0:u.message)&&e(r,{color:"negative",children:t.fileInput.message}),e(N,{control:a,defaultValue:i[0].value,label:"Select Option",labelLocation:"top",name:"selectOption",onValueChange:o=>l("selectOption",o),options:i,placeholder:"Select an option",rules:{required:"A selection is required"}}),((d=t.selectOption)==null?void 0:d.message)&&e(r,{color:"negative",children:t.selectOption.message}),e(V,{control:a,name:"switchOption",onCheckedChange:o=>l("switchOption",o),defaultChecked:!1}),e(q,{control:a,label:"Checkbox Option",labelLocation:"right",name:"checkboxOption",onCheckedChange:o=>l("checkboxOption",o),defaultChecked:!1}),e(F,{control:a,defaultValue:i[0].value,flexDirection:"row",gap:"4",onValueChange:o=>l("radioOption",o),options:i,name:"radioOption"}),g(m,{flexDirection:"row-reverse",marginTop:"2",gap:"2",children:[e(b,{type:"submit",label:"Submit",variant:"primary"}),e(b,{type:"reset",label:"Reset",onClick:()=>k()})]})]})}})}),args:{onSubmit:s=>console.log(s)}};var h,x,O;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(O=(x=n.parameters)==null?void 0:x.docs)==null?void 0:O.source}}};const se=["Default"];export{n as Default,se as __namedExportsOrder,ne as default};
//# sourceMappingURL=Form.stories-67434cee.js.map
