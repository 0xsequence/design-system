import{j as e,a as g}from"./jsx-runtime-a9c13c85.js";import{B as u}from"./Box-e37d6a6c.js";import{B as b}from"./Button-f9a698d9.js";import"./Checkbox-f27d05e6.js";import{F as v,C as S,a as V,b as N,c as T,d as q}from"./ControlledSwitch-b9347f27.js";import"./FileInput-4afbfc88.js";import"./RadioGroup-50c695a1.js";import"./Select-0410c48f.js";import"./Switch-86aa03bb.js";import{T as i}from"./Text-0105fdd6.js";import{a as f}from"./ControlledTextInput-5faa9406.js";import"./index-d8ade8ea.js";import"./_commonjsHelpers-042e6b4d.js";import"./atoms-2c07736f.js";/* empty css                              */import"./vanilla-extract-recipes-createRuntimeFn.esm-d30eb010.js";import"./extends-98964cd2.js";import"./index.module-1b91e82f.js";import"./index-ffd4619b.js";import"./index.module-99b258bb.js";import"./index.module-e6a6661a.js";import"./index.module-f6547125.js";import"./index.module-5cafe27c.js";import"./Field-ec8de895.js";import"./WarningIcon-841a4d7b.js";import"./IconButton-96049cef.js";import"./index.module-9fd418d9.js";import"./index.module-207f3122.js";import"./index.module-cc7c4bf6.js";import"./Combination-ff871947.js";import"./index.module-6743eeab.js";import"./index-807b81f6.js";import"./typography-f274f330.js";const ne={title:"Forms/Form",component:v},n=[{label:"Option 1",value:"option-1"},{label:"Option 2",value:"option-2"},{label:"Option 3",value:"option-3"}],r={render:({onSubmit:s,...C})=>e(u,{background:"backgroundSecondary",borderRadius:"md",flexDirection:"column",gap:"4",padding:"4",children:e(v,{defaultValues:{firstName:""},onSubmit:s,...C,children:({control:a,reset:k,formState:{errors:t},setValue:l})=>{var c,p,m,d;return g(u,{background:"backgroundPrimary",flexDirection:"column",gap:"5",padding:"4",borderRadius:"xs",children:[e(f,{control:a,label:"First Name",labelLocation:"top",name:"firstName",placeholder:"Enter first name",rules:{required:"First name is required"}}),((c=t.firstName)==null?void 0:c.message)&&e(i,{color:"negative",children:t.firstName.message}),e(f,{control:a,defaultValue:"",label:"Last Name",labelLocation:"top",name:"lastName",placeholder:"Enter last name",rules:{required:"Last name is required"}}),((p=t.lastName)==null?void 0:p.message)&&e(i,{color:"negative",children:t.lastName.message}),e(S,{defaultValue:"",control:a,label:"File Input",labelLocation:"top",name:"fileInput",onValueChange:o=>l("fileInput",o),rules:{required:"A file is required"},validExtensions:["images"]}),((m=t.fileInput)==null?void 0:m.message)&&e(i,{color:"negative",children:t.fileInput.message}),e(V,{control:a,defaultValue:n[0].value,label:"Select Option",labelLocation:"top",name:"selectOption",onValueChange:o=>l("selectOption",o),options:n,placeholder:"Select an option",rules:{required:"A selection is required"}}),((d=t.selectOption)==null?void 0:d.message)&&e(i,{color:"negative",children:t.selectOption.message}),e(N,{control:a,name:"switchOption",onCheckedChange:o=>l("switchOption",o),defaultChecked:!1}),e(T,{control:a,label:"Checkbox Option",labelLocation:"right",name:"checkboxOption",onCheckedChange:o=>l("checkboxOption",o),defaultChecked:!1}),e(q,{control:a,defaultValue:n[0].value,flexDirection:"row",gap:"4",onValueChange:o=>l("radioOption",o),options:n,name:"radioOption"}),g(u,{flexDirection:"row-reverse",marginTop:"2",gap:"2",children:[e(b,{type:"submit",label:"Submit",variant:"primary"}),e(b,{type:"reset",label:"Reset",onClick:()=>k()})]})]})}})}),args:{onSubmit:s=>console.log(s)}};var x,h,O;r.parameters={...r.parameters,docs:{...(x=r.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(O=(h=r.parameters)==null?void 0:h.docs)==null?void 0:O.source}}};r.parameters={storySource:{source:`{
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
}`},...r.parameters};const se=["Default"];export{r as Default,se as __namedExportsOrder,ne as default};
//# sourceMappingURL=Form.stories-9ee876d1.js.map
