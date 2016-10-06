# Polling-APP-using-React-and-Socket-IO
This Real-time prototype project Polling App using React and Socket IO is based on Alex Banks Lynda course. 

## My updates:

1. webpack: need add query presets.

```bash
module.exports = {
	entry: "./app-client.js",
	output: {
		filename: "public/bundle.js"
	},
	module: {
		loaders: [
			{ 
    			test: /\.js$/, 
    			exclude: /node_modules/, 
    			loader: "babel", 
    			query:
      				{
        				presets:['react']
      				}
			}
		]
	}

};
```

2. React 15.0.1 : ReactDom component is not from React component any more;

3. Newest version react-router component is implemented. 

	a. <Router> is now a class inside that component;
	
	b. hashHistory now must be implemented manually;
	
	c. No DefaultRout. Instead new IndexRoute class is introduced.
	
	d. Render method is updated as well.
	
	e. RouteHandler is not available any more. Variable pass to the RouteHandler has been changed as well.
	
```bash
		{React.cloneElement(this.props.children, this.state)} to pass all state.
		if more than state:
		{
			React.cloneElement(this.props.children, {
				title:this.state.title,
				status:this.state.status,
				dance:this.state.dance,
				emit:this.emit
			})
		}
```

	f. NotFoundRoute updates.
	
```bash
		// v0.13.x
		<NotFoundRoute handler={Whoops404}/>
		// v1.0
		<Route path="*" component={Whoops404}/>
```

4. Graphing Result: updated with react-d3-basic

	Thanks to http://www.reactd3.org/

	