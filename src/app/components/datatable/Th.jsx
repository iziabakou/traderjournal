import clsx from "clsx"

export default  function Th(props){
    const p ={...props, children:undefined, className:undefined};
    delete p.className;
    delete p.children;
    return <th className={clsx("border-b border-b-zinc-950/10 px-4 py-2 font-medium first:pl-[var(--gutter,theme(spacing.2))] last:pr-[var(--gutter,theme(spacing.2))] dark:border-b-white/10 sm:first:pl-1 sm:last:pr-1", props.className)}
    {...p}>
        {props.children}
    </th>
}