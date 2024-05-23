const TaksLayout = ({
  children
}: {
  children: React.ReactNode
}) => {
  return (
    <div className="bg-blue-300 p-4">
      <div>タスクレイアウト</div>
      {children}
    </div>
  );
}

export default TaksLayout;