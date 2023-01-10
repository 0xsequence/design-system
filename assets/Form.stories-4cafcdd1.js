import{j as e,a as g}from"./jsx-runtime-a9c13c85.js";import{B as s}from"./Box-6ce8bd92.js";import{B as b}from"./Button-5e68502d.js";import"./atoms.css-3866390b.js";/* empty css                              */import"./Checkbox-072213fe.js";import{F as x,C as v,a as k,b as S,c as N,d as V}from"./ControlledSwitch-f93c0c26.js";import"./FileInput-0f1af378.js";import"./RadioGroup-bc412375.js";import"./Select-7b835365.js";import"./Switch-55f30ced.js";import{T as r}from"./Text-f680f5c3.js";import{a as f}from"./ControlledTextInput-4f06c38e.js";import"./index-d8ade8ea.js";import"./_commonjsHelpers-042e6b4d.js";import"./vanilla-extract-recipes-createRuntimeFn.esm-d30eb010.js";import"./extends-98964cd2.js";import"./index.module-d15610cf.js";import"./index-ffd4619b.js";import"./index.module-e6a6661a.js";import"./index.module-45828978.js";import"./index.module-732cca0e.js";import"./Field-d7745a6b.js";import"./WarningIcon-d2e01a38.js";import"./IconButton-bdb5d79a.js";import"./index.module-fa6a82d0.js";import"./index.module-8c7796ea.js";import"./index.module-a9b21657.js";import"./Combination-ae2baabd.js";import"./typography-f274f330.js";const oe={title:"Forms/Form",component:x},i=[{label:"Option 1",value:"option-1"},{label:"Option 2",value:"option-2"},{label:"Option 3",value:"option-3"}],m={render:({onSubmit:n,...O})=>e(s,{background:"backgroundSecondary",borderRadius:"md",flexDirection:"column",gap:"4",padding:"4",children:e(x,{defaultValues:{firstName:""},onSubmit:n,...O,children:({control:a,reset:C,formState:{errors:o},setValue:l})=>{var p,c,u,d;return g(s,{background:"backgroundPrimary",flexDirection:"column",gap:"5",padding:"4",borderRadius:"xs",children:[e(f,{control:a,label:"First Name",labelLocation:"top",name:"firstName",placeholder:"Enter first name",rules:{required:"First name is required"}}),((p=o.firstName)==null?void 0:p.message)&&e(r,{color:"negative",children:o.firstName.message}),e(f,{control:a,defaultValue:"",label:"Last Name",labelLocation:"top",name:"lastName",placeholder:"Enter last name",rules:{required:"Last name is required"}}),((c=o.lastName)==null?void 0:c.message)&&e(r,{color:"negative",children:o.lastName.message}),e(v,{defaultValue:"",control:a,label:"File Input",labelLocation:"top",name:"fileInput",onValueChange:t=>l("fileInput",t),rules:{required:"A file is required"},validExtensions:["images"]}),((u=o.fileInput)==null?void 0:u.message)&&e(r,{color:"negative",children:o.fileInput.message}),e(k,{control:a,defaultValue:i[0].value,label:"Select Option",labelLocation:"top",name:"selectOption",onValueChange:t=>l("selectOption",t),options:i,placeholder:"Select an option",rules:{required:"A selection is required"}}),((d=o.selectOption)==null?void 0:d.message)&&e(r,{color:"negative",children:o.selectOption.message}),e(S,{control:a,name:"switchOption",onCheckedChange:t=>l("switchOption",t),defaultChecked:!1}),e(N,{control:a,label:"Checkbox Option",labelLocation:"right",name:"checkboxOption",onCheckedChange:t=>l("checkboxOption",t),defaultChecked:!1}),e(V,{control:a,defaultValue:i[0].value,flexDirection:"row",gap:"4",onValueChange:t=>l("radioOption",t),options:i,name:"radioOption"}),g(s,{flexDirection:"row-reverse",marginTop:"2",gap:"2",children:[e(b,{type:"submit",label:"Submit",variant:"primary"}),e(b,{type:"reset",label:"Reset",onClick:()=>C()})]})]})}})}),args:{onSubmit:n=>console.log(n)}};var h;m.parameters={...m.parameters,storySource:{source:`{
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
}`,...(h=m.parameters)==null?void 0:h.storySource}};const ae=["Default"];export{m as Default,ae as __namedExportsOrder,oe as default};
//# sourceMappingURL=Form.stories-4cafcdd1.js.map
