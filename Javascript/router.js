const appDiv="app";
let routes={};
let templates={};

let template=(name,templateFunction)=>{
    return templates[name]=templateFunction;
};

let route=(path,template)=>{
    if(typeof template=="function"){
        return routes[path]=template;
    }
    else if(typeof template=="string"){
          return routes[path]=templates[template];
    }
    else{
        return;
    }
}