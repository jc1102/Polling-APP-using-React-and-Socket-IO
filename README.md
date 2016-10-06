# Polling-APP-using-React-and-Socket-IO
This Real-time prototype project Polling App using React and Socket IO is based on Alex Banks Lynda course. 

## My updates:

### webpack: need add query presets.

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

### React 15.0.1 : ReactDom component is not from React component any more;

### Newest version react-router component is implemented. 

```<Router>``` is now a class inside that component;
	
hashHistory now must be implemented manually;

No DefaultRout. Instead new IndexRoute class is introduced;
	
Render method is updated as well;
	
RouteHandler is not available any more. Variable pass to the RouteHandler has been changed as well;
	
```bash
{React.cloneElement(this.props.children, this.state)} to pass all state.
```


if more than state:


```bash
{
	React.cloneElement(this.props.children, {
		title:this.state.title,
		status:this.state.status,
		dance:this.state.dance,
		emit:this.emit
	})
}
```


NotFoundRoute updates;

	
```bash
		// v0.13.x
		<NotFoundRoute handler={Whoops404}/>
		// v1.0
		<Route path="*" component={Whoops404}/>
```

### Graphing Result: updated with react-d3-basic

	Thanks to http://www.reactd3.org/
	
### Update React to ES6

	
## Install and Initial with:

```bash
npm install
npm start
```




	