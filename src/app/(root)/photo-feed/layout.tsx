

export default function layout({
    children,
    modal,
}: {
    children: React.ReactNode,
    modal: React.ReactNode,
}) {
  return (
    <>
    {modal}
    {children}
    </>
  )
}
