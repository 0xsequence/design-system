import{j as e,a as g}from"./jsx-runtime-a9c13c85.js";import{B as m}from"./Box-267ea0e2.js";import{B as b}from"./Button-3f6116a1.js";import"./Checkbox-26dac065.js";import{F as C,C as S,a as N,b as V,c as q,d as F}from"./ControlledSwitch-54955a98.js";import"./FileInput-d2d1b16b.js";import"./RadioGroup-ed38e23b.js";import"./Select-58fd4043.js";import"./Switch-85c7862a.js";import{T as r}from"./Text-b0b48eb4.js";import{C as f}from"./ControlledTextInput-d46da341.js";import"./index-d8ade8ea.js";import"./_commonjsHelpers-042e6b4d.js";import"./atoms-4b423f56.js";/* empty css                              */import"./vanilla-extract-recipes-createRuntimeFn.esm-bf276de8.js";import"./index.module-93053fc6.js";import"./index-6cf4ba34.js";import"./index.module-99b258bb.js";import"./index.module-e6a6661a.js";import"./index.module-f6547125.js";import"./index.module-7bf7577a.js";import"./Field-d0dda9f0.js";import"./WarningIcon-dc821990.js";import"./IconButton-ea8bf5c6.js";import"./index.module-b93ac26f.js";import"./index.module-251bf6e4.js";import"./index.module-cc7c4bf6.js";import"./Combination-c233f7e3.js";import"./index.module-f352a39b.js";import"./index-807b81f6.js";import"./typography-f274f330.js";const ie={title:"Forms/Form",component:C},i=[{label:"Option 1",value:"option-1"},{label:"Option 2",value:"option-2"},{label:"Option 3",value:"option-3"}],n={render:({onSubmit:s,...v})=>e(m,{background:"backgroundSecondary",borderRadius:"md",flexDirection:"column",gap:"4",padding:"4",children:e(C,{defaultValues:{firstName:""},onSubmit:s,...v,children:({control:a,reset:k,formState:{errors:t},setValue:l})=>{var p,c,u,d;return g(m,{background:"backgroundPrimary",flexDirection:"column",gap:"5",padding:"4",borderRadius:"xs",children:[e(f,{control:a,label:"First Name",labelLocation:"top",name:"firstName",placeholder:"Enter first name",rules:{required:"First name is required"}}),((p=t.firstName)==null?void 0:p.message)&&e(r,{color:"negative",children:t.firstName.message}),e(f,{control:a,defaultValue:"",label:"Last Name",labelLocation:"top",name:"lastName",placeholder:"Enter last name",rules:{required:"Last name is required"}}),((c=t.lastName)==null?void 0:c.message)&&e(r,{color:"negative",children:t.lastName.message}),e(S,{defaultValue:"",control:a,label:"File Input",labelLocation:"top",name:"fileInput",onValueChange:o=>l("fileInput",o),rules:{required:"A file is required"},validExtensions:["images"]}),((u=t.fileInput)==null?void 0:u.message)&&e(r,{color:"negative",children:t.fileInput.message}),e(N,{control:a,defaultValue:i[0].value,label:"Select Option",labelLocation:"top",name:"selectOption",onValueChange:o=>l("selectOption",o),options:i,placeholder:"Select an option",rules:{required:"A selection is required"}}),((d=t.selectOption)==null?void 0:d.message)&&e(r,{color:"negative",children:t.selectOption.message}),e(V,{control:a,name:"switchOption",onCheckedChange:o=>l("switchOption",o),defaultChecked:!1}),e(q,{control:a,label:"Checkbox Option",labelLocation:"right",name:"checkboxOption",onCheckedChange:o=>l("checkboxOption",o),defaultChecked:!1}),e(F,{control:a,defaultValue:i[0].value,flexDirection:"row",gap:"4",onValueChange:o=>l("radioOption",o),options:i,name:"radioOption"}),g(m,{flexDirection:"row-reverse",marginTop:"2",gap:"2",children:[e(b,{type:"submit",label:"Submit",variant:"primary"}),e(b,{type:"reset",label:"Reset",onClick:()=>k()})]})]})}})}),args:{onSubmit:s=>console.log(s)}};var h,x,O;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(O=(x=n.parameters)==null?void 0:x.docs)==null?void 0:O.source}}};const ne=["Default"];export{n as Default,ne as __namedExportsOrder,ie as default};
//# sourceMappingURL=Form.stories-25a6063b.js.map
