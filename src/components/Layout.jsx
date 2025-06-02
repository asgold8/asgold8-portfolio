const Layout = (props) => {
  return (
    <div className="container mx-auto bg-gray-900 text-white flex flex-col items-center justify-center py-12 rounded">
      {props.children}
    </div>
  );
};

export default Layout;
