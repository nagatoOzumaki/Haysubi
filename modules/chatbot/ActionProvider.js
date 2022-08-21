
class ActionProvider {
  constructor(
    createChatBotMessage,
    setStateFunc,
    
  ) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
   
  }

   handleMessage=(message)=>{
    const botMessage = this.createChatBotMessage('hii riad');
    this.setState((prev) => ({      ...prev,      messages: [...prev.messages, botMessage],    }));
  }
}

export default ActionProvider;
