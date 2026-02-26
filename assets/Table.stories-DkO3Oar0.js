import{j as e,r as y}from"./iframe-CxR6Y5nx.js";import{C as N}from"./Checkbox-CLturT7W.js";import{m as w,k as I}from"./YoutubeIcon-DBBUie5I.js";import"./SearchIcon-Cx6_8xPY.js";import{b as d}from"./classnames-DhbneTZY.js";import{B}from"./Button-BcsAbN_J.js";import{t as g}from"./Text-7yyC1abT.js";import"./preload-helper-PPVm8Dsz.js";import"./index-ynZb39QS.js";import"./index-BViKwPa1.js";import"./index-f29rd30y.js";import"./index-CqMqVT_p.js";import"./index-B2qeJhuz.js";import"./index-C5XOeTVT.js";import"./index-CRe8dmvy.js";import"./styles-B8EbM403.js";import"./index-C548o_z_.js";function v({className:t,stickyHeader:a,maxHeight:o,...i}){const l=a&&o,s=a&&!o;return e.jsx("div",{"data-slot":"table-container","data-sticky-header":a,className:d("relative w-full",s?"overflow-visible":"overflow-x-auto",a&&["[&_thead_th]:sticky [&_thead_th]:top-0 [&_thead_th]:z-10 [&_thead_th]:bg-background-primary"],l&&"overflow-y-auto overflow-x-auto"),style:l?{maxHeight:o}:void 0,children:e.jsx("table",{"data-slot":"table",className:d(g({variant:"small"}),"w-full caption-bottom border-separate border-spacing-0",t),...i})})}function f({className:t,...a}){return e.jsx("thead",{"data-slot":"table-header",className:d(t),...a})}function _({className:t,...a}){return e.jsx("tbody",{"data-slot":"table-body",className:d(t),...a})}function T({className:t,...a}){return e.jsx("tfoot",{"data-slot":"table-footer",className:d(t),...a})}function m({className:t,...a}){return e.jsx("tr",{"data-slot":"table-row",className:d("group","hover:[&>td]:bg-background-hover data-[state=selected]:[&>td]:bg-background-hover","focus-within:[&>td]:bg-background-hover","[&>td]:first:rounded-l-lg [&>td]:last:rounded-r-lg",t),...a})}function n({className:t,...a}){return e.jsx("th",{"data-slot":"table-head",className:d(g({variant:"normal"}),"h-13 py-2 px-4 text-left align-middle whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&:has(button)]:px-0","text-muted font-medium",t),...a})}function r({className:t,...a}){return e.jsx("td",{"data-slot":"table-cell",className:d(g({variant:"normal"}),"text-primary p-4 align-middle whitespace-nowrap [&:has([role=checkbox])]:pr-0",t),...a})}function c({className:t,children:a,active:o,direction:i,...l}){return e.jsxs(B,{variant:null,shape:"square","data-active":o,className:d("inline-flex w-full h-full items-center gap-1 overflow-visible relative text-inherit px-4 hover:bg-background-hover","data-[active=true]:font-bold data-[active=true]:text-border-focus",t),...l,children:[a,e.jsx(j,{active:o,direction:i})]})}function j({className:t,active:a=!0,direction:o,...i}){return a?e.jsx("div",{"data-slot":"table-sort-icon",className:d(t,"text-border-focus"),...i,children:o==="asc"?e.jsx(w,{size:"xs"}):e.jsx(I,{size:"xs"})}):null}try{v.displayName="Table",v.__docgenInfo={description:"",displayName:"Table",props:{stickyHeader:{defaultValue:null,description:"",name:"stickyHeader",required:!1,type:{name:"boolean"}},maxHeight:{defaultValue:null,description:"",name:"maxHeight",required:!1,type:{name:"string"}}}}}catch{}try{_.displayName="TableBody",_.__docgenInfo={description:"",displayName:"TableBody",props:{}}}catch{}try{r.displayName="TableCell",r.__docgenInfo={description:"",displayName:"TableCell",props:{}}}catch{}try{T.displayName="TableFooter",T.__docgenInfo={description:"",displayName:"TableFooter",props:{}}}catch{}try{n.displayName="TableHead",n.__docgenInfo={description:"",displayName:"TableHead",props:{}}}catch{}try{c.displayName="TableHeadButton",c.__docgenInfo={description:"",displayName:"TableHeadButton",props:{variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:'"primary" | "secondary" | "text" | "destructive" | "outline" | "ghost" | "emphasis" | null'}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:'"xs" | "sm" | "md" | "lg" | null'}},shape:{defaultValue:null,description:"",name:"shape",required:!1,type:{name:'"circle" | "square" | null'}},iconOnly:{defaultValue:null,description:"",name:"iconOnly",required:!1,type:{name:"boolean | null"}},asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}},active:{defaultValue:null,description:"",name:"active",required:!1,type:{name:"boolean"}},direction:{defaultValue:null,description:"",name:"direction",required:!0,type:{name:"enum",value:[{value:'"desc"'},{value:'"asc"'}]}}}}}catch{}try{f.displayName="TableHeader",f.__docgenInfo={description:"",displayName:"TableHeader",props:{}}}catch{}try{m.displayName="TableRow",m.__docgenInfo={description:"",displayName:"TableRow",props:{}}}catch{}try{j.displayName="TableSortIcon",j.__docgenInfo={description:"",displayName:"TableSortIcon",props:{active:{defaultValue:{value:"true"},description:"",name:"active",required:!1,type:{name:"boolean"}},direction:{defaultValue:null,description:"",name:"direction",required:!0,type:{name:"enum",value:[{value:'"desc"'},{value:'"asc"'}]}}}}}catch{}const Q={title:"Components/Table"},S=["Paid","Pending","Unpaid"],C=["Credit Card","PayPal","Bank Transfer"],A=Array.from({length:20},(t,a)=>({invoice:`INV${String(a+1).padStart(3,"0")}`,paymentStatus:S[a%3],totalAmount:`$${(100+(a+1)*25).toFixed(2)}`,paymentMethod:C[a%3]})),k=Array.from({length:20},(t,a)=>({invoice:`INV${String(a+1).padStart(3,"0")}`,paymentStatus:S[a%3],totalAmount:`$${(100+(a+1)*25).toFixed(2)}`,paymentMethod:C[a%3]})),h={render:()=>{const[t,a]=y.useState("amount"),[o,i]=y.useState("asc"),l=s=>{t===s?i(o==="asc"?"desc":"asc"):(a(s),i("asc"))};return e.jsxs(v,{children:[e.jsx(f,{children:e.jsxs(m,{children:[e.jsx(n,{}),e.jsx(n,{className:"w-[100px]",children:e.jsx(c,{active:t==="invoice",direction:o,onClick:()=>l("invoice"),children:"Invoice"})}),e.jsx(n,{children:e.jsx(c,{active:t==="status",direction:o,onClick:()=>l("status"),children:"Status"})}),e.jsx(n,{children:e.jsx(c,{active:t==="method",direction:o,onClick:()=>l("method"),children:"Method"})}),e.jsx(n,{children:e.jsx(c,{className:"justify-end",active:t==="amount",direction:o,onClick:()=>l("amount"),children:"Amount"})})]})}),e.jsx(_,{children:A.map(s=>e.jsxs(m,{children:[e.jsx(r,{children:e.jsx(N,{})}),e.jsx(r,{className:"font-medium",children:s.invoice}),e.jsx(r,{children:s.paymentStatus}),e.jsx(r,{children:s.paymentMethod}),e.jsx(r,{className:"text-right",children:s.totalAmount})]},s.invoice))}),e.jsx(T,{children:e.jsxs(m,{children:[e.jsx(r,{colSpan:4,children:"Total"}),e.jsx(r,{className:"text-right",children:"$2,500.00"})]})})]})},args:{}},H=({invoices:t,maxHeight:a})=>{const[o,i]=y.useState("amount"),[l,s]=y.useState("asc"),p=u=>{o===u?s(l==="asc"?"desc":"asc"):(i(u),s("asc"))};return e.jsxs(v,{stickyHeader:!0,maxHeight:a,children:[e.jsx(f,{children:e.jsxs(m,{children:[e.jsx(n,{}),e.jsx(n,{className:"w-[100px]",children:e.jsx(c,{active:o==="invoice",direction:l,onClick:()=>p("invoice"),children:"Invoice"})}),e.jsx(n,{children:e.jsx(c,{active:o==="status",direction:l,onClick:()=>p("status"),children:"Status"})}),e.jsx(n,{children:e.jsx(c,{active:o==="method",direction:l,onClick:()=>p("method"),children:"Method"})}),e.jsx(n,{children:e.jsx(c,{className:"justify-end",active:o==="amount",direction:l,onClick:()=>p("amount"),children:"Amount"})})]})}),e.jsx(_,{children:t.map(u=>e.jsxs(m,{children:[e.jsx(r,{children:e.jsx(N,{})}),e.jsx(r,{className:"font-medium",children:u.invoice}),e.jsx(r,{children:u.paymentStatus}),e.jsx(r,{children:u.paymentMethod}),e.jsx(r,{className:"text-right",children:u.totalAmount})]},u.invoice))}),e.jsx(T,{children:e.jsxs(m,{children:[e.jsx(r,{colSpan:4,children:"Total"}),e.jsx(r,{className:"text-right",children:"$2,500.00"})]})})]})},b={render:()=>e.jsx(H,{invoices:k,maxHeight:"300px"}),args:{}},x={parameters:{layout:"fullscreen"},render:()=>e.jsx("div",{className:"h-[500px] overflow-y-auto rounded-xl border border-border-normal",children:e.jsxs("div",{className:"space-y-8 p-4",children:[e.jsx("div",{className:"h-40 bg-background-secondary rounded-xl flex items-center justify-center text-muted",children:"Top content — scroll down"}),e.jsx("p",{className:"text-muted",children:"When you scroll down, the header stays fixed at the top of the viewport."}),e.jsx(H,{invoices:k}),e.jsx("div",{className:"h-96 bg-background-secondary rounded-xl flex items-center justify-center text-muted",children:"Bottom content — scroll to see the sticky header behavior"})]})}),args:{}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [activeColumn, setActiveColumn] = useState<'invoice' | 'status' | 'method' | 'amount'>('amount');
    const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc');
    const handleSort = (column: 'invoice' | 'status' | 'method' | 'amount') => {
      if (activeColumn === column) {
        setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
      } else {
        setActiveColumn(column);
        setSortDirection('asc');
      }
    };
    return <Table>
        <TableHeader>
          <TableRow>
            <TableHead />
            <TableHead className="w-[100px]">
              <TableHeadButton active={activeColumn === 'invoice'} direction={sortDirection} onClick={() => handleSort('invoice')}>
                Invoice
              </TableHeadButton>
            </TableHead>
            <TableHead>
              <TableHeadButton active={activeColumn === 'status'} direction={sortDirection} onClick={() => handleSort('status')}>
                Status
              </TableHeadButton>
            </TableHead>
            <TableHead>
              <TableHeadButton active={activeColumn === 'method'} direction={sortDirection} onClick={() => handleSort('method')}>
                Method
              </TableHeadButton>
            </TableHead>
            <TableHead>
              <TableHeadButton className="justify-end" active={activeColumn === 'amount'} direction={sortDirection} onClick={() => handleSort('amount')}>
                Amount
              </TableHeadButton>
            </TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {invoices.map(invoice => <TableRow key={invoice.invoice}>
              <TableCell>
                <Checkbox />
              </TableCell>
              <TableCell className="font-medium">{invoice.invoice}</TableCell>
              <TableCell>{invoice.paymentStatus}</TableCell>
              <TableCell>{invoice.paymentMethod}</TableCell>
              <TableCell className="text-right">
                {invoice.totalAmount}
              </TableCell>
            </TableRow>)}
        </TableBody>

        <TableFooter>
          <TableRow>
            <TableCell colSpan={4}>Total</TableCell>
            <TableCell className="text-right">$2,500.00</TableCell>
          </TableRow>
        </TableFooter>
      </Table>;
  },
  args: {}
}`,...h.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => <StickyHeaderTableContent invoices={stickyHeaderInvoices} maxHeight="300px" />,
  args: {}
}`,...b.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  parameters: {
    layout: 'fullscreen'
  },
  render: () => <div className="h-[500px] overflow-y-auto rounded-xl border border-border-normal">
      <div className="space-y-8 p-4">
        <div className="h-40 bg-background-secondary rounded-xl flex items-center justify-center text-muted">
          Top content — scroll down
        </div>
        <p className="text-muted">
          When you scroll down, the header stays fixed at the top of the
          viewport.
        </p>
        <StickyHeaderTableContent invoices={stickyHeaderInvoices} />
        <div className="h-96 bg-background-secondary rounded-xl flex items-center justify-center text-muted">
          Bottom content — scroll to see the sticky header behavior
        </div>
      </div>
    </div>,
  args: {}
}`,...x.parameters?.docs?.source}}};const X=["Default","StickyHeader","StickyHeaderWithPageScroll"];export{h as Default,b as StickyHeader,x as StickyHeaderWithPageScroll,X as __namedExportsOrder,Q as default};
