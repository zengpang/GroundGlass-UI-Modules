class MessageType
{
    constructor()
    {
      this._type="消息";
      this._icon="";
      this._text="消息提示";
      this._messageColor="#20c99f";
    }
    get type()
    {
        return this._type;
    }
    set type(typeIn)
    {
        this._type=typeIn;
    }
    get text()
    {
        return this._text;
    }
    set text(textIn)
    {
        this._text=textIn;
    }
    get messageColor()
    {
        return this._messageColor;
    }
    set messageColor(colorIn)
    {
        this._messageColor=colorIn;
    }
    get icon()
    {
        return this._icon;
    }
    set icon(iconIn)
    {
        this._icon=iconIn;
    }

}
class Message{
    constructor(messageType)
    {
      this.messageType=messageType;
      this.render();
      this.bind();

    }
    render()
    {
      let $div=document.createElement(`div`);
      this.$message=$div;
      $div.classList.add(`message`);
      $div.style.background=this.messageType.messageColor;
      let $p=document.createElement(`p`);
      let $span=document.createElement(`span`);
      $span.classList.add(`icon-${this.messageType.icon}`)
      $p.appendChild($span);
      let text=document.createTextNode(this.messageType.text);
      $p.appendChild(text);
      $div.appendChild($p);
      document.body.appendChild($div);
    }
    bind()
    {
        setTimeout(()=>this.show());
        setTimeout(()=>this.destory(),3000);

    }
    show()
    {
        this.$message.classList.add(`show`);
        
    }
    destory()
    {
        console.log(`触发`);
        this.$message.classList.remove(`show`);
        setTimeout(()=>this.$message.parentNode.removeChild(this.$message),400);
    }
}
class MessageBar{
    constructor($container)
    {
      this.$container=$container;
      this.$$messageBtn=$container.querySelectorAll(`.messageBtn`);
      this.bind();
    }
    bind()
    {
      this.$container.onclick=(event)=>{
         let clickBtn= event.path.find(index=>index.classList&&index.classList.contains(`messageBtn`));
         if(clickBtn)
         {
           this.$$messageBtn.forEach(index=>index.style.background=`#20c99f00`);
           clickBtn.style.background=`#20c99f`;
           let messageType=new MessageType();
           
           switch(clickBtn.innerText)
           {
             case"成功":{
                messageType.type="成功";
                messageType.icon="sucess";
                messageType.text="成功消息";
                messageType.messageColor="#20c99f";
             };break;
             case"警告":{
                messageType.type="警告";
                messageType.icon="warning";
                messageType.text="警告信息";
                messageType.messageColor="#E6A23C";
             };break;
             case"消息":{
                messageType.type="消息";
                messageType.icon="message";
                messageType.text="普通消息";
                messageType.messageColor="#909399";
             };break;
             case"错误":{
                messageType.type="错误";
                messageType.icon="fail";
                messageType.text="错误消息";
                messageType.messageColor="#F56C6C";
             };break;
           }
           new Message(messageType);
         }
      }
    }
}
$controlContainers.forEach(($controlContainer)=>{
    isSupport? $controlContainer.classList.add(`GroundGlassUnCB`):$controlContainer.classList.add(`GroundGlassCB`); 
    new MessageBar($controlContainer);
});