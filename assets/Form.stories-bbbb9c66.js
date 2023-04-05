import{j as e,a as g}from"./jsx-runtime-a9c13c85.js";import{B as m}from"./Box-9e9f1e0d.js";import{B as b}from"./Button-c055484d.js";import"./Checkbox-33ad8c92.js";import{F as C,C as S,a as N,b as V,c as q,d as F}from"./ControlledSwitch-414c0b3d.js";import"./FileInput-b17550bb.js";import"./RadioGroup-aea90318.js";import"./Select-66ccd86d.js";import"./Switch-57dc6d54.js";import{T as l}from"./Text-755617cc.js";import{C as f}from"./ControlledTextInput-7e733c7f.js";import"./index-d8ade8ea.js";import"./_commonjsHelpers-042e6b4d.js";import"./atoms-53256ec3.js";/* empty css                              */import"./vanilla-extract-recipes-createRuntimeFn.esm-bf276de8.js";import"./extends-9cd95192.js";import"./index.module-4456f0d6.js";import"./extends-98964cd2.js";import"./index-6cf4ba34.js";import"./index.module-99b258bb.js";import"./index.module-e6a6661a.js";import"./index.module-f6547125.js";import"./index.module-cacec922.js";import"./Field-7c6ec1ee.js";import"./WarningIcon-60d06b1a.js";import"./IconButton-fd570a0d.js";import"./index.module-880e327b.js";import"./index.module-a3790cd2.js";import"./index.module-cc7c4bf6.js";import"./index.module-1e59790f.js";import"./index.module-f536abc8.js";import"./Combination-888d27bc.js";import"./index.module-2789a3d5.js";import"./index.module-ba9cd207.js";import"./index-807b81f6.js";import"./typography-f274f330.js";const ce={title:"Forms/Form",component:C},i=[{label:"Option 1",value:"option-1"},{label:"Option 2",value:"option-2"},{label:"Option 3",value:"option-3"}],n={render:({onSubmit:s,...v})=>e(m,{background:"backgroundSecondary",borderRadius:"md",flexDirection:"column",gap:"4",padding:"4",children:e(C,{defaultValues:{firstName:""},onSubmit:s,...v,children:({control:a,reset:k,formState:{errors:t},setValue:r})=>{var p,c,u,d;return g(m,{background:"backgroundPrimary",flexDirection:"column",gap:"5",padding:"4",borderRadius:"xs",children:[e(f,{control:a,label:"First Name",labelLocation:"top",name:"firstName",placeholder:"Enter first name",rules:{required:"First name is required"}}),((p=t.firstName)==null?void 0:p.message)&&e(l,{color:"negative",children:t.firstName.message}),e(f,{control:a,defaultValue:"",label:"Last Name",labelLocation:"top",name:"lastName",placeholder:"Enter last name",rules:{required:"Last name is required"}}),((c=t.lastName)==null?void 0:c.message)&&e(l,{color:"negative",children:t.lastName.message}),e(S,{defaultValue:"",control:a,label:"File Input",labelLocation:"top",name:"fileInput",onValueChange:o=>r("fileInput",o),rules:{required:"A file is required"},validExtensions:["images"]}),((u=t.fileInput)==null?void 0:u.message)&&e(l,{color:"negative",children:t.fileInput.message}),e(N,{control:a,defaultValue:i[0].value,label:"Select Option",labelLocation:"top",name:"selectOption",onValueChange:o=>r("selectOption",o),options:i,placeholder:"Select an option",rules:{required:"A selection is required"}}),((d=t.selectOption)==null?void 0:d.message)&&e(l,{color:"negative",children:t.selectOption.message}),e(V,{control:a,name:"switchOption",onCheckedChange:o=>r("switchOption",o),defaultChecked:!1}),e(q,{control:a,label:"Checkbox Option",labelLocation:"right",name:"checkboxOption",onCheckedChange:o=>r("checkboxOption",o),defaultChecked:!1}),e(F,{control:a,defaultValue:i[0].value,flexDirection:"row",gap:"4",onValueChange:o=>r("radioOption",o),options:i,name:"radioOption"}),g(m,{flexDirection:"row-reverse",marginTop:"2",gap:"2",children:[e(b,{type:"submit",label:"Submit",variant:"primary"}),e(b,{type:"reset",label:"Reset",onClick:()=>k()})]})]})}})}),args:{onSubmit:s=>console.log(s)}};var h,x,O;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(O=(x=n.parameters)==null?void 0:x.docs)==null?void 0:O.source}}};const ue=["Default"];export{n as Default,ue as __namedExportsOrder,ce as default};
//# sourceMappingURL=Form.stories-bbbb9c66.js.map
