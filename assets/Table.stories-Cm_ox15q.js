import{j as e,r as v}from"./iframe-CfmiJJDU.js";import{C as T}from"./Checkbox-B6nAd0Am.js";import{m as w,k as H}from"./YoutubeIcon-B1Ge9jXB.js";import"./SearchIcon-PYtCSQ2k.js";import{b as l}from"./classnames-DK8XftlJ.js";import{t as _}from"./Text-C1JjgtEQ.js";import"./preload-helper-PPVm8Dsz.js";import"./index-bSrywljg.js";import"./index-D7T5ypQk.js";import"./index-BPe2op5l.js";import"./index-9lrrrfWI.js";import"./index-CknMbiGi.js";import"./index-liZDm9wu.js";import"./index-DYL1ZBaF.js";import"./styles-C6k-R51j.js";import"./index-C02vWU17.js";function y({className:t,stickyHeader:a,maxHeight:o,...d}){const s=a&&o,n=a&&!o;return e.jsx("div",{"data-slot":"table-container","data-sticky-header":a,className:l("relative w-full",n?"overflow-visible":"overflow-x-auto",a&&["[&_thead]:sticky [&_thead]:top-0 [&_thead]:z-10 [&_thead]:bg-background-primary [&_thead]:border-b [&_thead]:border-border-normal","[&_thead_th]:bg-background-primary"],s&&"overflow-y-auto overflow-x-auto"),style:s?{maxHeight:o}:void 0,children:e.jsx("table",{"data-slot":"table",className:l(_({variant:"small"}),"w-full caption-bottom",t),...d})})}function f({className:t,...a}){return e.jsx("thead",{"data-slot":"table-header",className:l(t),...a})}function g({className:t,...a}){return e.jsx("tbody",{"data-slot":"table-body",className:l(t),...a})}function j({className:t,...a}){return e.jsx("tfoot",{"data-slot":"table-footer",className:l(t),...a})}function u({className:t,...a}){return e.jsx("tr",{"data-slot":"table-row",className:l("group","hover:[&>td]:bg-background-hover data-[state=selected]:[&>td]:bg-background-hover","focus-within:[&>td]:bg-background-hover","[&>td]:first:rounded-l-lg [&>td]:last:rounded-r-lg",t),...a})}function c({className:t,...a}){return e.jsx("th",{"data-slot":"table-head",className:l(_({variant:"normal"}),"h-13 px-4 text-left align-middle whitespace-nowrap [&:has([role=checkbox])]:pr-0","text-muted font-medium  data-[active=true]:font-bold data-[active=true]:text-border-focus",t),...a})}function r({className:t,...a}){return e.jsx("td",{"data-slot":"table-cell",className:l(_({variant:"normal"}),"text-primary p-4 align-middle whitespace-nowrap [&:has([role=checkbox])]:pr-0",t),...a})}function i({className:t,active:a=!0,direction:o,...d}){return a?e.jsx("div",{"data-slot":"table-sort-icon",className:l(t,"text-border-focus"),...d,children:o==="asc"?e.jsx(w,{size:"xs"}):e.jsx(H,{size:"xs"})}):null}try{y.displayName="Table",y.__docgenInfo={description:"",displayName:"Table",props:{stickyHeader:{defaultValue:null,description:"",name:"stickyHeader",required:!1,type:{name:"boolean"}},maxHeight:{defaultValue:null,description:"",name:"maxHeight",required:!1,type:{name:"string"}}}}}catch{}try{g.displayName="TableBody",g.__docgenInfo={description:"",displayName:"TableBody",props:{}}}catch{}try{r.displayName="TableCell",r.__docgenInfo={description:"",displayName:"TableCell",props:{}}}catch{}try{j.displayName="TableFooter",j.__docgenInfo={description:"",displayName:"TableFooter",props:{}}}catch{}try{c.displayName="TableHead",c.__docgenInfo={description:"",displayName:"TableHead",props:{}}}catch{}try{f.displayName="TableHeader",f.__docgenInfo={description:"",displayName:"TableHeader",props:{}}}catch{}try{u.displayName="TableRow",u.__docgenInfo={description:"",displayName:"TableRow",props:{}}}catch{}try{i.displayName="TableSortIcon",i.__docgenInfo={description:"",displayName:"TableSortIcon",props:{active:{defaultValue:{value:"true"},description:"",name:"active",required:!1,type:{name:"boolean"}},direction:{defaultValue:null,description:"",name:"direction",required:!0,type:{name:"enum",value:[{value:'"desc"'},{value:'"asc"'}]}}}}}catch{}const J={title:"Components/Table"},N=["Paid","Pending","Unpaid"],S=["Credit Card","PayPal","Bank Transfer"],I=Array.from({length:20},(t,a)=>({invoice:`INV${String(a+1).padStart(3,"0")}`,paymentStatus:N[a%3],totalAmount:`$${(100+(a+1)*25).toFixed(2)}`,paymentMethod:S[a%3]})),C=Array.from({length:20},(t,a)=>({invoice:`INV${String(a+1).padStart(3,"0")}`,paymentStatus:N[a%3],totalAmount:`$${(100+(a+1)*25).toFixed(2)}`,paymentMethod:S[a%3]})),h={render:()=>{const[t,a]=v.useState("amount"),[o,d]=v.useState("asc"),s=n=>{t===n?d(o==="asc"?"desc":"asc"):(a(n),d("asc"))};return e.jsxs(y,{children:[e.jsx(f,{children:e.jsxs(u,{children:[e.jsx(c,{}),e.jsx(c,{className:"w-[100px]","data-active":t==="invoice",children:e.jsxs("button",{className:"inline-flex items-center gap-1 cursor-pointer",onClick:()=>s("invoice"),children:["Invoice",e.jsx(i,{active:t==="invoice",direction:o})]})}),e.jsx(c,{"data-active":t==="status",onClick:()=>s("status"),children:e.jsxs("button",{className:"inline-flex items-center gap-1 cursor-pointer",children:["Status",e.jsx(i,{active:t==="status",direction:o})]})}),e.jsx(c,{"data-active":t==="method",onClick:()=>s("method"),children:e.jsxs("button",{className:"inline-flex items-center gap-1 cursor-pointer",children:["Method",e.jsx(i,{active:t==="method",direction:o})]})}),e.jsx(c,{className:"text-right","data-active":t==="amount",onClick:()=>s("amount"),children:e.jsxs("button",{className:"inline-flex items-center gap-1 cursor-pointer",children:["Amount",e.jsx(i,{active:t==="amount",direction:o})]})})]})}),e.jsx(g,{children:I.map(n=>e.jsxs(u,{children:[e.jsx(r,{children:e.jsx(T,{})}),e.jsx(r,{className:"font-medium",children:n.invoice}),e.jsx(r,{children:n.paymentStatus}),e.jsx(r,{children:n.paymentMethod}),e.jsx(r,{className:"text-right",children:n.totalAmount})]},n.invoice))}),e.jsx(j,{children:e.jsxs(u,{children:[e.jsx(r,{colSpan:4,children:"Total"}),e.jsx(r,{className:"text-right",children:"$2,500.00"})]})})]})},args:{}},k=({invoices:t,maxHeight:a})=>{const[o,d]=v.useState("amount"),[s,n]=v.useState("asc"),p=m=>{o===m?n(s==="asc"?"desc":"asc"):(d(m),n("asc"))};return e.jsxs(y,{stickyHeader:!0,maxHeight:a,children:[e.jsx(f,{children:e.jsxs(u,{children:[e.jsx(c,{}),e.jsx(c,{className:"w-[100px]","data-active":o==="invoice",children:e.jsxs("button",{className:"inline-flex items-center gap-1 cursor-pointer",onClick:()=>p("invoice"),children:["Invoice",e.jsx(i,{active:o==="invoice",direction:s})]})}),e.jsx(c,{"data-active":o==="status",onClick:()=>p("status"),children:e.jsxs("button",{className:"inline-flex items-center gap-1 cursor-pointer",children:["Status",e.jsx(i,{active:o==="status",direction:s})]})}),e.jsx(c,{"data-active":o==="method",onClick:()=>p("method"),children:e.jsxs("button",{className:"inline-flex items-center gap-1 cursor-pointer",children:["Method",e.jsx(i,{active:o==="method",direction:s})]})}),e.jsx(c,{className:"text-right","data-active":o==="amount",onClick:()=>p("amount"),children:e.jsxs("button",{className:"inline-flex items-center gap-1 cursor-pointer",children:["Amount",e.jsx(i,{active:o==="amount",direction:s})]})})]})}),e.jsx(g,{children:t.map(m=>e.jsxs(u,{children:[e.jsx(r,{children:e.jsx(T,{})}),e.jsx(r,{className:"font-medium",children:m.invoice}),e.jsx(r,{children:m.paymentStatus}),e.jsx(r,{children:m.paymentMethod}),e.jsx(r,{className:"text-right",children:m.totalAmount})]},m.invoice))}),e.jsx(j,{children:e.jsxs(u,{children:[e.jsx(r,{colSpan:4,children:"Total"}),e.jsx(r,{className:"text-right",children:"$2,500.00"})]})})]})},x={render:()=>e.jsx(k,{invoices:C,maxHeight:"300px"}),args:{}},b={parameters:{layout:"fullscreen"},render:()=>e.jsx("div",{className:"h-[500px] overflow-y-auto rounded-xl border border-border-normal",children:e.jsxs("div",{className:"space-y-8 p-4",children:[e.jsx("div",{className:"h-40 bg-background-secondary rounded-xl flex items-center justify-center text-muted",children:"Top content — scroll down"}),e.jsx("p",{className:"text-muted",children:"When you scroll down, the header stays fixed at the top of the viewport."}),e.jsx(k,{invoices:C}),e.jsx("div",{className:"h-96 bg-background-secondary rounded-xl flex items-center justify-center text-muted",children:"Bottom content — scroll to see the sticky header behavior"})]})}),args:{}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
            <TableHead className="w-[100px]" data-active={activeColumn === 'invoice'}>
              <button className="inline-flex items-center gap-1 cursor-pointer" onClick={() => handleSort('invoice')}>
                Invoice
                <TableSortIcon active={activeColumn === 'invoice'} direction={sortDirection} />
              </button>
            </TableHead>
            <TableHead data-active={activeColumn === 'status'} onClick={() => handleSort('status')}>
              <button className="inline-flex items-center gap-1 cursor-pointer">
                Status
                <TableSortIcon active={activeColumn === 'status'} direction={sortDirection} />
              </button>
            </TableHead>
            <TableHead data-active={activeColumn === 'method'} onClick={() => handleSort('method')}>
              <button className="inline-flex items-center gap-1 cursor-pointer">
                Method
                <TableSortIcon active={activeColumn === 'method'} direction={sortDirection} />
              </button>
            </TableHead>
            <TableHead className="text-right" data-active={activeColumn === 'amount'} onClick={() => handleSort('amount')}>
              <button className="inline-flex items-center gap-1 cursor-pointer">
                Amount
                <TableSortIcon active={activeColumn === 'amount'} direction={sortDirection} />
              </button>
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
}`,...h.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => <StickyHeaderTableContent invoices={stickyHeaderInvoices} maxHeight="300px" />,
  args: {}
}`,...x.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}};const K=["Default","StickyHeader","StickyHeaderWithPageScroll"];export{h as Default,x as StickyHeader,b as StickyHeaderWithPageScroll,K as __namedExportsOrder,J as default};
