const Layout = (props) => {
  return (
    <div className="ui container masthead inverted center segment">
      {props.children}
    </div>
  );
};

export default Layout;
