import{j as e,r as T}from"./iframe-DLEWa1Zi.js";import{C as _}from"./Checkbox-DcO88oRz.js";import{m as y,k as f}from"./YoutubeIcon-BIkcGBes.js";import"./SearchIcon-BHgNq4Bl.js";import{b as n}from"./classnames-DK8XftlJ.js";import{t as x}from"./Text-CLtF-1Hv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BJOU-KwU.js";import"./index-BiSxwqji.js";import"./index-By1LeweS.js";import"./index-BxDcg72k.js";import"./index-BkKha5Ig.js";import"./index-K7EZJ42M.js";import"./index-BaJGGqAs.js";import"./styles-C6k-R51j.js";import"./index-CaXJHKT5.js";function p({className:t,...a}){return e.jsx("div",{"data-slot":"table-container",className:"relative w-full overflow-x-auto",children:e.jsx("table",{"data-slot":"table",className:n(x({variant:"small"}),"w-full caption-bottom",t),...a})})}function b({className:t,...a}){return e.jsx("thead",{"data-slot":"table-header",className:n(t),...a})}function h({className:t,...a}){return e.jsx("tbody",{"data-slot":"table-body",className:n(t),...a})}function v({className:t,...a}){return e.jsx("tfoot",{"data-slot":"table-footer",className:n(t),...a})}function c({className:t,...a}){return e.jsx("tr",{"data-slot":"table-row",className:n("group","hover:[&>td]:bg-background-hover data-[state=selected]:[&>td]:bg-background-hover","focus-within:[&>td]:bg-background-hover","[&>td]:first:rounded-l-lg [&>td]:last:rounded-r-lg",t),...a})}function l({className:t,...a}){return e.jsx("th",{"data-slot":"table-head",className:n(x({variant:"normal"}),"h-13 px-4 text-left align-middle whitespace-nowrap [&:has([role=checkbox])]:pr-0","text-muted font-medium  data-[active=true]:font-bold data-[active=true]:text-border-focus",t),...a})}function o({className:t,...a}){return e.jsx("td",{"data-slot":"table-cell",className:n(x({variant:"normal"}),"text-primary p-4 align-middle whitespace-nowrap [&:has([role=checkbox])]:pr-0",t),...a})}function s({className:t,active:a=!0,direction:i,...d}){return a?e.jsx("div",{"data-slot":"table-sort-icon",className:n(t,"text-border-focus"),...d,children:i==="asc"?e.jsx(y,{size:"xs"}):e.jsx(f,{size:"xs"})}):null}try{p.displayName="Table",p.__docgenInfo={description:"",displayName:"Table",props:{}}}catch{}try{h.displayName="TableBody",h.__docgenInfo={description:"",displayName:"TableBody",props:{}}}catch{}try{o.displayName="TableCell",o.__docgenInfo={description:"",displayName:"TableCell",props:{}}}catch{}try{v.displayName="TableFooter",v.__docgenInfo={description:"",displayName:"TableFooter",props:{}}}catch{}try{l.displayName="TableHead",l.__docgenInfo={description:"",displayName:"TableHead",props:{}}}catch{}try{b.displayName="TableHeader",b.__docgenInfo={description:"",displayName:"TableHeader",props:{}}}catch{}try{c.displayName="TableRow",c.__docgenInfo={description:"",displayName:"TableRow",props:{}}}catch{}try{s.displayName="TableSortIcon",s.__docgenInfo={description:"",displayName:"TableSortIcon",props:{active:{defaultValue:{value:"true"},description:"",name:"active",required:!1,type:{name:"boolean"}},direction:{defaultValue:null,description:"",name:"direction",required:!0,type:{name:"enum",value:[{value:'"desc"'},{value:'"asc"'}]}}}}}catch{}const F={title:"Components/Table"},N=[{invoice:"INV001",paymentStatus:"Paid",totalAmount:"$250.00",paymentMethod:"Credit Card"},{invoice:"INV002",paymentStatus:"Pending",totalAmount:"$150.00",paymentMethod:"PayPal"},{invoice:"INV003",paymentStatus:"Unpaid",totalAmount:"$350.00",paymentMethod:"Bank Transfer"},{invoice:"INV004",paymentStatus:"Paid",totalAmount:"$450.00",paymentMethod:"Credit Card"},{invoice:"INV005",paymentStatus:"Paid",totalAmount:"$550.00",paymentMethod:"PayPal"},{invoice:"INV006",paymentStatus:"Pending",totalAmount:"$200.00",paymentMethod:"Bank Transfer"},{invoice:"INV007",paymentStatus:"Unpaid",totalAmount:"$300.00",paymentMethod:"Credit Card"}],u={render:()=>{const[t,a]=T.useState("amount"),[i,d]=T.useState("asc"),m=r=>{t===r?d(i==="asc"?"desc":"asc"):(a(r),d("asc"))};return e.jsxs(p,{children:[e.jsx(b,{children:e.jsxs(c,{children:[e.jsx(l,{}),e.jsx(l,{className:"w-[100px]","data-active":t==="invoice",children:e.jsxs("button",{className:"inline-flex items-center gap-1 cursor-pointer",onClick:()=>m("invoice"),children:["Invoice",e.jsx(s,{active:t==="invoice",direction:i})]})}),e.jsx(l,{"data-active":t==="status",onClick:()=>m("status"),children:e.jsxs("button",{className:"inline-flex items-center gap-1 cursor-pointer",children:["Status",e.jsx(s,{active:t==="status",direction:i})]})}),e.jsx(l,{"data-active":t==="method",onClick:()=>m("method"),children:e.jsxs("button",{className:"inline-flex items-center gap-1 cursor-pointer",children:["Method",e.jsx(s,{active:t==="method",direction:i})]})}),e.jsx(l,{className:"text-right","data-active":t==="amount",onClick:()=>m("amount"),children:e.jsxs("button",{className:"inline-flex items-center gap-1 cursor-pointer",children:["Amount",e.jsx(s,{active:t==="amount",direction:i})]})})]})}),e.jsx(h,{children:N.slice(0,3).map(r=>e.jsxs(c,{children:[e.jsx(o,{children:e.jsx(_,{})}),e.jsx(o,{className:"font-medium",children:r.invoice}),e.jsx(o,{children:r.paymentStatus}),e.jsx(o,{children:r.paymentMethod}),e.jsx(o,{className:"text-right",children:r.totalAmount})]},r.invoice))}),e.jsx(v,{children:e.jsxs(c,{children:[e.jsx(o,{colSpan:4,children:"Total"}),e.jsx(o,{className:"text-right",children:"$2,500.00"})]})})]})},args:{}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
          {invoices.slice(0, 3).map(invoice => <TableRow key={invoice.invoice}>
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
}`,...u.parameters?.docs?.source}}};const E=["Default"];export{u as Default,E as __namedExportsOrder,F as default};
