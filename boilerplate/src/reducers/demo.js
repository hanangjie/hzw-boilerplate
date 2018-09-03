
const demo = (state = {
  name: '初始化',
 }, action) => {
  switch (action.type) {
    case 'demo/setName':
    console.log(action);
      return {
        ...state,
        ...action.subreddit,
      }
    default:
      return state
  }
}

export {
  demo
};
