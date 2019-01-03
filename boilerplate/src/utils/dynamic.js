import React from 'react';

export function dynamic(c) {
  return class dy extends React.Component {
    state= {
      l: null
    }
    componentDidMount(){
      this.mounted = true;
      c()
        .then(r => r.default)
        .then((e) => {
          if(this.mounted) {
            this.setState({
              l: e
            }, () => {
              if(this.props.componentIsMounted) {
                this.props.componentIsMounted(this.l);
              }
              if(this.setCountAndLoad) this.setCountAndLoad();
            })
          }
        })
    }
    componentWillUnmount() {
      this.mounted = false;
    }
    setCountAndLoad = () => {
      
    }
    render() {
      const { l: L } = this.state; 
      if (L) {
        return <L ref={(e) => this.l}/>
      } else {
        return <div>1</div>
      }
    }
  }
}